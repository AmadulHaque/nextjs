import "@/app/(dashboard)/Dashboard.css";
import Link from "next/link";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import DealerSidebar from "@/app/components/dealersidebar/DealerSidebar";
import SelectBox from "@/app/components/SelectBox/SelectBox";

const CustomerOrder = () => {
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
                <h5>Sales</h5>

                <div className="titleAction d-flex align-items-center gap-4">
                  <div className="filter-options">search</div>
                  <Link
                    href="/dealer/sales/create"
                    className="btn btn-primary btn-sm d-flex align-items-center justify-content-center"
                  >
                    Create order
                  </Link>
                </div>
              </div>
              <div className="data_table">
                <div className="table">
                  <div className="thead">
                    <div className="row">
                      <div className="cell sl">SL</div>
                      <div className="cell orderId">Order Id</div>
                      <div className="cell date">Date</div>
                      <div className="cell date">Expiry dates</div>
                      <div className="cell name">Name</div>
                      <div className="cell phone">Phone no</div>
                      <div className="cell totalPrice">Amount</div>
                      <div className="cell action">Action</div>
                    </div>
                  </div>
                  <div className="tbody">
                    <div className="row">
                      <div className="cell sl">101</div>
                      <div className="cell orderId">452140</div>
                      <div className="cell date">31 Mar 2024</div>
                      <div className="cell date">31 Mar 2025</div>
                      <div className="cell name">Md abdul mannan</div>
                      <div className="cell phone">01315xxxx</div>
                      <div className="cell totalPrice">25000</div>
                      <div className="cell action">
                        <Link
                          href="/dealer/sales/complete"
                          className="btn btn-link font-14 fw-500"
                        >
                          Complete
                        </Link>
                        {/* <Link
                          href="/dealer/sales/1"
                          className="btn btn-link font-14 fw-500"
                        >
                          View
                        </Link> */}
                      </div>
                    </div>
                    <div className="row">
                      <div className="cell sl">101</div>
                      <div className="cell orderId">452140</div>
                      <div className="cell date">31 Mar 2024</div>
                      <div className="cell date">31 Mar 2025</div>
                      <div className="cell name">Md abdul mannan</div>
                      <div className="cell phone">01315xxxx</div>
                      <div className="cell totalPrice">25000</div>
                      <div className="cell action">
                        <Link
                          href="/dealer/sales/1"
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

export default CustomerOrder;
