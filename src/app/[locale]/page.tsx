
import QuickExample from"@/components/quickExample";
import  HeroSkizze  from "@/components/Hero_Skizze";
import HeroImage from "@/components/CldImage/HeroImage";

import Gsap from "@/components/Gsap"
import CollapseCardFeatures from "@/components/CollapsCardFeatures"
export default function Home() {
  return (
    <>
      <main className="min-h-screen ">
        
      <div className="  w-full max-w-[100vw] mx-auto flex flex-col mb-8 ">
         <HeroImage/>
          <div className="mb-8 py-12 flex flex-col items-center bg-stone-700 lg:py-0">                                                                                                          "&gt;
         <Gsap/>
         </div>   
         </div>
        
        <div className=" mt-[8vw] w-full max-w-[100vw] mx-auto flex flex-col lg:mt-0">
         <QuickExample/>
         </div>

        <div className="mt-[60vh] h-[100vh] w-full max-w-[99em] mx-auto flex flex-col items-center">
          <HeroSkizze/> 
          </div>
          <div className="mt-[24vh] w-full max-w-[100vw] mx-auto flex flex-col lg:mt-0">
         <CollapseCardFeatures/>
         </div>
         
      </main>
      
    
    </>
  )
}
