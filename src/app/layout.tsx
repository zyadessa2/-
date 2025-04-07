import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import { NavbarDemo } from "@/components/header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400' , '500' , '700'],
  preload: true , // يبدا يجهز الخط قبل ميعرض البيدج 
});


export const metadata: Metadata = {
  title: "حصاد لتصدير الحاصلات الزراعيه",
  description: "حصاد لتصدير جميع انواع الحاصلات الزراعيه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className} 
      >
        <NavbarDemo/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
