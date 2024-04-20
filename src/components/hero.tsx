import React from "react";
import Image from "next/image";
import heroBg from "../../public/assets/images/hero_img.png";

interface HeroProps {
  forwardedRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ forwardedRef }) => {
  return (
    <section id="hero" ref={forwardedRef}>
      <Image src={heroBg} alt="hero image" sizes="100vw" />
    </section>
  );
};

export default Hero;
