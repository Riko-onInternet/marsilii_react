"use client";

import Hero from "@/components/hero";
import { Button } from "@heroui/react";
import { productCategories, downloadableDocuments } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { Download, Eye, ArrowRight } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function ProductsPage() {
  return (
    <div>
      <Hero
        title="I Nostri Prodotti e Servizi"
        subtitle="Soluzioni complete di sicurezza per ogni esigenza: dalle porte blindate civili ai sistemi carcerari, dalle serrature innovative agli accessori specializzati"
        size="sm"
      />

      {/* Slider Prodotti per Categoria */}
      <div className="py-16 px-4">
        <div className="max-w-[1400px] mx-auto">
          {productCategories.map((category) => (
            <div key={category.id} className="mb-16">
              {/* Titolo Categoria */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--marsilii-primary)]">
                      {category.name}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                <Link href={`/products/${category.id}`}>
                  <Button
                    className="text-[var(--marsilii-primary)] border-[var(--marsilii-primary)] font-light hidden md:flex"
                    variant="bordered"
                    radius="md"
                    endContent={<ArrowRight size={16} />}
                  >
                    Vedi Tutti
                  </Button>
                </Link>
              </div>

              {/* Slider Prodotti */}
              <Swiper
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
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
                {/* Prodotti della categoria (max 5) */}
                {category.products.slice(0, 5).map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 h-full">
                      {/* Immagine Prodotto */}
                      <div className="relative h-48 bg-gray-100">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <span className="text-4xl">{category.icon}</span>
                          </div>
                        )}
                      </div>

                      {/* Contenuto */}
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-[var(--marsilii-primary)] mb-2 line-clamp-2">
                          {product.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
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
                                    <span
                                      key={index}
                                      className="bg-[var(--marsilii-background-secondary)] text-xs px-2 py-1 rounded"
                                    >
                                      {spec}
                                    </span>
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
                                    <span
                                      key={index}
                                      className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                                    >
                                      {cert}
                                    </span>
                                  ))}
                              </div>
                            </div>
                          )}

                        <Link href={`/products/${category.id}/${product.slug}`}>
                          <Button
                            className="w-full bg-[var(--marsilii-primary)] text-white font-light"
                            radius="md"
                            size="sm"
                            startContent={<Eye size={14} />}
                          >
                            Dettagli
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                {/* Card "Vedi Tutti" */}
                <SwiperSlide>
                  <div className="bg-gradient-to-br from-[var(--marsilii-primary)] to-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex items-center justify-center">
                    <div className="text-center p-6 text-white">
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <h4 className="text-xl font-semibold mb-3">
                        Scopri Tutti i Prodotti
                      </h4>
                      <p className="text-sm mb-6 opacity-90">
                        Esplora l&apos;intera gamma di prodotti della categoria{" "}
                        {category.name.toLowerCase()}
                      </p>
                      <Link href={`/products/${category.id}`}>
                        <Button
                          className="bg-white text-[var(--marsilii-primary)] font-light"
                          radius="md"
                          endContent={<ArrowRight size={16} />}
                        >
                          Vedi Tutti ({category.products.length})
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* Pulsante Mobile per Vedi Tutti */}
              <div className="text-center mt-6 md:hidden">
                <Link href={`/products/${category.id}`}>
                  <Button
                    className="text-[var(--marsilii-primary)] border-[var(--marsilii-primary)] font-light"
                    variant="bordered"
                    radius="md"
                    endContent={<ArrowRight size={16} />}
                  >
                    Vedi Tutti i Prodotti ({category.products.length})
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sezione Download */}
      <div className="py-16 px-4 bg-[var(--marsilii-background-secondary)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--marsilii-primary)] mb-4">
              Documentazione Tecnica
            </h2>
            <p className="text-lg text-gray-600">
              Scarica i nostri schemi tecnici e guide di installazione
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloadableDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-max"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Download
                    className="text-[var(--marsilii-primary)]"
                    size={24}
                  />
                  <h3 className="font-semibold text-[var(--marsilii-primary)]">
                    {doc.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--marsilii-primary)] mb-4">
            Hai Bisogno di Consulenza?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            I nostri esperti sono a disposizione per aiutarti a scegliere la
            soluzione più adatta alle tue esigenze
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                className="bg-[var(--marsilii-primary)] text-white font-light"
                radius="md"
                size="lg"
              >
                Contattaci
              </Button>
            </Link>
            <Link href="/about">
              <Button
                className="text-[var(--marsilii-primary)] border-[var(--marsilii-primary)] font-light"
                variant="bordered"
                radius="md"
                size="lg"
              >
                Chi Siamo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
