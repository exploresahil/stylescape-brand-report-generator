"use client";

import Header from "@/components/Header";
import "./scss/globals.scss";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

import { metadata } from "./metadata";
import Cookies from "js-cookie";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("theme-dark");

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={theme}>
        <Header theme={theme} setTheme={setTheme} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
