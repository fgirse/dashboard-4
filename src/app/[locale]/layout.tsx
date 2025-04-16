import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Script from "next/script";
import { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@//components/layout/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Raleway, Architects_Daughter, Bowlby_One_SC } from "next/font/google";
import Navigation from "@/components/layout/Navbar/navbar";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://clerk-next-app.vercel.app/"),
  title: "Next.js Clerk Template",
  description:
    "A simple and powerful Next.js template featuring authentication and user management powered by Clerk.",
  openGraph: { images: ["/og.png"] },
};





const architectsDaughter = Architects_Daughter({

  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-architectsDaughter",

});

const bowlbySC = Bowlby_One_SC({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bowlbySC",

});

const raleway = Raleway({
subsets: ["latin"],
weight: ["400"],
variable: "--font-raleway",

})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider>
    <ClerkProvider>
    <html lang="en" className={` ${bowlbySC.variable} ${raleway.variable} ${architectsDaughter.variable}`}>
      <body className={`min-h-screen flex flex-col antialiased`}>
     <Header/>
     <Navigation/>
      
      
       <main className="overflow-x-hidden ">
          {children}
          </main>
          <Footer/>
          <ScrollToTopButton />
           </body>

    
    </html>
    </ClerkProvider>
    </NextIntlClientProvider>
  );
}
