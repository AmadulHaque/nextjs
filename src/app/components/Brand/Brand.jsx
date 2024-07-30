import Image from "next/image";
import React from "react";
import NoImage from "@/assets/images/no_image.png";

const Brand = ({ item }) => {
  return (
    <>
      <div className="col-2">
        <div className="card">
          <div className="card-body d-flex align-items-center justify-content-center gap-2">
            <Image
              src={item.url ? item.url : NoImage.src}
              alt={item.name}
              width={96}
              height={96}
            />
            <p>{item.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
