"use client";
import { getUserDetails } from "@/helper/SessionHelper";
import Image from "next/image";
import React from "react";

const Profile = () => {
   const user =  getUserDetails()
  return (
    <>
      <div className="user-profile  d-flex align-items-center flex-column justify-content-center gap-2">
        <div className="profile-img">
          <Image src={user?.avatar} alt="profile img" width={74} height={74} />
        </div>
        <h6>Md Abdul Mannan</h6>
      </div>
    </>
  );
};

export default Profile;
