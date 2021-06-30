import {
  CRow,
  CFormControl,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CFormLabel,
  CAlert,
} from "@coreui/react";
import image from "../../../asset/addClass.png";
import { Link } from "react-router-dom";
function AdminListStudyRegistrationClass() {
  return (
    <div>
      <h4> 메인 배너 수정</h4>
      <div className="text-right text-danger">
        <big className="">*</big> 표시된 영역은 필수 입력 영역 입니다.
      </div>
      <div className="mt-4">
        <CTable bordered>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell className="bg-secondary align-middle  text-center">
                <big className="text-danger">*</big> 강의명
              </CTableHeaderCell>
              <CTableHeaderCell>
                <div className="row pr-5">
                  <div className="col-6 pr-0">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="강의명 입력"
                    />
                  </div>
                </div>
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            {/* table 2*/}
            <CTableRow>
              <CTableHeaderCell className="bg-secondary align-middle  text-center">
                <big className="text-danger">*</big> 강의 소개
              </CTableHeaderCell>
              <CTableHeaderCell className=" pr-5">
                <input
                  type="text"
                  className="form-control w-100"
                  placeholder="강의 소개 입력"
                />
              </CTableHeaderCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell className="bg-secondary align-middle  text-center">
                <big className="text-danger">*</big>대상학생
              </CTableHeaderCell>
              <CTableHeaderCell className=" pr-5">
                <input
                  type="text"
                  className="form-control w-100"
                  placeholder="대상학생 입력"
                />
              </CTableHeaderCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell className="bg-secondary align-middle  text-center">
                <big className="text-danger">*</big> 수업 준비
              </CTableHeaderCell>
              <CTableHeaderCell className=" pr-5">
                <input
                  type="text"
                  className="form-control w-100"
                  placeholder="수업 준비 입력"
                />
              </CTableHeaderCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell className="bg-secondary align-middle  text-center">
                <big className="text-danger">*</big>전체 강의비
              </CTableHeaderCell>
              <CTableHeaderCell className=" pr-5">
                <div className="row">
                  <div className="col-6 pr-0">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="전체 강의비 입력"
                    />
                  </div>
                  <div className="col-1 pl-0 text-left pt-2 pl-3">원</div>
                </div>
              </CTableHeaderCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell className="bg-secondary align-middle  text-center">
                <big className="text-danger">*</big>강의 이미지
              </CTableHeaderCell>
              <CTableHeaderCell className=" pr-5">
                <div className="row">
                  <div className="col-6 pr-0">
                    <input
                      className="form-control sm-2 w-100"
                      type="search"
                      placeholder="이미지를 등록해주세요."
                    />
                  </div>

                  <div className="col-3 pl-0">
                    <CButton color="secondary" className=" text-dark ">
                      파일 선택
                    </CButton>
                  </div>
                </div>
                <small className="text-danger">
                  - mp4, avi 동영상 파일만 등록 가능합니다.
                </small>
              </CTableHeaderCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell className="bg-secondary align-middle  text-center">
                <big className="text-danger">*</big>1강
              </CTableHeaderCell>
              <CTableHeaderCell className=" pr-5">
                <CAlert color="secondary">
                  <CButton color="secondary">1강</CButton>
                  <CRow className="mb-3 ">
                    <CFormLabel className="col-sm-2 col-form-label pr-0">
                      강의 제목
                    </CFormLabel>
                    <div className="col-sm-6  pl-0">
                      <CFormControl
                        type="text"
                        className="w-100"
                        placeholder="lecture_name"
                      />
                    </div>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label">
                      강의 시간
                    </CFormLabel>
                    <div className="col-sm-6 pl-0">
                      <CFormControl
                        type="text"
                        className="w-100"
                        placeholder="lecture_time"
                      />
                    </div>
                    <div className="col-1 text-left pl-0 pt-2">분</div>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel className="col-2 col-form-label pr-0">
                      개별 강의비
                    </CFormLabel>
                    <div className="col-6  pl-0">
                      <CFormControl
                        type="text"
                        className="w-100"
                        placeholder="lecture_price"
                      />
                    </div>
                    <div className="col-1 text-left pl-0 pt-2">원</div>
                  </CRow>
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="form-control sm-2 w-50"
                      type="search"
                      defaultValue="중학교 과학 수학 강의.mp4"
                    />
                    <CButton color="secondary" className=" text-dark ">
                      파일 선택
                    </CButton>
                  </form>
                  <small className="text-danger">
                    - mp4, avi 동영상 파일만 등록 가능합니다.
                  </small>{" "}
                </CAlert>
                <div>
                  <img src={image} alt="" />
                </div>
              </CTableHeaderCell>
            </CTableRow>
          </CTableBody>
        </CTable>
        <div className="row  d-flex justify-content-center">
          <div className="col-3">
            <button type="button" className="btn btn-outline-secondary w-100">
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
export default AdminListStudyRegistrationClass;
