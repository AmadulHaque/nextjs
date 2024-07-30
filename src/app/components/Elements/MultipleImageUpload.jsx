"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const MultipleImageUpload = ({ name, defaultValue = [] }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(defaultValue);
  }, [defaultValue]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageRemove = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="image-upload-container d-flex flex-column w-100">
        <div className="dragDrop-area">
          <input
            type="file"
            accept="image/*"
            name={`${name}`}
            className="form-control image-upload"
            id={`files-${name}`}
            multiple
            onChange={handleImageChange}
          />
          <label
            className="w-100 h-100 font-14 fw-500 d-flex flex-column gap-1 align-items-center justify-content-center"
            htmlFor={`files-${name}`}
          >
            <Image
              src="/img_upload.svg"
              alt=""
              className="w-auto h-auto"
              width={32}
              height={32}
            />
            <small className="font-14 fw-400">Upload or drag and drop</small>
          </label>
        </div>
      </div>

      {images.length > 0 && (
        <div className="image-preview-container d-flex gap-4 flex-wrap w-100 mt-4">
          {images.map((image, index) => (
            <div key={index} className="uplodedImg position-relative">
              <Image
                src={image}
                alt={`Preview ${index}`}
                width={200}
                height={200}
                className="image-preview"
              />
              <Image
                onClick={() => handleImageRemove(index)}
                src="/close_icon_upload_img.svg"
                alt=""
                className="close-icon"
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MultipleImageUpload;
