import "@/app/(dashboard)/Dashboard.css";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import DealerSidebar from "@/app/components/dealersidebar/DealerSidebar";
import MainLayout from "@/app/components/Layout/MainLayout";
import MultipleImageUpload from "@/app/components/Elements/MultipleImageUpload";

const ProfileUpdate = () => {
  return (
    <MainLayout>
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
                <h5>Update/complete profile</h5>
              </div>
              <form action="">
                <div className="row">
                  <div className="col-sm-6">
                    {" "}
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
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group position-relative mb-3">
                      <label className="form-label">
                        Upload your nid card both side
                      </label>
                      <MultipleImageUpload name="name" />
                    </div>
                    <div className="form-group position-relative mb-3">
                      <label className="form-label">
                        Upload your trade licence card both side
                      </label>
                      <MultipleImageUpload name="name" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProfileUpdate;
