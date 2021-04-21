import axios from 'axios'
import path from 'path'
import fs from 'fs'

/**
 * 
 * @param {Number} thumbnailWidth choose from [150, 240, 320, 400, 640] 
 * @returns 
 */
export default function fetchInstagramPosts({ thumbnailWidth = 640, count = 1, userID } = { thumbnailWidth: 640 }) {
  const BASE_URL = 'https://www.instagram.com/graphql/query?query_id=17888483320059182'
  const url = `${BASE_URL}&variables={"id":${userID},"first":${count},"after":null}`
  // const url = `https://www.instagram.com/asoguardianes/?__a=1`
  return axios.get(url).then(res => processPosts(res.data, thumbnailWidth))
}

async function processPosts(data, thumbnailWidth) {
  console.log(data)
  const posts = data.data.user.edge_owner_to_timeline_media.edges
  const processPosts = []
  for (const post of posts) {
    const id = post.node.id;
    const caption = post.node.edge_media_to_caption.edges[0].node.text;
    const thumbnail = post.node.thumbnail_resources.find(
      (thumbnail) => thumbnail.config_width === thumbnailWidth
    );
    const { src, config_width: width, config_height: height } = thumbnail;
    const url = `https://www.instagram.com/p/${post.node.shortcode}`;
    const localSrc = await saveImage(src, id)
    processPosts.push({ id, caption, src: localSrc, width, height, url })
  }

  return processPosts
}

async function saveImage(src, id) {
  const filename = `/images/instagram_downloads/${id}.jpg`
  const imgpath = path.join(process.cwd(), 'public', filename)
  if (fs.existsSync(imgpath)) {
    return filename
  }

  const stream = await axios.get(src, { responseType: 'stream' })
  const write = stream.data.pipe(fs.createWriteStream(imgpath))

  return new Promise((resolve, reject) => {
    write.on('finish', resolve(filename))
    write.on('error', reject(new Error(`Error writing img to "${imgpath}"`)))
  })
}
