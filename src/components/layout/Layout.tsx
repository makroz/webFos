import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { BacgroundLeft } from "../background/BackgroundLeft";
import { BackgroundRight } from "../background/BackgroundRight";

export default function Layout({ children }: any) {
  return (
    <div>
      <BacgroundLeft />
      <BackgroundRight />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
