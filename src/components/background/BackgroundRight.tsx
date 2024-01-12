import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";
import background from "@/assets/BGFOS.png";
import {
  IconBackgroundLeft,
  IconBackgroundRight,
} from "@/src/icons/IconsLibrary";

export function BackgroundRight() {
  // const [iconSize, setIconSize] = useState(360);

  // useLayoutEffect(() => {
  //   const handleResize = () => {
  //     const newSize = window.innerWidth > 1024 ? 780 : 360;
  //     setIconSize(newSize);
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <div className="absolute right-0 -z-50 top-0">
      {/* <Image
        src="/assets/BGFOS.png"
        width={1400}
        height={1900}
        alt="Image fos"
      /> */}
      <IconBackgroundRight
        className="w-[360px] h-[360px] desktop:w-[500px] desktop:h-[500px]  desktopK:w-[780px] desktopK:h-[780px] "
        viewBox="0 0 430 379"
      />
      {/* <Image src={background} alt="Image fos" /> */}
    </div>
  );
}
