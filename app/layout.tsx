import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Excel Avançado | Curso completo do básico ao avançado",
  description: "Aprenda Excel do zero e avance em fórmulas, gráficos, dashboards e automações com um treinamento online organizado e passo a passo.",
  openGraph: {
    title: "Excel Avançado — do básico ao avançado",
    description: "Curso online com conteúdo organizado, prática e um acervo de planilhas editáveis.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
