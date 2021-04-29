import useMediaQuery from './useMediaQuery'

export default function useIsMobile() {
  const isBig = useMediaQuery('(min-width: 768px)')
  return !isBig
}
