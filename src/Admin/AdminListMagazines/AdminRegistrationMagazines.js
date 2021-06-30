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
import { Link } from "react-router-dom";

function AdminRegistrationMagazines() {
  return (
    <div className=" ">
      <h3>매거진 등록</h3>
      <div className="text-right text-danger">
        <big className="">*</big> 표시된 영역은 필수 입력 영역 입니다.
      </div>
      <div>
        <div className="mt-4 " >
          <CTable bordered className=" h-100">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell className="bg-secondary  align-middle  text-center ">
                  <big className="text-danger">*</big> 메인 배너명
                </CTableHeaderCell>
                <CTableHeaderCell>
                  <input
                    type="text"
                    className="form-control w-50"
                    placeholder="메인 배너명 입력"
                  />
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            {/* table 2*/}
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell className="bg-secondary align-middle  text-center ">
                  <big className="text-danger">*</big>메인 배너 이미지 (PC)
                </CTableHeaderCell>
                <CTableDataCell>
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="form-control w-50"
                      type="search"
                      placeholder="이미지를 등록해주세요."
                    />
                    <CButton color="secondary" className=" text-dark ">
                      파일 선택
                    </CButton>
                  </form>
                  <small className="text-danger">
                    - 최대 200MB의 jpg, png 이미지 파일만 등록 가능합니다.{" "}
                    <br></br> - 이미지 사이즈는 225 x 315를 추천합니다.
                  </small>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
            {/* table 3*/}
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell className="bg-secondary align-middle  text-center">
                  <big className="text-danger">*</big>메인 배너 이미지(Mobile)
                </CTableHeaderCell>
                <CTableDataCell>
                  <form className="form-inline ">
                    <input
                      className="form-control  w-50"
                      type="search"
                      placeholder="이미지를 등록해주세요."
                    />
                    <CButton color="secondary" className=" text-dark ">
                      파일 선택
                    </CButton>
                  </form>
                  <small className="text-danger">
                    - 최대 200MB의 jpg, png 이미지 파일만 등록 가능합니다.{" "}
                    <br />- 이미지 사이즈는 175 x 255를 추천합니다.
                  </small>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
            {/* table 4 */}
            <CTableBody>
              <CTableRow className="p-5">
                <CTableHeaderCell className="  bg-secondary align-middle  text-center">
                  <div className="h-100 d-flex align-items-xl-center justify-content-center">
                    <big className="text-danger">*</big>노출 순서
                  </div>
                </CTableHeaderCell>
                <CTableDataCell>
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="form-control  w-50"
                      type="search"
                      placeholder="노출 순서를 입력해주세요."
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
export default AdminRegistrationMagazines;
