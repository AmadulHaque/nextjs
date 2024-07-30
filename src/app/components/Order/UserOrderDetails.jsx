"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import axiosInstance from '@/utils/axios';
import OrderDetailsLoader from './OrderDetailsLoader';
import NoImage from "@/assets/images/no_image.png";

export default function UserOrderDetails({id}) {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const { data } = await axiosInstance.get('/api/order/'+id);
          setData(data.data);
        } catch (error) {
          console.error("Error fetching", error);
        }finally {
            setLoading(false);
        }
      };
  
      fetchData();
    }, [id]);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const { data } = await axiosInstance.get('/api/order-status');
          setStatus(data.data);
        } catch (error) {
          console.error("Error fetching", error);
        }finally {
            setLoading(false);
        }
      };
  
      fetchData();
    }, []);

 
    const formattedDate = (value) =>{
        const date = new Date(value);

        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric', 
            hour: 'numeric',
            minute: 'numeric', 
            second: 'numeric', 
            hour12: true 
        };
        return date.toLocaleString('en-US', options);
    }
console.log(data);
   return (
    <>
        <div className="userDashboardContent w-75">

            {
                loading 
                ?   <OrderDetailsLoader /> 
                : 
                <div className="myOrder">
                    <div className=" pageTitle d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h6>
                            Order ID : <span className="text-primary"> #{data.invoice_number}</span>
                            </h6>
                            <p className="mt-1">Placed on : {formattedDate(data.created_at)}</p>
                        </div>
                    </div>
                    <div className="orderDetails">
                        <div className="order-status-bar d-flex align-items-center justify-content-center flex-column ">
                            <div className="estimate-time d-flex align-items-center flex-column">
                            <p className="font-16 fw-500 text-black mb-2">Status Bar</p>
                            <p className="text-center">
                                Estimated Delivery By Wed 31 Mar - Sat 02 Apr
                            </p>
                            </div>
                            <div className="progress-track w-100">
                            <ul className="progressbar d-flex w-100">
                                {
                                    status.map((item,index)=>(
                                        <li key={index} className={data.order_status >= item.id ? 'is_complete' : ""}>
                                            <p>{item.name}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                            </div>
                        </div>
                        <div className="pageTitle d-flex justify-content-between mt-5 ">
                            <h5>Item from order</h5>
                        </div>
                        <div className="tableContainer mt-3">
                            <div className="cartItem row align-items-center">
                                <div className="col">
                                    <div className=" d-flex flex-column">
                                    <p className="font-16 fw-500">Product Name</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="itemDetails d-flex align-items-center justify-content-between">
                                    <div className=" d-flex flex-column">
                                        <p className="font-16 fw-500">Price</p>
                                    </div>
                                    <div className=" d-flex flex-column">
                                        <p className="font-16 fw-500">Quantity</p>
                                    </div>
                                    <div className="itemPrice d-flex flex-column">
                                        <p className="font-16 fw-500">Sub-total</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {
                                data?.order_details?.map((item,index)=>(
                                    <div key={index} className="cartItem row">
                                        <div className="col">
                                            <div className="itemName d-flex gap-2 ">
                                                <div className="img">
                                                    <Image
                                                      src={item.product.thumbnail ? item.product.thumbnail : NoImage.src}
                                                      alt={item.product.slug}
                                                    width={64}
                                                    height={64}
                                                    />
                                                </div>
                                                <div className="name ">
                                                    <p className="font-16 fw-500">
                                                        {item.product.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="itemDetails d-flex align-items-center justify-content-between">
                                            <div className=" d-flex ">
                                                <p className="font-16 fw-500 d-none">Price</p>
                                                <p className="font-16 fw-500">{item.sale_price}</p>
                                            </div>
                                            <div className=" d-flex ">
                                                <p className="font-16 fw-500 d-none">Quantity</p>
                                                <p className="font-16 fw-500">{item.quantity}</p>
                                            </div>
                                            <div className="d-flex ">
                                                <p className="font-16 fw-500 d-none">Sub-total</p>
                                                <p className="font-16 fw-500">{(item.quantity * item.sale_price).toFixed(2)}</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                    
                        
                        </div>
                        <div className="cartItem-summary d-flex gap-3 flex-column mt-4">
                            <div className="row">
                                <div className="col-8">
                                    <p className="font-16 fw-500">Sub Total ( {data?.order_details?.length} items)</p>
                                </div>
                                <div className="col-4">
                                    <p className="font-16 fw-600 text-black text-end">
                                        ৳ {data.total_amount}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <p className="font-16 fw-500">Discount</p>
                                </div>
                                <div className="col-4">
                                    <p className="font-16 fw-600 text-black text-end">
                                     { data.discount_amount ? '৳ '+data.discount_amount : '৳ 00'}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <p className="font-16 fw-500">Shipping Fee</p>
                                </div>
                                <div className="col-4">
                                    <p className="font-16 fw-600 text-black text-end">৳ 00</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <p className="font-16 fw-500">Total</p>
                                </div>
                                <div className="col-4">
                                    <p className="font-16 fw-600 text-black text-end">
                                        ৳ {data.total_amount}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="deliveryInformation d-flex gap-4 mt-5">
                        <div className="customerInfo w-50">
                            <h5>DELIVERY ADDRESS</h5>
                            <h6 className="mt-4">{data.name}</h6>
                            <div className="mt-2">
                            <p>{data.phone}</p>
                            <p className="mt-2">
                                {data.address}
                            </p>
                            </div>
                        </div>
                        <div className="logisticPatner w-50">
                            <div className="d-flex align-items-center gap-1">
                            <h5>DELIVERY INFO</h5>
                            <Image src="/van.svg" alt="van" width={32} height={32} />
                            </div>
                            <div className="d-flex  mt-4">
                            <Image
                                src="/logisticpatner_logo.svg"
                                alt="logistic"
                                width={180}
                                height={38}
                            />
                            </div>
                            <div className="d-flex flex-column gap-2 mt-4">
                            <p className=" fw-500">
                                <span className="text-black">Order ID :</span> #{data.invoice_number}
                            </p>
                            {/* <p className=" fw-500">
                                <span className="text-black">Payment Method :</span> Cash
                                on delivery
                            </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            }
        
        </div>
    </>
  )
}
