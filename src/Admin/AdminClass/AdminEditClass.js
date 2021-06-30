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
function AdminEditClass() {
  return (
    <div className="align-items-start min-vh-100 text-left">
      <h4>
        <strong>메인 배너 리스트</strong>
      </h4>
      <div className="row d-flex justify-content-end">
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
              <CTableHeaderCell>LiveClass 수업 종류</CTableHeaderCell>
              <CTableHeaderCell>수업명</CTableHeaderCell>
              <CTableHeaderCell>지도교사 이름</CTableHeaderCell>
              <CTableHeaderCell>수정 사유</CTableHeaderCell>
              <CTableHeaderCell>수정일</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>live_class</CTableDataCell>
              <CTableDataCell>class_name</CTableDataCell>
              <CTableDataCell>user_name</CTableDataCell>
              <CTableDataCell>revise_text</CTableDataCell>
              <CTableDataCell>revise_date</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>live_class</CTableDataCell>
              <CTableDataCell>class_name</CTableDataCell>
              <CTableDataCell>user_name</CTableDataCell>
              <CTableDataCell>revise_text</CTableDataCell>
              <CTableDataCell>revise_date</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>live_class</CTableDataCell>
              <CTableDataCell>class_name</CTableDataCell>
              <CTableDataCell>user_name</CTableDataCell>
              <CTableDataCell>revise_text</CTableDataCell>
              <CTableDataCell>revise_date</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>live_class</CTableDataCell>
              <CTableDataCell>class_name</CTableDataCell>
              <CTableDataCell>user_name</CTableDataCell>
              <CTableDataCell>revise_text</CTableDataCell>
              <CTableDataCell>revise_date</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>live_class</CTableDataCell>
              <CTableDataCell>class_name</CTableDataCell>
              <CTableDataCell>user_name</CTableDataCell>
              <CTableDataCell>revise_text</CTableDataCell>
              <CTableDataCell>revise_date</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>live_class</CTableDataCell>
              <CTableDataCell>class_name</CTableDataCell>
              <CTableDataCell>user_name</CTableDataCell>
              <CTableDataCell>revise_text</CTableDataCell>
              <CTableDataCell>revise_date</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>

        {/* Pagination */}
        <div className="mt-5">
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
    </div>
  );
}
export default AdminEditClass;
