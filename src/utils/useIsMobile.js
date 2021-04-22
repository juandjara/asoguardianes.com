import useMediaQuery from './useMediaQuery'

export default function useIsMobile() {
  return !useMediaQuery('(min-width: 768px)')
}