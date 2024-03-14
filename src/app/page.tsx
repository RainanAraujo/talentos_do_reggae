import Image from "next/image";
import logo from "@/../public/logo.svg";
import side from "@/../public/sideDetail.svg";
import detailFlag from "@/../public/detailFlag.svg";
import logoKERA from "@/../public/logoKERA.svg";
import logoMaranhao from "@/../public/logoMaranhao.svg";
import logoDeputado from "@/../public/logoDeputado.svg";
import clsx from "clsx";
import Navbar from "./components/Navbar";
import InstagramViewer from "./components/InstagramViewer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main
        className={clsx(
          "min-h-[100vh] flex justify-center items-center",
          "max-md:flex-col relative -mt-20"
        )}
      >
        <div
          className={clsx(
            "flex flex-col items-center justify-center gap-4",
            "max-md:h-auto"
          )}
        >
          <Image
            src={logo}
            alt="Talentos do Reggae"
            width={200}
            height={200}
            className={clsx("animate-pulse w-44", "max-md:w-[80%]")}
          />
          <h1 className="text-9xl leading-[1.1] font-bold text-center font-anton bg-gradient-to-r from-green via-yellow to-red text-transparent bg-clip-text pt-6">
            MARANHÃO,
            <br /> A JAMAICA BRASILEIRA
          </h1>
          <div className="flex items-center flex-col gap-2">
            <div className=" flex items-center flex-col gap-1 text-orange animate-fadeIn animation-delay-75  opacity-0">
              <h4 className="text-lg font-normal text-center text-white px-6 py-1 border-orange rounded-md border-[1px]">
                30 DE MARÇO
              </h4>

              <span className="text-sm font-thin">LANÇAMENTO DO EVENTO</span>
            </div>
          </div>
          <div
            className={clsx(
              "flex gap-8 pt-4 items-baseline",
              "max-md:flex-col"
            )}
          >
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
                " max-md:justify-center max-md:items-center"
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
            "max-md:w-[50%] "
          )}
        />
        <Image
          src={detailFlag}
          alt="Detail Right"
          width={250}
          height={250}
          className={clsx(
            "w-[50%] bottom-0 absolute right-0",
            "max-md:w-[50%] -scale-x-[1]"
          )}
        />
      </main>
      <div className="flex flex-col  relative w-full bg-[url('/greenLight.svg')] bg-no-repeat bg-contain">
        <section className="flex flex-col p-20 pt-40 gap-11 justify-center items-center min-h-screen">
          <Image
            src={detailFlag}
            alt="Detail Right"
            width={250}
            height={250}
            className={clsx(
              "w-[50%] left-0 absolute -top-[0.8px] ",
              "max-md:w-[50%] transform -scale-x-[1] rotate-180"
            )}
          />
          <Image
            src={detailFlag}
            alt="Detail Left"
            width={250}
            height={250}
            className={clsx(
              "w-[50%] absolute right-0 -top-[0.8px]",
              "max-md:w-[50%] transform rotate-180 "
            )}
          />
          <h1 className="font-anton text-8xl">ASSISTA AO VIVO</h1>
          <iframe
            width="860"
            height="415"
            className="rounded-md"
            src="https://www.youtube.com/embed/1PJVQ_mOV00?si=sSfMNT9EsaXfRqNt&amp;controls=0"
            title="YouTube Talentos do Reggae"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>
        <section
          id="about"
          className="flex flex-col  gap-8 justify-center items-center min-h-screen relative w-full pt-20"
        >
          <div className="flex flex-col gap-2 items-center">
            <h5 className=" ">Sobre o evento</h5>
            <h1 className="font-anton text-8xl text-center mb-3">
              O <span className="text-green leading-[1.2]">MAIOR EVENTO</span>{" "}
              DEDICADO AO REGGAE NO MARANHÃO
            </h1>
            <p className="text-center w-[700px]">
              O Talentos do Reggae é um evento vibrante que destaca talentos
              musicais e de dança, proporcionando uma noite inesquecível de
              celebração e valorização da cultura reggae.
            </p>
          </div>
          <div className="flex gap-5">
            <div className="p-5 bg-green flex flex-col gap-4 w-96 h-60">
              <h5 className=" font-anton text-2xl">DESCOBERTA DE TALENTOS</h5>
              <p className="">
                Evento promove oportunidade para artistas mostrarem suas
                habilidades musicais e de dança.
              </p>
            </div>

            <div className="p-5 bg-yellow text-black flex flex-col gap-4 w-96 h-60">
              <h5 className=" font-anton text-2xl">DESCOBERTA DE TALENTOS</h5>
              <p className="">
                Evento promove oportunidade para artistas mostrarem suas
                habilidades musicais e de dança.
              </p>
            </div>
            <div className="p-5 bg-red flex flex-col gap-4 w-96 h-60">
              <h5 className=" font-anton text-2xl">DESCOBERTA DE TALENTOS</h5>
              <p>
                Evento promove oportunidade para artistas mostrarem suas
                habilidades musicais e de dança.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section
        id="news"
        className="flex flex-col  gap-8 justify-center items-center min-h-screen  w-full pt-20"
      >
        <h4>Fique por dentro</h4>
        <h1 className="font-anton text-8xl text-center mb-3">
          NÃO PERCA AS <span className="text-yellow">NOVIDADES</span>
        </h1>
        <InstagramViewer />
      </section>
      <section className="flex flex-col gap-8 justify-center items-center min-h-screen  bg-orange w-full">
        <h1 className="font-anton text-9xl text-center leading-[1.1] text-black">
          O <span className="text-white">REGGAE MARANHENSE</span> É UMA
          EXPRESSÃO DE <span className="text-white">LIBERDADE</span> E{" "}
          <span className="text-white">UNIÃO</span>
        </h1>
      </section>
      <section
        id="schedule"
        className="flex justify-between gap-8 items-center min-h-screen   relative w-full pt-20"
      >
        <Image
          src={side}
          alt="Detail Left"
          width={250}
          height={250}
          className={clsx(
            "w-[20%]",
            "max-md:w-[50%] max-md:transform max-md:rotate-90 max-md:-mt-36"
          )}
        />
        <div className="flex flex-col items-center justify-center gap-7">
          <div className="flex flex-col gap-7 items-center">
            <h4>Programação</h4>
            <h1 className="font-anton text-8xl text-center mb-3">
              ANOTA AÍ <span className="text-yellow">REGUEIRO</span>!
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="h-[400px] flex flex-col justify-between items-center relative">
              <div className="absolute w-full flex items-center justify-center h-full -z-10">
                <div className="w-1 bg-gradient-to-b from-green via-yellow to-red h-full"></div>
              </div>
              <div className="rounded-full h-20 w-20 bg-green flex flex-col items-center justify-center font-anton leading-[1.1]">
                <h5 className="text-2xl">30</h5>
                <h1>MAR</h1>
              </div>
              <div className="rounded-full h-20 w-20 bg-yellow text-black flex flex-col items-center justify-center font-anton leading-[1.1]">
                <h5 className="text-2xl">30</h5>
                <h1>MAR</h1>
              </div>
              <div className="rounded-full h-20 w-20 bg-red flex flex-col items-center justify-center font-anton leading-[1.1]">
                <h5 className="text-2xl">30</h5>
                <h1>MAR</h1>
              </div>
            </div>
            <div>
              <div className="h-[400px] flex flex-col justify-between items-start">
                <div>
                  <h1 className="font-anton  pt-3">
                    EVENTO DE LANÇAMENTO | INÍCIO DAS INSCRIÇÕES
                  </h1>
                  <h5 className="text-xs">
                    VERSÁTIL EVENTOS, SÃO LUÍS - MA, ÀS 20:30H
                  </h5>
                  <h5 className="text-xs">YOUTUBE KERA PRODUÇÕES</h5>
                </div>
                <div>
                  <h1 className="font-anton  pb-4">
                    ABERTURA DA VOTAÇÃO POPULAR
                  </h1>
                </div>
                <div>
                  <h1 className="font-anton  pb-7">O GRANDE DIA</h1>
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
          className={clsx(
            "w-[20%] transform rotate-180",
            "max-md:w-[50%] max-md:transform max-md:-rotate-90 max-md:-mb-36"
          )}
        />
      </section>
      <footer className="w-full px-20 py-5 bg-zinc-800 flex justify-between mt-20">
        <span>
          Copyright 2024 Talentos da Terra. Todos os direitos reservados
        </span>
        <span>Desenvolvido por KERA Produções</span>
      </footer>
    </div>
  );
}
