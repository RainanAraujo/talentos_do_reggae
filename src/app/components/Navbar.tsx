"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/../public/simbol.svg";
import clsx from "clsx";
import { List, X } from "@phosphor-icons/react";
import { useScrollPosition } from "../utils/useScrollPosition";
import CustomButton from "./CustomButton";

interface Options {
  title: string;
  url: string;
}

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const options: Options[] = [
    { title: "FIQUE POR DENTRO", url: "#dentro" },
    { title: "SOBRE O EVENTO", url: "#sobre" },
    { title: "PROGRAMAÇÃO", url: "#programacao" },
  ];
  return (
    <>
      <nav
        className={clsx(
          scrollPosition > 0 ? "bg-zinc-900" : "",
          "flex justify-center items-center sticky top-0 h-20 max-xl:h-20 bg-black transition-all duration-300 z-10"
        )}
      >
        <div
          className={clsx(
            "flex justify-between px-20 w-full items-center  ",
            "max-xl:px-5"
          )}
        >
          <div className="flex-1">
            <Image
              className="w-max h-max"
              src={logo}
              width={120}
              height={123}
              alt=""
            />
          </div>

          <MenuHamburger options={options} />
          <ul
            className={clsx(
              "flex gap-6 text-white text-base font-medium items-center justify-center flex-1 whitespace-nowrap",
              "max-xl:hidden"
            )}
          >
            {options.map((option) => (
              <li key={option.title}>
                <a
                  href={option.url}
                  className="after:content-[''] after:block after:bg-white after:w-0 after:h-[1px] hover:after:w-full after:transition-[width_3.s]"
                >
                  {option.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex-1 flex items-center justify-end">
            <CustomButton className="bg-orange text-white" disabled>
              INSCREVA-SE
            </CustomButton>
          </div>
        </div>
      </nav>
    </>
  );
}

interface MenuHamburgerProps {
  options: Options[];
}

function MenuHamburger({ options }: MenuHamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={clsx("hidden", "max-xl:flex")}
        onClick={() => setIsOpen(true)}
      >
        <List className="cursor-pointer hover:opacity-70" size={32} />
      </div>
      {isOpen && (
        <div
          className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-20 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-0 right-0 h-full bg-white w-3/4
            flex justify-start items-start p-10 py-20 animate-slide-right-to-left"
            onClick={(e) => e.stopPropagation()}
          >
            <X
              className="absolute right-5 top-10"
              size={32}
              onClick={() => setIsOpen(false)}
            />
            <ul className="flex flex-col gap-6 text-gray-700 text-base font-medium  ">
              {options.map((option) => (
                <li key={option.title}>
                  <a href={option.url} onClick={() => setIsOpen(false)}>
                    {option.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
