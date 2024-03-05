import Image from "next/image";
import logo from "@/../public/logo.svg";
import side from "@/../public/sideDetail.svg";
import logoKERA from "@/../public/logoKERA.svg";
import logoMaranhao from "@/../public/logoMaranhao.svg";
import logoDeputado from "@/../public/logoDeputado.svg";
import clsx from "clsx";

export default function Home() {
  return (
    <main
      className={clsx(
        "min-h-screen flex justify-between items-center",
        "max-md:flex-col "
      )}
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

      <div
        className={clsx(
          "h-screen flex flex-col items-center justify-center gap-8",
          "max-md:h-auto"
        )}
      >
        <Image
          src={logo}
          alt="Talentos do Reggae"
          width={500}
          height={500}
          className={clsx("animate-pulse w-[64%]", "max-md:w-[80%]")}
        />
        <div className="flex items-center flex-col gap-2">
          <h2 className="text-4xl font-bold text-center animate-fadeIn">
            EM BREVE
          </h2>
          <div className=" flex items-center flex-col gap-1 text-orange animate-fadeIn animation-delay-75  opacity-0">
            <h4 className="tracking-[0.5em] text-lg font-thin text-center mr-[-0.5em]">
              30 DE MARÇO
            </h4>
            <div className="h-[0.1px] w-full bg-orange" />
            <span className="text-sm font-thin">LANÇAMENTO DO EVENTO</span>
          </div>
        </div>
        <div
          className={clsx("flex gap-8 pt-4 items-baseline", "max-md:flex-col")}
        >
          <div
            className={clsx(
              "gap-2 flex flex-col opacity-0 h-full justify-around animate-fadeIn animation-delay-500",
              "max-md:justify-center max-md:items-center max-md:h-auto"
            )}
          >
            <span className="font-light">REALIZAÇÃO</span>
            <Image src={logoKERA} alt="KERA" width={200} height={200} />
          </div>
          <div
            className={clsx(
              "gap-2 flex flex-col opacity-0 animate-fadeIn animation-delay-700",
              " max-md:justify-center max-md:items-center"
            )}
          >
            <span className="font-light">APOIO</span>
            <Image src={logoMaranhao} alt="KERA" width={200} height={200} />
          </div>
          <div
            className={clsx(
              "gap-2 flex flex-col opacity-0 animate-fadeIn  animation-delay-900",
              " max-md:justify-center max-md:items-center"
            )}
          >
            <span className="font-light">APOIO CULTURAL</span>
            <Image src={logoDeputado} alt="KERA" width={200} height={200} />
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
    </main>
  );
}
