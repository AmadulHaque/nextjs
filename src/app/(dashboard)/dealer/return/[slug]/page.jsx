import "@/app/(dashboard)/Dashboard.css";
import Profile from "@/app/components/profile/Profile";
import HeroThree from "@/app/components/hero/HeroThree";
import Image from "next/image";
import DealerSidebar from "@/app/components/dealersidebar/DealerSidebar";

const ReturnDetails = () => {
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
              </div>
              <div className="orderDetails">
                <div className="order-status-bar d-flex align-items-center justify-content-center flex-column ">
                  <div className="estimate-time d-flex align-items-center flex-column">
                    <p className="font-16 fw-500 text-black mb-2">Status Bar</p>
                    <p className="text-center">Refund process is completed</p>
                  </div>
                  <div className="progress-track w-100">
                    <ul className="progressbar d-flex w-100">
                      <li className="is_complete">
                        <p>Order Placed</p>
                      </li>
                      <li className="is_complete">
                        <p>Approved</p>
                      </li>
                      <li className="is_complete">
                        <p>Processing </p>
                      </li>
                      <li>
                        <p>Packed</p>
                      </li>
                      <li>
                        <p>Shipped </p>
                      </li>
                      <li>
                        <p>Delivered</p>
                      </li>
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
                  <div className="cartItem row">
                    <div className="col">
                      <div className="itemName d-flex gap-2 ">
                        <div className="img">
                          <Image
                            src="/shoe_5.png"
                            alt="product img"
                            width={64}
                            height={64}
                          />
                        </div>
                        <div className="name ">
                          <p className="font-16 fw-500">
                            Dark blue - Block Dress Dark blue - Block Dress
                          </p>
                          <p className="font-16 mt-1">Color : Red </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="itemDetails d-flex align-items-center justify-content-between">
                        <div className=" d-flex ">
                          <p className="font-16 fw-500 d-none">Price</p>
                          <p className="font-16 fw-500">100</p>
                        </div>
                        <div className=" d-flex ">
                          <p className="font-16 fw-500 d-none">Quantity</p>
                          <p className="font-16 fw-500">10</p>
                        </div>
                        <div className="d-flex ">
                          <p className="font-16 fw-500 d-none">Sub-total</p>
                          <p className="font-16 fw-500">5000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cartItem row">
                    <div className="col">
                      <div className="itemName d-flex gap-2 ">
                        <div className="img">
                          <Image
                            src="/shoe_5.png"
                            alt="product img"
                            width={64}
                            height={64}
                          />
                        </div>
                        <div className="name ">
                          <p className="font-16 fw-500">
                            Dark blue - Block Dress Dark blue - Block Dress{" "}
                          </p>
                          <p className="font-16 mt-1">Color : Red </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="itemDetails d-flex align-items-center justify-content-between">
                        <div className=" d-flex ">
                          <p className="font-16 fw-500 d-none">Price</p>
                          <p className="font-16 fw-500">100</p>
                        </div>
                        <div className=" d-flex ">
                          <p className="font-16 fw-500 d-none">Quantity</p>
                          <p className="font-16 fw-500">10</p>
                        </div>
                        <div className="d-flex ">
                          <p className="font-16 fw-500 d-none">Sub-total</p>
                          <p className="font-16 fw-500">5000</p>
                        </div>
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
                      <p className="font-16 fw-600 text-black text-end">50 $</p>
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
      </section>
    </>
  );
};

export default ReturnDetails;
