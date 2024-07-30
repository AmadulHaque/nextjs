"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/utils/axios";
import Link from "next/link";
import Image from "next/image";
import SelectBox from "../SelectBox/SelectBox";

export default function UserOrder() {
  const [data, setData] = useState([]);
  const [order_status, setOrderStatus] = useState("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get(
          `/api/order?order_status=${order_status}`
        );
        setData(data.data);
      } catch (error) {
        console.error("Error fetching", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [order_status]);

  const formattedDate = (value) => {
    const date = new Date(value);

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    return date.toLocaleString("en-US", options);
  };

  const orderStatus = [
    { value: "1", label: "Pending" },
    { value: "2", label: "Cancel" },
  ];

  return (
    <>
      <div className="pageTitle d-flex justify-content-between align-items-center mb-4">
        <h5>My order </h5>

        {/* <div className="filter-options">
          <SelectBox options={orderStatus} />
        </div> */}
        <div>
          <select name="status" onChange={(e) => setOrderStatus(e.target.value)} className='form-control' id="">
            <option value="all">All</option>
            <option value="7">Returned</option>
            <option value="6">Cancelled</option>
          </select>
        </div>
      </div>
      <div className="data_table">
        <div className="table">
          <div className="thead">
            <div className="row">
              <div className="cell sl">SL</div>
              <div className="cell orderId">Order ID</div>
              <div className="cell date">Date</div>
              <div className="cell totalPrice">Amount</div>
              <div className="cell quantity">Qty</div>
              <div className="cell status">Status</div>
              <div className="cell action">Action</div>
            </div>
          </div>

          <div className="tbody">
            {loading ? "loading..." : ""}
            {data?.map((order, index) => (
              <div key={index} className="row">
                <div className="cell sl">{index + 1}</div>
                <div className="cell orderId">{order.invoice_number}</div>
                <div className="cell date">
                  {formattedDate(order.created_at)}
                </div>
                <div className="cell totalPrice">৳ {order.total_amount}</div>
                <div className="cell quantity">{order.qty}</div>
                <div className="cell status">
                  <div className="alert alert-warning-50 alert-sm" role="alert">
                    {order.status_name ?? "Pending"}
                  </div>
                </div>
                <div className="cell action">
                  <div className="d-flex gap-3">
                    <Link
                      href={`/user/order/${order.id}`}
                      className="btn btn-link font-14 fw-500"
                    >
                      View
                    </Link>
                    <Link
                      href={`/user/order/cancel/${order.id}`}
                      className="btn btn-link cancel font-14 fw-500"
                    >
                      Cancel
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
