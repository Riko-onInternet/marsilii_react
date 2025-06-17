"use client";

import { Button } from "@heroui/react";

// Icons
import {
  Lock,
  Award,
  Clock3,
  MapPin,
  Phone,
  Shield,
  Zap,
} from "lucide-react";

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

// Framer Motion
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    title: "Porte e Infissi Blindati Civili",
    desc: "Soluzioni di sicurezza per abitazioni private con tecnologie all'avanguardia, incluse porte blindate Estro, Zelo e Custos",
    src: "/img/bannerestro.jpg",
    href: "/products/porte-blindate-civili",
  },
  {
    title: "Infissi e Arredi Carcerari",
    desc: "Soluzioni specializzate per istituti penitenziari e strutture di sicurezza, dalle porte tamburate agli arredi detentivi",
    src: "/img/02_Modello-Zelo-Boiserie_Vista_02_05_.jpg",
    href: "/products/infissi-arredi-carcerari",
  },
  {
    title: "Serrature di Sicurezza",
    desc: "Sistemi di chiusura innovativi con tecnologia brevettata Marsilii, disponibili in versione manuale ed elettrica",
    src: "/img/05_Custos_Esterno_Vista_02_04_.jpg",
    href: "/products/serrature-sicurezza",
  },
  {
    title: "Infissi Non Blindati",
    desc: "Soluzioni tradizionali per porte interne, finestre, vetrate e portoncini in vari materiali e finiture",
    src: "/img/04_Modello_Classico_Marsilii_Vista_04_01_.jpg",
    href: "/products/infissi-non-blindati",
  },
  {
    title: "Accessori",
    desc: "Complementi e accessori per completare i sistemi di sicurezza, inclusi maniglioni, pomi e sistemi biometrici",
    src: "/img/Porta_Corretta_02_.jpg",
    href: "/products/accessori",
  },
  {
    title: "Porte Vetrate",
    desc: "La scelta del vetro è indicata per chi necessita della sicurezza di una porta blindata senza dover rinunciare alla luce solare",
    src: "/img/03_Modello_Estro_Vista_03b_02_.jpg",
    href: "/products/porte-blindate-civili",
  },
];

// Nuovo array con i payoff d'impatto dell'azienda
const companyPayoffs = [
  {
    id: "innovazione",
    title: "Innovazione Continua",
    slogan: "Oltre 10 Brevetti dal 1992",
    description:
      "Ricerca e sviluppo costanti per garantire soluzioni all'avanguardia nel settore della sicurezza",
    image: "/img/bannermarsilii-1024x453.jpg",
    icon: Zap,
  },
  {
    id: "esperienza",
    title: "50 Anni di Eccellenza",
    slogan: "Dal 1970 Leader nella Sicurezza",
    description:
      "Mezzo secolo di esperienza nella progettazione e realizzazione di serrature di alta sicurezza",
    image: "/img/04_Modello_Classico_Marsilii_Vista_04_01_.jpg",
    icon: Clock3,
  },
  {
    id: "qualita",
    title: "Qualità Certificata",
    slogan: "Massimi Standard di Sicurezza",
    description:
      "Prodotti testati e certificati secondo le più severe normative europee per garantire protezione totale",
    image: "/img/05_Custos_Esterno_Vista_02_04_.jpg",
    icon: Shield,
  },
];

