import Image from "next/image";
import "@/app/(dashboard)/Dashboard.css";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import DealerSidebar from "@/app/components/dealersidebar/DealerSidebar";
import SelectBox from "@/app/components/SelectBox/SelectBox";

export default function UserDashboard() {
  const Status = [
    { value: "1", label: "Last month" },
    { value: "2", label: "Last 7 days" },
  ];
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
            <div className="pageTitle  mb-4 ">
              <h5>Quick action</h5>
            </div>
            <div className="OrderSummary ">
              <div className="row">
                <div className="col-3">
                  <div className="card">
                    <div className="card-body">
                      <Image
                        src="/pending_card.svg"
                        alt="pending"
                        width={40}
                        height={40}
                      />

                      <h6 className="card_title">My wallet </h6>
                      {/* <div className="card_value d-flex justify-content-between align-items-center">
                        <h5>1000000</h5>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card">
                    <div className="card-body">
                      <Image
                        src="/processing_card.svg"
                        alt="processing"
                        width={40}
                        height={40}
                      />

                      <h6 className="card_title">Make payment </h6>
                      {/* <div className="card_value d-flex justify-content-between align-items-center">
                        <h5>150</h5>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card">
                    <div className="card-body">
                      <Image
                        src="/delivered_card.svg"
                        alt="delivery"
                        width={40}
                        height={40}
                      />

                      <h6 className="card_title">Refund request </h6>
                      {/* <div className="card_value d-flex justify-content-between align-items-center">
                        <h5>100</h5>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card">
                    <div className="card-body">
                      <Image
                        src="/cancel_card.svg"
                        alt="cancel"
                        width={40}
                        height={40}
                      />

                      <h6 className="card_title">Return request </h6>
                      {/* <div className="card_value d-flex justify-content-between align-items-center">
                        <h5>15</h5>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pageTitle d-flex justify-content-between align-items-center mb-4 mt-4">
              <h5>Summary</h5>
              <div className="filter-options">
                <SelectBox options={Status} />
              </div>
            </div>
            <div className="OrderSummary">
              <div className="row">
                <div className="col-3">
                  <div className="card">
                    <div className="card-body">
                      <Image
                        src="/pending_card.svg"
                        alt="pending"
                        width={40}
                        height={40}
                      />

                      <h6 className="card_title">Total Sale </h6>
                      <div className="card_value d-flex justify-content-between align-items-center">
                        <h5>1000000</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card">
                    <div className="card-body">
                      <Image
                        src="/processing_card.svg"
                        alt="processing"
                        width={40}
                        height={40}
                      />

                      <h6 className="card_title">Sale commision </h6>
                      <div className="card_value d-flex justify-content-between align-items-center">
                        <h5>150</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card">
                    <div className="card-body">
                      <Image
                        src="/cancel_card.svg"
                        alt="cancel"
                        width={40}
                        height={40}
                      />

                      <h6 className="card_title">Target </h6>
                      <div className="card_value d-flex justify-content-between align-items-center">
                        <h5>15</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card">
                    <div className="card-body">
                      <Image
                        src="/delivered_card.svg"
                        alt="delivery"
                        width={40}
                        height={40}
                      />

                      <h6 className="card_title">Target commision </h6>
                      <div className="card_value d-flex justify-content-between align-items-center">
                        <h5>100</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="recentOrder mt-5">
              <div className="myOrder">
                <div className="pageTitle d-flex justify-content-between mb-4">
                  <h5>Recent order</h5>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
