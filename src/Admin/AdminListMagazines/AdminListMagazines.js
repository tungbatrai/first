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
} from "@coreui/react";
import { Link } from "react-router-dom";

function AdminListMagazines() {
  return (
    <div>
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
      <CTable bordered className="text-center mt-4">
        <CTableHead className="bg-secondary">
          <CTableRow>
            <CTableHeaderCell>
              <input type="checkbox" />
            </CTableHeaderCell>
            <CTableHeaderCell>번호</CTableHeaderCell>
            <CTableHeaderCell>매거진 제목</CTableHeaderCell>
            <CTableHeaderCell>등록일</CTableHeaderCell>
            <CTableHeaderCell>수정</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell className="">
              <input type="checkbox" />
            </CTableHeaderCell>
            <CTableDataCell>30</CTableDataCell>

            <CTableDataCell>magazine_name</CTableDataCell>
            <CTableDataCell>magazine_date</CTableDataCell>
            <CTableDataCell>
              <Link
                to="/admin-edit-magazines"
                className="text-dark text-decoration-none"
              >
                <CButton color="light">수정</CButton>
              </Link>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell className="">
              <input type="checkbox" />
            </CTableHeaderCell>
            <CTableDataCell>30</CTableDataCell>

            <CTableDataCell>magazine_name</CTableDataCell>
            <CTableDataCell>magazine_date</CTableDataCell>
            <CTableDataCell>
              <Link
                to="/admin-edit-magazines"
                className="text-dark text-decoration-none"
              >
                <CButton color="light">수정</CButton>
              </Link>
            </CTableDataCell>
          </CTableRow>

          <CTableRow>
            <CTableHeaderCell className="">
              <input type="checkbox" />
            </CTableHeaderCell>
            <CTableDataCell>30</CTableDataCell>

            <CTableDataCell>magazine_name</CTableDataCell>
            <CTableDataCell>magazine_date</CTableDataCell>
            <CTableDataCell>
              <Link
                to="/admin-edit-magazines"
                className="text-dark text-decoration-none"
              >
                <CButton color="light">수정</CButton>
              </Link>
            </CTableDataCell>
          </CTableRow>

          <CTableRow>
            <CTableHeaderCell className="">
              <input type="checkbox" />
            </CTableHeaderCell>
            <CTableDataCell>30</CTableDataCell>

            <CTableDataCell>magazine_name</CTableDataCell>
            <CTableDataCell>magazine_date</CTableDataCell>
            <CTableDataCell>
              <Link
                to="/admin-edit-magazines"
                className="text-dark text-decoration-none"
              >
                <CButton color="light">수정</CButton>
              </Link>
            </CTableDataCell>
          </CTableRow>

          <CTableRow>
            <CTableHeaderCell className="">
              <input type="checkbox" />
            </CTableHeaderCell>
            <CTableDataCell>30</CTableDataCell>

            <CTableDataCell>magazine_name</CTableDataCell>
            <CTableDataCell>magazine_date</CTableDataCell>
            <CTableDataCell>
              <Link
                to="/admin-edit-magazines"
                className="text-dark text-decoration-none"
              >
                <CButton color="light">수정</CButton>
              </Link>
            </CTableDataCell>
          </CTableRow>

          <CTableRow>
            <CTableHeaderCell className="">
              <input type="checkbox" />
            </CTableHeaderCell>
            <CTableDataCell>30</CTableDataCell>

            <CTableDataCell>magazine_name</CTableDataCell>
            <CTableDataCell>magazine_date</CTableDataCell>
            <CTableDataCell>
              <Link
                to="/admin-edit-magazines"
                className="text-dark text-decoration-none"
              >
                <CButton color="light">수정</CButton>
              </Link>
            </CTableDataCell>
          </CTableRow>

          <CTableRow>
            <CTableHeaderCell className="">
              <input type="checkbox" />
            </CTableHeaderCell>
            <CTableDataCell>30</CTableDataCell>

            <CTableDataCell>magazine_name</CTableDataCell>
            <CTableDataCell>magazine_date</CTableDataCell>
            <CTableDataCell>
              <Link
                to="/admin-edit-magazines"
                className="text-dark text-decoration-none"
              >
                <CButton color="light">수정</CButton>
              </Link>
            </CTableDataCell>
          </CTableRow>

          <CTableRow>
            <CTableHeaderCell className="">
              <input type="checkbox" />
            </CTableHeaderCell>
            <CTableDataCell>30</CTableDataCell>

            <CTableDataCell>magazine_name</CTableDataCell>
            <CTableDataCell>magazine_date</CTableDataCell>
            <CTableDataCell>
              <Link
                to="/admin-edit-magazines"
                className="text-dark text-decoration-none"
              >
                <CButton color="light">수정</CButton>
              </Link>
            </CTableDataCell>
          </CTableRow>

          <CTableRow>
            <CTableHeaderCell className="">
              <input type="checkbox" />
            </CTableHeaderCell>
            <CTableDataCell>30</CTableDataCell>

            <CTableDataCell>magazine_name</CTableDataCell>
            <CTableDataCell>magazine_date</CTableDataCell>
            <CTableDataCell>
              <Link
                to="/admin-edit-magazines"
                className="text-dark text-decoration-none"
              >
                <CButton color="light">수정</CButton>
              </Link>
            </CTableDataCell>
          </CTableRow>

          <CTableRow>
            <CTableHeaderCell className="">
              <input type="checkbox" />
            </CTableHeaderCell>
            <CTableDataCell>30</CTableDataCell>

            <CTableDataCell>magazine_name</CTableDataCell>
            <CTableDataCell>magazine_date</CTableDataCell>
            <CTableDataCell>
              <Link
                to="/admin-edit-magazines"
                className="text-dark text-decoration-none"
              >
                <CButton color="light">수정</CButton>
              </Link>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>

      <div className="row">
        {" "}
        <div className="col-2">
          <Link
            to="/admin-list-magazines"
            className="text-white text-decoration-none "
          >
            <CButton color="secondary">삭제 </CButton>
          </Link>{" "}
        </div>
        <div className="col-10 d-flex justify-content-end">
          <Link
            to="/admin-registration-magazines"
            className="text-white text-decoration-none "
          >
            <CButton color="secondary">등록</CButton>
          </Link>
        </div>
      </div>
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
  );
}
export default AdminListMagazines;
