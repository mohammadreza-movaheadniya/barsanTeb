import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const myFont = localFont({
  src: "../../public/font/IRANSansXFaNum-Regular.woff",
})

export const metadata: Metadata = {
  title: "Barsanteb",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={myFont.className}    
          >
        {children}
      </body>
    </html>
  );
}
