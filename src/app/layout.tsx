import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Footer }  from "@/components/footer/footer";


import "./globals.css";
import Navbar from "@/components/Navbar";


const nunito = Nunito({ subsets: ["latin"],  weight:"700" });
//const merryweather = Merriweather({subsets: ["latin"], weight:"700"});

export const metadata: Metadata = {
  title: "Controle de Caixa",
  description: "Controle Financeiro para Pequenas e Médias Empresas. O melhor sistema para sua empresa, com calculadora de preços" 

};

interface IRootLayout extends Readonly<{ children: React.ReactNode }> { }

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-Br">
      
       <body className={nunito.className}>
       <Navbar />
      
        {children}
        
      </body>
      <Footer data={{
        logoText: {
          id: 0,
          text: "",
          url: ""
        },
        text: "",
        socialLink: []
      }} />
      
    </html>
  );
}

