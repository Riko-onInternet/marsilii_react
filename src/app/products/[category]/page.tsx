"use client";

import { useParams } from "next/navigation";
import Hero from "@/components/hero";
import { Button, Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { productCategories, getProductsByCategory } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Eye } from "lucide-react";
import AccentedText from "@/components/AccentedText";

// Importazioni di Framer Motion
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;

  const category = productCategories.find((cat) => cat.id === categoryId);
  const products = getProductsByCategory(categoryId);

  // Refs per le animazioni
  const breadcrumbRef = useRef(null);
  const productsHeaderRef = useRef(null);
  const productsGridRef = useRef(null);
  const ctaRef = useRef(null);

  // Controllo quando gli elementi entrano nel viewport
  const isBreadcrumbInView = useInView(breadcrumbRef, { once: true, amount: 0.2 });
  const isProductsHeaderInView = useInView(productsHeaderRef, { once: true, amount: 0.2 });
  const isProductsGridInView = useInView(productsGridRef, { once: true, amount: 0.1 });
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
      transition: {
        duration: 0.5,
      },
    },
  };

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-[var(--marsilii-primary)] mb-4">
            <AccentedText
              text="Categoria non trovata"
              baseWeight={600}
              accentWeight={800}
            />
          </h1>
          <Link href="/products">
            <Button
              className="bg-[var(--marsilii-primary)] text-white font-light"
              radius="md"
            >
              <AccentedText
                text="Torna ai Prodotti"
                baseWeight={300}
                accentWeight={500}
              />
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <Hero title={category.name} subtitle={category.description} size="sm" />

      {/* Breadcrumb e Back Button */}
      <motion.div 
        ref={breadcrumbRef}
        className="py-6 px-4 bg-[var(--marsilii-background-secondary)]"
        initial={{ opacity: 0, y: -20 }}
        animate={isBreadcrumbInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Breadcrumbs
            size="sm"
            color="primary"
            className="text-gray-600"
            variant="solid"
            radius="lg"
            separator="/"
          >
            <BreadcrumbItem>
              <Link
                href="/"
                className="hover:text-[var(--marsilii-primary)] transition-colors"
              >
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link
                href="/products"
                className="hover:text-[var(--marsilii-primary)] transition-colors"
              >
                Prodotti
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <span className="font-medium text-[var(--marsilii-primary)]">
                {category.name}
              </span>
            </BreadcrumbItem>
          </Breadcrumbs>

          <Link href="/products">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="text-[var(--marsilii-primary)] font-light"
                variant="light"
                startContent={<ArrowLeft size={16} />}
              >
                <AccentedText
                  text="Torna alle Categorie"
                  baseWeight={300}
                  accentWeight={500}
                />
              </Button>
            </motion.div>
          </Link>
        </div>
      </motion.div>

      {/* Lista Prodotti */}
      <div className="py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            ref={productsHeaderRef}
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isProductsHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[var(--marsilii-primary)] mb-4">
              <AccentedText
                text="Prodotti Disponibili"
                baseWeight={600}
                accentWeight={800}
              />
            </h2>
            <p className="text-lg text-gray-600">
              <AccentedText
                text={`${products.length} prodotti in questa categoria`}
                baseWeight={300}
                accentWeight={500}
              />
            </p>
          </motion.div>

          <motion.div 
            ref={productsGridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isProductsGridInView ? "visible" : "hidden"}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                custom={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {product.image && (
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="h-full w-full"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--marsilii-primary)] mb-3">
                    <AccentedText
                      text={`${product.name}`}
                      baseWeight={500}
                      accentWeight={700}
                    />
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    <AccentedText
                      text={`${product.description}`}
                      baseWeight={300}
                      accentWeight={500}
                    />
                  </p>

                  {product.specifications &&
                    product.specifications.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-sm text-gray-700 mb-2">
                          <AccentedText
                            text="Caratteristiche:"
                            baseWeight={400}
                            accentWeight={600}
                          />
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {product.specifications
                            .slice(0, 3)
                            .map((spec, index) => (
                              <motion.span
                                key={index}
                                className="bg-[var(--marsilii-background-secondary)] text-xs px-2 py-1 rounded"
                                whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
                                transition={{ duration: 0.2 }}
                              >
                                <AccentedText
                                  text={`${spec}`}
                                  baseWeight={300}
                                  accentWeight={500}
                                />
                              </motion.span>
                            ))}
                        </div>
                      </div>
                    )}

                  {product.certifications &&
                    product.certifications.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-sm text-gray-700 mb-2">
                          <AccentedText
                            text="Certificazioni:"
                            baseWeight={400}
                            accentWeight={600}
                          />
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {product.certifications
                            .slice(0, 2)
                            .map((cert, index) => (
                              <motion.span
                                key={index}
                                className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                                whileHover={{ scale: 1.05, backgroundColor: "#d1fae5" }}
                                transition={{ duration: 0.2 }}
                              >
                                <AccentedText
                                  text={`${cert}`}
                                  baseWeight={300}
                                  accentWeight={500}
                                />
                              </motion.span>
                            ))}
                          {product.certifications.length > 2 && (
                            <motion.span 
                              className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                              whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                              transition={{ duration: 0.2 }}
                            >
                              <AccentedText
                                text={`+${
                                  product.certifications.length - 2
                                } certificati`}
                                baseWeight={300}
                                accentWeight={500}
                              />
                            </motion.span>
                          )}
                        </div>
                      </div>
                    )}

                  <Link href={`/products/${categoryId}/${product.slug}`}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        className="w-full bg-[var(--marsilii-primary)] text-white font-light"
                        radius="md"
                        startContent={<motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5, repeatType: "loop" }}
                        >
                          <Eye size={16} />
                        </motion.div>}
                      >
                        <AccentedText
                          text="Visualizza Dettagli"
                          baseWeight={300}
                          accentWeight={500}
                        />
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div 
        ref={ctaRef}
        className="py-16 px-4 bg-[var(--marsilii-background-secondary)]"
        initial={{ opacity: 0 }}
        animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[800px] mx-auto text-center">
          <motion.h2 
            className="text-2xl font-bold text-[var(--marsilii-primary)] mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={isCtaInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AccentedText
              text="Interessato a questi prodotti?"
              baseWeight={600}
              accentWeight={800}
            />
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={isCtaInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AccentedText
              text="Contattaci per ricevere informazioni dettagliate e preventivi personalizzati"
              baseWeight={300}
              accentWeight={500}
            />
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isCtaInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <Button
                className="bg-[var(--marsilii-primary)] text-white font-light"
                radius="md"
                size="lg"
              >
                <AccentedText
                  text="Richiedi Informazioni"
                  baseWeight={300}
                  accentWeight={500}
                />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
