import "@/app/(dashboard)/Dashboard.css";
import UserSidebar from "@/app/components/usersidebar/UserSidebar";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import UpdateForm from "@/app/components/profile/UpdateForm";

const ProfileUpdate = () => {
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
            <div className="useraddress ">
              <div className="pageTitle  mb-4">
                <h5>Update profile</h5>
              </div>
                <UpdateForm/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileUpdate;
