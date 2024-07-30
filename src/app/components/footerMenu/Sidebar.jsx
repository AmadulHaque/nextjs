import UserSidebar from "../usersidebar/UserSidebar";
import "./FooterMenu.css";

export default function Sidebar({ ToggleSidebar, isOpen }) {
  return (
    <>
      <div className="sidebar-dower">
        <div className={`menuLists  ${isOpen === true ? "active" : ""}`}>
          <UserSidebar ToggleSidebar={ToggleSidebar} />
        </div>
        <div
          className={`menuLists-overlay ${isOpen === true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </>
  );
}
