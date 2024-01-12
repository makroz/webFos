import React, { useState, useLayoutEffect } from "react";
import { IconBackgroundLeft } from "@/src/icons/IconsLibrary";

export function BacgroundLeft() {
  const [iconSize, setIconSize] = useState(360);

  useLayoutEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth > 1024 ? 780 : 360;
      setIconSize(newSize);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute -left-4 desktop:-left-8 -z-50 top-0">
      {/* <Image
        src="/assets/BGFOS.png"
        width={1400}
        height={1900}
        alt="Image fos"
      /> */}
      <IconBackgroundLeft size={iconSize} viewBox="0 0 344 369" />
      {/* <Image src={background} alt="Image fos" /> */}
    </div>
  );
}
