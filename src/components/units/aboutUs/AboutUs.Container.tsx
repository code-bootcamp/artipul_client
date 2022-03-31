import AboutUsPresenter from './AboutUs.Presenter'
import { useEffect, useRef } from 'react'

export default function AboutUsContainer() {
  const outerDivRef = useRef<any>(null)
  useEffect(() => {
    const wheelHandler = async (e: { preventDefault: any; deltaY: number }) => {
      e.preventDefault()
      const { deltaY } = e
      const { scrollTop } = outerDivRef.current
      const pageHeight = window.innerHeight
      console.log(scrollTop)
      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current?.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: 'smooth'
          })
        } else {
          await outerDivRef.current?.scrollTo({
            top: scrollTop + 200,
            left: 0,
            behavior: 'smooth'
          })
        }
      } else {
        if (scrollTop >= 0 && scrollTop <= pageHeight) {
          outerDivRef.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
        } else {
          await outerDivRef.current?.scrollTo({
            top: scrollTop - 200,
            left: 0,
            behavior: 'smooth'
          })
        }
      }
    }
    const outerDivRefCurrent = outerDivRef.current
    if (outerDivRefCurrent)
      outerDivRefCurrent.addEventListener('wheel', wheelHandler)

    return () => {
      if (outerDivRefCurrent)
        outerDivRefCurrent.removeEventListener('wheel', wheelHandler)
    }
  }, [])
  return <AboutUsPresenter outerDivRef={outerDivRef} />
}
