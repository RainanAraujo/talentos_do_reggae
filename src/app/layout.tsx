import type { Metadata } from "next";
import { Anton, Inria_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "./components/Toaster";

const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "300"],
  variable: "--font-inria-sans",
});
const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
});
export const metadata: Metadata = {
  title: "Talentos do Reggae",
  description:
    "50 mil em prêmios. Inscrições abertas!. Maranhão, a Jamaica brasileira!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${anton.variable} ${inriaSans.variable} font-inria-sans`}
      >
        <Toaster richColors position="bottom-center" duration={4000} />
        {children}
      </body>
    </html>
  );
}
