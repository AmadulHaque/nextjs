import HeroThree from "@/app/components/hero/HeroThree";
import Profile from "@/app/components/profile/Profile";
import UserSidebar from "@/app/components/usersidebar/UserSidebar";
import "@/app/(dashboard)/Dashboard.css";
import DealerInfo from "@/app/components/Customer/DealerInfo";

const page = () => {
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
            <div className="becomeDealer">
                <DealerInfo/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
