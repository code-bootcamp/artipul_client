import '@toast-ui/editor/dist/toastui-editor.css'
import * as I from './IntroducePage.Styles'
import dynamic from 'next/dynamic'

const EditorC = dynamic(() => import('./Editor'), { ssr: false })

export default function IntroducePagePresenter(props) {
  return (
    <>
      <I.Wrapper>
        <I.Header>작가 소개</I.Header>
        <I.SmallHeadWrapper>
          <I.SmallHead>마크다운 형식으로 소개를 꾸며보세요</I.SmallHead>
        </I.SmallHeadWrapper>
        <div>
          <I.EditWrapper>
            {
              <EditorC
                height={'400px'}
                forwardRef={props.editorRef}
                initialValue={
                  props.data?.fetchProfile?.introduce
                    ? props.data?.fetchProfile?.introduce
                    : ''
                }
              />
            }
          </I.EditWrapper>
        </div>
        <I.WrapperBottom>
          <I.SaveButton onClick={props.onClickUpdateIntroduce}>
            수정완료
          </I.SaveButton>
        </I.WrapperBottom>
      </I.Wrapper>
    </>
  )
}
