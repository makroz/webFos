"use client";
import { IconLogo, IconMenu } from "../../icons/IconsLibrary";
import Link from "next/link";
import { dataHeader } from "./Header.data";
import { useEffect, useLayoutEffect, useState } from "react";
import { Transition } from "../transition/Transition";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [iconSize, setIconSize] = useState(48);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  useLayoutEffect(() => {
    const handleResize = () => {
      const newSize =
        window.innerWidth > 1023 ? 111 : window.innerWidth > 640 ? 79 : 48;
      setIconSize(newSize);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = (idLink: any) => {
    setActiveLink(idLink);
    setOpenMenu(false);
  };
  return (
    <Transition>
      <nav className="flex flex-wrap items-center justify-between max-w-5xl p-4 mx-auto tablet:p-8 desktop:py-2 bg-transparent">
        <Link href={"/"} className="flex items-center">
          <IconLogo
            viewBox="0 0 48 28"
            size={iconSize}
            // className=" tablet:w-16 laptop:w-80"
          />
        </Link>
        <IconMenu
          className="block text-3xl tablet:hidden cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        />
        <div
          className={`${
            openMenu ? "block" : "hidden"
          } w-full tablet:block tablet:w-auto`}
        >
          <div className="flex flex-col p-4  mt-4 tablet:p-0 gap-4 tablet:flex-row tablet:space-x-2 tablet:mt-0 tablet:border-0 bg-[#1B1B1B] tablet:bg-transparent absolute tablet:relative z-10 w-[90%] tablet:w-auto">
            {dataHeader.map(({ id, name, idLink }) => (
              <div
                key={id}
                className="tablet:px-0  transition-all duration-500 ease-out"
              >
                <Link
                  href={idLink}
                  className={`text-lg font-light font-monse tablet:text-sm laptop:text-base ${
                    activeLink === idLink
                      ? "bg-black-50 text-tWhite p-2"
                      : "text-tWhite hover:bg-black-50 p-2"
                  }`}
                  onClick={() => handleLinkClick(idLink)}
                >
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </Transition>
  );
};
