import Layout from "@/src/components/layout/Layout";
import React from "react";
import Seccion1 from "./Seccion1";
import Seccion2 from "./Seccion2";
import Seccion3 from "./Seccion3";

export default function page() {
  return (
    <Layout>
      <Seccion1 />
      <Seccion2 />
      <Seccion3 />
    </Layout>
  );
}
