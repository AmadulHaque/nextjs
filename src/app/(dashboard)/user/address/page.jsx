import Image from "next/image";
import "@/app/(dashboard)/Dashboard.css";
import UserSidebar from "@/app/components/usersidebar/UserSidebar";

import DropdownItem from "@/app/components/dropdown/DropdownItem";
import Link from "next/link";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";

const UserAddress = () => {
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
              <div className="pageTitle d-flex justify-content-between align-items-center mb-4">
                <h5>Shipping address</h5>
                <Link href="/user/address/create" className="btn btn-link">
                  Add new
                </Link>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-column gap-2 w-75">
                        <p>Md Abdul Mannan</p>
                        <p>House:17/2, Road: 3/A, Dhanmondi, Dhaka-1209</p>
                        <p>8801315500167</p>
                      </div>
                      <div className="card-checked d-flex justify-content-between align-items-center mt-3">
                        <div
                          className="alert alert-success-50 alert-ex-sm"
                          role="alert"
                        >
                          Office
                        </div>
                        <div className="card-active d-flex align-items-center gap-1">
                          <Image
                            src="assets/images/icon/default_check.svg"
                            alt="img"
                            className="w-auto h-auto"
                            width={100} height={100}
                          />
                          <span className="font-12">Default</span>
                        </div>
                      </div>
                    </div>
                    <div className="card-action">
                      <DropdownItem />
                    </div>
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

export default UserAddress;
