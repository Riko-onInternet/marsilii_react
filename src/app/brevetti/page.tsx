"use client";

import Hero from "@/components/hero";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import AccentedText from "@/components/AccentedText";

// Icons
import { Award, FileText, Download, ArrowRight, BookOpen } from "lucide-react";

// Framer Motion
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Interfaccia per i brevetti
interface Patent {
  id: string;
  title: string;
  description: string;
  year: string;
  number?: string;
  image?: string;
}

// Interfaccia per i documenti PDF
interface PatentDocument {
  id: string;
  name: string;
  description: string;
  fileUrl: string;
  category: string;
  fileSize?: string;
  fileType?: string;
  lastUpdated?: string;
}

// Dati dei brevetti
const patents: Patent[] = [
  {
    id: "brevetto-1",
    title: "Sistema a Chiusura Automatica Meccanica",
    description:
      "Brevetto per un innovativo sistema di chiusura automatica meccanica per porte blindate che garantisce massima sicurezza e affidabilità.",
    year: "1989",
    number: "IT1234567",
    image: "/img/bannermarsilii-1024x453.jpg",
  },
  {
    id: "brevetto-2",
    title: "Serratura di Sicurezza a Doppia Mappa",
    description:
      "Sistema brevettato di serratura a doppia mappa con chiave protetta e meccanismo anti-manipolazione.",
    year: "1995",
    number: "IT7654321",
    image: "/img/bannermarsilii-1024x453.jpg",
  },
  {
    id: "brevetto-3",
    title: "Porta Blindata con Isolamento Termico",
    description:
      "Innovativo sistema di isolamento termico per porte blindate che garantisce efficienza energetica senza compromettere la sicurezza.",
    year: "2005",
    number: "IT9876543",
    image: "/img/bannermarsilii-1024x453.jpg",
  },
];

// Documenti PDF dei brevetti
const patentDocuments: PatentDocument[] = [
  // Documenti A1
  {
    id: "permeabilita-aria-acqua-vento-a1",
    name: "Permeabilità all'Aria, Tenuta All'Acqua e Resistenza al Vento",
    description:
      "Certificazione delle prestazioni di permeabilità all'aria, tenuta all'acqua e resistenza al vento per la Porta Blindata Linea Estro",
    fileUrl:
      "/doc/a1/Permeabilità allAria, Tenuta All_Acqua e Resistenza al vento 2017.pdf",
    category: "a1",
    fileSize: "1.8 MB",
    fileType: "PDF",
    lastUpdated: "2017",
  },
  {
    id: "potere-fonoisolante-a1",
    name: "Potere Fonoisolante",
    description:
      "Certificazione dell'isolamento acustico e del potere fonoisolante della Porta Blindata Linea Estro",
    fileUrl: "/doc/a1/Potere Fonoisolante 2017.pdf",
    category: "a1",
    fileSize: "1.5 MB",
    fileType: "PDF",
    lastUpdated: "2017",
  },
  // Documenti A2
  {
    id: "permeabilita-aria-acqua-vento-a2",
    name: "Permeabilità all'Aria, Tenuta All'Acqua e Resistenza al Vento - Zelo",
    description:
      "Certificazione delle prestazioni di permeabilità all'aria, tenuta all'acqua e resistenza al vento per la Porta Blindata Linea Estro con finitura Zelo",
    fileUrl:
      "/doc/a2/Permeabilità allAria, Tenuta All_Acqua e Resistenza al vento 2017.pdf",
    category: "a2",
    fileSize: "1.8 MB",
    fileType: "PDF",
    lastUpdated: "2017",
  },
  {
    id: "potere-fonoisolante-a2",
    name: "Potere Fonoisolante - Zelo",
    description:
      "Certificazione dell'isolamento acustico e del potere fonoisolante della Porta Blindata Linea Estro con finitura Zelo",
    fileUrl: "/doc/a2/Potere Fonoisolante 2017.pdf",
    category: "a2",
    fileSize: "1.5 MB",
    fileType: "PDF",
    lastUpdated: "2017",
  },
  // Documenti A3
  {
    id: "omologazione-porta-ei120",
    name: "Omologazione Porta EI 120",
    description:
      "Certificato di omologazione della Porta Blindata Tagliafuoco con resistenza al fuoco EI 120",
    fileUrl: "/doc/a3/OMOLOGAZIONE PORTA EI 120.pdf",
    category: "a3",
    fileSize: "2.1 MB",
    fileType: "PDF",
    lastUpdated: "2020",
  },
  {
    id: "rinnovo-omologazione-ei120",
    name: "Rinnovo Omologazione EI 120",
    description:
      "Documento di rinnovo della certificazione e omologazione della Porta Blindata Tagliafuoco EI 120",
    fileUrl: "/doc/a3/Rinnovo omologazione EI120.pdf",
    category: "a3",
    fileSize: "1.9 MB",
    fileType: "PDF",
    lastUpdated: "2022",
  },
];

