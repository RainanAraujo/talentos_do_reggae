import React from "react";
import logo from "@/../public/logo.svg";

import Image from "next/image";

export default function layoutSubscribe({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  w-full m-auto  px-20  max-md:p-0 max-w-7xl max-md:max-w-full">
      <div className="bg-neutral-900 rounded-lg h-[80vh] max-md:min-h-screen w-full flex ">
        <div className="flex flex-col justify-between flex-1 ">
          <div className="px-20 overflow-y-scroll py-20  h-full max-md:p-5  max-md:pt-20  gap-y-5 flex flex-col relative">
            <div className="space-y-2">
              <Image alt="" src={logo} width={100} height={100} />
              <h3 className="text-2xl font-bold text-white">
                Inscrição no evento
              </h3>
            </div>
            {children}
          </div>
        </div>
        <div className="flex-1 h-full bg-zinc-800 rounded-r-lg max-md:hidden">
          <div className="bg-[url('/backgroundDetail.svg')] w-full h-full flex items-end bg-cover rounded-r-lg">
            <footer className="w-full px-20 py-2 bg-zinc-800  flex  text-xs justify-between max-md:flex-col text-center gap-4">
              <span>Todos os direitos reservados</span>
              <span>Desenvolvido por KERA Produções</span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
