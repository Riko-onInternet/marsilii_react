"use client";

import { Button } from "@heroui/react";

// Icons
import { Lock, Award, Clock3, MapPin, Phone, Mail } from "lucide-react";

import AccentedText from "@/components/AccentedText";

// ------ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
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
    src: "/img/02_Modello-Zelo-Boiserie_Vista_02_05_.jpg",
    href: "/linea-estro/",
  },
  {
    title: "Linea Custos",
    desc: "Perfettamente complanare alla parete, Custos offre la possibilità di apertura a tirare o a spingere, garantendo la massima libertà progettuale.",
    src: "/img/05_Custos_Esterno_Vista_02_04_.jpg",
    href: "/linea-estro/",
  },
  {
    title: "Linea Marsilii",
    desc: "Un progetto che realizza l’integrazione fra porta e pareti: una sintesi sempre più esclusiva fra elementi d’arredo e architettura d’internia",
    src: "/img/04_Modello_Classico_Marsilii_Vista_04_01_.jpg",
    href: "/linea-estro/",
  },
  {
    title: "Porte Vetrate",
    desc: "La scelta del vetro è indicata per chi necessita della sicurezza di una porta blindata senza dover rinunciare alla luce solare",
    src: "/img/Porta_Corretta_02_.jpg",
    href: "/linea-estro/",
  },
  {
    title: "Tagliafuoco EI 120",
    desc: "Resistenza al fuoco EI 120. Porta isolata con 4 materiali diversi tutti specifici per la resistenza al fuoco.",
    src: "/img/03_Modello_Estro_Vista_03b_02_.jpg",
    href: "/linea-estro/",
  },
];

const contact = [
  {
    icon: MapPin,
    title: "Indirizzo",
    description: "Via Salara Vecchia, 136 - 65129 Pescara (PE)",
  },
  {
    icon: Phone,
    title: "Telefono",
    description: "085 8624773",
  },
  {
    icon: Mail,
    title: "Email",
    description: "info@marsiliiserrature.it",
  },
];

const mainProducts = [
  {
    id: "porta-estro",
    name: "Porta Blindata Linea Estro",
    description:
      "La porta complanare Marsilii con cerniere a scomparsa e serratura a chiusura automatica",
    impactPhrase: "Sicurezza Invisibile, Protezione Totale",
    image: "/img/products/a/A1/Estro.jpg",
    href: "/products/porte-blindate-civili/porta-estro",
    features: ["Classe RC4", "Chiusura Automatica", "Cerniere a Scomparsa"],
  },
  {
    id: "porta-estro-zelo",
    name: "Porta Blindata Linea Estro - Finitura Zelo",
    description:
      "Porta blindata Classe RC4 con finitura Zelo per un'estetica raffinata",
    impactPhrase: "Eleganza e Sicurezza in Perfetta Armonia",
    image: "/img/products/a/A2/Zelo.png",
    href: "/products/porte-blindate-civili/porta-estro-zelo",
    features: ["Finitura Zelo", "MDF Laccato", "Carter a Scomparsa"],
  },
  {
    id: "porta-zelo-marsilii",
    name: "Porta Blindata Linea Estro - Finitura Zelo Marsilii",
    description: "Porta blindata con resistenza extra e piastre anti-mola",
    impactPhrase: "Il Futuro della Sicurezza è Qui",
    image: "/img/products/a/A3/Zelo_Marsilii.png",
    href: "/products/porte-blindate-civili/porta-zelo-marsilii",
    features: ["Classe 5*", "Struttura Rinforzata", "Tecnologia Avanzata"],
  },
];

