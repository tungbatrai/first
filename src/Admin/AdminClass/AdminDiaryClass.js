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
function AdminDiaryClass() {
  return (
    <div className="align-items-start min-vh-100 text-left">
      <h4>
        <strong>메인 배너 리스트</strong>
      </h4>
      <div className="row d-flex justify-content-end">
        <div className="col-5">
            <div className="row">
                <div className="col-5">
                     <input type="time" className="form-control w-100" />
                </div>
                
                    ~
            
                <div className="col-5">
                    <input type="time" className="form-control w-100"/>
                </div>
            </div>
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
              <CTableHeaderCell>강의명</CTableHeaderCell>
              <CTableHeaderCell>강의 제목</CTableHeaderCell>
              <CTableHeaderCell>학생</CTableHeaderCell>
              <CTableHeaderCell>ID</CTableHeaderCell>
              <CTableHeaderCell>IP</CTableHeaderCell>
              <CTableHeaderCell>시청일시</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>daVinci_name</CTableDataCell>
              <CTableDataCell>lecture_name</CTableDataCell>
              <CTableDataCell>target_student</CTableDataCell>
              <CTableDataCell>id</CTableDataCell>
              <CTableDataCell>ip</CTableDataCell>
              <CTableDataCell>view_date</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>daVinci_name</CTableDataCell>
              <CTableDataCell>lecture_name</CTableDataCell>
              <CTableDataCell>target_student</CTableDataCell>
              <CTableDataCell>id</CTableDataCell>
              <CTableDataCell>ip</CTableDataCell>
              <CTableDataCell>view_date</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>daVinci_name</CTableDataCell>
              <CTableDataCell>lecture_name</CTableDataCell>
              <CTableDataCell>target_student</CTableDataCell>
              <CTableDataCell>id</CTableDataCell>
              <CTableDataCell>ip</CTableDataCell>
              <CTableDataCell>view_date</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>daVinci_name</CTableDataCell>
              <CTableDataCell>lecture_name</CTableDataCell>
              <CTableDataCell>target_student</CTableDataCell>
              <CTableDataCell>id</CTableDataCell>
              <CTableDataCell>ip</CTableDataCell>
              <CTableDataCell>view_date</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>daVinci_name</CTableDataCell>
              <CTableDataCell>lecture_name</CTableDataCell>
              <CTableDataCell>target_student</CTableDataCell>
              <CTableDataCell>id</CTableDataCell>
              <CTableDataCell>ip</CTableDataCell>
              <CTableDataCell>view_date</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>daVinci_name</CTableDataCell>
              <CTableDataCell>lecture_name</CTableDataCell>
              <CTableDataCell>target_student</CTableDataCell>
              <CTableDataCell>id</CTableDataCell>
              <CTableDataCell>ip</CTableDataCell>
              <CTableDataCell>view_date</CTableDataCell>
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
export default AdminDiaryClass;
