import logo from "../asset/logo.png";
function Header() {
  return (
    <div>
      <div className="shadow-none p-3  bg-secondary rounded">
        <img src={logo} alt="" />
        <div className="float-right mt-2">로그아웃</div>
      </div>
    </div>
  );
}
export default Header;
