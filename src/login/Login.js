import { CFormControl, CRow, CButton } from "@coreui/react";
import { Link } from "react-router-dom";
import Logo from "../asset/logo.png";

import "./Login.scss";
function Login() {
  return (
    <div>
      <CRow className="align-items-center min-vh-100 ">
        <div className="container text-center  ">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <h3 className="header-title mt-5">
            <strong>관리자 로그인</strong>
          </h3>
          <div className="d-flex justify-content-center pt-5 ">
            <div className="col-8 ">
              <div className="row">
                <div className="mb-3 d-flex justify-content-center ">
                  <div className="col-9 col-form-label  ">
                    <strong className="float-left">ID</strong>
                  </div>
                  <div className="col-6 position-absolute">
                    <CFormControl type="text" placeholder="ID 입력" />
                  </div>
                </div>
              </div>
              <div className="row  d-flex justify-content-center ">
                <div className="col-6 d-flex justify-content-start">
                  <p className=" text-danger ">ID를 확인해주세요</p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="mb-3 d-flex justify-content-center ">
                  <div className="col-9 col-form-label d-flex justify-content-start">
                    <strong className="float-left">비밀번호</strong>
                  </div>
                  <div className="col-6  position-absolute">
                    <CFormControl type="password" placeholder="비밀번호 입력" />
                  </div>
                </div>
              </div>
              <div className="row  d-flex justify-content-center ">
                <div className="col-6 d-flex justify-content-start">
                  <p className=" text-danger">비밀번호를 확인해주세요.</p>
                </div>
              </div>
              <CButton className="col-5 mt-5 mr-4 " color="secondary">
                <big>
                  <b><Link to="/admin" className="text-light">로그인</Link></b>
                </big>
              </CButton>
              <div className="mt-4">
                <Link to="/forgot-pass" className="text-secondary">
                  비밀번호 재설정
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CRow>
    </div>
  );
}

export default Login;
