import "@/app/(dashboard)/Dashboard.css";

import UserSidebar from "@/app/components/usersidebar/UserSidebar";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import MultipleImageUpload from "@/app/components/Elements/MultipleImageUpload";

const Cancel = () => {
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
              <div className=" pageTitle d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h6>
                    Order ID : <span className="text-primary"> #452140</span>
                  </h6>
                  <p className="mt-1">Placed on : 29 Mar 2023 11:20 PM</p>
                </div>
              </div>
              <div className="">
                <form action="">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group position-relative mb-3">
                        <label htmlFor="address" className="form-label">
                          Reason
                        </label>
                        <textarea
                          name="address"
                          id="address"
                          className="form-control"
                          placeholder="Write your reason"
                        ></textarea>
                      </div>
                      <div className="form-group position-relative mb-3">
                        <label className="form-label">
                          Upload our product image
                        </label>
                        <MultipleImageUpload name="name" />
                      </div>
                      <button className="btn btn-primary btn-sm w-25 mt-4">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cancel;
