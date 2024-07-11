"use client";
import { BAND_SELECTEDS } from "@/configs/band_selecteds";
import { DANCERS_SELECTEDS } from "@/configs/dancers_selecteds";
import { DJ_SELECTEDS } from "@/configs/dj_selecteds";
import { SINGER_SELECTEDS } from "@/configs/singer_selecteds";
import { APIController } from "@/controllers/api.controller";
import { Vote } from "@/models/vote.model";
import { auth } from "@/services/auth.service";
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

export default function Votacao() {
  const router = useRouter();
  const [type, setType] = useState<Vote["type"]>("band");
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const candidates = useMemo(
    () =>
      ({
        band: BAND_SELECTEDS,
        dancers: DANCERS_SELECTEDS,
        dj: DJ_SELECTEDS,
        singer: SINGER_SELECTEDS,
      }[type]),
    [type]
  );

  const voteHandler = async (vote: Vote) => {
    const controller = await APIController.getInstance();
    await controller.vote(vote);
    window.grecaptcha.reset();
  };

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user == null || user.isAnonymous) {
        router.push("/votacao/login");
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center max-w-md flex-col mx-auto">
      <h3 className="text-2xl font-bold text-white mb-1">
        Selecione o tipo de votação
      </h3>
      <Select onValueChange={(value) => setType(value as Vote["type"])}>
        <SelectTrigger>
          <SelectValue placeholder="Selecione a Categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"band"}>BANDA</SelectItem>
          <SelectItem value={"dj"}>DJ</SelectItem>
          <SelectItem value={"dancers"}>DANÇARINOS</SelectItem>
          <SelectItem value={"singer"}>CANTOR</SelectItem>
        </SelectContent>
      </Select>
      <ReCAPTCHA
        sitekey="6Ld4zQ0qAAAAAKDe5mFJond4SAhkxFjW5HKSCL4j"
        onChange={(token) => setRecaptchaToken(token ?? "")}
      ></ReCAPTCHA>
      <div className={"flex flex-wrap mt-4 max-w-[500px]"}>
        {candidates.map((candidate, idx) => (
          <div
            key={idx}
            className="w-[100px] h-[100px] rounded-md bg-slate-900 justify-center flex text-center align-middle"
            onClick={() =>
              voteHandler({
                type,
                recaptchaToken,
                vote: idx,
              })
            }
          >
            {candidate.nome}
          </div>
        ))}
      </div>
    </div>
  );
}
