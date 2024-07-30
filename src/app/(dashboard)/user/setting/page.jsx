import Image from "next/image";
import "@/app/(dashboard)/Dashboard.css";
import UserSidebar from "@/app/components/usersidebar/UserSidebar";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import PassUpdateForm from "@/app/components/profile/PassUpdateForm";

const Setting = () => {
  return (
    <>
      <section>
        <HeroThree />
      </section>
      <section>
        <div className="user-panel d-flex gap-4">
          <div className="userDashboardMenu w-25">
            <Profile />
            <UserSidebar />
          </div>
          <div className="userDashboardContent w-75">
            <div className="settingContainer">
              <div className="pageTitle  mb-4">
                <h5>Setting</h5>
              </div>
              <div className="tab-menus d-flex">
                <ul className="tab-menus-items d-flex gap-3">
                  <li className="tab-item">
                    <button className=" btn btn-link">Password</button>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="setting password ">
                    <PassUpdateForm/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Setting;
