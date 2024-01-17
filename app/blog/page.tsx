import { Footer } from "@/src/components/footer/Footer";
import { Header } from "@/src/components/header/Header";
import Layout from "@/src/components/layout/Layout";
import React from "react";
import Seccion1 from "./Seccion1";

export default function page() {
  return (
    <Layout>
      <Seccion1 />
    </Layout>
  );
}
