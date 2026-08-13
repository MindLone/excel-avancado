import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Excel Avançado | Curso completo do básico ao avançado",
  description: "Aprenda Excel do zero e avance até fórmulas, gráficos, dashboards e automações com aulas online, materiais práticos e certificado.",
  openGraph: {
    title: "Excel Avançado — do básico ao avançado",
    description: "Mais de 70 aulas, materiais de apoio, planilhas bônus e certificado de conclusão.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
