import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://excelavancado.shop"),
  title: "Excel Avançado | Curso + 50 mil planilhas editáveis",
  description: "Curso Excel Avançado com materiais de apoio, 50 mil planilhas editáveis, dashboards e bônus digitais.",
  openGraph: {
    title: "Excel Avançado | Curso + 50 mil planilhas",
    description: "Aprenda Excel e receba uma biblioteca com 50 mil planilhas, dashboards e materiais digitais.",
    url: "https://excelavancado.shop",
    siteName: "Excel Avançado",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Excel Avançado | Curso + 50 mil planilhas",
    description: "Curso online de Excel com uma biblioteca completa de materiais editáveis.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
