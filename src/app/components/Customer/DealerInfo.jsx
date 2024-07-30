"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axiosInstance from '@/utils/axios';
import MultipleImageUpload from '../Elements/MultipleImageUpload';
import toast from 'react-hot-toast';
import { SubmitButton } from '../Elements/SubmitButton';

export default function DealerInfo() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get('/api/my-document');
        setData(data.data);
      } catch (error) {
        console.error("Error fetching", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);



 

  const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.target);
      setLoading(true);

      try {
          await axiosInstance.post('/api/update-document',formData,{
              headers: {
              'Content-Type': 'multipart/form-data',
              },
          });
          toast.success("Profile update successfully!");
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
          toast.error("Failed to update");
          return;
      }finally {
          setLoading(false);
      }
  };


  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group position-relative mb-3">
              <label htmlFor="name" className="form-label"> Full Name </label>
              <h6>{data.name}</h6>
            </div>
            <div className="form-group position-relative mb-3">
              <label htmlFor="phoneno" className="form-label"> Phone no </label>
              <h6>{data.dealer_phone}</h6>
            </div>
            <div className="form-group position-relative mb-3">
              <label htmlFor="name" className="form-label"> Nominee Name </label>
              <h6>{data.guarantee_name}</h6>
            </div>
            <div className="form-group position-relative mb-3">
              <label htmlFor="phoneno" className="form-label"> Nominee phone no </label>
              <h6>{data.guarantee_phone}</h6>
            </div>
            <div className="form-group position-relative mb-3">
              <label htmlFor="address" className="form-label"> Address </label>
              <p>{data.address}</p>
            </div>
          </div>
          <div className="col-sm-6">
            {/* <div className="form-group position-relative mb-3">
              <label className="form-label">Your nid card</label>
              <div className="image-preview-container d-flex gap-4 flex-wrap w-100">
                {data.nid_card_url?.map((url, index) => (
                  <Image
                    key={index}
                    src={url}
                    alt="NID Card"
                    width={130}
                    height={130}
                    className="image-preview"
                  />
                ))}
              </div>
            </div>
            <div className="form-group position-relative mb-3">
              <label className="form-label">Your trade licence</label>
              <div className="image-preview-container d-flex gap-4 flex-wrap w-100">
                {data.trade_license_url?.map((url, index) => (
                  <Image
                    key={index}
                    src={url}
                    alt="Trade Licence"
                    width={130}
                    height={130}
                    className="image-preview"
                  />
                ))}
              </div>
            </div>
            <div className="form-group position-relative mb-3">
              <label className="form-label">Blank check</label>
              <div className="image-preview-container d-flex gap-4 flex-wrap w-100">
                {data.check_url?.map((url, index) => (
                  <Image
                    key={index}
                    src={url}
                    alt="Blank Check"
                    width={130}
                    height={130}
                    className="image-preview"
                  />
                ))}
              </div>
            </div>
            <div className="form-group position-relative mb-3">
              <label className="form-label">Nominee Nid card</label>
              <div className="image-preview-container d-flex gap-4 flex-wrap w-100">
                {data.guranter_nid_card_url?.map((url, index) => (
                  <Image
                    key={index}
                    src={url}
                    alt="Nominee NID Card"
                    width={130}
                    height={130}
                    className="image-preview"
                  />
                ))}
              </div>
            </div> */}


              <div className="form-group position-relative mb-3">
                 <label className="form-label"> Upload your nid card both side * </label>
                 <MultipleImageUpload name="nid_card" defaultValue={data.nid_card_url}/>
               </div>
               <div className="form-group position-relative mb-3">
                 <label className="form-label"> Upload your trade licence (optional) </label>
                 <MultipleImageUpload name="trade_licence" defaultValue={data.trade_license_url} />
               </div>
               <div className="form-group position-relative mb-3">
                 <label className="form-label"> Blank check (optional) </label>
                 <MultipleImageUpload name="check"  defaultValue={data.check_url}/>
               </div>
               <div className="form-group position-relative mb-3">
                 <label className="form-label"> Granter nid card both side * </label>
                 <MultipleImageUpload name="guarnter_nid" defaultValue={data.guranter_nid_card_url} />
               </div>
          </div>
        </div>
        <SubmitButton type="submit" classes="btn btn-primary btn-sm w-25 mt-4"title="Save"loader={loading}/>
      </form>
    </>
  );
}
