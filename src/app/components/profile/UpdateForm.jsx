"use client"
import axiosInstance from '@/utils/axios';
import React, { useState } from 'react'
import { SubmitButton } from '../Elements/SubmitButton';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { getUserDetails } from '@/helper/SessionHelper';
import SingleImageUpload from '../Elements/SingleImageUpload';

export default function UpdateForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const user =  getUserDetails();
   
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        formData.append('type','profile');
        setLoading(true);

        try {
            await axiosInstance.post('/api/user/profile/update',formData,{
              headers: {
              'Content-Type': 'multipart/form-data',
              },
          });
            toast.success("Profile update successfully!");
            router.push('/user/profile')      
        } catch (error) {
          console.log(error);
            if (error.response.status==422) {
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
            toast.error("Failed to update profile");
            return;
        }finally {
            setLoading(false);
        }
    };
  return (
    <>
        <form onSubmit={handleSubmit} >
          <div className="form-group position-relative mb-3">
            <label htmlFor="name" className="form-label"> Full Name </label>
            <input name="name" type="text" className="form-control" id="name" defaultValue={user.name} placeholder="Full name" />
          </div>
          <div className="form-group position-relative mb-3">
            <label htmlFor="address" className="form-label"> Address </label>
            <textarea name="address" id="address" className="form-control" defaultValue={user.address}   placeholder="Address"></textarea>
          </div>
          <div className="form-group position-relative mb-3">
            <label htmlFor="address" className="form-label"> Profile  </label>
            <SingleImageUpload name='avatar' defaultValue={user.avatar} />
          </div>
          <SubmitButton   type="submit" classes="btn btn-primary btn-sm w-25 mt-4"title="Update"loader={loading}/>
        </form>
    </>
  )
}
