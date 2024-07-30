import Image from "next/image";
import "@/app/(dashboard)/Dashboard.css";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import DealerSidebar from "@/app/components/dealersidebar/DealerSidebar";




import React from 'react'

export default function Setting() {
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
            <div className="settingContainer">
              <div className="pageTitle  mb-4">
                <h5>Setting</h5>
              </div>
              <div className="tab-menus d-flex">
                <ul className="tab-menus-items d-flex gap-3">
                  <li className="tab-item">
                    <button className=" btn btn-link">Password</button>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="setting password ">
                    <form action="">
                      <div className="form-group position-relative mb-3">
                        <label htmlFor="pass" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="pass"
                          placeholder="Password"
                        />
                        <Image
                          className="form-icon"
                          src="/form_lock.svg"
                          alt="lock"
                          width={24}
                          height={24}
                        />
                        <Image
                          className="form-value-view-icon"
                          src="/value_view_icon.svg"
                          alt="lock"
                          width={24}
                          height={24}
                        />
                        <Image
                          className="form-value-view-icon"
                          src="/value_view_icon.svg"
                          alt="lock"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="form-group position-relative mb-3">
                        <label htmlFor="confirmpass" className="form-label">
                          Confirm password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirmpass"
                          placeholder="Confirm password"
                        />
                        <Image
                          className="form-icon"
                          src="/form_lock.svg"
                          alt="lock"
                          width={24}
                          height={24}
                        />
                        <Image
                          className="form-value-view-icon"
                          src="/value_view_icon.svg"
                          alt="lock"
                          width={24}
                          height={24}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-md btn-primary mt-4 w-25"
                      >
                        Update
                      </button>
                    </form>
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

