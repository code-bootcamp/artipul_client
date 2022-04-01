import * as H from './Header.Styles'
import { IHeaderProps } from './Header.Types'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
export default function HeaderPresenter(props: IHeaderProps) {
  const { SubMenu } = Menu
  const menu = (
    <Menu>
      <Menu.Item onClick={props.onClickAboutus}>ABOUT US</Menu.Item>
      <Menu.Item onClick={props.onClickStore}>STORE</Menu.Item>
      <Menu.Item onClick={props.onClickReview}>REVIEW</Menu.Item>
      <Menu.Item onClick={props.onClickMyPage}>MYPAGE</Menu.Item>

      <Menu.ItemGroup title="">
        {props.accessToken ? (
          <>
            <Menu.Item>{props.data?.fetchProfile.user?.nickname} 님</Menu.Item>
            <Menu.Item onClick={props.onClickLogout}>로그아웃</Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item onClick={props.onClickSelectUser}>회원가입</Menu.Item>
            <Menu.Item onClick={props.onClickLogin}>로그인</Menu.Item>
          </>
        )}
      </Menu.ItemGroup>
    </Menu>
  )

  return (
    <>
      <H.WWrapper>
        <H.Wrapper>
          <H.Header onClick={props.onClickLogo}>ARTIPUL</H.Header>
          <H.Body>
            <H.BodyMenu onClick={props.onClickAboutus}>ABOUT US</H.BodyMenu>
            <H.BodyMenu onClick={props.onClickStore}>STORE</H.BodyMenu>
            <H.BodyMenu onClick={props.onClickReview}>REVIEW</H.BodyMenu>
            <H.BodyMenu onClick={props.onClickMyPage}>MYPAGE</H.BodyMenu>
          </H.Body>
          <H.Footer>
            {props.accessToken ? (
              <>
                <H.FooterWeb>
                  <div>{props.data?.fetchProfile.user?.nickname} 님</div>
                  <H.FooterMenu onClick={props.onClickLogout}>
                    로그아웃
                  </H.FooterMenu>
                </H.FooterWeb>
                <H.HamburgerWrap>
                  <Dropdown overlay={menu}>
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </H.HamburgerWrap>
              </>
            ) : (
              <>
                <H.FooterWeb>
                  <H.FooterMenu onClick={props.onClickSelectUser}>
                    회원가입
                  </H.FooterMenu>
                  <H.FooterSpan> | </H.FooterSpan>
                  <H.FooterMenu onClick={props.onClickLogin}>
                    로그인
                  </H.FooterMenu>
                </H.FooterWeb>
                <H.HamburgerWrap>
                  <Dropdown overlay={menu}>
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </H.HamburgerWrap>
              </>
            )}
          </H.Footer>
        </H.Wrapper>
      </H.WWrapper>
    </>
  )
}
