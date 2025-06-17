"use client";

import Hero from "@/components/hero";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import AccentedText from "@/components/AccentedText";

// Icons
import { Award, Clock3, Shield, Zap, History, BookOpen, PenTool } from "lucide-react";

// Framer Motion
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Tappe storiche dell'azienda
const timelineEvents = [
  {
    year: "1970",
    title: "Fondazione",
    description: "Nasce dall'esperienza di Franco Marsilii nel settore delle serrature di sicurezza.",
    icon: History
  },
  {
    year: "1989",
    title: "Primo Prototipo",
    description: "Sviluppo del primo prototipo di Sistema a Chiusura Automatica Meccanica.",
    icon: PenTool
  },
  {
    year: "1992",
    title: "Brevetto CUSTOS",
    description: "Brevettata la Serratura di Sicurezza a Chiusura automatica CUSTOS Meccanica, senza molle (N°brevetto RM 92 A 000200).",
    icon: Shield
  },
  {
    year: "2000-2010",
    title: "Evoluzione Tecnologica",
    description: "Sviluppo delle Cerniere Autasollevanti e della Serratura a Chiusura Automatica con Autoriassetto per il Settore Carcerario.",
    icon: Zap
  },
  {
    year: "2020",
    title: "Nuovi Brevetti",
    description: "Brevetto Gruppo Deviatore per Serrature Di Sicurezza e Relativa Serratura a chiusura Automatica.",
    icon: BookOpen
  },
  {
    year: "Oggi",
    title: "Innovazione Continua",
    description: "Sviluppo di nuovi brevetti per serrature a chiusura automatica, serrature carcerarie e riscontri elettrici.",
    icon: Award
  },
];

// Punti di forza dell'azienda
const strengths = [
  {
    title: "Esperienza Cinquantennale",
    description: "Oltre 50 anni di esperienza nel settore delle serrature di sicurezza.",
    icon: Clock3
  },
  {
    title: "Innovazione Brevettata",
    description: "Numerosi brevetti esclusivi che garantiscono soluzioni uniche e all'avanguardia.",
    icon: Award
  },
  {
    title: "Sicurezza Superiore",
    description: "Serrature ad alto livello di sicurezza con chiusura automatica meccanica.",
    icon: Shield
  },
  {
    title: "Design Esclusivo",
    description: "Maniglie scorrevoli e rotative per porte blindate con design unico nel suo genere.",
    icon: Zap
  },
];

