"use client"
import "@/app/(dashboard)/Dashboard.css";

import React, { useState } from 'react'
import UserSidebar from "@/app/components/usersidebar/UserSidebar";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import MultipleImageUpload from "@/app/components/Elements/MultipleImageUpload";


import { useRouter } from 'next/navigation';
import axiosInstance from '@/utils/axios';
import toast from 'react-hot-toast';
import { SubmitButton } from "@/app/components/Elements/SubmitButton";


const Cancel = ({params}) => {


  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.target);
      setLoading(true);
      try {
          await axiosInstance.post('/api/order-cancel/'+params.slug,formData,{
              headers: {
              'Content-Type': 'multipart/form-data',
              },
          });
          toast.success("Order canceled successfully!");
          router.push('/user/order/'+params.slug)      
      } catch (error) {
          if (error.response?.status==422) {
              const {errors}  = error.response.data;

              const errorMessages = Object.keys(errors).map(
                  (key) => errors[key]
              );

              if (errorMessages.length > 0) {
                  errorMessages.forEach((error) => {
                      toast.error(error);
                  });
                  return;
              }
          }
          toast.error("Failed to cancel");
          return;
      }finally {
          setLoading(false);
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
            <div className="myOrder">
              <div className=" pageTitle d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h6>
                    Order ID : <span className="text-primary"> #452140</span>
                  </h6>
                  <p className="mt-1">Placed on : 29 Mar 2023 11:20 PM</p>
                </div>
              </div>
              <div className="">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group position-relative mb-3">
                        <label htmlFor="address" className="form-label">
                          Reason
                        </label>
                        <textarea
                          name="cancel_message"
                          id="address"
                          className="form-control"
                          placeholder="Write your reason"
                        ></textarea>
                      </div>
                      <div className="form-group position-relative mb-3">
                        <label className="form-label">
                          Upload our product image
                        </label>
                        <MultipleImageUpload name="image" />
                      </div>
                      <SubmitButton type="submit" classes="btn btn-primary btn-md w-100 mt-4 " title='Submit' loader={loading} />

                    </div>
                  </div>
                </form>
              </div>
              {/* <div className="pageTitle d-flex justify-content-between align-items-center mb-4">
                <h5>Cancel order</h5>
              </div> */}
              {/* <div className="data_table">
                <div className="table">
                  <div className="thead">
                    <div className="row">
                      <div className="cell sl">SL</div>
                      <div className="cell orderId">Order ID</div>
                      <div className="cell date">Date</div>
                      <div className="cell totalPrice">Amount</div>
                      <div className="cell quantity">Qty</div>
                      <div className="cell status">Status</div>
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
                          className="alert alert-danger-50 alert-sm"
                          role="alert"
                        >
                          Cancel
                        </div>
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
                          Cancel
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cancel;
