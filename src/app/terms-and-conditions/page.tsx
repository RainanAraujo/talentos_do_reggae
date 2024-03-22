import React from "react";
import Image from "next/image";
import logo from "@/../public/logo.svg";

export default function TermsAndCondition() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Image alt="" src={logo} width={100} height={100} className="mb-7" />
        <h1 className="text-2xl font-bold mb-4">Termos e Condições</h1>
        <p className="mb-4">
          Por favor, leia estes termos e condições cuidadosamente antes de se
          inscrever no evento "Talentos do Reggae".
        </p>
        <ol className="list-decimal ml-6 mb-4 gap-4 flex flex-col">
          <li>
            <strong>Aceitação dos Termos</strong>: Ao se inscrever no evento
            "Talentos do Reggae", você concorda em ficar vinculado a estes
            termos e condições. Se você discordar de qualquer parte destes
            termos e condições, não poderá se inscrever no evento.
          </li>
          <li>
            <strong>Uso do Serviço</strong>: Você concorda em usar o serviço
            apenas para fins legais e de acordo com estes termos e condições.
            Você concorda em não usar o serviço de qualquer forma que possa
            prejudicar o serviço ou interferir no uso e aproveitamento do
            serviço por parte de terceiros.
          </li>
          <li>
            <strong>Propriedade Intelectual</strong>: O serviço e seu conteúdo
            original, recursos e funcionalidades são e continuarão sendo
            propriedade exclusiva da KERA Produções e de seus licenciadores. O
            serviço é protegido por direitos autorais, marcas registradas e
            outras leis de propriedade intelectual.
          </li>
          <li>
            <strong>Limitação de Responsabilidade</strong>: Em nenhuma
            circunstância, KERA Produções, seus diretores, funcionários ou
            afiliados serão responsáveis por quaisquer danos decorrentes do uso
            ou incapacidade de usar o serviço.
          </li>
          <li>
            <strong>Alterações nos Termos e Condições</strong>: Reservamos o
            direito, a nosso exclusivo critério, de modificar ou substituir
            estes termos e condições a qualquer momento. Se uma revisão for
            material, tentaremos fornecer aviso prévio de pelo menos 30 dias
            antes que novos termos entrem em vigor.
          </li>
          <li>
            <strong>Compromisso de Receber Comunicações:</strong> Ao se
            inscrever no evento "Talentos do Reggae", você concorda em receber
            comunicações relacionadas ao evento, incluindo confirmações,
            atualizações e lembretes.
          </li>
          <li>
            <strong>Uso de Imagens e Conteúdo:</strong> Ao participar do evento
            "Talentos do Reggae", você concorda com a captura de sua imagem
            durante o evento. Você também concorda que essas imagens podem ser
            usadas pela KERA Produções para fins promocionais ou de divulgação
            do evento.
          </li>
          <li>
            <strong>Responsabilidade por Conteúdo Gerado pelo Usuário:</strong>{" "}
            Se você compartilhar qualquer conteúdo durante o evento "Talentos do
            Reggae", você será o único responsável por esse conteúdo. A KERA
            Produções não se responsabiliza por qualquer conteúdo ofensivo,
            inadequado ou ilegal compartilhado pelos participantes.
          </li>
          <li>
            <strong>Inconformidades nos Dados da Inscrição:</strong> Qualquer
            discrepância ou inconformidade nos dados fornecidos durante o
            processo de inscrição resultará na desqualificação automática do
            candidato.
          </li>
          <li>
            <strong>Restrições de Uso do Serviço:</strong> Você concorda em usar
            o serviço apenas para fins legais e de acordo com estes termos e
            condições. Você concorda em não compartilhar conteúdo ilegal, violar
            direitos autorais, ou usar o serviço para fins comerciais não
            autorizados.
          </li>
        </ol>

        <p className="mb-4">
          Se você tiver alguma dúvida sobre estes termos e condições, entre em
          contato conosco em{" "}
          <span className="text-blue-500">
            keracomunicacao@gmail.com ou telefone (WhatsApp): +55 99 98476-3371.
          </span>
          .
        </p>
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
