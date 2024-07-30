"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/hooks/CartContext";
import { useAuth } from "@/hooks/useAuth";
import Dropdown from "react-bootstrap/Dropdown";

import "./Navbar.css";
import logo from "@/assets/images/brand/logo.svg";
import hamburger from "@/assets/images/icon/hamburger.svg";
import userIcon from "@/assets/images/icon/user_icon.svg";
import bag from "@/assets/images/icon/bag.svg";
import { MenuLink } from "./MenuLink";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [checkUser, setCheckUser] = useState(false);
  const { cartcount } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  let pathForUser = "/"; 

  const ToggleSidebar = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setCheckUser(user);

  }, [user]);


  if (user) {
    switch(user.data.role_name) {
      case "User":
        pathForUser = 'user'
        break;

      case "Dealer":
        pathForUser = 'dealer'
        break;

      default:
        pathForUser = 'no-user'
    } 
  }


  return (
    <>
      <div className={`navbar-wrapper ${scroll ? "sticky" : ""}`}>
        <div className="container-fluid h-100">
          <nav className="navbar">
            <div className="brandContainer d-flex gap-3 align-items-center">
              <div className="mobile-nav-toggler" onClick={ToggleSidebar}>
                <Image width={24} height={24} src={hamburger.src} alt="Menu" />
              </div>
              <Link href="/" className="navbar-brand">
                <Image
                  src={logo.src}
                  width={100}
                  height={100}
                  alt="Logo"
                  className="w-auto h-auto"
                />
              </Link>
            </div>
            <div
              className={`menuContainer d-flex justify-content-between  ${
                isOpen === true ? "active" : ""
              }`}
            >
              <MenuLink onClick={ToggleSidebar} />
            </div>
            <div className="profileContainer d-flex align-items-center justify-content-end gap-3">
              <h6 className="text-primary fw-600 me-3">09678-183183</h6>
              <Link href="/cart" className="cart-icon cart position-relative">
                <Image src={bag.src} alt="Cart" width={24} height={24} />
                <span className="badge text-bg-danger">{cartcount}</span>
              </Link>
              {checkUser ? (
                <>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      <div className="profile cart-icon">
                        <Link href="#" className="position-relative">
                          <Image
                            src={userIcon.src}
                            alt="User"
                            width={40}
                            height={40}
                          />
                        </Link>
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href={`/${pathForUser}/profile`}>
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item href="#">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <Link
                  href="/login"
                  className="btn btn-primary btn-sm d-flex align-items-center justify-content-center"
                >
                  Login
                </Link>
              )}
            </div>

            <div
              className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
              onClick={ToggleSidebar}
            ></div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
