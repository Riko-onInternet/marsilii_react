"use client";

// import Image from "next/image";

import Hero from "@/components/hero";

import { Button } from "@heroui/react";

// Icons
import { Lock, Award, Clock3 } from "lucide-react";

// ------ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// modules
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const benefitCards = [
  {
    icon: Lock,
    title: "Sicurezza",
    description:
      "Sistema brevettato di chiusura automatica meccanica senza molle, che si attiva automaticamente alla chiusura della porta.",
  },
  {
    icon: Award,
    title: "Brevetti Esclusivi",
    description:
      "Oltre 10 brevetti registrati dal 1992, frutto di continua ricerca e sviluppo nel settore della sicurezza.",
  },
  {
    icon: Clock3,
    title: "50 Anni di Esperienza",
    description:
      "Fondata dall'esperienza di Franco Marsilii, siamo leader nel settore delle serrature di sicurezza dal 1970.",
  },
];

const swiperContent = [
  {
    title: "Linea Estro",
    desc: "La porta complanare Marsilii con cerniere a scomparsa e serratura a chiusura automatica",
    src: "/img/bannerestro.jpg",
    href: "/linea-estro/",
  },
  {
    title: "Linea Zelo",
    desc: "La porta con serratura a chiusura automatica. Un progetto che realizza l’integrazione fra porta e architettura d’interni.",
    src: "/img/bannerestro.jpg",
    href: "/linea-estro/",
  },
  {
    title: "Linea Custos",
    desc: "Perfettamente complanare alla parete, Custos offre la possibilità di apertura a tirare o a spingere, garantendo la massima libertà progettuale.",
    src: "/img/bannerestro.jpg",
    href: "/linea-estro/",
  },
  {
    title: "Linea Marsilii",
    desc: "La porta complanare Marsilii con cerniere a scomparsa e serratura a chiusura automatica",
    src: "/img/bannerestro.jpg",
    href: "/linea-estro/",
  },
  {
    title: "Porte Vetrate",
    desc: "La porta complanare Marsilii con cerniere a scomparsa e serratura a chiusura automatica",
    src: "/img/bannerestro.jpg",
    href: "/linea-estro/",
  },
  {
    title: "Tagliafuoco EI 120",
    desc: "La porta complanare Marsilii con cerniere a scomparsa e serratura a chiusura automatica",
    src: "/img/bannerestro.jpg",
    href: "/linea-estro/",
  },
];

export default function Home() {
  return (
    <div>
      <Hero
        title="Sicurezza e Innovazione"
        subtitle="Leader nel settore delle serrature di sicurezza con oltre 50 anni di esperienza. Realizziamo serrature ad alto livello di sicurezza ed insuperabile praticità."
      >
        <div className="flex items-center gap-3">
          <Button
            className="bg-[var(--marsilii-primary)] text-white font-light"
            radius="md"
          >
            Scopri i Prodotti
          </Button>
          <Button
            className="text-[var(--marsilii-primary)] font-light border-[var(--marsilii-primary)]"
            variant="bordered"
            radius="md"
          >
            La Nostra Storia
          </Button>
        </div>
      </Hero>
      <div className="py-16 flex flex-col items-center gap-16 px-4">
        {/* Titolo */}
        <div className="text-center flex flex-col gap-4">
          <p className="text-4xl font-bold text-[var(--marsilii-primary)]">
            Perch<span className="font-black">é</span> Scegliere Marsilii
          </p>
          <p>
            La nostra esperienza e innovazione al servizio della tua sicurezza
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-20 sm:gap-4 items-center sm:items-start justify-between max-w-[1000px] w-full">
          {benefitCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center max-w-[300px] w-full gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--marsilii-background-secondary)] flex items-center justify-center">
                <card.icon size={32} />
              </div>
              <p className="font-semibold text-center text-xl">{card.title}</p>
              <p className="text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-8 pb-16 flex flex-col lg:flex-row items-center justify-between gap-4 px-4 lg:px-0 lg:pl-4">
        <div className="flex flex-col items-start gap-9 w-full">
          <div className="md:max-w-[600px] mx-auto">
            <p className="font-medium text-3xl">
              L&apos;esperienza di Franco Marsilii trasforma la sicurezza in
              innovazione
            </p>
            <div className="flex flex-col items-start gap-5 text-lg font-light">
              <p>
                La nostra azienda nasce dall&apos;esperienza pluridecennale di
                Franco Marsilii, con l&apos;obiettivo di realizzare serrature ad
                alto livello di sicurezza caratterizzate da insuperabile
                praticit
                <span className="font-semibold">à</span>.
              </p>
              <p>
                Gi<span className="font-semibold">à</span> nel 1989 abbiamo
                sviluppato il primo prototipo di Sistema a Chiusura Automatica
                Meccanica: una serratura che si blinda automaticamente quando la
                porta viene chiusa, senza necessit
                <span className="font-semibold">à</span> di girare la chiave.
              </p>
              <p className="flex items-center gap-3">
                <Award />
                <span className="font-normal">Leader nel settore dal 1989</span>
              </p>
            </div>
          </div>
        </div>
        <div
          className="h-full lg:h-[500px] w-full md:w-4/5 lg:w-full aspect-square lg:aspect-auto bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('/img/02_Modello-Zelo-Boiserie_Vista_07_01_.jpg')",
          }}
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="w-full flex flex-col items-center text-center gap-4">
          <p className="font-medium text-3xl text-black">Le nostre linee</p>
          <p className="font-light text-lg text-black opacity-70">
            Soluzioni specializzate per ogni settore di applicazione
          </p>
        </div>
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={100}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="!px-20 !pb-12"
          >
            {swiperContent.map((item, index) => (
              <SwiperSlide
                key={index}
                className="aspect-square bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${item.src})` }}
              >
                <div className="absolute bottom-0 left-0 w-full backdrop-blur-md flex flex-col gap-3 p-6">
                  <p className="text-black font-medium text-xl">{item.title}</p>
                  <p className="text-black text-sm font-light">{item.desc}</p>
                  <Link
                    className="bg-[var(--marsilii-primary)] text-white font-light text-xs gap-0 py-2.5 rounded-xl flex items-center justify-center hover:opacity-90"
                    href={item.href}
                  >
                    Vai alla linea
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-center">
          <Button
            className="text-[var(--marsilii-primary)] border-[var(--marsilii-primary)] font-light"
            radius="md"
            variant="bordered"
          >
            Scopri tutte le linee
          </Button>
        </div>
      </div>
      <div className="h-[1000px] w-[10px] bg-gray-500" />
    </div>
  );
}
