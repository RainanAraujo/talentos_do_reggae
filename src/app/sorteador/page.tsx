"use client";
import clsx from "clsx";
import { useCallback, useEffect, useMemo, useState } from "react";
import logo from "@/../public/logo.svg";
import Image from "next/image";
import Button from "../components/Button";
import { Flipper, Flipped } from "react-flip-toolkit";
import { shuffle } from "lodash";

const djListConfig = {
  maxSelectedItems: 7,
  items: [
    "ALYSSON NEY MARTINS COSTA",
    "ANDRE HUDISON PEREIRA DA SILVA",
    "COSMO RODRIGUES DA ANUNCIAÇÃO",
    "DANIEL CARLOS OLIVEIRA",
    "DENILSON CARDOSO",
    "DIEGO RASTAMAN",
    "DJ HELENA MELLO",
    "DJ LION",
    "DJ LULU ZION",
    "DJ SOL / SOLANGE GOMES FEITOZA RODRIGUES",
    "DJ ZE DOMINGOS ROOTS",
    "EDILSON BLACK",
    "ELIZABETH LAGO",
    "ERINALDO DE JESUS SILVA GOMES",
    "FÁBIO AIRES FALCÃO ROOTS",
    "FRANCIVALDO SILVA FONSECA JÚNIOR",
    "GERSON ANDREY SANTOS CHAGAS",
    "GRACI ROOTS",
    "IVAN SODRÉ",
    "JANAINA SOUSA SILVA",
    "JOENE CRISTINA COSTA LIMA",
    "JORGE ERALDO LOUZEIRO MORAIS",
    "JOSÉ DE ARIMATÉIA GOMES SILVA",
    "JOSÉ RIBAMAR DA SILVA DIAS FILHO",
    "JOSE RIBAMAR DE ASSIS MARREIROS JUNIOR",
    "JOSÉ ROBERTO PEREIRA (DJ BETO ROOTS)",
    "JUNIOR RAÇA",
    "LEONARDO NOGUEIRA TAVARES",
    "LUIS CARLOS MACEDO MELO",
    "LUIS CRISTIANO DE AGUIAR VALE",
    "LUIS FERNANDO CUNHA RAMOS FILHO (DJ FERNANDO ROOTS)",
    "MARCELLO LUIZ SOUZA",
    "MARCELO HENRIQUE ALVES COSTA",
    "MARCELO PEDRA",
    "MARIA DOMINGAS FERREIRA",
    "MARILENE DE CARVALHO MENDES",
    "MIKAEL FERREIRA SANTOS",
    "MILTON OLIVEIRA DO LAGO JUNIOR",
    "MOUZANIEL TEIXEIRA FERREIRA",
    "PATRICIA FONSECA SILVA VIDAL",
    "RAIMUNDO NONATO NEVES DOS SANTOS",
    "RICARDO FERNANDO COSTA DE CARVALHO",
    "ROZENILDE FERREIRA",
    "WESLLEN SILVA ROCHA",
  ],
};

const dancersListConfig = {
  maxSelectedItems: 10,
  items: [
    "CARLOS MAGNO SOUSA CARDOSO E AMANDA ROCHA CANTANHEDE",
    "DULCILENE DOS SANTOS MENDES SILVA E CARLOS HENRIQUE ALVES COSTA",
    "FABIA DE LOURDES FRANÇA TRINDADE E JOSÉ RAIMUNDI ARAGÃO SANCHES FILHO",
    "FELIPE PINTO DE FARIAS E DJAMILLA DANDARA SANTOS MACEDO",
    "JAY LOBATO E WESLEY FREIRE",
    "JOYCEANE JESUS DA SILVA E DIEGO",
    "KEILA CRISTINA COELHO NOGUEIRA E WEVERSON JULIO NOGUEIRA MARTINS",
    "LETÍCIA KETLEN MUNIZ LIMA E JOSÉ ORLANDO DE JESUS JÚNIOR",
    "NILDA COELHO E ANTÔNIO JOSÉ MENDES",
    "NÚRIA FERNANDA CUNHA GARCIA FONSECA E RAFAEL SILVA MORAES",
    "PAULO ROGGER MUNIZ SILVA E VANDA LUCIA LEMOS",
    "ROSÂNGELA SANTOS DE FARIAS E ALEXANDRE MAGNO OLIVEIRA MUNIZ",
    "ROSEANA GUSMÃO BORGES E JOSUÉ LICAR DA SILVA",
    "TERESA CRISTINA PINTO DINIZ E LUIS ANDRÉ DINIZ LOPES",
  ],
};

