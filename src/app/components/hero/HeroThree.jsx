import Image from "next/image";
import "./Hero.css";

const HeroThree = () => {
  return (
    <>
      <div className="hero-wrapper">
        <Image
          className="hero3_bg"
          src="/hero3.svg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="bg"
        />
      </div>
    </>
  );
};

export default HeroThree;
