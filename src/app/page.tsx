import detailFlag from "@/../public/detailFlag.svg";
import clsx from "clsx";
import logo from "@/../public/logo.svg";
import Image from "next/image";

export default async function Home() {
  return (
    <main
      id="home"
      className={clsx(
        "h-screen flex justify-center items-center",
        "max-md:flex-col relative"
      )}
    >
      <div
        className={clsx(
          "flex flex-col w-full items-center justify-center gap-4",
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

        <h1 className="font-anton text-6xl text-center my-3">
          ESTAMOS EM MANUTENÇÃO
        </h1>
        <p className="font-inria-sans text-center text-lg">
          Em breve, voltaremos com novidades sobre o Talentos do Reggae 2024
        </p>
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
  );
}
