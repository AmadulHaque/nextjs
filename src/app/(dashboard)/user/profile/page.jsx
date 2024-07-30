"use client";

import Image from "next/image";
import "@/app/(dashboard)/Dashboard.css";
import UserSidebar from "@/app/components/usersidebar/UserSidebar";
import Link from "next/link";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import User from "@/services/profile";
import { useEffect, useState } from "react";

export default function UserProfile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await User();
      setData(data);
    } catch (error) {
      console.error("Error fetching user profile", error);
    }
  };



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
            <div className="userProfile">
              <div className="pageTitle mb-4">
                <div className="d-flex gap-3">
                  <h5>Customer Information</h5>
                  <Link
                    href="/user/profile/update"
                    className="btn btn-primary btn-d-w font-12 d-flex align-items-center justify-content-center"
                  >
                    Update
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="details d-flex">
                  <div className="acc_info w-50">
                    <div className="img d-flex gap-2">
                      <div className="d-flex align-items-center justify-content-center">
                        <Image
                          src={data?.avatar}
                          alt="profile img"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column gap-1">
                        <strong className="d-flex gap-3">{data?.name}</strong>
                        <div
                          className="alert alert-success alert-ex-sm"
                          role="alert"
                        >
                          {data?.role === 6 ? "Regular" : "User"}
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-3">
                      <div className="row">
                        <div className="col-4 pe-3 d-flex justify-content-between">
                          <p>Name</p> <span>:</span>
                        </div>
                        <div className="col-8">
                          <p>{data?.name}</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-4 pe-3 d-flex justify-content-between">
                          <p>Phone</p> <span>:</span>
                        </div>
                        <div className="col-8">
                          <p>{data?.phone}</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-4 pe-3 d-flex justify-content-between">
                          <p>Email</p> <span>:</span>
                        </div>
                        <div className="col-8">
                          <p>{data?.email}</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-4 pe-3 d-flex justify-content-between">
                          <p>Location</p> <span>:</span>
                        </div>
                        <div className="col-8">
                          <p>{data?.address}</p>
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
    </>
  );
}
