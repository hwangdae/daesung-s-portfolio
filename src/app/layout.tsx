"use client";
import type { Metadata } from "next";
import { Black_Han_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";

const blackHanSans = Black_Han_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-blackhan",
  style: "normal",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-notoSans",
  style: "normal",
});

// export const metadata: Metadata = {
//   title: "황대성 | 프론트엔드 포트폴리오",
//   description: "프론트엔드 개발자 황대성 포트폴리오 사이트 입니다.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${blackHanSans.variable} ${notoSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
