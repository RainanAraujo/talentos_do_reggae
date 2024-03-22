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
    { title: "SOBRE O EVENTO", url: "#about" },
    { title: "FIQUE POR DENTRO", url: "#news" },
    { title: "PROGRAMAÇÃO", url: "#schedule" },
    { title: "CONTATO", url: "#contact" },
  ];
  return (
    <>
      <nav
        className={clsx(
          "flex justify-center items-center sticky top-0 h-20 max-xl:h-20 bg-black transition-all duration-300 z-10",
          scrollPosition > 0
            ? "backdrop-filter backdrop-blur-lg bg-opacity-90 bg-zinc-900 "
            : ""
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
              className="w-max h-max cursor-pointer"
              src={logo}
              width={120}
              height={123}
              onClick={() => window.scrollTo(0, 0)}
              alt=""
            />
          </div>

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
            <CustomButton
              className="bg-gray-500 text-white"
              onClick={() =>
                window.alert(
                  "Abertas somente a partir do evento de lançamento no dia 30 de março"
                )
              }
            >
              INSCREVA-SE
            </CustomButton>
          </div>
          <MenuHamburger options={options} />
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
        className={clsx("hidden flex-1 justify-end", "max-xl:flex")}
        onClick={() => setIsOpen(true)}
      >
        <List className="cursor-pointer hover:opacity-70" size={32} />
      </div>
      {isOpen && (
        <div
          className="fixed top-0 right-0 w-full h-full animate-slideToLeft  bg-opacity-20 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-0 right-0 h-screen bg-black w-3/4
            flex justify-start items-start p-10 py-20 animate-slide-right-to-left"
            onClick={(e) => e.stopPropagation()}
          >
            <X
              className="absolute right-5 top-10 cursor-pointer"
              size={32}
              onClick={() => setIsOpen(false)}
            />
            <ul className="flex flex-col gap-6  text-base font-medium  ">
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
