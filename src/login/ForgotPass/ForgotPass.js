import {
  CRow,
  CFormControl,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
function ForgotPass() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <CRow className="align-items-center min-vh-100 text-center ">
        <div className="container">
          <h3>
            <b>비밀번호 초기화 메일 발송</b>
          </h3>
          <div className="row mt-4">
            <div className="col-12 d-flex justify-content-center ">
              <p className=" text-secondary">
                관리자로 등록된 이메일 주소를 정확히 입력해 주세요. <br></br>
                해당 이메일로 비밀번호 재설정 안내 메일을 발송해드립니다.
              </p>
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-8">
              <div className="col-2 col-form-label">
                <b>이메일</b>
              </div>
            </div>
            <div className="col-3 d-flex justify-content-center position-absolute">
              <CFormControl type="text" placeholder="이메일 입력" />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-5">
              <div className="row  ">
                <div className="ml-3  text-danger">
                  <small className=" d-flex justify-content-start ">

                    이메일을 확인해주세요.
                  </small>
                </div>
              </div>
            </div>
          </div>
          {/* Modal */}
          <CModal
            size="sm"
            alignment="center"
            visible={visible}
            onDismiss={() => setVisible(false)}
          >
            <CModalBody className="">
              <div className="row  justify-content-center">
                <div className="col-10 text-center">
                  <div className="mt-5 mb-4">
                    발송이 완료되었습니다. <br></br>
                    메일을 확인해주세요.
                  </div>
                </div>
                <CButton className="col-5 mt-3 pl-3 pr-3" color="dark">
                  <Link to="/reset-pass" className="text-light">
                    확인
                  </Link>
                </CButton>
              </div>
            </CModalBody>
          </CModal>

          <div className="row d-flex justify-content-center  ">
            <CButton
              className="col-3 mt-5 mr-4 "
              color="dark"
              onClick={() => setVisible(!visible)}
            >
              확인
            </CButton>
          </div>
        </div>
      </CRow>
    </div>
  );
}

export default ForgotPass;