export default function Home() {
  return (
    <div>
      {/* Swiper Slider */}
      <div className="relative h-[500px] md:h-[600px]">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-black/50",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-black",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full"
        >
          {mainProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative h-full flex items-center justify-center">
                {/* Background Image */}
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-white/40 z-10" />

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center gap-4 text-center text-black px-6 max-w-4xl">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                    <AccentedText
                      text={product.name}
                      baseWeight={700}
                      accentWeight={900}
                    />
                  </h1>
                  <h2 className="text-xl md:text-2xl lg:text-3xl">
                    <AccentedText
                      text={product.impactPhrase}
                      baseWeight={400}
                      accentWeight={600}
                    />
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl opacity-90 max-w-2xl">
                    <AccentedText
                      text={product.description}
                      baseWeight={300}
                      accentWeight={500}
                    />
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link href={product.href}>
                      <Button
                        className="bg-[var(--marsilii-primary)] font-light text-white"
                        radius="md"
                        size="lg"
                      >
                        <AccentedText
                          text={`Scopri ${product.name.split(" ")[2]}`}
                          baseWeight={300}
                          accentWeight={500}
                        />
                      </Button>
                    </Link>
                    <Link href="/products">
                      <Button
                        className="text[var(--marsilii-primary)] font-light border-[var(--marsilii-primary)] hover:bg-white/10"
                        variant="bordered"
                        radius="md"
                        size="lg"
                      >
                        <AccentedText
                          text="Tutti i Prodotti"
                          baseWeight={300}
                          accentWeight={500}
                        />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="swiper-button-prev !hidden lg:!block !text-white !w-12 !h-12 after:!text-2xl !left-4" />
          <div className="swiper-button-next !hidden lg:!block !text-white !w-12 !h-12 after:!text-2xl !right-4" />
        </Swiper>
      </div>

      {/* Le nostre linee */}
      <div className="flex flex-col gap-8 mt-10">
        <div className="w-full flex flex-col items-center text-center gap-4">
          <p className="font-bold text-3xl text-black">Le nostre linee</p>
          <p className="font-light text-lg text-black">
            Soluzioni specializzate per ogni settore di applicazione
          </p>
        </div>
        <div>
          <Swiper
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 80,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
            }}
            modules={[Pagination, Navigation]}
            className="!px-4 lg:!px-20 !pb-12 navigation-btn"
          >
            {swiperContent.map((item, index) => (
              <SwiperSlide
                key={index}
                className="aspect-square bg-center bg-no-repeat bg-cover select-none"
                style={{ backgroundImage: `url(${item.src})` }}
              >
                <div className="absolute bottom-0 left-0 w-full backdrop-blur-md bg-white/40 flex flex-col gap-3 p-3 md:p-4 lg:p-6">
                  <p className="text-black font-medium text-xl md:text-2xl">
                    <AccentedText
                      text={item.title}
                      baseWeight={500}
                      accentWeight={700}
                    />
                  </p>
                  <p className="text-black text-xs md:text-sm font-light">
                    <AccentedText
                      text={item.desc}
                      baseWeight={300}
                      accentWeight={500}
                    />
                  </p>
                  <Link
                    className="bg-[var(--marsilii-primary)] text-white font-light text-xs md:text-sm gap-0 py-2.5 rounded-xl flex items-center justify-center hover:opacity-90"
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
            onPress={() => {
              window.location.href = "/linee";
            }}
          >
            Scopri tutte le linee
          </Button>
        </div>
      </div>

      {/* Perché Scegliere Marsilii */}
      <div className="my-10 py-8 flex flex-col items-center gap-16 px-4 bg-[var(--marsilii-background-secondary)]">
        {/* Titolo */}
        <div className="text-center flex flex-col gap-4">
          <p className="text-4xl font-bold text-[var(--marsilii-primary)]">
            <AccentedText
              text="Perché Scegliere Marsilii"
              baseWeight={700}
              accentWeight={800}
              className="text-4xl text-[var(--marsilii-primary)]"
            />
          </p>
          <p>
            <AccentedText
              text="La nostra esperienza e innovazione al servizio della tua sicurezza"
              baseWeight={300}
              accentWeight={500}
            />
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-20 sm:gap-4 items-center sm:items-start justify-between max-w-[1000px] w-full">
          {benefitCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center max-w-[300px] w-full gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <card.icon size={32} />
              </div>
              <p className="font-semibold text-center text-xl">
                <AccentedText
                  text={card.title}
                  baseWeight={600}
                  accentWeight={800}
                />
              </p>
              <p className="text-center">
                <AccentedText
                  text={card.description}
                  baseWeight={300}
                  accentWeight={500}
                />
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* L'esperienza di Franco Marsilii [...] */}
      <div className="pb-8 flex flex-col lg:flex-row items-center justify-between gap-4 px-4 lg:px-0 lg:pl-4">
        <div className="flex flex-col items-start gap-9 w-full">
          <div className="md:max-w-[600px] mx-auto">
            <p className="font-medium text-3xl">
              <AccentedText
                text="L'esperienza di Franco Marsilii trasforma la sicurezza in innovazione"
                baseWeight={500}
                accentWeight={700}
              />
            </p>
            <div className="flex flex-col items-start gap-5 text-lg font-light">
              <p>
                <AccentedText
                  text="La nostra azienda nasce dall'esperienza pluridecennale di Franco Marsilii, con l'obiettivo di realizzare serrature ad alto livello di sicurezza caratterizzate da insuperabile praticità."
                  baseWeight={300}
                  accentWeight={500}
                />
              </p>
              <p>
                <AccentedText
                  text="Già nel 1989 abbiamo sviluppato il primo prototipo di Sistema a Chiusura Automatica Meccanica: una serratura che si blinda automaticamente quando la porta viene chiusa, senza necessità di girare la chiave."
                  baseWeight={300}
                  accentWeight={500}
                />
              </p>
              <p className="flex items-center gap-3">
                <Award />
                <AccentedText
                  text="Leader nel settore dal 1989"
                  baseWeight={400}
                  accentWeight={600}
                />
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

      {/* Contattaci */}
      <div className="py-8 px-6 flex flex-col items-center justify-center gap-8 bg-[var(--marsilii-background-secondary)] mt-8">
        <div className="text-center flex flex-col gap-4">
          <p className="text-3xl font-semibold">Contattaci</p>
          <p className="text-lg">
            Siamo a tua disposizione per qualsiasi informazione sui nostri
            prodotti
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-20 sm:gap-4 items-center sm:items-start justify-between max-w-[1000px] w-full">
          {contact.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center max-w-[300px] w-full gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <card.icon size={32} />
              </div>
              <p className="font-semibold text-center text-xl">
                <AccentedText
                  text={card.title}
                  baseWeight={600}
                  accentWeight={800}
                />
              </p>
              <p className="text-center">
                <AccentedText
                  text={card.description}
                  baseWeight={300}
                  accentWeight={500}
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
