"use client";
import Image from "next/image";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./Hero.css";

const HeroTwo = () => {
  return (
    <>
      <div className="hero-wrapper">
        <Image
          className="hero2_bg"
          src="/hero_2.svg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="bg"
        />
        <div className="d-flex justify-conent-center align-items-center flex-column mt-4 mb-5 breadcumb">
          <h1>Shop</h1>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    </>
  );
};

export default HeroTwo;
