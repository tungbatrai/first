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
  CRow,
} from "@coreui/react";
import { Link } from "react-router-dom";
import left from "../../asset/left.png";
import right from "../../asset/right.png";

function AdminMain() {
  return (
    <div className="align-items-start min-vh-100 text-left">
      <h4> 메인 배너 리스트</h4>
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
              <CTableHeaderCell>
                <input type="checkbox" />
              </CTableHeaderCell>
              <CTableHeaderCell>번호</CTableHeaderCell>
              <CTableHeaderCell>노출 순서</CTableHeaderCell>
              <CTableHeaderCell>메인 배너명</CTableHeaderCell>
              <CTableHeaderCell>등록일</CTableHeaderCell>
              <CTableHeaderCell>수정</CTableHeaderCell>
              <CTableHeaderCell>숨김 여부</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell className="">
                <input type="checkbox" />
              </CTableHeaderCell>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>NO</CTableDataCell>
              <CTableDataCell>mainbanner_name</CTableDataCell>
              <CTableDataCell>mainbanner_date</CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수정</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <CButton color="light">숨김</CButton>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell className="">
                <input type="checkbox" />
              </CTableHeaderCell>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>NO</CTableDataCell>
              <CTableDataCell>mainbanner_name</CTableDataCell>
              <CTableDataCell>mainbanner_date</CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수정</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <CButton color="light">숨김</CButton>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell className="">
                <input type="checkbox" />
              </CTableHeaderCell>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>NO</CTableDataCell>
              <CTableDataCell>mainbanner_name</CTableDataCell>
              <CTableDataCell>mainbanner_date</CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수정</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <CButton color="light">숨김</CButton>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell className="">
                <input type="checkbox" />
              </CTableHeaderCell>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>NO</CTableDataCell>
              <CTableDataCell>mainbanner_name</CTableDataCell>
              <CTableDataCell>mainbanner_date</CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수정</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <CButton color="light">숨김</CButton>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell className="">
                <input type="checkbox" />
              </CTableHeaderCell>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>NO</CTableDataCell>
              <CTableDataCell>mainbanner_name</CTableDataCell>
              <CTableDataCell>mainbanner_date</CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수정</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <CButton color="light">숨김</CButton>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell className="">
                <input type="checkbox" />
              </CTableHeaderCell>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>NO</CTableDataCell>
              <CTableDataCell>mainbanner_name</CTableDataCell>
              <CTableDataCell>mainbanner_date</CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수정</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <CButton color="light">숨김</CButton>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell className="">
                <input type="checkbox" />
              </CTableHeaderCell>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>NO</CTableDataCell>
              <CTableDataCell>mainbanner_name</CTableDataCell>
              <CTableDataCell>mainbanner_date</CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수정</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <CButton color="light">숨김</CButton>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell className="">
                <input type="checkbox" />
              </CTableHeaderCell>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>NO</CTableDataCell>
              <CTableDataCell>mainbanner_name</CTableDataCell>
              <CTableDataCell>mainbanner_date</CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수정</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <CButton color="light">숨김</CButton>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell className="">
                <input type="checkbox" />
              </CTableHeaderCell>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>NO</CTableDataCell>
              <CTableDataCell>mainbanner_name</CTableDataCell>
              <CTableDataCell>mainbanner_date</CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수정</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <CButton color="light">숨김</CButton>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell className="">
                <input type="checkbox" />
              </CTableHeaderCell>
              <CTableDataCell>30</CTableDataCell>
              <CTableDataCell>NO</CTableDataCell>
              <CTableDataCell>mainbanner_name</CTableDataCell>
              <CTableDataCell>mainbanner_date</CTableDataCell>
              <CTableDataCell>
                <Link
                  to="/admin-main-edit"
                  className="text-dark text-decoration-none"
                >
                  <CButton color="light">수정</CButton>
                </Link>
              </CTableDataCell>
              <CTableDataCell>
                <CButton color="light">숨김</CButton>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
        <div className="row">
          <div className="col-2">
            <CButton color="secondary">삭제 </CButton>
          </div>
          <div className="col-10 d-flex justify-content-end">
            <Link
              to="/admin-main-banners"
              className="text-white text-decoration-none "
            >
              <CButton color="secondary">등록</CButton>
            </Link>
          </div>
        </div>
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
export default AdminMain;
