import type { Metadata } from "next";
import "./globals.css";
import "./font.css"

import { HeroUI } from "@/components/HeroUi";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Marsilii Serrature SRL",
  description: "La Marsilii Serrature SRL unica azienda costruttrice di porte blindate e serrature ad avere su tutta la gamma serrature di alta sicurezza a chiusura automatica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="overflow-x-hidden" suppressHydrationWarning>
        <HeroUI>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
        </HeroUI>
      </body>
    </html>
  );
}
