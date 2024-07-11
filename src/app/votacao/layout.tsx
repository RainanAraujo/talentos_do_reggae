"use client";
import logo from "@/../public/logo.svg";
import Image from "next/image";
import React from "react";

export default function LayoutVotacao({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  w-full m-auto  px-20  max-md:p-0 max-w-7xl max-md:max-w-full">
      <div className="bg-neutral-900 rounded-lg h-[80vh] max-md:min-h-screen w-full flex ">
        <div className="flex flex-col justify-between flex-1 ">
          <div className="px-20 overflow-y-auto py-20  h-full max-md:p-5  max-md:pt-20  gap-y-5 flex flex-col relative">
            <div className="space-y-2 mx-auto">
              <Image alt="" src={logo} width={100} height={100} />
            </div>
            {children}
          </div>
        </div>
      </div>
      <footer className="w-full px-20 py-2 bg-zinc-800  flex  text-xs justify-between max-md:flex-col text-center gap-4">
        <span>Todos os direitos reservados</span>
        <span>Desenvolvido por KERA Produções</span>
      </footer>
    </div>
  );
}
