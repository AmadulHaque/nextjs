import Image from "next/image";
import "@/app/(dashboard)/Dashboard.css";
import Link from "next/link";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import DealerSidebar from "@/app/components/dealersidebar/DealerSidebar";
import MainLayout from "@/app/components/Layout/MainLayout";

const UserProfile = () => {
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
            <div className="userProfile">
              <div className="pageTitle mb-4 d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3">
                  <h5>Dealer Information</h5>
                  <Link
                    href="/dealer/profile/update"
                    className="btn btn-primary btn-d-w font-12 d-flex align-items-center justify-content-center"
                  >
                    Update
                  </Link>
                </div>
                <div className="">
                  <Link
                    href="/dealer/profile/update"
                    className="btn btn-primary btn-sm d-flex align-items-center justify-content-center"
                  >
                    Complate profile
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="details d-flex">
                  <div className="acc_info w-50">
                    <div className="img d-flex gap-2">
                      <div className="d-flex align-items-center justify-content-center">
                        <Image
                          src="/shoe_5.png"
                          alt="profile img"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column gap-1">
                        <strong className="d-flex gap-3">
                          Md Abdul Mannan
                        </strong>
                        <div
                          className="alert alert-success alert-ex-sm"
                          role="alert"
                        >
                          Dealer
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-3">
                      <div className="row">
                        <div className="col-4 pe-3 d-flex justify-content-between">
                          <p>Id</p> <span>:</span>
                        </div>
                        <div className="col-8">
                          <p>010</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-4 pe-3 d-flex justify-content-between">
                          <p>Name</p> <span>:</span>
                        </div>
                        <div className="col-8">
                          <p>Md Abdul Mannan</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-4 pe-3 d-flex justify-content-between">
                          <p>Phone</p> <span>:</span>
                        </div>
                        <div className="col-8">
                          <p>0176301xxx</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-4 pe-3 d-flex justify-content-between">
                          <p>Email</p> <span>:</span>
                        </div>
                        <div className="col-8">
                          <p>mannan@gmail.com</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-4 pe-3 d-flex justify-content-between">
                          <p>Location</p> <span>:</span>
                        </div>
                        <div className="col-8">
                          <p>Haluaghat,Mymensing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order_info w-50">
                    <div className="d-flex flex-column">
                      <div className="d-flex flex-column gap-3">
                        <strong>Wallet Balance</strong>
                        <div
                          className="alert alert-success alert-md"
                          role="alert"
                        >
                          5458080
                        </div>
                      </div>
                      <div className="order_summary d-flex mt-4 justify-content-between ">
                        <div className="d-flex flex-column gap-2">
                          <label>Orders</label>
                          <p>5</p>
                        </div>
                        <div className="d-flex flex-column gap-2">
                          <label>Deliverd</label>
                          <p>4</p>
                        </div>
                        <div className="d-flex flex-column gap-2">
                          <label>Pending</label>
                          <p>1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default UserProfile;
