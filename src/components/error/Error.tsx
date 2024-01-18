import React from "react";

export const Error = ({ children }: any) => {
  return (
    <div className="bg-red-800 py-2  desktopK:py-4 w-full my-4 desktop:my-8">
      <p className="text-tWhite font-monse desktop:text-lg desktopK:text-xl font-semibold text-center">
        {children}
      </p>
    </div>
  );
};
