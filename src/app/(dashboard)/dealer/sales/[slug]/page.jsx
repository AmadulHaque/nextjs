import "@/app/(dashboard)/Dashboard.css";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import Image from "next/image";
import DealerSidebar from "@/app/components/dealersidebar/DealerSidebar";
import PrintBtn from "@/app/components/printbtn/PrintBtn";

const OrderDetails = () => {
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
            <div className="myOrder">
              <div className=" pageTitle d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h6>
                    Order ID : <span className="text-primary"> #452140</span>
                  </h6>
                  <p className="mt-1">Placed on : 29 Mar 2023 11:20 PM</p>
                </div>
                <PrintBtn />
              </div>
              <div className="invoice-wrapper">
                <div className="invoice-header">
                  <div className="row">
                    <div className="col">
                      <div className="cmInfo">
                        <div className="logo">
                          <Image
                            src="/logo.svg"
                            alt="logo"
                            width={200}
                            height={38}
                          />
                        </div>
                        <div className="mt-2">
                          <p className=" text-black fw-500">
                            House 17/2, Adabor Mohammadpur
                          </p>
                          <p className="text-black fw-500">01913808080</p>
                        </div>
                      </div>
                      <div className="billTo mt-4">
                        <h6 className="font-14 fw-400">Bill TO : </h6>
                        <p className=" text-black fw-500">Name : iconicstyle</p>
                        <p className=" text-black fw-500">
                          Address : ouse 17/2, Adabor Mohammadpur
                        </p>
                        <p className="text-black fw-500">Phone : 1913808080</p>
                      </div>
                    </div>
                    <div className="col text-end">
                      <h4 className="fw-700">INVOICE</h4>
                      <div className="mt-2">
                        <p className="fw-500 ">
                          Invoice No :{" "}
                          <span className="text-black">#STD5680</span>
                        </p>
                        <p className="fw-500 mt-2 ">
                          Date :{" "}
                          <span className="text-black">July 23, 2022</span>
                        </p>
                        <p className="fw-500 mt-2 ">
                          Expiry dates :{" "}
                          <span className="text-black">July 23, 2022</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="invoice-body">
                  <div className="orderDetails">
                    <div className="pageTitle d-flex justify-content-between mt-5 ">
                      <h5>Item from order</h5>
                    </div>
                    <div className="data_table mt-4">
                      <div className="table">
                        <div className="thead">
                          <div className="row">
                            <div className="cell w-50">Product Name</div>
                            <div className="cell totalPrice ">Price</div>
                            <div className="cell quantity">Qty</div>
                            <div className="cell date">Wrranty</div>
                            <div className="cell totalPrice">Sub-total</div>
                          </div>
                        </div>
                        <div className="tbody">
                          <div className="row">
                            <div className="cell w-50">
                              <div className="itemName d-flex gap-2 ">
                                <div className="img">
                                  <Image
                                    src="/shoe_5.png"
                                    alt="product img"
                                    width={64}
                                    height={64}
                                    style={{
                                      borderRadius: "4px",
                                    }}
                                  />
                                </div>
                                <div className="d-flex flex-column ">
                                  <p className="name">
                                    Dark blue - Block Dress Dark blue - Block
                                    Dress Dark blue - Block Dress Dark blue -
                                    Block Dress Dress Dark blue - Block Dress
                                    Dark blue - Block Dress
                                  </p>
                                  <p className="font-16 mt-1">Color : Red </p>
                                </div>
                              </div>
                            </div>
                            <div className="cell totalPrice  ">600000</div>
                            <div className="cell quantity">4</div>
                            <div className="cell date">3 months</div>
                            <div className="cell totalPrice">452140</div>
                          </div>
                          <div className="row">
                            <div className="cell w-50">
                              <div className="itemName d-flex gap-2 ">
                                <div className="img">
                                  <Image
                                    src="/shoe_5.png"
                                    alt="product img"
                                    width={64}
                                    height={64}
                                    style={{
                                      borderRadius: "4px",
                                    }}
                                  />
                                </div>
                                <div className=" d-flex flex-column">
                                  <p className="name">
                                    Dark blue - Block Dress Dark blue - Block
                                    Dress
                                  </p>
                                  <p className="font-16 mt-1">Color : Red </p>
                                </div>
                              </div>
                            </div>
                            <div className="cell totalPrice  ">30000</div>
                            <div className="cell quantity">4</div>
                            <div className="cell date">3 months</div>
                            <div className="cell totalPrice">452140</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cartItem-summary d-flex gap-3 flex-column mt-4">
                      <div className="row">
                        <div className="col-8">
                          <p className="font-16 fw-500">Sub Total (2 items)</p>
                        </div>
                        <div className="col-4">
                          <p className="font-16 fw-600 text-black text-end">
                            150 $
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-8">
                          <p className="font-16 fw-500">Discount</p>
                        </div>
                        <div className="col-4">
                          <p className="font-16 fw-600 text-black text-end">
                            150 $
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-8">
                          <p className="font-16 fw-500">Shipping Fee</p>
                        </div>
                        <div className="col-4">
                          <p className="font-16 fw-600 text-black text-end">
                            50 $
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-8">
                          <p className="font-16 fw-500">Total</p>
                        </div>
                        <div className="col-4">
                          <p className="font-16 fw-600 text-black text-end">
                            5000 $
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderDetails;