export default function Drawer() {
  const [categoriaSorteio, setCategoriaSorteio] = useState<
    "DJs" | "Dancarinos"
  >("DJs");
  const [items, setItems] = useState(djListConfig.items);
  const [maxSelectedItems, setMaxSelectedItems] = useState(
    dancersListConfig.maxSelectedItems
  );
  const [current, setCurrent] = useState(0);
  const [results, setResults] = useState({ DJs: null, Dancarinos: null });

  const shuffleList = useCallback(
    (currentIndex: number) => {
      const availableList = items.slice(currentIndex);
      const shuffledList = shuffle(availableList);
      const newList = [...items.slice(0, currentIndex), ...shuffledList];
      setItems(newList);
      setCurrent(currentIndex + 1);
      if (currentIndex === items.length) {
        setResults({ ...results, [categoriaSorteio]: newList });
      }
    },
    [items, results, categoriaSorteio]
  );

  useEffect(() => {
    if (current < items.length && current > 0) {
      setTimeout(() => {
        shuffleList(current);
      }, 500);
    }
  }, [items]);

  useEffect(() => {
    if (categoriaSorteio === "DJs") {
      setItems(results.DJs ?? djListConfig.items);
      setMaxSelectedItems(djListConfig.maxSelectedItems);
      setCurrent(results.DJs ? djListConfig.items.length : 0);
    }
    if (categoriaSorteio === "Dancarinos") {
      setItems(results.Dancarinos ?? dancersListConfig.items);
      setMaxSelectedItems(dancersListConfig.maxSelectedItems);
      setCurrent(results.Dancarinos ? dancersListConfig.items.length : 0);
    }
  }, [categoriaSorteio]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen  w-full m-auto  bg-neutral-900  ">
        <div className="flex flex-col justify-between flex-1 w-full items-center ">
          <div className="px-20 overflow-hidden py-20 w-full h-full  gap-y-3 flex flex-col relative ">
            <div className="flex gap-6 w-full items-center justify-between mb-4">
              <Image
                src={logo}
                alt="Talentos do Reggae"
                width={200}
                height={200}
                className={clsx("animate-pulse w-44", "max-md:w-[50%]")}
              />
              <div className="gap-2 flex flex-col">
                <h1 className="text-5xl font-bold">SORTEIO</h1>
                <div className="h-20">
                  <Button
                    className={clsx(
                      categoriaSorteio == "DJs" && "bg-green text-xl"
                    )}
                    onClick={() => setCategoriaSorteio("DJs")}
                  >
                    DJs
                  </Button>
                  <Button
                    className={clsx(
                      categoriaSorteio == "Dancarinos" && "bg-green text-xl"
                    )}
                    onClick={() => setCategoriaSorteio("Dancarinos")}
                  >
                    Dançarinos
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col  gap-2 items-center">
                  <div
                    className="w-40 h-40 bg-red rounded-full cursor-pointer"
                    onClick={() => {
                      shuffleList(0);
                    }}
                  />
                  <h1 className="text-3xl *:font-bold">Sortear</h1>
                </div>
              </div>
            </div>
            <hr className="border-zinc-700" />

            <Flipper
              staggerConfig={{
                default: {
                  speed: 0.1,
                },
              }}
              flipKey={items.join("")}
            >
              <div className="flex flex-col gap-1">
                {items.map((v, i) => {
                  let status = "";
                  if (i < current) {
                    if (i < maxSelectedItems) {
                      status = `${i + 1}º Selecionado`;
                    } else {
                      status = `${i - maxSelectedItems + 1}º Suplente`;
                    }
                  }
                  return (
                    <Flipped key={v} flipId={v}>
                      <div>
                        <div className="w-full p-4 ga-2 text-xl flex justify-between items-center">
                          <div>{v}</div>
                          <div>{status}</div>
                        </div>
                        <hr className="border-zinc-700" />
                      </div>
                    </Flipped>
                  );
                })}
              </div>
            </Flipper>
          </div>
        </div>
      </div>
    </>
  );
}
