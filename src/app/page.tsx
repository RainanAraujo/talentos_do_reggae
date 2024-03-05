import Image from "next/image";
import logo from "@/../public/logo.svg";
import side from "@/../public/sideDetail.svg";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Image
        src={side}
        alt="Detail Left"
        width={250}
        height={240}
        className="absolute m-auto h-full w-[20%] "
      />
      <Image
        src={side}
        alt="Detail Right"
        width={250}
        height={250}
        className="absolute m-auto h-full w-[20%] right-0 transform rotate-180"
      />
      <div className="h-screen flex flex-col items-center justify-center gap-6">
        <Image
          src={logo}
          alt="Talentos do Reggae"
          width={500}
          height={500}
          className="animate-pulse h-[50%] w-[50%]"
        />
        <div className="flex items-center flex-col gap-2">
          <h2 className="text-4xl font-bold text-center animate-fadeIn">
            EM BREVE
          </h2>
          <div className=" flex items-center flex-col gap-1 text-orange animate-fadeIn delay-200">
            <h4 className="tracking-[0.5em] text-lg font-thin text-center mr-[-0.5em]">
              30 DE MARÇO
            </h4>
            <div className="h-[0.1px] w-full bg-orange" />
            <span className="text-sm font-thin">LANÇAMENTO DO EVENTO</span>
          </div>
        </div>
      </div>
    </main>
  );
}
