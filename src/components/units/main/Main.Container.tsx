import { useEffect, useRef, useState } from 'react'
import MainPresenter from './Main.Presenter'

export default function MainContainer() {
  const outerDivRef = useRef<any>(null)
  const [scrollIndex, setScrollIndex] = useState(1)

  useEffect(() => {
    const wheelHandler = (e: { preventDefault: any; deltaY: number }) => {
      e.preventDefault()
      const { deltaY } = e
      const { scrollTop } = outerDivRef.current
      const pageHeight = window.innerHeight

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current?.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: 'smooth'
          })
          setScrollIndex(2)
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current?.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: 'smooth'
          })
          setScrollIndex(3)
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          outerDivRef.current?.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: 'smooth'
          })
          setScrollIndex(4)
        } else {
          outerDivRef.current?.scrollTo({
            top: pageHeight * 4,
            left: 0,
            behavior: 'smooth'
          })
          setScrollIndex(4)
        }
      } else {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
          setScrollIndex(1)
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
          setScrollIndex(1)
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          outerDivRef.current?.scrollTo({
            top: pageHeight * 1,
            left: 0,
            behavior: 'smooth'
          })
          setScrollIndex(2)
        } else {
          outerDivRef.current?.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: 'smooth'
          })
          setScrollIndex(3)
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

  return (
    <>
      <MainPresenter outerDivRef={outerDivRef} />
    </>
  )
}
