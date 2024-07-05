import React from "react";
import Image from "next/image";
import logo from "@/../public/logo.svg";
import { DOCUMENTOS } from "@/configs/documents";
import { FileText } from "@phosphor-icons/react/dist/ssr/FileText";
import Link from "next/link";

export default function Documents() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8 flex items-center flex-col justify-center">
        <Link href="/">
          <Image alt="" src={logo} width={100} height={100} className="mb-7" />
        </Link>

        <h1 className="text-2xl font-bold mb-4">DOCUMENTOS</h1>
        <div className="w-full flex justify-center md:px-20 flex-col  gap-4">
          {DOCUMENTOS.map((v, i) => (
            <a
              href={v.url}
              target="_blank"
              className="border-2 border-white rounded-lg p-3 flex gap-2 cursor-pointer hover:bg-green bg-zinc-950  transition-all duration-300"
            >
              <FileText className="h-14 max-md:h-10" weight={"light"} />
              <div className="">
                <h2 className="font-anton text-2xl max-md:text-2xl">
                  {v.nome}
                </h2>
                <p className="text-lg max-md:text-sm">{v.descricao}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <footer className="w-full px-20 py-5 bg-zinc-800 flex justify-between mt-20 max-md:mt-0 max-md:px-5 max-md:flex-col text-center gap-4">
        <span>
          Copyright 2024 Talentos do Reggae. Todos os direitos reservados
        </span>
        <span>Desenvolvido por KERA Produções</span>
      </footer>
    </>
  );
}
