"use client";

// import { useParams } from "next/navigation";
import Hero from "@/components/hero";
import { Button } from "@heroui/react";
import { productCategories } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye, Download } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { downloadableDocuments } from "@/data/documents";
import AccentedText from "@/components/AccentedText";
// Importazioni di Framer Motion
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProductsPage() {
  // Refs per le animazioni
  const categoriesRef = useRef(null);
  const downloadRef = useRef(null);
  const ctaRef = useRef(null);

  // Controllo quando gli elementi entrano nel viewport
  const isCategoriesInView = useInView(categoriesRef, {
    once: true,
    amount: 0.2,
  });
  const isDownloadInView = useInView(downloadRef, { once: true, amount: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

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
        title="I Nostri Prodotti"
        subtitle="Scopri la gamma completa di soluzioni Marsilii"
      />

      {/* Categorie di Prodotti */}
      <motion.div
        ref={categoriesRef}
        className="py-16 px-4"
        initial="hidden"
        animate={isCategoriesInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-[1200px] mx-auto">
          {productCategories.map((category) => (
            <motion.div
              key={category.id}
              className="mb-16"
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-[var(--marsilii-primary)] mb-2">
                    <AccentedText
                      text={category.name}
                      baseWeight={600}
                      accentWeight={800}
                    />
                  </h2>
                  <p className="text-gray-600">
                    <AccentedText
                      text={category.description}
                      baseWeight={300}
                      accentWeight={500}
                    />
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={`/products/${category.id}`}>
                    <Button
                      className="text-[var(--marsilii-primary)] border-[var(--marsilii-primary)] font-light hidden md:flex"
                      variant="bordered"
                      radius="md"
                      endContent={<ArrowRight size={16} />}
                    >
                      <AccentedText
                        text="Vedi Tutti"
                        baseWeight={300}
                        accentWeight={500}
                      />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
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
                className="!px-4 lg:!px-20 !pb-12 navigation-btn"
              >
                {category.products.slice(0, 6).map((product) => (
                  <SwiperSlide key={product.id}>
                    <motion.div
                      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full border border-gray-100"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {product.image && (
                        <motion.div
                          className="relative h-40 bg-gray-100"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      )}

                      <div className="p-4">
                        <h3 className="font-semibold text-[var(--marsilii-primary)] mb-2">
                          <AccentedText
                            text={product.name}
                            baseWeight={500}
                            accentWeight={700}
                          />
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {product.description}
                        </p>

                        {/* Caratteristiche */}
                        {product.specifications &&
                          product.specifications.length > 0 && (
                            <div className="mb-3">
                              <div className="flex flex-wrap gap-1">
                                {product.specifications
                                  .slice(0, 2)
                                  .map((spec, index) => (
                                    <motion.span
                                      key={index}
                                      className="bg-[var(--marsilii-background-secondary)] text-xs px-2 py-1 rounded"
                                      whileHover={{ scale: 1.05 }}
                                    >
                                      {spec}
                                    </motion.span>
                                  ))}
                              </div>
                            </div>
                          )}

                        {/* Certificazioni */}
                        {product.certifications &&
                          product.certifications.length > 0 && (
                            <div className="mb-3">
                              <div className="flex flex-wrap gap-1">
                                {product.certifications
                                  .slice(0, 1)
                                  .map((cert, index) => (
                                    <motion.span
                                      key={index}
                                      className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                                      whileHover={{ scale: 1.05 }}
                                    >
                                      {cert}
                                    </motion.span>
                                  ))}
                              </div>
                            </div>
                          )}

                        <Link href={`/products/${category.id}/${product.slug}`}>
                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <Button
                              className="w-full bg-[var(--marsilii-primary)] text-white font-light"
                              radius="md"
                              size="sm"
                              startContent={<Eye size={14} />}
                            >
                              Dettagli
                            </Button>
                          </motion.div>
                        </Link>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}

                {/* Card "Vedi Tutti" */}
                <SwiperSlide>
                  <motion.div
                    className="bg-gradient-to-br from-[var(--marsilii-primary)] to-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex items-center justify-center"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-center p-6 text-white">
                      <motion.div
                        className="text-4xl mb-4"
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        {category.icon}
                      </motion.div>
                      <motion.h4
                        className="text-xl font-semibold mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        Scopri Tutti i Prodotti
                      </motion.h4>
                      <motion.p
                        className="text-sm mb-6 opacity-90"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        Esplora l&apos;intera gamma di prodotti della categoria{" "}
                        {category.name.toLowerCase()}
                      </motion.p>
                      <Link href={`/products/${category.id}`}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            className="bg-white text-[var(--marsilii-primary)] font-light"
                            radius="md"
                            endContent={<ArrowRight size={16} />}
                          >
                            Vedi Tutti ({category.products.length})
                          </Button>
                        </motion.div>
                      </Link>
                    </div>
                  </motion.div>
                </SwiperSlide>
              </Swiper>

              {/* Pulsante Mobile per Vedi Tutti */}
              <div className="text-center mt-6 md:hidden">
                <Link href={`/products/${category.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="text-[var(--marsilii-primary)] border-[var(--marsilii-primary)] font-light"
                      variant="bordered"
                      radius="md"
                      endContent={<ArrowRight size={16} />}
                    >
                      Vedi Tutti i Prodotti ({category.products.length})
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Sezione Download */}
      <motion.div
        ref={downloadRef}
        className="py-16 px-4 bg-[var(--marsilii-background-secondary)]"
        initial={{ opacity: 0, y: 30 }}
        animate={
          isDownloadInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
        }
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isDownloadInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-[var(--marsilii-primary)] mb-4">
              Documentazione Tecnica
            </h2>
            <p className="text-lg text-gray-600">
              Scarica i nostri schemi tecnici e guide di installazione
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloadableDocuments.map((doc, index) => (
              <motion.div
                key={doc.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-max"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isDownloadInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Download
                      className="text-[var(--marsilii-primary)]"
                      size={24}
                    />
                  </motion.div>
                  <h3 className="font-semibold text-[var(--marsilii-primary)]">
                    {doc.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    as="a"
                    href={doc.fileUrl}
                    download
                    className="w-full text-[var(--marsilii-primary)] border-[var(--marsilii-primary)] font-light"
                    variant="bordered"
                    radius="md"
                  >
                    <Download size={16} />
                    Scarica PDF
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        ref={ctaRef}
        className="py-16 px-4"
        initial={{ opacity: 0 }}
        animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[800px] mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-[var(--marsilii-primary)] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={
              isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hai Bisogno di Consulenza?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={
              isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
            }
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            I nostri esperti sono a disposizione per aiutarti a scegliere la
            soluzione più adatta alle tue esigenze
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-[var(--marsilii-primary)] text-white font-light"
                  radius="md"
                  size="lg"
                >
                  Contattaci
                </Button>
              </motion.div>
            </Link>
            <Link href="/about">
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
                  Chi Siamo
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
