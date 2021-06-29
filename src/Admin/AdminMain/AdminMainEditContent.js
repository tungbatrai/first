import {
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,

} from "@coreui/react";
import image1 from "../../asset/image1.png";
import image2 from "../../asset/image2.png";
import { Link } from "react-router-dom";
function AdminMainEditContent() {
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
              <CTableHeaderCell className="bg-secondary">
                <big className="text-danger">*</big> 메인 배너명
              </CTableHeaderCell>
              <CTableHeaderCell>
                <input
                  type="text"
                  className="form-control w-50"
                  defaultValue="mainbanner_name"
                />
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          {/* table 2*/}
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell className="bg-secondary">
                <big className="text-danger">*</big>메인 배너 이미지(PC)
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
                  이미지 사이즈는 430 x 490를 추천합니다.
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
              <CTableHeaderCell className="bg-secondary">
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
                  - 최대 200MB의 jpg, png 이미지 파일만 등록 가능합니다. <br/>
                    - 이미지 사이즈는 410 x 490를 추천합니다.
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
              <CTableHeaderCell className="bg-secondary">
                <big className="text-danger">*</big>노출 순서
              </CTableHeaderCell>
              <CTableDataCell>
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    defaultValue="no"
                    aria-label="img.jpg"
                  />
                </form>
                <small className="text-danger">
                  - 숫자만 입력이 가능하며, 텍스트 입력시 순서가 반영되지 않으며
                  마지막에 노출됩니다. <br /> - 숫자는 음수와 0을 제외한 모든
                  양수로 입력이 가능합니다. <br /> - 숫자는 작을수록 메인 배너
                  영역 맨 처음에 노출됩니다. <br /> - 동일한 숫자 입력 시, 최근
                  등록한 배너가 더 먼저 노출됩니다.
                </small>
              </CTableDataCell>
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
export default AdminMainEditContent;
