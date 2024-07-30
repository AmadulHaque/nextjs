import "@/app/(dashboard)/Dashboard.css";

import UserSidebar from "@/app/components/usersidebar/UserSidebar";
import Link from "next/link";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import UserOrder from "@/app/components/Order/UserOrder";

const MyReturn = () => {
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
            <div className="myOrder">
              <div className="pageTitle d-flex justify-content-between align-items-center mb-4">
                <h5>My return</h5>
              </div>
              <UserOrder status="7" />
            </div>
          </div>
        
        </div>
      </section>
    </>
  );
};

export default MyReturn;
