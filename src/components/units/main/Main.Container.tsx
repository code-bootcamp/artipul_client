import { useEffect, useRef, useState } from 'react'
import MainPresenter from './Main.Presenter'

export default function MainContainer() {
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
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current?.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: 'smooth'
          })
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          outerDivRef.current?.scrollTo({
            top: pageHeight * 3,
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
        } else if (scrollTop > pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current?.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: 'smooth'
          })
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          outerDivRef.current?.scrollTo({
            top: pageHeight * 1,
            left: 0,
            behavior: 'smooth'
          })
        } else if (
          scrollTop >= pageHeight * 3 &&
          scrollTop <= pageHeight * 3 + 200
        ) {
          outerDivRef.current?.scrollTo({
            top: pageHeight * 2,
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

  return (
    <>
      <MainPresenter outerDivRef={outerDivRef} />
    </>
  )
}
