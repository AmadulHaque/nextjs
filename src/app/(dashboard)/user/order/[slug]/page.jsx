import "@/app/(dashboard)/Dashboard.css";
import UserSidebar from "@/app/components/usersidebar/UserSidebar";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import UserOrderDetails from "@/app/components/Order/UserOrderDetails";

const OrderDetails = ({ params }) => {
  
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
          
            <UserOrderDetails id={params.slug} />
          </div>
      </section>
    </>
  );
};

export default OrderDetails;
