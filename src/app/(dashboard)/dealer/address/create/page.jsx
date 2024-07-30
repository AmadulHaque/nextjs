import "@/app/(dashboard)/Dashboard.css";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import DealerSidebar from "@/app/components/dealersidebar/DealerSidebar";

const AddNewAddress = () => {
  return (
    <>
      <section>
        <HeroThree />
      </section>
      <section>
        <div className="user-panel d-flex gap-4">
          <div className="userDashboardMenu w-25">
            <Profile />
            <DealerSidebar />
          </div>
          <div className="userDashboardContent w-75">
            <div className="useraddress ">
              <div className="pageTitle  mb-4">
                <h5>Add new address</h5>
              </div>
              <form action="">
                <div className="form-group position-relative mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Full name"
                  />
                </div>
                <div className="form-group position-relative mb-3">
                  <label htmlFor="phoneno" className="form-label">
                    Phone no
                  </label>
                  <input
                    name="phoneno"
                    type="number"
                    className="form-control"
                    id="phoneno"
                    placeholder="Phone no"
                  />
                </div>
                <div className="form-group position-relative mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <textarea
                    name="address"
                    id="address"
                    className="form-control"
                    placeholder="Address"
                  ></textarea>
                </div>
                <button className="btn btn-primary btn-sm w-25 mt-4">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddNewAddress;