// Funzione per raggruppare i documenti per categoria
const getDocumentsByCategory = (categoryId: string): PatentDocument[] => {
  return patentDocuments.filter((doc) => doc.category === categoryId);
};

export default function Brevetti() {
  // Refs per le animazioni al scroll
  const patentsRef = useRef(null);
  const documentsRef = useRef(null);
  const ctaRef = useRef(null);

  // Hook per rilevare quando gli elementi entrano nel viewport
  const patentsInView = useInView(patentsRef, { once: true, amount: 0.2 });
  const documentsInView = useInView(documentsRef, { once: true, amount: 0.2 });
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <div>
      <Hero
        title="Brevetti e Certificazioni"
        subtitle="Innovazione e qualità certificate"
        size="sm"
      />

      {/* Sezione Brevetti */}
      <motion.div
        ref={patentsRef}
        className="py-16 px-4"
        initial="hidden"
        animate={patentsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-[var(--marsilii-primary)] mb-4">
              <AccentedText
                text="I Nostri Brevetti"
                baseWeight={600}
                accentWeight={800}
              />
            </h2>
            <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
              <AccentedText
                text="La nostra azienda ha sviluppato soluzioni innovative nel campo della sicurezza, protette da brevetti che testimoniano il nostro impegno nella ricerca e sviluppo."
                baseWeight={300}
                accentWeight={500}
              />
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {patents.map((patent, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 h-max"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {patent.image && (
                  <motion.div
                    className="relative h-40 bg-gray-100"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={patent.image}
                      alt={patent.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                )}

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-[var(--marsilii-primary)] text-xl">
                      <AccentedText
                        text={patent.title}
                        baseWeight={500}
                        accentWeight={700}
                      />
                    </h3>
                    <motion.div
                      className="bg-[var(--marsilii-primary)] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Award size={12} />
                      <span>{patent.year}</span>
                    </motion.div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    <AccentedText
                      text={patent.description}
                      baseWeight={300}
                      accentWeight={500}
                    />
                  </p>

                  {patent.number && (
                    <div className="mb-4">
                      <motion.span
                        className="bg-[var(--marsilii-background-secondary)] text-sm px-3 py-1 rounded inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <BookOpen size={14} />
                        <span>Brevetto N° {patent.number}</span>
                      </motion.span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Sezione Documenti */}
      <motion.div
        ref={documentsRef}
        className="py-16 px-4 bg-[var(--marsilii-background-secondary)]"
        initial={{ opacity: 0, y: 30 }}
        animate={documentsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={
              documentsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-[var(--marsilii-primary)] mb-4">
              <AccentedText
                text="Documentazione Tecnica"
                baseWeight={600}
                accentWeight={800}
              />
            </h2>
            <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
              <AccentedText
                text="Scarica i documenti tecnici e le certificazioni dei nostri prodotti"
                baseWeight={300}
                accentWeight={500}
              />
            </p>
          </motion.div>

          {/* Documenti A1 */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={
              documentsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-[var(--marsilii-primary)] mb-6">
              <AccentedText
                text="Certificazioni Porta Blindata Linea Estro"
                baseWeight={500}
                accentWeight={700}
              />
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getDocumentsByCategory("a1").map((doc, index) => (
                <motion.div
                  key={doc.id}
                  className="bg-white h-max rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    documentsInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <FileText
                        className="text-[var(--marsilii-primary)]"
                        size={24}
                      />
                    </motion.div>
                    <h4 className="font-semibold text-[var(--marsilii-primary)]">
                      {doc.name}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {doc.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <span>
                      {doc.fileType} • {doc.fileSize}
                    </span>
                    <span>Aggiornato: {doc.lastUpdated}</span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      as="a"
                      href={doc.fileUrl}
                      target="_blank"
                      className="w-full bg-[var(--marsilii-primary)] text-white font-light"
                      radius="md"
                    >
                      <Download size={16} />
                      Scarica PDF
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Documenti A2 */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={
              documentsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-[var(--marsilii-primary)] mb-6">
              <AccentedText
                text="Certificazioni Porta Blindata Linea Estro con finitura Zelo"
                baseWeight={500}
                accentWeight={700}
              />
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getDocumentsByCategory("a2").map((doc, index) => (
                <motion.div
                  key={doc.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-max"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    documentsInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <FileText
                        className="text-[var(--marsilii-primary)]"
                        size={24}
                      />
                    </motion.div>
                    <h4 className="font-semibold text-[var(--marsilii-primary)]">
                      {doc.name}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {doc.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <span>
                      {doc.fileType} • {doc.fileSize}
                    </span>
                    <span>Aggiornato: {doc.lastUpdated}</span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      as="a"
                      href={doc.fileUrl}
                      target="_blank"
                      className="w-full bg-[var(--marsilii-primary)] text-white font-light"
                      radius="md"
                    >
                      <Download size={16} />
                      Scarica PDF
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Documenti A3 */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={
              documentsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-[var(--marsilii-primary)] mb-6">
              <AccentedText
                text="Certificazioni Porta Blindata Tagliafuoco EI 120"
                baseWeight={500}
                accentWeight={700}
              />
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getDocumentsByCategory("a3").map((doc, index) => (
                <motion.div
                  key={doc.id}
                  className="bg-white h-max rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    documentsInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <FileText
                        className="text-[var(--marsilii-primary)]"
                        size={24}
                      />
                    </motion.div>
                    <h4 className="font-semibold text-[var(--marsilii-primary)]">
                      {doc.name}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {doc.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <span>
                      {doc.fileType} • {doc.fileSize}
                    </span>
                    <span>Aggiornato: {doc.lastUpdated}</span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      as="a"
                      href={doc.fileUrl}
                      target="_blank"
                      className="w-full bg-[var(--marsilii-primary)] text-white font-light"
                      radius="md"
                    >
                      <Download size={16} />
                      Scarica PDF
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        ref={ctaRef}
        className="py-16 px-4"
        initial={{ opacity: 0 }}
        animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[800px] mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-[var(--marsilii-primary)] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <AccentedText
              text="Scopri i Nostri Prodotti Brevettati"
              baseWeight={600}
              accentWeight={800}
            />
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <AccentedText
              text="Esplora la nostra gamma di prodotti che incorporano le tecnologie brevettate Marsilii"
              baseWeight={300}
              accentWeight={500}
            />
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.5 }}
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
                  endContent={<ArrowRight size={16} />}
                >
                  Esplora i Prodotti
                </Button>
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="text-[var(--marsilii-primary)] border-[var(--marsilii-primary)] font-light"
                  variant="bordered"
                  radius="md"
                  size="lg"
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
