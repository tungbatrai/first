import {
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CRow,
} from "@coreui/react";
function AdminMainBanners() {
  return (
    <div  >
      <h4> 메인 배너 수정</h4>
      <div className="text-right text-danger ">
        <big className="">*</big> 표시된 영역은 필수 입력 영역 입니다.
      </div>
      <div className="mt-4 d-flex align-items-center">
        <CTable bordered className="">
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell className="bg-secondary  ">
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
              <CTableHeaderCell className="bg-secondary ">
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
                  - 최대 200MB의 jpg, png 이미지 파일만 등록 가능합니다. <br />-
                  이미지 사이즈는 430 x 490를 추천합니다.
                </small>
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
                  - 최대 200MB의 jpg, png 이미지 파일만 등록 가능합니다. <br />-
                  이미지 사이즈는 410 x 490를 추천합니다.
                </small>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
          {/* table 4 */}
          <CTableBody>
            <CTableRow className="p-5">
              <CTableHeaderCell className="  bg-secondary " >
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
      </div>
    </div>
  );
}
export default AdminMainBanners;
