// header.tsx
"use client";
// the :point_up: use client was necessary to make this module work
import { SignInButton, SignedIn, SignUpButton, SignedOut, UserButton, ClerkProvider } from "@clerk/nextjs";
import Image from "next/image";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { Locale } from "next-intl";
import { useState } from "react";
import { useEffect } from "react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

const Header = () => {

  const t = useTranslations("LocaleSwitcher");
  return (

    <nav className=" bg-transparent">
      <div className="flex flex-row justify-between items-center bg-stone-600 py-1">
        <div className="flex flex-row items-stretch gap-x-3">
        <div className="w-16 mb-3">
      <Image src="/LogoEZ990.svg" alt="8zense Logo" width={54} height={54} className="bg-black ml-3 mt-3" />
      </div>
      <div className=" bg-zinc-6000 rounded-lg ">
      <LocaleSwitcherSelect defaultValue={"de"} label={"locale"} >
        <option value="🇬🇧 en">English</option>
        <option value="🇩🇪 de">Deutsch</option>
        <option value="🇫🇷 fr">Français</option>

        </LocaleSwitcherSelect> 
      </div>
      </div>
      <div className="mr-3"> 
        <SignedOut>
            <SignInButton>
              <button className="rounded-lg py-2 px-3 bg-slate-600 text-center text-white w-36 hover:bg-orange-400">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>  
          
        
      </div>  
        
      </nav>
  );
};
export default Header;