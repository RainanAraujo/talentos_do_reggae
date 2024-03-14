import Image from "next/image";
import logo from "@/../public/logo.svg";
import side from "@/../public/sideDetail.svg";
import detailFlag from "@/../public/detailFlag.svg";
import detailFlagAlt from "@/../public/detailFlag2.svg";
import logoKERA from "@/../public/logoKERA.svg";
import logoMaranhao from "@/../public/logoMaranhao.svg";
import logoDeputado from "@/../public/logoDeputado.svg";
import clsx from "clsx";
import Navbar from "./components/Navbar";

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
          src={detailFlagAlt}
          alt="Detail Right"
          width={250}
          height={250}
          className={clsx(
            "w-[50%] bottom-0 absolute right-0",
            "max-md:w-[50%]"
          )}
        />
      </main>
      <section className="h-screen relative w-full bg-[url('/greenLight.svg')] bg-no-repeat bg-cover">
        <Image
          src={detailFlagAlt}
          alt="Detail Left"
          width={250}
          height={250}
          className={clsx(
            "w-[50%] absolute left-0 -top-0",
            "max-md:w-[50%] transform rotate-180 "
          )}
        />
        <Image
          src={detailFlag}
          alt="Detail Right"
          width={250}
          height={250}
          className={clsx(
            "w-[50%] right-0 absolute -top-0",
            "max-md:w-[50%] transform rotate-180"
          )}
        />
      </section>
      {/* <section>
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
      </section> */}
    </div>
  );
}
