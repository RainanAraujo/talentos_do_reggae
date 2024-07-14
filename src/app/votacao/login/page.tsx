"use client";
import { auth } from "@/services/auth.service";
import { GoogleLogo } from "@phosphor-icons/react/dist/ssr/GoogleLogo";
import {
  browserLocalPersistence,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();

  const googleProviderHandler = async () => {
    try {
      await signInWithRedirect(auth, new GoogleAuthProvider());
      auth.setPersistence(browserLocalPersistence);
      router.push("/votacao");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user != null && !user.isAnonymous) {
        router.push("/votacao");
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center max-w-md flex-col mx-auto">
      <h3 className="text-2xl font-bold text-white mb-1">
        Acessar central de votação
      </h3>
      <span className="text-xs text-center text-gray-300 mb-6">
        Paca realizar as votações é necessário acessar a central de votação por
        meio de uma conta do Google ou Facebook.
      </span>

      <button
        className="flex items-center justify-center
        bg-white text-black
        px-4 py-2 min-w-[260px] 
        gap-2 rounded"
        onClick={googleProviderHandler}
      >
        <GoogleLogo className="w-6 h-6" />
        Entrar com o Google
      </button>
      {/* <button
        className="flex items-center justify-center
        bg-blue-500 text-white
        px-4 py-2 mt-2
         min-w-[260px] 
        gap-2 rounded"
      >
        <FacebookLogo className="w-6 h-6" />
        Entrar com o Facebook
      </button> */}
    </div>
  );
}
