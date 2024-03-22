import React from "react";
import Image from "next/image";
import logo from "@/../public/logo.svg";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Image alt="" src={logo} width={100} height={100} className="mb-7" />
        <h1 className="text-2xl font-bold mb-4">Política de Privacidade</h1>
        <p className="mb-4">
          Esta Política de Privacidade descreve como KERA Produções ("nós",
          "nosso" ou "a Empresa") coleta, usa e compartilha informações pessoais
          quando você se inscreve no evento "Talentos do Reggae". Esta Política
          de Privacidade se aplica a todos os participantes que se inscrevem no
          evento "Talentos do Reggae".
        </p>
        <h2 className="text-xl font-bold mb-2">Informações que Coletamos</h2>
        <p className="mb-4">
          Durante o processo de inscrição no evento "Talentos do Reggae",
          coletamos as seguintes informações pessoais:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Nome</li>
          <li>Endereço de e-mail</li>
          <li>Telefone</li>
          <li>CPF</li>
          <li>Perfil de usuário do Instagram</li>
          <li>Data de nascimento</li>
        </ul>
        <h2 className="text-xl font-bold mb-2">Como Usamos Suas Informações</h2>
        <p className="mb-4">
          Usamos as informações que coletamos exclusivamente para os seguintes
          fins:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Processar sua inscrição no evento "Talentos do Reggae";</li>
          <li>
            Comunicar informações relacionadas ao evento, incluindo
            confirmações, atualizações e lembretes;
          </li>
          <li>
            Validar se o usuário já foi cadastrado em eventos anteriores, usando
            o CPF apenas para esse propósito.
          </li>
        </ul>
        <h2 className="text-xl font-bold mb-2">
          Compartilhamento de Informações
        </h2>
        <p className="mb-4">
          Não compartilhamos suas informações pessoais com terceiros, exceto
          quando necessário para fornecer nossos serviços ou conforme exigido
          por lei.
        </p>
        <h2 className="text-xl font-bold mb-2">Segurança</h2>
        <p className="mb-4">
          A segurança de suas informações pessoais é importante para nós.
          Implementamos medidas de segurança técnicas e organizacionais para
          proteger suas informações contra acesso não autorizado, uso indevido
          ou divulgação.
        </p>
        <h2 className="text-xl font-bold mb-2">Seus Direitos</h2>
        <p className="mb-4">
          Você tem o direito de acessar, corrigir, atualizar ou excluir suas
          informações pessoais a qualquer momento. Se você deseja exercer esses
          direitos, entre em contato conosco através das informações fornecidas
          abaixo.
        </p>
        <h2 className="text-xl font-bold mb-2">
          Alterações a Esta Política de Privacidade
        </h2>
        <p className="mb-4">
          Podemos atualizar esta Política de Privacidade de tempos em tempos
          para refletir mudanças em nossas práticas de informações. Recomendamos
          que você reveja periodicamente esta página para obter as informações
          mais recentes sobre nossas práticas de privacidade.
        </p>
        <h2 className="text-xl font-bold mb-2">Contato</h2>
        <p className="mb-4">
          Se você tiver alguma dúvida sobre esta Política de Privacidade, entre
          em contato conosco em{" "}
          <span className="text-blue-500">
            support@talentosdoreggae.com.br ou telefone (WhatsApp): +55 99
            98476-3371.
          </span>
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
