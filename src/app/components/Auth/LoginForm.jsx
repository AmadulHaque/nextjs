"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import style from "@/app/(auth)/auth.module.css";
import lock from "@/assets/images/icon/form_lock.svg";
import cell from "@/assets/images/icon/form_cell.svg";
import reset from "@/assets/images/icon/form_reset_icon.svg";
import view from "@/assets/images/icon/value_view_icon.svg";
import { SubmitButton } from "@/app/components/Elements/SubmitButton";
import { login } from "@/services/auth";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [passtype, setPasstype] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    setLoading(true);

    try {
      const response = await login(formData);
      setLoading(false);

      if (response.success) {

        toast.success("Logged in successfully");
        if (response.data.role == 'User') {
          window.location.href = "/user/dashboard"
        }else if(response.data.role == 'Dealer'){
          window.location.href = "/dealer/dashboard"
        }
      } else {
        console.log(response);
        const errorMessages = Object.keys(response.errors).map(
          (key) => response.errors[key]
        );
        if (errorMessages.length > 0) {
          errorMessages.forEach((error) => {
            toast.error(error);
          });
        } else {
          toast.error("Failed to login");
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
      setLoading(false);
      toast.error("Failed to login");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group position-relative mb-3">
          <label htmlFor="Email" className="form-label">
            {" "}
            Email or Phone{" "}
          </label>
          <input
            name="phone_mail"
            type="text"
            className={`form-control ${style.form_control}`}
            id="Email"
            placeholder="Email or Phone"
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
          <label htmlFor="pass" className="form-label">
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
        <div className="form-group mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="checkbox1"
            />
            <label className="form-check-label" htmlFor="checkbox1">
              {" "}
              Remember Me{" "}
            </label>
          </div>
        </div>
        <SubmitButton
          type="submit"
          classes="btn btn-primary btn-md w-100 mt-4"
          title="Login"
          loader={loading}
        />
      </form>
    </>
  );
}
