import React from "react";
import { IconBackgroundLeft } from "@/src/icons/IconsLibrary";

export function BacgroundLeft() {
  return (
    <div className="absolute -left-4 desktop:-left-8 -z-50 top-0">
      <IconBackgroundLeft
        className="w-[360px] h-[360px] desktop:w-[500px] desktop:h-[500px]  desktopK:w-[780px] desktopK:h-[780px] "
        viewBox="0 0 344 369"
      />
    </div>
  );
}
