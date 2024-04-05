import React from "react";
import Navbar from "../components/Navbar";
import { FileText } from "@phosphor-icons/react/dist/ssr/FileText";

export default function DocumentsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl m-auto mt-6 space-y-14 p-5">
        <h1 className="font-anton text-6xl text-center mb-3">DOCUMENTOS</h1>
        <div className="border-2 border-white rounded-lg p-5 flex gap-2 cursor-pointer hover:bg-gray-900  transition-all duration-300">
          <FileText className="h-20 max-md:h-14" weight={"light"} />
          <div className="">
            <h2 className="font-anton text-3xl max-md:text-2xl">Edital</h2>
            <p className="text-lg max-md:text-sm">Acesse o edital do evento</p>
          </div>
        </div>
      </main>
    </>
  );
}
