/* eslint-disable react/jsx-no-undef */

"use client";

import { gsap } from "gsap";
import Logo from'../../public/LogoEZ990.svg';
import Image from "next/image";
import { useEffect } from "react";
import Container from "./Container";
import Center from "./Center";

const Gsap = () => {
  useEffect(() => {
    gsap.to("#Logo", {
      backgroundColor: "rgba(0,0,0,1)",
      duration: 4.0,
      opacity: 1,
      scale: 1,
      rotate: 360,
      ease: "back",
    });
  }, []);

  return (
    
    
    <div className=" size-54 sm:size-60 md:size-80 lg:-mt-[66vh] lg:h-[23vh] lg:w-[23vw]">
      <div>
        <Image id="Logo" alt="logo" src={Logo} width="333" />
      </div>
    </div>
    
  
  );
};

export default Gsap;