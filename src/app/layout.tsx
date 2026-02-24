import type { Metadata } from "next";
import "./styles/globals.css"
import React from "react";


export const metadata: Metadata = {
  title: "react pizza",
  description: "imba pizza sait",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center bg-[#FFDF8C] w-full">
        {children}
      </body>
    </html>
  );
}
