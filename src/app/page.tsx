import detailFlag from "@/../public/detailFlag.svg";
import logoDeputado from "@/../public/logoDeputado.svg";
import logoMaranhao from "@/../public/logoMaranhao.svg";
import side from "@/../public/sideDetail.svg";
import sideY from "@/../public/sideDetailY.svg";
import logo from "@/../public/logo.svg";
import { Envelope } from "@phosphor-icons/react/dist/ssr/Envelope";
import { Phone } from "@phosphor-icons/react/dist/ssr/Phone";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import clsx from "clsx";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/Accordion";
import InstagramViewer from "./components/InstagramViewer";
import Navbar from "./components/Navbar";
import ScaleAnimWrapper from "./components/ScaleAnimWrapper";
import VerticalAnimWrapper from "./components/VerticalAnimWrapper";
import { FileText } from "@phosphor-icons/react/dist/ssr/FileText";
import CustomButton from "./components/Button";

export default async function Home() {
  return (
    <div>
      <Navbar />
      <main
        id="home"
        className={clsx(
          "min-h-[100vh] flex justify-center items-center",
          "max-md:flex-col relative -mt-14 "
        )}
      >
        <div
          className={clsx(
            "flex flex-col w-full items-center justify-center gap-5",
            "max-md:h-auto max-md:px-5"
          )}
        >
          <Image
            src={logo}
            alt="Talentos do Reggae"
            width={200}
            height={200}
            className={clsx("animate-pulse w-44", "max-md:w-[50%]")}
          />

          <h1 className="text-8xl max-md:text-4xl text-center font-anton bg-gradient-to-r from-green via-yellow to-red text-transparent bg-clip-text">
            20 DE JULHO
          </h1>
          <h1 className="text-6xl max-md:text-4xl text-center font-anton bg-gradient-to-r from-green via-yellow to-red text-transparent bg-clip-text">
            BANDAS | CANTORES SOLOS | DJS | DANÇARINOS
          </h1>
          <h1 className="text-5xl font-anton text-center max-md:text-4xl ">
            50 MIL REAIS EM PRÊMIOS
          </h1>

          <div className="flex items-center flex-col gap-2">
            <div className=" flex items-center max-md:flex-col-reverse gap-1 text-orange animate-fadeIn animation-delay-75  opacity-0">
              <a href="/#documents">
                <CustomButton className="bg-transparent border-orange border text-orange">
                  LEIA AS ÚLTIMAS PUBLICAÇÕES
                </CustomButton>
              </a>
            </div>
          </div>
          <div className={clsx("flex gap-8 pt-4 items-baseline flex-wrap")}>
            <div
              className={clsx(
                "gap-2 flex flex-col opacity-0 h-full justify-around animate-fadeIn animation-delay-500",
                "max-md:justify-center max-md:items-center max-md:h-auto"
              )}
            >
              <span className="font-light text-xs">REALIZAÇÃO</span>
              <Image src={logoMaranhao} alt="KERA" width={120} height={120} />
            </div>

            <div
              className={clsx(
                "gap-2 flex flex-col opacity-0 animate-fadeIn  animation-delay-900",
                " max-md:justify-center max-md:items-center "
              )}
            >
              <span className="font-light text-xs">APOIO CULTURAL</span>
              <Image src={logoDeputado} alt="KERA" width={120} height={120} />
            </div>
          </div>
        </div>
        <Image
          src={detailFlag}
          alt="Detail Left"
          width={250}
          height={250}
          className={clsx(
            "w-[50%] absolute left-0 bottom-0",
            "max-md:w-[50%] -z-10"
          )}
        />
        <Image
          src={detailFlag}
          alt="Detail Right"
          width={250}
          height={250}
          className={clsx(
            "w-[50%] bottom-0 absolute right-0",
            "max-md:w-[50%] -scale-x-[1] -z-10"
          )}
        />
      </main>
      <div className="flex flex-col  relative w-full bg-[url('/greenLight.svg')] bg-no-repeat bg-[length:100%]  max-md:bg-[center_top_10rem]">
        <section
          id="documents"
          className="flex flex-col p-20 pt-40 gap-11 justify-center items-center min-h-screen max-md:p-5 "
        >
          <Image
            src={detailFlag}
            alt="Detail Right"
            width={250}
            height={250}
            className={clsx(
              "w-[50%] left-0 absolute -top-[0.8px] ",
              "max-md:w-[50%] transform -scale-x-[1] rotate-180 -z-10"
            )}
          />
          <Image
            src={detailFlag}
            alt="Detail Left"
            width={250}
            height={250}
            className={clsx(
              "w-[50%] absolute right-0 -top-[0.8px]",
              "max-md:w-[50%] transform rotate-180 -z-10"
            )}
          />
          <ScaleAnimWrapper
            finalValue={1}
            className="w-full flex justify-center md:px-20 flex-col  gap-4"
          >
            <h1 className="font-anton text-6xl text-center mb-3">DOCUMENTOS</h1>
            <a
              href="/alteracao_do_cronograma.pdf"
              target="_blank"
              className="border-2 border-white rounded-lg p-3 flex gap-2 cursor-pointer hover:bg-green bg-zinc-950  transition-all duration-300"
            >
              <FileText className="h-14 max-md:h-10" weight={"light"} />
              <div className="">
                <h2 className="font-anton text-2xl max-md:text-2xl">
                  ALTERAÇÃO DO CRONOGRAMA
                </h2>
                <p className="text-lg max-md:text-sm">
                  Acesse a divulgação da alteração do cronograma.
                </p>
              </div>
            </a>
            <a
              href="/final_sorteio_djs_dancarinos.pdf"
              target="_blank"
              className="border-2 border-white rounded-lg p-3 flex gap-2 cursor-pointer hover:bg-green bg-zinc-950  transition-all duration-300"
            >
              <FileText className="h-14 max-md:h-10" weight={"light"} />
              <div className="">
                <h2 className="font-anton text-2xl max-md:text-2xl">
                  Divulgação final dos DJs e dançarinos selecionados por sorteio
                </h2>
                <p className="text-lg max-md:text-sm">
                  Acesse a divulgação final dos DJs e dançarinos selecionados
                  por sorteio
                </p>
              </div>
            </a>
            <a
              href="/final_bandas_cantores.pdf"
              target="_blank"
              className="border-2 border-white rounded-lg p-3 flex gap-2 cursor-pointer hover:bg-green bg-zinc-950  transition-all duration-300"
            >
              <FileText className="h-14 max-md:h-10" weight={"light"} />
              <div className="">
                <h2 className="font-anton text-2xl max-md:text-2xl">
                  Divulgação final das bandas e cantores selecionados
                </h2>
                <p className="text-lg max-md:text-sm">
                  Acesse a divulgação final das bandas e cantores selecionados
                </p>
              </div>
            </a>
            <a
              href="/final_djs_dancarinos.pdf"
              target="_blank"
              className="border-2 border-white rounded-lg p-3 flex gap-2 cursor-pointer hover:bg-green bg-zinc-950  transition-all duration-300"
            >
              <FileText className="h-14 max-md:h-10" weight={"light"} />
              <div className="">
                <h2 className="font-anton text-2xl max-md:text-2xl">
                  Divulgação final dos DJs e dançarinos classificados para o
                  sorteio
                </h2>
                <p className="text-lg max-md:text-sm">
                  Acesse a divulgação final dos DJs e dançarinos classificados
                  para o sorteio
                </p>
              </div>
            </a>
            <a
              href="/preliminar_bandas_cantores.pdf"
              target="_blank"
              className="border-2 border-white rounded-lg p-3 flex gap-2 cursor-pointer hover:bg-green bg-zinc-950  transition-all duration-300"
            >
              <FileText className="h-14 max-md:h-10" weight={"light"} />
              <div className="">
                <h2 className="font-anton text-2xl max-md:text-2xl">
                  Divulgação preliminar das bandas e cantores selecionados
                </h2>
                <p className="text-lg max-md:text-sm">
                  Acesse a divulgação preliminar das bandas e cantores
                  selecionados
                </p>
              </div>
            </a>
            <a
              href="/preliminar_djs_dancarinos.pdf"
              target="_blank"
              className="border-2 border-white rounded-lg p-3 flex gap-2 cursor-pointer hover:bg-green bg-zinc-950  transition-all duration-300"
            >
              <FileText className="h-14 max-md:h-10" weight={"light"} />
              <div className="">
                <h2 className="font-anton text-2xl max-md:text-2xl">
                  Divulgação preliminar dos DJs e dançarinos classificados para
                  o sorteio
                </h2>
                <p className="text-lg max-md:text-sm">
                  Acesse a divulgação preliminar dos DJs e dançarinos
                  classificados para o sorteio
                </p>
              </div>
            </a>
            <a
              href="/retificacao2.pdf"
              target="_blank"
              className="border-2 border-white rounded-lg p-3 flex gap-2 cursor-pointer hover:bg-green bg-zinc-950  transition-all duration-300"
            >
              <FileText className="h-14 max-md:h-10" weight={"light"} />
              <div className="">
                <h2 className="font-anton text-2xl max-md:text-2xl">
                  Retificação 02 do Edital de Abertura
                </h2>
                <p className="text-lg max-md:text-sm">
                  Acesse a retificação 02 do Edital de Abertura
                </p>
              </div>
            </a>
            <a
              href="/retificacao.pdf"
              target="_blank"
              className="border-2 border-white rounded-lg p-3 flex gap-2 cursor-pointer hover:bg-green bg-zinc-950  transition-all duration-300"
            >
              <FileText className="h-14 max-md:h-10" weight={"light"} />
              <div className="">
                <h2 className="font-anton text-2xl max-md:text-2xl">
                  Retificação 01 do Edital de Abertura
                </h2>
                <p className="text-lg max-md:text-sm">
                  Acesse a retificação 01 do Edital de Abertura
                </p>
              </div>
            </a>
            <a
              href="/edital.pdf"
              target="_blank"
              className="border-2 border-white rounded-lg p-3 flex gap-2 cursor-pointer hover:bg-green bg-zinc-950  transition-all duration-300"
            >
              <FileText className="h-14 max-md:h-10" weight={"light"} />
              <div className="">
                <h2 className="font-anton text-2xl max-md:text-2xl">
                  Edital de abertura
                </h2>
                <p className="text-lg max-md:text-sm">
                  Acesse o edital do evento
                </p>
              </div>
            </a>
          </ScaleAnimWrapper>
        </section>
        <section
          id="about"
          className="flex flex-col gap-8 justify-center items-center min-h-screen relative w-full pt-20 max-md:pt-0 max-md:p-5  p-20 max-md:gap-0 max-w-7xl  m-auto"
        >
          <div className="flex flex-col gap-2 items-center w-full mb-6">
            <h5 className=" ">Sobre o evento</h5>
            <h1 className="font-anton text-8xl text-center mb-3 max-md:text-[3.4rem] max-md:leading-[1.1]">
              O <span className="text-green leading-[1.2]">MAIOR EVENTO</span>{" "}
              DEDICADO AO REGGAE NO MARANHÃO
            </h1>
            <p className="text-center w-[700px] max-md:w-full">
              Uma celebração da cultura do reggae no Maranhão, conhecido como a
              Jamaica Brasileira, que visa dar visibilidade ao reggae maranhense
              e mostrar sua riqueza para o Brasil. Este evento é uma iniciativa
              importante para ampliar a cultura do reggae no Maranhão.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-2">
              <AccordionTrigger>QUEM PODE SE INSCREVER?</AccordionTrigger>
              <AccordionContent>
                Bandas de reggae compostas por instrumentistas e cantores,
                cantores solos, DJs e casal de dançarinos. Essas pessoas devem
                ser maiores de 18 anos ou menores com permissão dos pais ou
                responsável legal, residentes no estado do Maranhão e que se
                identifiquem como artistas do reggae.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>COMO FUNCIONA?</AccordionTrigger>
              <AccordionContent>
                Os interessados podem se inscrever no site
                talentosdoreggae.com.br, preenchendo um formulário com
                informações a respeito de sua categoria. <br /> Para o concurso,
                serão selecionados seis concorrentes, compostos por seis bandas
                e 6 cantores solos. No evento também haverá apresentações de 7
                DJs e 10 casais de dançarinos, dos quais serão selecionados
                dentre os inscritos no evento. <br />O evento será transmitido
                ao vivo pelo site talentosdoreggae.com.br.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>QUAIS AS PREMIAÇÕES?</AccordionTrigger>
              <AccordionContent>
                Total de R$ 50.000,00 em prêmios distribuídos da seguinte forma:{" "}
                <ul className="list-disc list-inside">
                  <li>Bandas: 1º lugar, 2º lugar, 3º lugar. </li>
                  <li> Cantores: 1º lugar, 2º lugar, 3º lugar.</li>
                  <li>Apresentações selecionadas (DJs e Dança)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <VerticalAnimWrapper direction={300}>
            <div className="flex gap-5 flex-wrap justify-center items-center w-full">
              <div className="p-5 bg-green flex flex-col gap-4 w-80 h-60">
                <h5 className=" font-anton text-2xl">PROMOVER O REGGAE</h5>
                <p className="">
                  Impulsionar o reggae maranhense, proporcionando maior
                  visibilidade à cultura reggae do Maranhão.
                </p>
              </div>

              <div className="p-5 bg-yellow text-black flex flex-col gap-4 w-80 h-60">
                <h5 className=" font-anton text-2xl">EXPOR TALENTOS</h5>
                <p className="">
                  Dar oportunidade aos talentos locais do reggae maranhense
                  através de meios inovadores e eventos que os levem ao
                  reconhecimento nacional e internacional.
                </p>
              </div>
              <div className="p-5 bg-red flex flex-col gap-4 w-80 h-60">
                <h5 className=" font-anton text-2xl">FOMENTAR O TURISMO</h5>
                <p>
                  Estimular a diversificação da oferta cultural no Maranhão,
                  promovendo o turismo através de experiências que incluem
                  visitas a locais, produtos, danças e história.
                </p>
              </div>
            </div>
          </VerticalAnimWrapper>
        </section>
      </div>
      <section
        id="news"
        className="flex flex-col  gap-8 justify-center items-center  min-h-screen  w-full py-20  m-auto"
      >
        <h4>Fique por dentro</h4>
        <h1 className="font-anton text-8xl text-center mb-3 max-md:text-6xl">
          NÃO PERCA AS <span className="text-yellow">NOVIDADES</span>
        </h1>

        <InstagramViewer />
      </section>

      <section className="flex flex-col gap-8 justify-center items-center min-h-screen  bg-orange w-full max-md:p-5 px-20">
        <ScaleAnimWrapper finalValue={1}>
          <h1 className="font-anton text-9xl text-center leading-[1.1] text-black w-full max-md:text-[4.1rem] max-md:leading-[1.2] max-w-6xl ">
            O <span className="text-white">REGGAE MARANHENSE</span> É UMA
            EXPRESSÃO DE <span className="text-white">LIBERDADE</span> E{" "}
            <span className="text-white">UNIÃO</span>
          </h1>
        </ScaleAnimWrapper>
      </section>

      <section
        id="schedule"
        className="flex justify-between gap-8 items-center min-h-screen relative w-full pt-20 max-md:flex-col max-md:pt-0"
      >
        <Image
          src={side}
          alt="Detail Left"
          width={250}
          height={250}
          className={clsx("w-[20%]", "max-md:hidden")}
        />
        <Image
          src={sideY}
          alt="Detail Left"
          width={250}
          height={250}
          className={clsx(
            "hidden",
            "max-md:w-[70%] max-md:transform max-md:block "
          )}
        />
        <div className="flex flex-col items-center justify-center gap-7  max-md:px-5">
          <div className="flex flex-col gap-7 items-center">
            <h4>Programação</h4>
            <h1 className="font-anton text-8xl text-center mb-3  max-md:text-7xl">
              ANOTA AÍ <span className="text-yellow">REGUEIRO</span>!
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="h-[500px] flex flex-col justify-between items-center relative">
              <div className="absolute w-full flex items-center justify-center h-full -z-10">
                <div className="w-1 bg-gradient-to-b from-green via-yellow to-red h-full"></div>
              </div>
              <div className="rounded-full h-20 w-20 bg-gray-500 flex flex-col items-center justify-center font-anton leading-[1.1]">
                <h5 className="text-2xl">30</h5>
                <h1>MAR</h1>
              </div>
              <div className="rounded-full h-20 w-20 bg-gray-500 flex flex-col items-center justify-center font-anton leading-[1.1]">
                <h5 className="text-2xl">17</h5>
                <h1>ABR</h1>
              </div>
              <div className="rounded-full h-20 w-20 bg-gray-500 flex flex-col items-center justify-center font-anton leading-[1.1]">
                <h5 className="text-2xl">24</h5>
                <h1>ABR</h1>
              </div>
              <div className="rounded-full h-20 w-20 bg-yellow text-black flex flex-col items-center justify-center font-anton leading-[1.1]">
                <h5 className="text-2xl">13</h5>
                <h1>JUL</h1>
              </div>
              <div className="rounded-full h-20 w-20 bg-red flex flex-col items-center justify-center font-anton leading-[1.1]">
                <h5 className="text-2xl">20</h5>
                <h1>JUL</h1>
              </div>
            </div>
            <div>
              <div className="h-[500px] flex flex-col justify-between items-start">
                <div className="opacity-65">
                  <h1 className="font-anton  pt-3">
                    EVENTO DE LANÇAMENTO | INÍCIO DAS INSCRIÇÕES
                  </h1>
                  <h5 className="text-xs">ÀS 22:00H</h5>
                  <h5 className="text-xs">YOUTUBE KERA PRODUÇÕES</h5>
                </div>
                <div className="opacity-65">
                  <h1 className="font-anton  pb-4">
                    ENCERRAMENTO DAS INSCRIÇÕES
                  </h1>
                </div>
                <div className="opacity-65">
                  <h1 className="font-anton pb-4">
                    DIVULGAÇÃO DOS SELECIONADOS
                  </h1>
                </div>
                <div>
                  <h1 className="font-anton  pb-4">
                    ABERTURA DA VOTAÇÃO POPULAR
                  </h1>
                </div>
                <div>
                  <h1 className="font-anton pb-7">O GRANDE DIA</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={side}
          alt="Detail Right"
          width={250}
          height={250}
          className={clsx("w-[20%] transform rotate-180 ", "max-md:hidden ")}
        />
        <Image
          src={sideY}
          alt="Detail Right"
          width={250}
          height={250}
          className={clsx("hidden max-md:hidden ")}
        />
      </section>
      <section
        id="contact"
        className="flex justify-center gap-8 items-center min-h-screen  w-full pt-20 max-md:flex-col "
      >
        <div className="flex flex-col items-center justify-center gap-7  h-full w-full max-md:px-5">
          <div className="flex flex-col gap-7 w-full items-center">
            <h4>Contato</h4>
            <h1 className="font-anton text-8xl text-center mb-3  max-md:text-7xl">
              FALE CONOSCO
            </h1>
          </div>
          <div className="flex gap-6  flex-col">
            <div className="flex gap-4">
              <div className="bg-red rounded-full p-2 w-20 h-20">
                <WhatsappLogo weight="light" />
              </div>
              <div>
                <p className="text-gray-400">Whatsapp</p>{" "}
                <a
                  className="underline"
                  target="_blank"
                  href="https://wa.me/message/FY426JEYIV4OK1"
                >
                  +55 99 9 8476-3371
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-red rounded-full p-2 w-20 h-20">
                <Envelope weight="light" />
              </div>
              <div>
                <p className="text-gray-400">Email</p>{" "}
                <a
                  className="underline"
                  target="_blank"
                  href="mailto:support@talentosdoreggae.com.br"
                >
                  support@talentosdoreggae.com.br
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full px-20 py-5 bg-zinc-800 flex justify-between  max-md:mt-0 max-md:flex-col text-center gap-4 font-light">
        <span>
          Copyright 2024 Talentos do Reggae. Todos os direitos reservados
        </span>
        <span>
          Desenvolvido por <strong>KERA Produções</strong>
        </span>
      </footer>
    </div>
  );
}
