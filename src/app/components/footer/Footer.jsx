import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import logo from "@/assets/images/brand/logo.svg";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import FooterMenu from "../footerMenu/FooterMenu";

const Footer = () => {
  return (
    <>
      <section>
        <div className="footerContainer">
          <div className="container-fluid">
            <footer>
              <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4  ">
                <div className="col company ">
                  <a
                    href="/"
                    className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
                  >
                    <Image src={logo.src} alt="logo" width={200} height={38} />
                  </a>
                  <p className="font-16 mt-3">
                    House# 44 , Rd No. 2/A, Dhanmondi Zigatola Bus Stand ,
                    Dhaka, 1209
                  </p>
                  <p className="font-16 mt-2 mb-1">
                    E-mail: info@fastpowertech.com
                  </p>
                  <p className="font-16"> Hotline: 09678-183183</p>
                </div>
                <div className="col ps-5 pe-5 imp_link">
                  <h5>Company</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item ">
                      <a href="aboutus.html" className="nav-link ">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a href="termscondition.html" className="nav-link ">
                        Terms & Condition
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a href="privacypolicy.html" className="nav-link ">
                        Privacy policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col ps-5 pe-5 supprt_link">
                  <h5>Support</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item ">
                      <a href="contactus.html" className="nav-link ">
                        Contact us
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a href="faq.html" className="nav-link ">
                        FAQ’s
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a href="contactus.html" className="nav-link ">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col media">
                  <h5>Find Us</h5>
                  <ul className="nav  socialMedia-icon gap-3">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          className="fa-facebook-f"
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <FontAwesomeIcon
                          icon={faLinkedinIn}
                          className="fa-linkedin-in"
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="fa-instagram"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-center align-items-center">
                    <p className=" fw-500 text-center">
                      © 2024 Fast Power Tech. All rights reserved
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </section>
      <FooterMenu />
    </>
  );
};

export default Footer;
