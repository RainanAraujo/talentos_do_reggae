"use client";
import logo from "@/../public/logo.svg";
import { CaretCircleLeft } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Successful() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen  w-full m-auto  px-20  max-md:p-0 max-w-7xl max-md:max-w-full">
        <div className="bg-neutral-900 rounded-lg h-[80vh] max-md:min-h-screen w-full flex ">
          <div className="flex flex-col justify-between flex-1 ">
            <div className="px-20 overflow-y-scroll py-20  h-full max-md:p-5  max-md:pt-20  gap-y-5 flex flex-col relative ">
              <div className="flex flex-col gap-5 mb-4">
                <h1 className="text-3xl font-bold text-white">
                  Inscrição realizada com sucesso!
                </h1>
                <p className="text-white font-light">
                  Cadastro realizado para candidatar a participação do evento!
                  Fique atento ao seu e-mail para mais informações. Qualquer
                  dúvida, alteração de cadastro ou desistência, entre em
                  contato:{" "}
                  <a
                    href="mailto:support@talentosdoreggae.com.br"
                    target="_blank"
                    className="cursor-pointer text-blue-500 underline"
                  >
                    Email
                  </a>{" "}
                  ou pelo{" "}
                  <a
                    className="cursor-pointer text-blue-500 underline"
                    target="_blank"
                    href="https://wa.me/message/FY426JEYIV4OK1"
                  >
                    WhatsApp
                  </a>
                </p>
              </div>
              <Link href={"/"} className="flex gap-2 items-center">
                <CaretCircleLeft className="h-8 w-8 text-white" />
                Voltar a página inicial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
