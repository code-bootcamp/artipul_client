import MainScrollButtonPresenter from './AboutUsScrollButton.Presenter'

export default function AboutUsScrollButtonContainer(props) {
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
    } else if (scrollTop >= pageHeight + 1700) {
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
