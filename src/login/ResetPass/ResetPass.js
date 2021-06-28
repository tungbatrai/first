import { CRow, CFormControl, CButton, CModal, CModalBody } from "@coreui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

function ResetPass() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <CRow className="align-items-center min-vh-100 text-center ">
        <div className="container">
          <h3> 비밀번호 재설정</h3>
          <div>
            <p>재설정 할 새 비밀번호를 입력해주세요.</p>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-9">
              <div className="col-3 col-form-label">
                <b>새 비밀번호</b>
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
                    비밀번호는 영문, 숫자, 특수문자 조합의 <br />
                  </small>
                  <small className="d-flex justify-content-start">
                    8~13자를 입력해주세요.
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-9">
              <div className="col-3 col-form-label">
                <b>비밀번호 확인</b>
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
                    비밀번호가 일치하지 않습니다.
                  </small>
                </div>
              </div>
            </div>
          </div>
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
                  <Link to="/login" className="text-light">
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

export default ResetPass;
