"use client";
import { BAND_SELECTEDS } from "@/configs/band_selecteds";
import { SINGER_SELECTEDS } from "@/configs/singer_selecteds";
import { APIController } from "@/controllers/api.controller";
import { Vote } from "@/models/vote.model";
import { auth } from "@/services/auth.service";
import Image from "next/image";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/Select";
import { MicrophoneStage } from "@phosphor-icons/react/dist/ssr/MicrophoneStage";
import { Guitar } from "@phosphor-icons/react/dist/ssr/Guitar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/Dialog";
import Button from "../components/Button";
import { toast } from "sonner";

interface CandidateSelected {
  name: string;
  type: Vote["type"];
  vote: number;
}

export default function Votacao() {
  const router = useRouter();
  const [type, setType] = useState<Vote["type"] | null>(null);
  const [candidateSelected, setCandidateSelected] =
    useState<CandidateSelected | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const candidates = useMemo(
    () =>
      ({
        band: BAND_SELECTEDS,
        singer: SINGER_SELECTEDS,
      }[type ?? "band"]),
    [type]
  );

  const voteHandler = async (vote: Vote) => {
    setIsLoading(true);
    const controller = await APIController.getInstance();
    try {
      await controller.vote(vote);
      toast.success("Voto enviado com sucesso!");
    } catch (error) {
      setIsLoading(false);
      toast.error("Erro ao enviar voto, tente novamente.");
    }
    setIsLoading(false);
    window.grecaptcha.reset();
    setCandidateSelected(null);
  };

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user == null || user.isAnonymous) {
        router.push("/votacao/login");
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center flex-col mx-auto">
      <Dialog
        open={candidateSelected == null ? false : true}
        onOpenChange={(v) => {
          setCandidateSelected(null);
        }}
      >
        <DialogContent
          onPointerDownOutside={(e) => (isLoading ? e.preventDefault() : null)}
          className="sm:max-w-md max-h-[90%] overflow-y-auto overflow-x-hidden "
        >
          <DialogHeader>
            <DialogTitle>
              Você está votando no(a) {candidateSelected?.name}
            </DialogTitle>
            <DialogDescription>
              É necessário confirmar que você não é um robô.
            </DialogDescription>
          </DialogHeader>
          <ReCAPTCHA
            sitekey="6Ld4zQ0qAAAAAKDe5mFJond4SAhkxFjW5HKSCL4j"
            onChange={(token) => setRecaptchaToken(token ?? "")}
          />
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                disabled={isLoading}
                className="border-zinc-600 border text-white w-full"
              >
                Cancelar
              </Button>
            </DialogClose>
            <Button
              onClick={() =>
                voteHandler({
                  recaptchaToken,
                  type: candidateSelected ? candidateSelected.type : "band",
                  vote: candidateSelected ? candidateSelected.vote : 0,
                })
              }
              className="bg-green text-white hover:bg-green-600 disabled:bg-gray-600 w-full"
              disabled={isLoading}
            >
              {isLoading ? "Realizando votação..." : "Votar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {type ? (
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-5xl font-anton text-center max-md:text-4xl">
            SELECIONE SEU TALENTO
          </h1>
          <div
            className={
              "flex flex-wrap mt-4 gap-8 w-full items-center justify-center max-md:items-baseline"
            }
          >
            {candidates.map((candidate, idx) => (
              <>
                <div
                  onClick={() => {
                    setCandidateSelected({
                      type,
                      vote: idx,
                      name: candidate.nome,
                    } as CandidateSelected);
                    setTimeout(
                      () => (document.body.style.pointerEvents = ""),
                      0
                    );
                  }}
                  key={idx}
                  className="w-auto h-[150px] rounded-lg flex flex-col text-center items-center justify-center cursor-pointer transition-all hover:scale-105  "
                >
                  <Image
                    src={candidate.imgPatch}
                    alt="singer"
                    className="w-full h-full"
                    width={120}
                    height={120}
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <h1 className="text-5xl font-anton text-center max-md:text-4xl">
            SELECIONE A CATEGORIA
          </h1>
          <div className="flex gap-5 flex-wrap items-center justify-center">
            <button
              onClick={() => setType("band" as Vote["type"])}
              className="rounded-md border-2 border-gray-200 w-52 h-52 flex items-center justify-center flex-col gap-2 hover:scale-105 transition-all"
            >
              <Guitar className="h-24 w-24" />
              <h3 className="text-2xl font-anton text-center max-md:text-4xl">
                BANDA
              </h3>
            </button>
            <button
              onClick={() => setType("singer" as Vote["type"])}
              className="rounded-md border-2 border-gray-200 w-52 h-52 flex items-center justify-center flex-col gap-2 hover:scale-105 transition-all"
            >
              <MicrophoneStage className="h-24 w-24" />
              <h3 className="text-2xl font-anton text-center max-md:text-4xl">
                CANTOR SOLO
              </h3>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
