import { useEffect, useState } from "react";

export default function useMediaQuery(query) {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined')
    return false
  
  const mediaQuery = window.matchMedia(query);
  const [match, setMatch] = useState(!!mediaQuery.matches);

  useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return match
}