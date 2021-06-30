import {
  CForm,
  CFormControl,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CPagination,
  CPaginationItem,
  CModal,
  CModalBody,
} from "@coreui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

function AdminListClass() {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div className="align-items-start min-vh-100 text-left">
      <h4> 메인 배너 리스트</h4>
      <div className="row d-flex justify-content-end">
        <div className="col-7">
          <CButton className="w-25" type="submit" color="dark">
            전체
          </CButton>
          <CButton className="w-25" type="submit" color="secondary ">
            LiveClass 책글
          </CButton>
          <CButton className="w-25" type="submit" color="dark">
            LiveClass 목적
          </CButton>
        </div>
        <div className="col-5 ">
          <CForm className="d-flex justify-content-end">
            <CFormControl
              type="search"
              className=""
              placeholder="검색어를 입력해주세요."
            />
            <CButton className="w-25" type="submit" color="secondary">
              검색
            </CButton>
          </CForm>
        </div>
      </div>
      <div className="mt-3">
        <CTable bordered className="text-center">
          <CTableHead className="bg-secondary">
            <CTableRow>
              <CTableHeaderCell>번호</CTableHeaderCell>
              <CTableHeaderCell>구분</CTableHeaderCell>
              <CTableHeaderCell>LiveClass 수업 종류</CTableHeaderCell>
              <CTableHeaderCell>수업명</CTableHeaderCell>
              <CTableHeaderCell>지도교사 이름</CTableHeaderCell>
              <CTableHeaderCell>교육비</CTableHeaderCell>
              <CTableHeaderCell>개설일</CTableHeaderCell>
              <CTableHeaderCell>출석 상세</CTableHeaderCell>
              <CTableHeaderCell>수업 상세</CTableHeaderCell>
              <CTableHeaderCell>숨김 여부</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>type</CTableDataCell>
              <CTableDataCell>live_class</CTableDataCell>
              <CTableDataCell>class_name</CTableDataCell>
              <CTableDataCell>user_name</CTableDataCell>
              <CTableDataCell>price</CTableDataCell>
              <CTableDataCell>liveclass_date</CTableDataCell>
              <CTableDataCell>
                <CButton color="light" onClick={() => setVisible(!visible)}>
                  출석 상세
                </CButton>
              </CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-list-class"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수업 상세</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">숨김</CButton>
                </Link>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>type</CTableDataCell>
              <CTableDataCell>live_class</CTableDataCell>
              <CTableDataCell>class_name</CTableDataCell>
              <CTableDataCell>user_name</CTableDataCell>
              <CTableDataCell>price</CTableDataCell>
              <CTableDataCell>liveclass_date</CTableDataCell>
              <CTableDataCell>
                <CButton color="light" onClick={() => setVisible(!visible)}>
                  출석 상세
                </CButton>
              </CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-list-class"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수업 상세</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">숨김</CButton>
                </Link>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>type</CTableDataCell>
              <CTableDataCell>live_class</CTableDataCell>
              <CTableDataCell>class_name</CTableDataCell>
              <CTableDataCell>user_name</CTableDataCell>
              <CTableDataCell>price</CTableDataCell>
              <CTableDataCell>liveclass_date</CTableDataCell>
              <CTableDataCell>
                <CButton color="light" onClick={() => setVisible(!visible)}>
                  출석 상세
                </CButton>
              </CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-list-class"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수업 상세</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">숨김</CButton>
                </Link>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>type</CTableDataCell>
              <CTableDataCell>live_class</CTableDataCell>
              <CTableDataCell>class_name</CTableDataCell>
              <CTableDataCell>user_name</CTableDataCell>
              <CTableDataCell>price</CTableDataCell>
              <CTableDataCell>liveclass_date</CTableDataCell>
              <CTableDataCell>
                <CButton color="light" onClick={() => setVisible(!visible)}>
                  출석 상세
                </CButton>
              </CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-list-class"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수업 상세</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">숨김</CButton>
                </Link>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>type</CTableDataCell>
              <CTableDataCell>live_class</CTableDataCell>
              <CTableDataCell>class_name</CTableDataCell>
              <CTableDataCell>user_name</CTableDataCell>
              <CTableDataCell>price</CTableDataCell>
              <CTableDataCell>liveclass_date</CTableDataCell>
              <CTableDataCell>
                <CButton color="light" onClick={() => setVisible(!visible)}>
                  출석 상세
                </CButton>
              </CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-list-class"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수업 상세</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">숨김</CButton>
                </Link>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>type</CTableDataCell>
              <CTableDataCell>live_class</CTableDataCell>
              <CTableDataCell>class_name</CTableDataCell>
              <CTableDataCell>user_name</CTableDataCell>
              <CTableDataCell>price</CTableDataCell>
              <CTableDataCell>liveclass_date</CTableDataCell>
              <CTableDataCell>
                <CButton color="light" onClick={() => setVisible(!visible)}>
                  출석 상세
                </CButton>
              </CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-list-class"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수업 상세</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">숨김</CButton>
                </Link>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>type</CTableDataCell>
              <CTableDataCell>live_class</CTableDataCell>
              <CTableDataCell>class_name</CTableDataCell>
              <CTableDataCell>user_name</CTableDataCell>
              <CTableDataCell>price</CTableDataCell>
              <CTableDataCell>liveclass_date</CTableDataCell>
              <CTableDataCell>
                <CButton color="light" onClick={() => setVisible(!visible)}>
                  출석 상세
                </CButton>
              </CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-list-class"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수업 상세</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">숨김</CButton>
                </Link>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>type</CTableDataCell>
              <CTableDataCell>live_class</CTableDataCell>
              <CTableDataCell>class_name</CTableDataCell>
              <CTableDataCell>user_name</CTableDataCell>
              <CTableDataCell>price</CTableDataCell>
              <CTableDataCell>liveclass_date</CTableDataCell>
              <CTableDataCell>
                <CButton color="light" onClick={() => setVisible(!visible)}>
                  출석 상세
                </CButton>
              </CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-list-class"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수업 상세</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">숨김</CButton>
                </Link>
              </CTableDataCell>
            </CTableRow>
            <CModal
              size="xl"
              alignment="center"
              visible={visible}
              onDismiss={() => setVisible(false)}
            >
              <CModalBody className="text-center">
                <h4>출석 상세</h4>
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">수업일시</th>
                      <th scope="col">지도교사 수업 여부</th>
                      <th scope="col">학생명</th>
                      <th scope="col">학생 출석 여부</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" rowSpan="3" className="align-middle">
                        class_date
                      </th>
                      <td rowSpan="3" className="align-middle">
                        class_whether
                      </td>
                      <td>user_name</td>
                      <td>whether</td>
                    </tr>
                    <tr>
                      <td>user_name</td>
                      <td>whether</td>
                    </tr>
                    <tr>
                      <td>user_name</td>
                      <td>whether</td>
                    </tr>
                  </tbody>
                </table>
                <CButton color="secondary" onClick={toggle}>
                  확인
                </CButton>
              </CModalBody>
            </CModal>
          </CTableBody>
        </CTable>
        
        {/* Pagination */}
        <CPagination
          className="justify-content-center"
          aria-label="Page navigation example"
        >
          <CPaginationItem aria-label="Previous" disabled>
            <span aria-hidden="true">&laquo;</span>
          </CPaginationItem>
          <CPaginationItem>1</CPaginationItem>
          <CPaginationItem>2</CPaginationItem>
          <CPaginationItem>3</CPaginationItem>
          <CPaginationItem aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </CPaginationItem>
        </CPagination>
      </div>
    </div>
  );
}
export default AdminListClass;
