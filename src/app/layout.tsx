import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/header/Header";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Controle de Caixa",
  description: "Controle Financeiro para Pequenas e Médias Empresas. O melhor sistema para sua empresa, com calculadora de preços" 

};

interface IRootLayout extends  Readonly<{ children: React.ReactNode}> { }
export default function RootLayout({children,}: IRootLayout ) {
  return (
    <html lang="pt-Br">
      <body className={nunito.className}>
       <Header/>
      {children}</body>
    </html>
  );
};

