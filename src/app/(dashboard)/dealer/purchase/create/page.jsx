"use client";
import { useState } from "react";
import "@/app/(dashboard)/Dashboard.css";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import DealerSidebar from "@/app/components/dealersidebar/DealerSidebar";
import Select from "react-select";
import Image from "next/image";
const products = [
  {
    value: "1",
    label: "Product 1 Product 1 Product 1 Product 1 Product 1",
    image: "/shoe_5.png",
  },
  { value: "2", label: "Product 2", image: "/shoe_5.png" },
  { value: "3", label: "Product 3", image: "/shoe_5.png" },
];

export default function CreateOrder() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleSelectChange = (selectedOption) => {
    if (
      selectedOption &&
      !selectedProducts.find((prod) => prod.value === selectedOption.value)
    ) {
      setSelectedProducts([...selectedProducts, selectedOption]);
    }
  };
  const handleDelete = (productValue) => {
    setSelectedProducts(
      selectedProducts.filter((product) => product.value !== productValue)
    );
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

            <DealerSidebar />
          </div>
          <div className="userDashboardContent w-75">
            <div className="creatOrder ">
              <div className="pageTitle  mb-4">
                <h5>Create new order</h5>
              </div>
              <form action="">
                <div className="row customerOrder">
                  <div className="col-sm-8">
                    <div>
                      <Select
                        options={products}
                        onChange={handleSelectChange}
                        placeholder="Select a product..."
                        getOptionLabel={(product) => (
                          <div className="d-flex gap-3">
                            <Image
                              src={product.image}
                              alt={product.label}
                              width={20}
                              height={20}
                            />
                            {product.label}
                          </div>
                        )}
                        getOptionValue={(product) => product.value}
                      />

                      <div className="tableContainer">
                        {selectedProducts.map((product) => (
                          <div className="cartItem row" key={product.value}>
                            <div className="col">
                              <div className="itemName d-flex gap-2">
                                <div className="img">
                                  <Image
                                    src={product.image}
                                    alt="img"
                                    width={44}
                                    height={44}
                                  />
                                </div>
                                <div className="name">
                                  <p className="font-14">{product.label}</p>
                                  <p className="mt-1">Voltage: voltage</p>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="itemDetails d-flex align-items-center justify-content-between">
                                <div className="itemPrice d-flex flex-column">
                                  <p className=" fw-500">৳ 677</p>
                                  <del className="font-14">৳ 77</del>
                                </div>
                                <div className="qtyContainer" role="group">
                                  <button
                                    type="button"
                                    className="btn btn-secondary btn-sm decrease-btn"
                                  >
                                    <Image
                                      width={100}
                                      height={100}
                                      src="/cart_minus.svg"
                                      alt="img"
                                      className="w-auto h-auto"
                                    />
                                  </button>
                                  <input
                                    type="number"
                                    className="form-control qty"
                                    value=""
                                  />
                                  <button
                                    type="button"
                                    className="btn btn-secondary btn-sm increase-btn"
                                  >
                                    <Image
                                      src="/cart_plus.svg"
                                      alt="img"
                                      width={10}
                                      height={10}
                                      className="w-auto h-auto"
                                    />
                                  </button>
                                </div>
                                <div
                                  className="delAction d-flex align-items-center justify-content-center"
                                  onClick={() => handleDelete(product.value)}
                                >
                                  <svg
                                    width={25}
                                    height={24}
                                    viewBox="0 0 25 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      className="del"
                                      d="M19.7227 5.31094H15.9727V4.37344C15.9727 3.61406 15.3586 3 14.5992 3H11.3414C10.5867 3 9.97266 3.61406 9.97266 4.37344V5.31094H6.22266V6H7.21172L8.31797 19.6266C8.31797 20.3859 8.93203 21 9.69141 21H16.3008C17.0602 21 17.6742 20.3859 17.6742 19.6266L18.7664 6H19.7227V5.31094ZM10.657 4.37344C10.657 3.99375 10.9664 3.68437 11.3414 3.68437H14.5992C14.9789 3.68437 15.2836 3.99375 15.2836 4.37344V5.31094H10.657V4.37344ZM16.9852 19.5891V19.6078V19.6266C16.9852 20.0063 16.6758 20.3156 16.3008 20.3156H9.69141C9.31172 20.3156 9.00703 20.0063 9.00703 19.6266V19.6078V19.5891L7.89609 6H18.0773L16.9852 19.5891Z"
                                      fill="#A0A49D"
                                    />
                                    <path
                                      className="del"
                                      d="M13.3008 7.5H12.6445V18.7969H13.3008V7.5Z"
                                      fill="#A0A49D"
                                    />
                                    <path
                                      className="del"
                                      d="M15.973 7.5H15.2887L14.7871 18.7969H15.4715L15.973 7.5Z"
                                      fill="#A0A49D"
                                    />
                                    <path
                                      className="del"
                                      d="M10.6523 7.5H9.97266L10.4742 18.7969H11.1586L10.6523 7.5Z"
                                      fill="#A0A49D"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="cartItem-summary d-flex gap-3 flex-column mt-4">
                        <div className="row">
                          <div className="col-8">
                            <p className="font-16 fw-500">Sub Total (items)</p>
                          </div>
                          <div className="col-4">
                            <p className="font-16 fw-600 text-black text-end">
                              ৳ 777
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-8">
                            <p className="font-16 fw-500">Discount</p>
                          </div>
                          <div className="col-4">
                            <p className="font-16 fw-600 text-black text-end">
                              ৳ 0
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-8">
                            <p className="font-16 fw-500">Shipping Fee</p>
                          </div>
                          <div className="col-4">
                            <p className="font-16 fw-600 text-black text-end">
                              ৳ 50
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-8">
                            <p className="font-16 fw-500">Total</p>
                          </div>
                          <div className="col-4">
                            <p className="font-16 fw-600 text-black text-end">
                              ৳ 7777
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group position-relative mb-3">
                      <label htmlFor="name" className="form-label">
                        Full Name
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
                        Phone no
                      </label>
                      <input
                        name="phoneno"
                        type="number"
                        className="form-control"
                        id="phoneno"
                        placeholder="Phone no"
                      />
                    </div>
                    <div className="form-group position-relative mb-3">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <textarea
                        name="address"
                        id="address"
                        className="form-control"
                        placeholder="Address"
                      ></textarea>
                    </div>
                    <button className="btn btn-primary btn-sm w-25 mt-4">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
