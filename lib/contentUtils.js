import globby from 'globby'
import fs from 'fs'
import grayMatter from 'gray-matter'
import path from 'path'

// taken from here https://github.com/tb/react-static-markdown/blob/master/src/getFiles.js

export async function getFiles(glob) {
  const paths = await globby(glob)
  return paths.map(filepath => {
    const slug = path.basename(filepath).replace(path.extname(filepath), '')
    const rawText = fs.readFileSync(filepath, 'utf-8')
    const { data, content } = grayMatter(rawText)
    return { slug, data, content }
  })
}
