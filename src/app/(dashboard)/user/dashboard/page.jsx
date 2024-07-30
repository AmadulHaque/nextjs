"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "@/app/(dashboard)/Dashboard.css";

import UserSidebar from "@/app/components/usersidebar/UserSidebar";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import UserOrder from "@/app/components/Order/UserOrder";
import axiosInstance from "@/utils/axios";

const UserDashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get(`/api/user/profile`);
        setData(data.data);
      } catch (error) {
        console.error("Error fetching", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


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

                      <h6 className="card_title">Pending </h6>
                      <div className="card_value d-flex justify-content-between align-items-center">
                        <h5>{data?.pending_orders}</h5>
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

                      <h6 className="card_title">Processing </h6>
                      <div className="card_value d-flex justify-content-between align-items-center">
                        <h5>{data?.processing_orders}</h5>
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

                      <h6 className="card_title">Delivered </h6>
                      <div className="card_value d-flex justify-content-between align-items-center">
                        <h5>{data?.delivered_orders}</h5>
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

                      <h6 className="card_title">Cancel </h6>
                      <div className="card_value d-flex justify-content-between align-items-center">
                        <h5>{data?.cancelled_orders}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recentOrder mt-5">
              <div className="myOrder">
                <UserOrder status="all" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDashboard;
