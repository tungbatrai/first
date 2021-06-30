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
} from "@coreui/react";
import image1 from "../../asset/magazine1.png";
import image2 from "../../asset/magazine2.png";
import { Link } from "react-router-dom";

function AdminEditMagazines() {
  return (
    <div className="min-vh-100">
      <h3>매거진 수정</h3>
      <div className="text-right text-danger">
        <big className="">*</big> 표시된 영역은 필수 입력 영역 입니다.
      </div>
      <div className="mt-4">
        <CTable bordered>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell className="bg-secondary align-middle  text-center">
                <big className="text-danger">*</big>매거진 제목
              </CTableHeaderCell>
              <CTableHeaderCell>
                <input
                  type="text"
                  className="form-control w-50"
                  defaultValue="magazine_name"
                />
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          {/* table 2*/}
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell className="bg-secondary  align-middle  text-center">
                <big className="text-danger">*</big>매거진 이미지
              </CTableHeaderCell>
              <CTableDataCell>
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    defaultValue="img.jpg"
                    aria-label="img.jpg"
                  />
                  <CButton color="secondary" className=" text-dark ">
                    파일 선택
                  </CButton>
                </form>
                <small className="text-danger">
                  - 최대 200MB의 jpg, png 이미지 파일만 등록 가능합니다. <br />-
                  이미지 사이즈는 225 x 315를 추천합니다.
                </small>
                <div>
                  <img src={image1} alt="" />
                </div>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
          {/* table 3*/}
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell className="bg-secondary  align-middle  text-center">
                <big className="text-danger">*</big>메인 배너 이미지(Mobile)
              </CTableHeaderCell>
              <CTableDataCell>
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    defaultValue="img.jpg"
                    aria-label="img.jpg"
                  />
                  <CButton color="secondary" className=" text-dark ">
                    파일 선택
                  </CButton>
                </form>
                <small className="text-danger">
                  - 최대 200MB의 jpg, png 이미지 파일만 등록 가능합니다. <br />-
                  이미지 사이즈는 175 x 255를 추천합니다.
                </small>
                <div>
                  <img src={image2} alt="" />
                </div>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
          {/* table 4 */}
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell className="bg-secondary  align-middle  text-center">
                <big className="text-danger">*</big>첨부 파일
              </CTableHeaderCell>
              <CTableDataCell>
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    defaultValue="no"
                    aria-label="매거진.pdf"
                  />
                  <CButton color="secondary" className=" text-dark ">
                    파일 선택
                  </CButton>
                </form>
                <small className="text-danger">
                  - 한글, ppt, pdf, img(jpg, png) 파일만 등록 가능합니다.
                </small>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </div>
      <div className=" pb-5 ">
        <div className=" d-flex justify-content-center  pt-5">
          <div className="col-3">
            <button type="button" className="btn btn-outline-secondary w-100 ">
              취소
            </button>
          </div>
          <div className="col-3">
            <Link to="/dashboard">
              <button type="button" className="btn btn-dark w-100">
                저장
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminEditMagazines;
