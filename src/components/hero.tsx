import Image from "next/image";
import React from "react";
import heroBg from "../../public/assets/images/hero_img.png";

const Hero = () => {
  return (
    <section>
      <Image src={heroBg} alt="hero image" sizes="100vw" />
    </section>
  );
};

export default Hero;