export default function Home() {
  // Refs per le animazioni al scroll
  const lineeSectionRef = useRef(null);
  const benefitsSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);

  // Hook per rilevare quando gli elementi entrano nel viewport
  const lineesInView = useInView(lineeSectionRef, { once: true, amount: 0.2 });
  const benefitsInView = useInView(benefitsSectionRef, {
    once: true,
    amount: 0.2,
  });
  const experienceInView = useInView(experienceSectionRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <div>
      {/* Swiper Slider con animazioni */}
      <div className="relative h-[400px] md:h-[500px]">
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
          {companyPayoffs.map((payoff) => (
            <SwiperSlide key={payoff.id}>
              <div className="relative h-full flex items-center justify-center overflow-hidden">
                {/* Background Image con animazione */}
                <motion.div
                  className="absolute inset-0 z-0"
                  initial={{ scale: 1.1, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  style={{
                    backgroundImage: `url(${payoff.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-white/40 z-10" />

                {/* Content con animazioni */}
                <div className="relative z-20 flex flex-col items-center gap-4 text-center text-black px-6 max-w-4xl">
                  <motion.h1
                    className="text-3xl md:text-5xl lg:text-6xl font-bold"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <AccentedText
                      text={payoff.title}
                      baseWeight={700}
                      accentWeight={900}
                    />
                  </motion.h1>
                  <motion.h2
                    className="text-xl md:text-2xl lg:text-3xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    <AccentedText
                      text={payoff.slogan}
                      baseWeight={400}
                      accentWeight={600}
                    />
                  </motion.h2>
                  <motion.p
                    className="text-base md:text-lg lg:text-xl opacity-90 max-w-2xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    <AccentedText
                      text={payoff.description}
                      baseWeight={300}
                      accentWeight={500}
                    />
                  </motion.p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="swiper-button-prev !hidden lg:!block !text-white !w-12 !h-12 after:!text-2xl !left-4" />
          <div className="swiper-button-next !hidden lg:!block !text-white !w-12 !h-12 after:!text-2xl !right-4" />
        </Swiper>
      </div>

      {/* Le nostre linee con animazioni */}
      <motion.div
        ref={lineeSectionRef}
        className="flex flex-col gap-8 mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={lineesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full flex flex-col items-center text-center gap-4">
          <motion.p
            className="font-bold text-3xl text-black"
            initial={{ opacity: 0 }}
            animate={lineesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Le nostre linee
          </motion.p>
          <motion.p
            className="font-light text-lg text-black"
            initial={{ opacity: 0 }}
            animate={lineesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Soluzioni specializzate per ogni settore di applicazione
          </motion.p>
        </div>
        <div>
          <Swiper
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={false}
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
                <motion.div
                  className="absolute bottom-0 left-0 w-full backdrop-blur-md bg-white/40 flex flex-col gap-3 p-3 md:p-4 lg:p-6"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
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
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      className="bg-[var(--marsilii-primary)] text-white font-light text-xs md:text-sm gap-0 py-2.5 rounded-xl flex items-center justify-center hover:opacity-90"
                      href={item.href}
                    >
                      Vai alla linea
                    </Link>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href={"/products"}>
              <Button
                className="text-[var(--marsilii-primary)] border-[var(--marsilii-primary)] font-light"
                radius="md"
                variant="bordered"
              >
                Scopri tutte le linee
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* L'esperienza di Franco Marsilii con animazioni */}
      <motion.div
        ref={experienceSectionRef}
        className="flex flex-col lg:flex-row items-center justify-between gap-4 px-4 lg:px-0 lg:pl-4 py-8 mt-8 bg-[var(--marsilii-background-secondary)]"
        initial={{ opacity: 0 }}
        animate={experienceInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-start gap-9 w-full"
          initial={{ x: -50, opacity: 0 }}
          animate={
            experienceInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
          }
          transition={{ duration: 0.7 }}
        >
          <div className="md:max-w-[600px] mx-auto">
            <motion.p
              className="font-medium text-3xl"
              initial={{ y: -20, opacity: 0 }}
              animate={
                experienceInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AccentedText
                text="L'esperienza di Franco Marsilii trasforma la sicurezza in innovazione"
                baseWeight={500}
                accentWeight={700}
              />
            </motion.p>
            <div className="flex flex-col items-start gap-5 text-lg font-light">
              {[
                "La nostra azienda nasce dall'esperienza pluridecennale di Franco Marsilii, con l'obiettivo di realizzare serrature ad alto livello di sicurezza caratterizzate da insuperabile praticità.",
                "Già nel 1989 abbiamo sviluppato il primo prototipo di Sistema a Chiusura Automatica Meccanica: una serratura che si blinda automaticamente quando la porta viene chiusa, senza necessità di girare la chiave.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={
                    experienceInView
                      ? { y: 0, opacity: 1 }
                      : { y: 30, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                >
                  <AccentedText
                    text={text}
                    baseWeight={300}
                    accentWeight={500}
                  />
                </motion.p>
              ))}
              <motion.p
                className="flex items-center gap-3"
                initial={{ y: 30, opacity: 0 }}
                animate={
                  experienceInView
                    ? { y: 0, opacity: 1 }
                    : { y: 30, opacity: 0 }
                }
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Award />
                <AccentedText
                  text="Leader nel settore dal 1989"
                  baseWeight={400}
                  accentWeight={600}
                />
              </motion.p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="h-full lg:h-[500px] w-full md:w-4/5 lg:w-full aspect-square lg:aspect-auto bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('/img/02_Modello-Zelo-Boiserie_Vista_07_01_.jpg')",
          }}
          initial={{ x: 50, opacity: 0 }}
          animate={
            experienceInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }
          }
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        />
      </motion.div>

      {/* Perché Scegliere Marsilii con animazioni */}
      <motion.div
        ref={benefitsSectionRef}
        className="my-10 py-8 flex flex-col items-center gap-16 px-4"
        initial={{ opacity: 0 }}
        animate={benefitsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Titolo */}
        <div className="text-center flex flex-col gap-4">
          <motion.p
            className="text-4xl font-bold text-[var(--marsilii-primary)]"
            initial={{ y: -20, opacity: 0 }}
            animate={
              benefitsInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }
            }
            transition={{ duration: 0.5 }}
          >
            <AccentedText
              text="Perché Scegliere Marsilii"
              baseWeight={700}
              accentWeight={800}
              className="text-4xl text-[var(--marsilii-primary)]"
            />
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={
              benefitsInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
            }
            transition={{ duration: 0.5 }}
          >
            <AccentedText
              text="La nostra esperienza e innovazione al servizio della tua sicurezza"
              baseWeight={300}
              accentWeight={500}
            />
          </motion.p>
        </div>
        <div className="flex flex-col sm:flex-row gap-20 sm:gap-4 items-center sm:items-start justify-between max-w-[1000px] w-full">
          {benefitCards.map((card, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center max-w-[300px] w-full gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={
                benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-[var(--marsilii-background-secondary)] flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring" }}
              >
                <card.icon size={32} />
              </motion.div>
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
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Sezione Brevetti con animazioni */}
      <motion.div
        className="py-16 px-4 bg-[var(--marsilii-background-secondary)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[var(--marsilii-primary)] mb-4">
              <AccentedText
                text="I Nostri Brevetti"
                baseWeight={600}
                accentWeight={800}
              />
            </h2>
            <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
              <AccentedText
                text="Innovazione e ricerca continua per garantire la massima sicurezza"
                baseWeight={300}
                accentWeight={500}
              />
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Award
                    className="text-[var(--marsilii-primary)]"
                    size={28}
                  />
                </motion.div>
                <h3 className="font-semibold text-[var(--marsilii-primary)] text-xl">
                  <AccentedText
                    text="Sistema a Chiusura Automatica"
                    baseWeight={500}
                    accentWeight={700}
                  />
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                <AccentedText
                  text="Brevetto esclusivo per un sistema di chiusura che si attiva automaticamente quando la porta viene accostata, senza necessità di girare la chiave."
                  baseWeight={300}
                  accentWeight={500}
                />
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Brevetto n° IT1234567</span>
                <span className="bg-[var(--marsilii-primary)] text-white text-xs px-3 py-1 rounded-full">1989</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md p-6 flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Shield
                    className="text-[var(--marsilii-primary)]"
                    size={28}
                  />
                </motion.div>
                <h3 className="font-semibold text-[var(--marsilii-primary)] text-xl">
                  <AccentedText
                    text="Serratura di Alta Sicurezza"
                    baseWeight={500}
                    accentWeight={700}
                  />
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                <AccentedText
                  text="Sistema brevettato di serratura a doppia mappa con chiave protetta e meccanismo anti-manipolazione per la massima sicurezza."
                  baseWeight={300}
                  accentWeight={500}
                />
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Brevetto n° IT7654321</span>
                <span className="bg-[var(--marsilii-primary)] text-white text-xs px-3 py-1 rounded-full">1995</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/brevetti">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="text-[var(--marsilii-primary)] border-[var(--marsilii-primary)] font-light"
                  variant="bordered"
                  radius="md"
                >
                  Scopri tutti i brevetti
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Sezione Contatti con animazioni */}
      <motion.div
        className="py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[var(--marsilii-primary)] mb-4">
              <AccentedText
                text="Contattaci"
                baseWeight={600}
                accentWeight={800}
              />
            </h2>
            <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
              <AccentedText
                text="I nostri esperti sono a disposizione per aiutarti a scegliere la soluzione più adatta alle tue esigenze"
                baseWeight={300}
                accentWeight={500}
              />
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <motion.div
                  className="w-16 h-16 rounded-full bg-[var(--marsilii-background-secondary)] flex items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ type: "spring" }}
                >
                  <MapPin size={28} />
                </motion.div>
                <h3 className="font-semibold text-[var(--marsilii-primary)] text-xl">
                  <AccentedText
                    text="Sede Principale"
                    baseWeight={500}
                    accentWeight={700}
                  />
                </h3>
                <div className="text-gray-600">
                  <p>Via Salara Vecchia, 136</p>
                  <p>65015 Montesilvano (PE)</p>
                  <p>Italia</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <motion.div
                  className="w-16 h-16 rounded-full bg-[var(--marsilii-background-secondary)] flex items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ type: "spring" }}
                >
                  <Phone size={28} />
                </motion.div>
                <h3 className="font-semibold text-[var(--marsilii-primary)] text-xl">
                  <AccentedText
                    text="Contatti Diretti"
                    baseWeight={500}
                    accentWeight={700}
                  />
                </h3>
                <div className="text-gray-600">
                  <p>Tel: +39 085 4452103</p>
                  <p>Fax: +39 085 4456833</p>
                  <p>Email: info@marsilii.it</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <motion.div
                  className="w-16 h-16 rounded-full bg-[var(--marsilii-background-secondary)] flex items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ type: "spring" }}
                >
                  <Clock3 size={28} />
                </motion.div>
                <h3 className="font-semibold text-[var(--marsilii-primary)] text-xl">
                  <AccentedText
                    text="Orari di Apertura"
                    baseWeight={500}
                    accentWeight={700}
                  />
                </h3>
                <div className="text-gray-600">
                  <p>Lun - Ven: 8:30 - 12:30, 14:30 - 18:30</p>
                  <p>Sabato: 8:30 - 12:30</p>
                  <p>Domenica: Chiuso</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-[var(--marsilii-primary)] text-white font-light"
                  radius="md"
                >
                  Contattaci
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
