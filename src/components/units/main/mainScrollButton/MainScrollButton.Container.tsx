import MainScrollButtonPresenter from './MainScrollButton.Presenter'

export default function MainScrollButtonContainer(props) {
  const onClickScrollDown = async () => {
    console.log('click')
    const { scrollTop } = props.outerDivRef.current
    const pageHeight = window.innerHeight

    if (scrollTop >= 0 && scrollTop < pageHeight) {
      props.outerDivRef.current?.scrollTo({
        top: pageHeight,
        left: 0,
        behavior: 'smooth'
      })
    } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
      props.outerDivRef.current?.scrollTo({
        top: pageHeight * 2,
        left: 0,
        behavior: 'smooth'
      })
    } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
      props.outerDivRef.current?.scrollTo({
        top: pageHeight * 3,
        left: 0,
        behavior: 'smooth'
      })
    } else if (scrollTop >= pageHeight * 3 + 2500) {
      await props.outerDivRef.current?.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    } else {
      await props.outerDivRef.current?.scrollTo({
        top: scrollTop + 400,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <MainScrollButtonPresenter
      scrollTop={props.outerDivRef.current}
      onClickScrollDown={onClickScrollDown}
    />
  )
}
