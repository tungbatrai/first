import {
  CSidebar,
  CSidebarNav,
  CNavItem,
  CNavLink,
  CNavGroup,
  CCreateNavItem,
} from "@coreui/react";
function SlideBar() {
  return (
    <>
      <CSidebar className="col-10 min-vh-100  sidebar-self-hiding-md pr-0">
        <CSidebarNav>
          {/* group 1 quan ly chinh*/}
          <CNavGroup toggler="메인 관리" className="pl-0">
            <CNavItem>
              <CNavLink href="/dashboard" active>
                메인 배너 리스트
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/admin-add-video">동영상 등록</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/admin-list-magazines">매거진 리스트</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/dashboard">공지사항 리스트</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/dashboard">메인 팝업 등록</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/dashboard">이벤트 배너 등록</CNavLink>
            </CNavItem>
          </CNavGroup>
          {/* quan ly lop hoc */}
          <CNavGroup toggler="수업 관리" className="pl-0">
            <CNavItem>
              <CNavLink href="/login">LiveClass 수업 리스트</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/login">LiveClass 책글 주차 수정 리스트</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/lolin">과학수학 다빈치 리스트</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/lolin">다빈치 로그 리스트</CNavLink>
            </CNavItem>
          </CNavGroup>
          {/* quan ly sach*/}
          <CNavGroup toggler="도서 관리" className="pl-0">
            <CNavItem>
              <CNavLink href="/login">LiveClass 수업 리스트</CNavLink>
            </CNavItem>
          </CNavGroup>
          {/* Quản lý thanh toán */}
          <CNavGroup toggler="결제 관리" className="pl-0">
            <CNavItem>
              <CNavLink href="/login">LiveClass 수업 리스트</CNavLink>
            </CNavItem>
          </CNavGroup>
          {/* Quản lý thành viên */}
          <CNavGroup toggler="회원 관리" className="pl-0">
            <CNavItem>
              <CNavLink href="/login">LiveClass 수업 리스트</CNavLink>
            </CNavItem>
          </CNavGroup>
          {/* Quản lý hỗ trợ người giám sát */}
          <CNavGroup toggler="지도교사 지원하기 관리" className="pl-0">
            <CNavItem>
              <CNavLink href="/login">LiveClass 수업 리스트</CNavLink>
            </CNavItem>
          </CNavGroup>
          {/* Ban quản lý bản tin */}
          <CNavGroup toggler="게시판 관리" className="pl-0">
            <CNavItem>
              <CNavLink href="/login">LiveClass 수업 리스트</CNavLink>
            </CNavItem>
          </CNavGroup>
          {/* Quản lý dàn xếp */}
          <CNavGroup toggler="정산 관리" className="pl-0">
            <CNavItem>
              <CNavLink href="/login">LiveClass 수업 리스트</CNavLink>
            </CNavItem>
          </CNavGroup>
        </CSidebarNav>
      </CSidebar>
    </>
  );
}
export default SlideBar;
