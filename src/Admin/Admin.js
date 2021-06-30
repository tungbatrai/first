import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  CSidebar,
  CSidebarNav,
  CNavItem,
  CNavLink,
  CNavGroup,
  CCreateNavItem,
} from "@coreui/react";
import Header from "./Header.js";
import Content from "./Content.js";

import AdminMain from "./AdminMain/AdminMain";
import SlideBar from "./SlideBar.js";
function Admin() {
  return (
    <div className="min-vh-100 ">
      <Header />
      {/* slide bar */}
      <div className="row mr-0 ml-0">
        <div className="col-3  pl-0  d-flex">
          <SlideBar />
        </div>
        <div className="col-9 pl-0">
          <div className="wrapper d-flex flex-column min-vh-100 bg-white  mt-4 mr-5">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Admin;
