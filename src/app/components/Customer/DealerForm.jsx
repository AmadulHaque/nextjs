"use client";
import React, { useState } from "react";
import MultipleImageUpload from "@/app/components/Elements/MultipleImageUpload";
import { SubmitButton } from "../Elements/SubmitButton";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axios";
import toast from "react-hot-toast";
export default function DealerForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("type", "profile");
    setLoading(true);

    try {
      await axiosInstance.post("/api/dealers", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Profile update successfully!");
      router.push("/user/doc");
    } catch (error) {
      if (error.response?.status == 422) {
        const { errors } = error.response.data;

        const errorMessages = Object.keys(errors).map((key) => errors[key]);

        if (errorMessages.length > 0) {
          errorMessages.forEach((error) => {
            toast.error(error);
          });
          return;
        }
      }
      toast.error("Failed to create");
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group position-relative mb-3">
              <label htmlFor="name" className="form-label">
                {" "}
                Full Name *{" "}
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="name"
                placeholder="Full name"
              />
            </div>
            <div className="form-group position-relative mb-3">
              <label htmlFor="phoneno" className="form-label">
                {" "}
                Phone no *{" "}
              </label>
              <input
                name="dealer_phone"
                type="number"
                className="form-control"
                id="phoneno"
                placeholder="Phone no"
              />
            </div>
            <div className="form-group position-relative mb-3">
              <label htmlFor="name" className="form-label">
                {" "}
                Granter name *{" "}
              </label>
              <input
                name="guarantee_name"
                type="text"
                className="form-control"
                id="name"
                placeholder="Granter name "
              />
            </div>
            <div className="form-group position-relative mb-3">
              <label htmlFor="phoneno" className="form-label">
                {" "}
                Granter phone no *{" "}
              </label>
              <input
                name="guarantee_phone"
                type="number"
                className="form-control"
                id="phoneno"
                placeholder="Granter phone no"
              />
            </div>
            <div className="form-group position-relative mb-3">
              <label htmlFor="address" className="form-label">
                {" "}
                Address *{" "}
              </label>
              <textarea
                name="address"
                id="address"
                className="form-control"
                placeholder="Address"
              ></textarea>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="form-group position-relative mb-3">
              <label className="form-label">
                {" "}
                Upload your nid card both side *{" "}
              </label>
              <MultipleImageUpload name="nid_card" defaultValue={[]} />
            </div>
            <div className="form-group position-relative mb-3">
              <label className="form-label">
                {" "}
                Upload your trade licence (optional){" "}
              </label>
              <MultipleImageUpload name="trade_licence" defaultValue={[]} />
            </div>
            <div className="form-group position-relative mb-3">
              <label className="form-label"> Blank check (optional) </label>
              <MultipleImageUpload name="check" defaultValue={[]} />
            </div>
            <div className="form-group position-relative mb-3">
              <label className="form-label">
                {" "}
                Granter nid card both side *{" "}
              </label>
              <MultipleImageUpload name="guarnter_nid" defaultValue={[]} />
            </div>
            <SubmitButton
              type="submit"
              classes="btn btn-primary btn-sm w-25 mt-4"
              title="Save"
              loader={loading}
            />
          </div>
        </div>
      </form>
    </>
  );
}
