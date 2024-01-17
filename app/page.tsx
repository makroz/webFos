"use client";
import { Header } from "@/src/components/header/Header";
import Layout from "@/src/components/layout/Layout";
import Seccion1 from "@/src/components/secciones/Seccion1";
import Seccion2 from "@/src/components/secciones/Seccion2";
import Seccion3 from "@/src/components/secciones/Seccion3";
import Seccion4 from "@/src/components/secciones/Seccion4";
import Blog from "@/app/blog/page";

export default function Home() {
  return (
    <Layout>
      <Seccion1 />
      <Seccion2 />
      <Seccion3 />
      <Seccion4 />
    </Layout>
  );
}
