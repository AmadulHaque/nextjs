"use client";
import Image from "next/image";
import "./Hero.css";
import Brand from "../Brand/Brand";
import { useEffect, useState } from "react";
import CategoryList from "@/services/category";

export default function Hero() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await CategoryList();
        setData(data);
      } catch (error) {
        console.error("Error fetching category list", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="hero-wrapper">
        <Image
          className="hero_bg"
          src="/hero_bg.svg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="bg"
        />
        <div className="row">
          <div className="col-7 pe-5">
            <h6 className="mt-5 text-primary"> RENEWABLE ENERGY</h6>
            <div className="position-relative">
              <h1 className="fw-700 font-56 mt-2 mb-4">
                Best Energy Solutions <br /> for Your Home <br />
                and
                <span className="ms-2 p-2">Office</span>
              </h1>
              <div className="element_1">
                <Image
                  src="/hero_elm_1.svg"
                  width={64}
                  height={50}
                  alt="elm-1"
                />
              </div>
              <span className="elips2"></span>
            </div>
            <p>
              Going Green-Cost-effective and Environmentally-friendly Energy
              Solutions.
            </p>

            <div className="position-relative">
              <button className="btn btn-primary btn-md mt-5">
                Explore Now
              </button>
              <div className="element_2">
                <Image
                  src="/hero_elm_2.svg"
                  width={60}
                  height={60}
                  alt="elm-2"
                />
              </div>
              <span className="elips1"></span>
            </div>
          </div>
          <div className="col-5 ">
            <div className="position-relative">
              <span className="elips3"></span>
              {/* <Image
                src="/intro_img.svg"
                alt="intro img"
                width={420}
                height={547}
              /> */}
              <div className="element_3">
                <Image
                  src="/hero_elm_3.svg"
                  width={277}
                  height={200}
                  alt="elm-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="feature-category">
          <div className="row">
            {data?.map((item, index) => (
              <Brand key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
