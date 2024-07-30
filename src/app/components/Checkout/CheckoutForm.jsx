"use client"
import React, { useEffect, useState } from 'react';
import SingleImageUpload from '../Elements/SingleImageUpload';
import paymentInfos from '@/services/api';
import { toast } from 'react-hot-toast';
import OrderCreate from '@/services/order';
import {useCart} from '@/hooks/CartContext'
import axiosInstance from '@/utils/axios';
import { SubmitButton } from '../Elements/SubmitButton';
import { getUserDetails } from '@/helper/SessionHelper';
import { deleteCart } from '@/helper/Cart';

export default function CheckoutForm() {
    const [loading, setLoading] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [paymentData, setPaymentData] = useState([]);
    const {cart } = useCart()
    const user = getUserDetails();

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };

    useEffect(() => {
        fetchPaymentInfos();
    }, []);

    const fetchPaymentInfos = async () => {
        try {
            const { data } = await paymentInfos();
            setPaymentData(data);
        } catch (error) {
            console.error("Error fetching payment information", error);
            toast.error("Failed to fetch payment information");
        }
    };

    

    const validateForm = (formData) => {
        const name = formData.get('name');
        const phone = formData.get('phone');
        const address = formData.get('address');
        const paymentMethod = formData.get('payment_type');
        const payAmount = formData.get('amount');
        const paymentSlip = formData.get('slip');

        if (!name || !phone || !address || !paymentMethod) {
            toast.error("Please fill in all required fields.");
            return false;
        }

        if (selectedPayment==0) {
            return true;
        }else{
            if (selectedPayment && (!payAmount || !paymentSlip)) {
                toast.error("Please provide payment amount and slip for the selected payment method.");
                return false;
            }
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('products',JSON.stringify(cart))
        if (user.id) {
            formData.append('user_id',user.id)
        }
        if (!validateForm(formData)) return;
            formData.delete('payment_type')
        if (selectedPayment==0) {
            formData.append('payment_type','1')
        }else{
            formData.append('payment_type','0')
        }

        setLoading(true);


        try {
            await axiosInstance.post('/api/order-create',formData,{
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            });
            toast.success("Order placed successfully!");
            deleteCart();
            window.location.href ="/"
        } catch (error) {
            if (error?.response?.status==422) {
                let errors = error.response.data.errors;
                const errorMessages = Object.keys(errors).map((key) => errors[key]);
                errorMessages.map((error) => {
                    toast.error(error);
                });
            }else{
                toast.error("Failed to place order");
            }
        }finally {
            setLoading(false);
        }
        
    };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group position-relative mb-3">
          <label htmlFor="name" className="form-label">
            {" "}
            Full Name{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name='name'
            placeholder="Full Name"
          />
        </div>

        <div className="form-group position-relative mb-3">
          <label htmlFor="phn_num" className="form-label">
            {" "}
            Phone Number{" "}
          </label>
          <input
            type="number"
            className="form-control"
            id="phn_num"
            name='phone'
            placeholder="Phone Number"
          />
        </div>

        <div className="form-group position-relative mb-3">
          <label htmlFor="" className="form-label">
            {" "}
            Address{" "}
          </label>
          <textarea
            name="address"
            id=""
            className="form-control"
            cols={1}
            rows={2}
            placeholder="Address"
            defaultValue={""}
          />
        </div>

        <div className="checkContainer">
          <div className="form-group position-relative  ">
            <label htmlFor="" className="form-label">
              {" "}
              Payment Method{" "}
            </label>
            <div className="d-flex gap-3 flex-column">
              <div className="form-check withicon">
                <input
                  className="form-check-input withicon"
                  name="payment_type"
                  type="radio"
                  id="onlinePay0"
                  value="0"
                  onChange={handlePaymentChange}
                />
                <label
                  className="form-check-label withicon"
                  htmlFor="onlinePay0"
                >
                  {" "}
                  Cash on delivery{" "}
                </label>
              </div>

              {paymentData?.map((item) => (
                <div className="form-check withicon" key={item.id}>
                  <input
                    className="form-check-input withicon"
                    name="payment_type"
                    type="radio"
                    value={item.id}
                    id={`onlinePay${item.id}`}
                    onChange={handlePaymentChange}
                  />
                  <label
                    className="form-check-label withicon"
                    htmlFor={`onlinePay${item.id}`}
                  >
                    {item.payment_type.name}
                  </label>
                </div>
              ))}
            </div>

            <div className="mt-4">
             
              {paymentData?.map(
                (item) =>
                  selectedPayment === item.id.toString() && (
                    <div
                      id="bankForm"
                      className="content bankForm"
                      key={item.id}
                    >
                      <div className="bankInfo d-flex flex-column gap-3 mb-4">
                        <h6>Bank Name: {item.payment_type.name}</h6>
                        <p>Account name: {item.name}</p>
                        <p>Account Number: {item.account_number}</p>
                        <p>Branch: {item.branch_name}</p>
                        <p>Routing No: {item.route_no} </p>
                      </div>

                      <div className="form-group position-relative mb-3">
                        <label htmlFor="inputText" className="form-label">
                          {" "}
                          Payment amount{" "}
                        </label>
                        <input
                          type="number"
                          name="amount"
                          className="form-control"
                          id="inputText"
                          placeholder="amount"
                        />
                      </div>

                      <div className="form-group position-relative mb-3">
                        <SingleImageUpload name='slip' />
                        {/* <MultipleImageUpload name="name" /> */}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>

        <SubmitButton type="submit" classes="btn btn-primary btn-md w-100 mt-4 " title='Place Order' loader={loading} />

      </form>
    </>
  );
}
