"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const SingleImageUpload = ({name ,defaultValue = null}) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setImage(null);
  };

  useEffect(() => {
    setImage(defaultValue);
  }, [defaultValue]);

  return (
    <div className="cus-img  image-upload-container d-flex flex-column">
      <div className="productMain-image">
        <div className="dragDrop-area">
          <input
            type="file"
            accept="image/*"
            name={name}
            className="form-control image-upload"
            id="files"
            onChange={handleImageChange}
          />
          <label
            className="w-100 h-100 font-14 fw-500 d-flex flex-column gap-1 align-items-center justify-content-center"
            htmlFor="files"
          >
            <Image
              src="/img_upload.svg"
              alt="Upload Icon"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
            <h6>Upload bank slip</h6>
          </label>
        </div>{" "}
        {image && (
          <div className="image-preview">
            <Image
              src={image}
              alt="Preview"
              width={200}
              height={200}
              className="uploaded-image"
            />
            <button
              type="button"
              className="btn btn-danger close-button"
              onClick={handleImageRemove}
            >
              {" "}
              X{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleImageUpload;