export default function About() {
  // Refs per le animazioni al scroll
  const storyRef = useRef(null);
  const timelineRef = useRef(null);
  const strengthsRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Hook per rilevare quando gli elementi entrano nel viewport
  const storyInView = useInView(storyRef, { once: true, amount: 0.2 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.1 });
  const strengthsInView = useInView(strengthsRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });
  
  // Varianti per le animazioni
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  return (
    <div>
      <Hero
        title="Chi Siamo"
        subtitle="Leader nel settore delle serrature di sicurezza dal 1970"
        size="sm"
      />

      {/* Storia dell'azienda */}
      <motion.div 
        ref={storyRef}
        className="py-16 px-4 max-w-[1200px] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={storyInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-[var(--marsilii-primary)] mb-6">
              <AccentedText 
                text="La Nostra Storia" 
                baseWeight={600} 
                accentWeight={800}
              />
            </h2>
            <div className="space-y-4 text-lg">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={storyInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <AccentedText 
                  text="La Marsilii Serrature srl è un'Azienda Leader nel Suo Settore, che nasce dall'esperienza di Franco Marsilii." 
                  baseWeight={300} 
                  accentWeight={500}
                />
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={storyInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <AccentedText 
                  text="Oltre 50 anni di lavoro nell'ambito delle Serrature di Sicurezza, hanno permesso la riuscita dell'obiettivo principale prefissato: la realizzazione di una Serratura Ad Alto Livello di Sicurezza ed Insuperabile Praticità." 
                  baseWeight={300} 
                  accentWeight={500}
                />
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={storyInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <AccentedText 
                  text="Già nel 1989 nasce il primo prototipo di Sistema a Chiusura Automatica Meccanica: una Serratura che si blinda automaticamente in modo meccanico nel momento in cui la porta viene chiusa, senza doverlo fare necessariamente tramite giro di chiave." 
                  baseWeight={300} 
                  accentWeight={500}
                />
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={storyInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <AccentedText 
                  text="Un sistema ben diverso dalle Serrature presenti in commercio, caratterizzate da poca praticità e carenze tecnico-funzionali." 
                  baseWeight={300} 
                  accentWeight={500}
                />
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 relative h-[400px] overflow-hidden shadow-xl"
            initial={{ x: 50, opacity: 0 }}
            animate={storyInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
          >
            <Image 
              src="/img/Porta_Corretta_02_.jpg" 
              alt="Marsilii Serrature Storia" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div 
        ref={timelineRef}
        className="py-16 px-4 bg-[var(--marsilii-background-secondary)]"
        initial={{ opacity: 0 }}
        animate={timelineInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-[var(--marsilii-primary)] mb-12 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={timelineInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AccentedText 
              text="La Nostra Evoluzione" 
              baseWeight={600} 
              accentWeight={800}
            />
          </motion.h2>
          
          <div className="relative">
            {/* Linea verticale centrale */}
            <motion.div 
              className="absolute left-[20px] md:left-1/2 top-0 h-full w-1 bg-[var(--marsilii-primary)] opacity-20 md:transform md:-translate-x-1/2"
              initial={{ height: 0 }}
              animate={timelineInView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 1.5 }}
            />
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col md:items-center gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
                >
                  <div className={`pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-xl font-bold text-[var(--marsilii-primary)]">{event.year}</p>
                      <h3 className="text-2xl font-semibold">
                        <AccentedText 
                          text={event.title} 
                          baseWeight={500} 
                          accentWeight={700}
                        />
                      </h3>
                      <p className="text-gray-600">
                        <AccentedText 
                          text={event.description} 
                          baseWeight={300} 
                          accentWeight={500}
                        />
                      </p>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="absolute left-0.5 md:relative md:left-auto z-10 max-w-10 w-full h-10 md:max-w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.2, boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <event.icon size={24} className="text-[var(--marsilii-primary)] md:text-[28px]" />
                  </motion.div>
                  
                  <div className="hidden md:block md:w-1/2 md:opacity-0" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Punti di forza */}
      <motion.div 
        ref={strengthsRef}
        className="py-16 px-4 max-w-[1200px] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={strengthsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-3xl font-bold text-[var(--marsilii-primary)] mb-12 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={strengthsInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AccentedText 
            text="I Nostri Punti di Forza" 
            baseWeight={600} 
            accentWeight={800}
          />
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={strengthsInView ? "visible" : "hidden"}
        >
          {strengths.map((strength, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-[var(--marsilii-background-secondary)] flex items-center justify-center mb-4 mx-auto"
                whileHover={{ scale: 1.1, backgroundColor: "#f0f0f0" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <strength.icon size={28} className="text-[var(--marsilii-primary)]" />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-center mb-3">
                <AccentedText 
                  text={strength.title} 
                  baseWeight={500} 
                  accentWeight={700}
                />
              </h3>
              
              <p className="text-gray-600 text-center">
                <AccentedText 
                  text={strength.description} 
                  baseWeight={300} 
                  accentWeight={500}
                />
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={strengthsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-lg text-gray-600 max-w-[800px] mx-auto mb-6">
            <AccentedText 
              text="I Brevetti depositati riguardano anche componenti come maniglie e sistemi di accoppiamento tra le diverse parti che compongono l'Assieme Porta. La Maniglia Scorrevole e la Maniglia Rotativa per Porte Blindate garantiscono un Design Unico nel Suo Genere, sempre più richiesto sia nell'Ambito Residenziale che in quello Commerciale." 
              baseWeight={300} 
              accentWeight={500}
            />
          </p>
        </motion.div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        ref={ctaRef}
        className="py-16 px-4 bg-[var(--marsilii-background-secondary)]"
        initial={{ opacity: 0 }}
        animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[800px] mx-auto text-center">
          <motion.h2 
            className="text-2xl font-bold text-[var(--marsilii-primary)] mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={ctaInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AccentedText 
              text="Scopri i Nostri Prodotti" 
              baseWeight={600} 
              accentWeight={800}
            />
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={ctaInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AccentedText 
              text="Esplora la nostra gamma di serrature di sicurezza e porte blindate, frutto di oltre 50 anni di esperienza e innovazione" 
              baseWeight={300} 
              accentWeight={500}
            />
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={ctaInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/products">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-[var(--marsilii-primary)] text-white font-light"
                  radius="md"
                  size="lg"
                >
                  <AccentedText 
                    text="Esplora i Prodotti" 
                    baseWeight={300} 
                    accentWeight={500}
                  />
                </Button>
              </motion.div>
            </Link>
            
            <Link href="/contact">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="border-[var(--marsilii-primary)] text-[var(--marsilii-primary)] font-light"
                  variant="bordered"
                  radius="md"
                  size="lg"
                >
                  <AccentedText 
                    text="Contattaci" 
                    baseWeight={300} 
                    accentWeight={500}
                  />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}