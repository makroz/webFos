import React from "react";
import { IconBackgroundRight } from "@/src/icons/IconsLibrary";

export function BackgroundRight() {
  return (
    <div className="absolute -right-1 tablet:right-0 -z-50 top-0">
      <IconBackgroundRight
        className="w-[360px] h-[360px] desktop:w-[500px] desktop:h-[500px]  desktopK:w-[780px] desktopK:h-[780px] "
        viewBox="0 0 430 379"
      />
    </div>
  );
}
