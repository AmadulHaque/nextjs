"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import style from "@/app/(auth)/auth.module.css";
import lock from "@/assets/images/icon/form_lock.svg";
import user from "@/assets/images/icon/form_user.svg";
import address from "@/assets/images/icon/form_address.svg";
import cell from "@/assets/images/icon/form_cell.svg";
import reset from "@/assets/images/icon/form_reset_icon.svg";
import view from "@/assets/images/icon/value_view_icon.svg";
import { SubmitButton } from "@/app/components/Elements/SubmitButton";
import { registration } from "@/services/auth";
import Image from "next/image";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [passtype, setPasstype] = useState(false);

  const route = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    setLoading(true);

    let response = await registration(formData);

    setLoading(false);

    if (response.success) {
      toast.success("Successfully Registered!");
      route.push("/login");
    } else {
      const errorMessages = Object.keys(response.errors).map(
        (key) => response.errors[key]
      );
      errorMessages.map((error) => {
        toast.error(error);
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="#">
        <div className="form-group position-relative mb-3">
          <label htmlFor="name" className="form-label">
            {" "}
            Full Name{" "}
          </label>
          <input
            name="name"
            type="text"
            className={`form-control ${style.form_control}`}
            id="name"
            placeholder="Full name"
          />
          <Image
            width={24}
            height={24}
            src={user.src}
            alt="user"
            className={`w-auto h-auto ${style.form_icon}`}
          />
        </div>

        <div className="form-group position-relative mb-3">
          <label htmlFor="email" className="form-label">
            {" "}
            Email{" "}
          </label>
          <input
            name="email"
            type="email"
            className={`form-control ${style.form_control}`}
            id="email"
            placeholder="Email"
          />
          <Image
            width={24}
            height={24}
            src={cell.src}
            alt="cell"
            className={`w-auto h-auto ${style.form_icon}`}
          />
        </div>

        <div className="form-group position-relative mb-3">
          <label htmlFor="" className="form-label">
            {" "}
            Phone Number{" "}
          </label>
          <input
            name="phone"
            type="number"
            className={`form-control ${style.form_control}`}
            id="phn_num"
            placeholder="Phone Number"
          />
          <Image
            width={24}
            height={24}
            src={cell.src}
            alt="cell"
            className={`w-auto h-auto ${style.form_icon}`}
          />
        </div>

        <div className="form-group position-relative mb-3">
          <label htmlFor="" className="form-label">
            {" "}
            Password{" "}
          </label>
          <input
            name="password"
            type={`${passtype ? "text" : "password"}`}
            className={`form-control ${style.form_control}`}
            id="pass"
            placeholder="Password"
          />
          <Image
            width={24}
            height={24}
            src={lock.src}
            alt="lock"
            className={`w-auto h-auto ${style.form_icon}`}
          />
          {passtype ? (
            <Image
              width={24}
              height={24}
              src={reset.src}
              onClick={() => setPasstype(false)}
              alt="reset"
              className={style.form_reset_icon}
            />
          ) : (
            <Image
              width={24}
              height={24}
              src={view.src}
              onClick={() => setPasstype(true)}
              alt="view"
              className={style.form_value_view_icon}
            />
          )}
        </div>

        <div className="form-group position-relative mb-3">
          <label htmlFor="" className="form-label">
            {" "}
            Address{" "}
          </label>
          <textarea
            name="address"
            id=""
            className={`form-control ${style.form_control}`}
            cols="1"
            rows="2"
            placeholder="Address"
          ></textarea>
          <Image
            width={24}
            height={24}
            src={address.src}
            alt="address"
            className={`w-auto h-auto ${style.address} ${style.form_icon}`}
          />
        </div>

        <SubmitButton
          type="submit"
          classes="btn btn-primary btn-md w-100 mt-4"
          title="Signup"
          loader={loading}
        />
      </form>
    </>
  );
}
