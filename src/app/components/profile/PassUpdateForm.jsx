"use client"
import axiosInstance from '@/utils/axios';
import React, { useState } from 'react'
import { SubmitButton } from '../Elements/SubmitButton';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function PassUpdateForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
   
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        setLoading(true);

        try {
            await axiosInstance.post('/api/user/profile/update',formData);
            toast.success("Password update successfully!");
            router.push('/user/profile')      
        } catch (error) {
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
        <form onSubmit={handleSubmit}>
            <div className="form-group position-relative mb-3">
                <label htmlFor="pass" className="form-label"> Old password </label>
                <input type="password" name='password' className="form-control" id="pass" placeholder="Old password" />
                <Image className="form-icon" src="/form_lock.svg" alt="lock" width={24} height={24} />
                {/* <Image className="form-value-view-icon" src="/value_view_icon.svg" alt="lock" width={24} height={24} />
                <Image className="form-value-view-icon" src="/value_view_icon.svg" alt="lock" width={24} height={24} /> */}
            </div>
            <div className="form-group position-relative mb-3">
                <label htmlFor="pass" className="form-label"> New password </label>
                <input type="password" name='new_password' className="form-control" id="pass" placeholder=" New password" />
                <Image className="form-icon" src="/form_lock.svg" alt="lock" width={24} height={24} />
                {/* <Image className="form-value-view-icon" src="/value_view_icon.svg" alt="lock" width={24} height={24} />
                <Image className="form-value-view-icon" src="/value_view_icon.svg" alt="lock" width={24} height={24} /> */}
            </div>
            <div className="form-group position-relative mb-3">
                <label htmlFor="confirmpass" className="form-label"> Confirm password </label>
                <input type="password" name='confirm_password' className="form-control" id="confirmpass" placeholder="Confirm password" />
                <Image className="form-icon" src="/form_lock.svg" alt="lock" width={24} height={24} />
                {/* <Image className="form-value-view-icon" src="/value_view_icon.svg" alt="lock" width={24} height={24} /> */}
            </div>
            <SubmitButton type="submit" classes="btn btn-primary btn-sm w-25 mt-4" title="Submit" loader={loading} />
        </form>
    </>
  )
}
