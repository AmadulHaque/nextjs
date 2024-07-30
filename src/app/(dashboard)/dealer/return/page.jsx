import "@/app/(dashboard)/Dashboard.css";
import Link from "next/link";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import DealerSidebar from "@/app/components/dealersidebar/DealerSidebar";

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
            <DealerSidebar />
          </div>
          <div className="userDashboardContent w-75">
            <div className="myOrder">
              <div className="pageTitle d-flex justify-content-between align-items-center mb-4">
                <h5>My return</h5>
              </div>
              <div className="data_table">
                <div className="table">
                  <div className="thead">
                    <div className="row">
                      <div className="cell sl">SL</div>
                      <div className="cell orderId">Order ID</div>
                      <div className="cell date">Date</div>
                      <div className="cell totalPrice">Amount</div>
                      <div className="cell quantity">Qty</div>
                      <div className="cell status">Status</div>
                      <div className="cell action">Action</div>
                    </div>
                  </div>
                  <div className="tbody">
                    <div className="row">
                      <div className="cell sl">101</div>
                      <div className="cell orderId">452140</div>
                      <div className="cell date">31 Mar 2024</div>
                      <div className="cell totalPrice">25000</div>
                      <div className="cell quantity">100</div>
                      <div className="cell status">
                        <div
                          className="alert alert-warning-50 alert-sm"
                          role="alert"
                        >
                          Pending
                        </div>
                      </div>
                      <div className="cell action">
                        <Link
                          href="/user/return/1"
                          className="btn btn-link font-14 fw-500"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                    <div className="row">
                      <div className="cell sl">101</div>
                      <div className="cell orderId">452140</div>
                      <div className="cell date">31 Mar 2024</div>
                      <div className="cell totalPrice">25000</div>
                      <div className="cell quantity">100</div>
                      <div className="cell status">
                        <div
                          className="alert alert-danger-50 alert-sm"
                          role="alert"
                        >
                          Reject
                        </div>
                      </div>
                      <div className="cell action">
                        <Link
                          href="/dealer/return/1"
                          className="btn btn-link font-14 fw-500"
                        >
                          View
                        </Link>
                      </div>
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

export default MyReturn;
