import "@/app/(dashboard)/Dashboard.css";

import UserSidebar from "@/app/components/usersidebar/UserSidebar";

import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import UserOrder from "@/app/components/Order/UserOrder";

export const metadata = {
  title: "Order List",
  description: "Order List",
};

const MyOrder = () => {
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
              <UserOrder />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyOrder;
