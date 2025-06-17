"use client";

import { useParams } from "next/navigation";
import Hero from "@/components/hero";
import { Button, Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { getProductBySlug, productCategories } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Phone, Mail, Shield, Award, Settings } from "lucide-react";

// Importazioni di Framer Motion
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProductDetailPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const productSlug = params.product as string;

  const product = getProductBySlug(productSlug);
  const category = productCategories.find((cat) => cat.id === categoryId);

  // Refs per le animazioni
  const breadcrumbRef = useRef(null);
  const productInfoRef = useRef(null);
  const additionalInfoRef = useRef(null);
  const relatedProductsRef = useRef(null);
  
  // Controllo quando gli elementi entrano nel viewport
  const isBreadcrumbInView = useInView(breadcrumbRef, { once: true, amount: 0.2 });
  const isProductInfoInView = useInView(productInfoRef, { once: true, amount: 0.1 });
  const isAdditionalInfoInView = useInView(additionalInfoRef, { once: true, amount: 0.2 });
  const isRelatedProductsInView = useInView(relatedProductsRef, { once: true, amount: 0.1 });

  if (!product || !category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-[var(--marsilii-primary)] mb-4">
            Prodotto non trovato
          </h1>
          <Link href="/products">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-[var(--marsilii-primary)] text-white font-light"
                radius="md"
              >
                Torna ai Prodotti
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <Hero
        title={product.name}
        size="sm"
        src={product.image}
      />

      {/* Breadcrumb */}
      <motion.div 
        ref={breadcrumbRef}
        className="py-6 px-4 bg-[var(--marsilii-background-secondary)]"
        initial={{ opacity: 0, y: -10 }}
        animate={isBreadcrumbInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            size="sm"
            className="text-gray-600"
            variant="solid"
            radius="lg"
            separator="/"
          >
            <BreadcrumbItem>
              <Link
                href="/products"
                className="hover:text-[var(--marsilii-primary)]"
              >
                Prodotti
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link
                href={`/products/${categoryId}`}
                className="hover:text-[var(--marsilii-primary)]"
              >
                {category.name}
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <span className="text-[var(--marsilii-primary)] font-normal">
                {product.name}
              </span>
            </BreadcrumbItem>
          </Breadcrumbs>
          <Link href={`/products/${categoryId}`}>
            <motion.div
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="text-[var(--marsilii-primary)] font-light"
                variant="light"
                startContent={<ArrowLeft size={16} />}
              >
                Torna alla Categoria
              </Button>
            </motion.div>
          </Link>
        </div>
      </motion.div>

      {/* Dettagli Prodotto */}
      <motion.div 
        ref={productInfoRef}
        className="py-16 px-4"
        initial={{ opacity: 0 }}
        animate={isProductInfoInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Immagine */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isProductInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {product.image ? (
                <motion.div 
                  className="relative aspect-square bg-gray-100 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ) : (
                <div className="aspect-square bg-[var(--marsilii-background-secondary)] flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                    >
                      <Shield size={64} className="mx-auto mb-4 text-gray-400" />
                    </motion.div>
                    <p className="text-gray-500">Immagine non disponibile</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Informazioni */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isProductInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={isProductInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <motion.span 
                  className="bg-[var(--marsilii-background-secondary)] text-[var(--marsilii-primary)] px-3 py-1 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {category.name}
                </motion.span>
              </motion.div>

              <motion.h1 
                className="text-3xl font-bold text-[var(--marsilii-primary)] mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={isProductInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {product.name}
              </motion.h1>

              <motion.p 
                className="text-lg text-gray-600 mb-8"
                initial={{ opacity: 0, y: -10 }}
                animate={isProductInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                {product.description}
              </motion.p>

              {/* Caratteristiche */}
              {product.specifications && product.specifications.length > 0 && (
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isProductInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <h3 className="text-xl font-semibold text-[var(--marsilii-primary)] mb-4 flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Settings size={20} />
                    </motion.div>
                    Caratteristiche Tecniche
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.specifications.map((spec, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isProductInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-[var(--marsilii-primary)] rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2, delay: index * 0.1 }}
                        ></motion.div>
                        <span className="text-gray-700 w-full">{spec}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Certificazioni */}
              {product.certifications && product.certifications.length > 0 && (
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isProductInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <h3 className="text-xl font-semibold text-[var(--marsilii-primary)] mb-4 flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                    >
                      <Award size={20} />
                    </motion.div>
                    Certificazioni
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert, index) => (
                      <motion.span
                        key={index}
                        className="bg-green-100 text-green-800 px-3 py-2 font-medium"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isProductInfoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {cert}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Azioni */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isProductInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
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
                      startContent={<Mail size={16} />}
                    >
                      Richiedi Preventivo
                    </Button>
                  </motion.div>
                </Link>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    as="a"
                    href="tel:0858624773"
                    className="text-[var(--marsilii-primary)] border-[var(--marsilii-primary)] font-light"
                    variant="bordered"
                    radius="md"
                    size="lg"
                    startContent={<Phone size={16} />}
                  >
                    Chiama Ora
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Informazioni Aggiuntive */}
      <motion.div 
        ref={additionalInfoRef}
        className="py-16 px-4 bg-[var(--marsilii-background-secondary)]"
        initial={{ opacity: 0, y: 30 }}
        animate={isAdditionalInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isAdditionalInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Shield
                  className="mx-auto mb-4 text-[var(--marsilii-primary)]"
                  size={48}
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-[var(--marsilii-primary)] mb-2">
                Garanzia Qualità
              </h3>
              <p className="text-gray-600">
                Tutti i nostri prodotti sono coperti da garanzia e realizzati
                secondo i più alti standard di qualità
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isAdditionalInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ repeat: Infinity, duration: 8 }}
                whileHover={{ scale: 1.1 }}
              >
                <Settings
                  className="mx-auto mb-4 text-[var(--marsilii-primary)]"
                  size={48}
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-[var(--marsilii-primary)] mb-2">
                Installazione Professionale
              </h3>
              <p className="text-gray-600">
                Il nostro team di tecnici specializzati garantisce
                un&apos;installazione perfetta e sicura
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isAdditionalInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Phone
                  className="mx-auto mb-4 text-[var(--marsilii-primary)]"
                  size={48}
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-[var(--marsilii-primary)] mb-2">
                Assistenza Post-Vendita
              </h3>
              <p className="text-gray-600">
                Supporto tecnico continuo e servizio di manutenzione per
                garantire prestazioni ottimali
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Prodotti Correlati */}
      <motion.div 
        ref={relatedProductsRef}
        className="py-16 px-4"
        initial={{ opacity: 0 }}
        animate={isRelatedProductsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-[var(--marsilii-primary)] mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={isRelatedProductsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Altri Prodotti della Categoria
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.products
              .filter((p) => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isRelatedProductsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {relatedProduct.image && (
                    <motion.div 
                      className="relative h-32 bg-gray-100"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-[var(--marsilii-primary)] mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {relatedProduct.description}
                    </p>
                    <Link
                      href={`/products/${categoryId}/${relatedProduct.slug}`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button
                          className="w-full text-[var(--marsilii-primary)] border-[var(--marsilii-primary)] font-light"
                          variant="bordered"
                          radius="md"
                          size="sm"
                        >
                          Visualizza
                        </Button>
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>

          <div className="text-center mt-8">
            <Link href={`/products/${categoryId}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isRelatedProductsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button
                  className="bg-[var(--marsilii-primary)] text-white font-light"
                  radius="md"
                >
                  Vedi Tutti i Prodotti della Categoria
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
