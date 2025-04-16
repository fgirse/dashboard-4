import React from "react";
import Image from "next/image";
import EmailModal from "../components/EmailModal";
import {Button} from "../components/ui/Butto";
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';

import Skizze from "../../public/skizze.png";
import CldImage from "./CldImage";
import Space from "../../public/space.png";

const IntroWebside = () => {
  return (
    <>
    <section className="w-full mt-12 flex flex-col items-center md:bg-transparent">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-stone-800 mt-4">
            Willkommen auf 8zense.com
          </h1>
          <p className="text-lg text-stone-600 mt-2">
            Entdecken Sie die Welt des Designs und der Architektur.
          </p>
        </div>
        <div className="mt-8">
          <Image src={Skizze} alt="Skizze" width={500} height={500} />
        </div>
        <div className="mt-8">
          
        </div>
      </div>
      </section>

    </>
  );
};

export default IntroWebside;