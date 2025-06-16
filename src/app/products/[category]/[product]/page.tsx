"use client";

import { useParams } from "next/navigation";
import Hero from "@/components/hero";
import { Button } from "@heroui/react";
import { getProductBySlug, productCategories } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Phone, Mail, Shield, Award, Settings } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const productSlug = params.product as string;

  const product = getProductBySlug(productSlug);
  const category = productCategories.find((cat) => cat.id === categoryId);

  if (!product || !category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--marsilii-primary)] mb-4">
            Prodotto non trovato
          </h1>
          <Link href="/products">
            <Button
              className="bg-[var(--marsilii-primary)] text-white font-light"
              radius="md"
            >
              Torna ai Prodotti
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Hero
        title={product.name}
        subtitle={product.description}
        size="sm"
        src={product.image}
      />

      {/* Breadcrumb */}
      <div className="py-6 px-4 bg-[var(--marsilii-background-secondary)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link
              href="/products"
              className="hover:text-[var(--marsilii-primary)]"
            >
              Prodotti
            </Link>
            <span>/</span>
            <Link
              href={`/products/${categoryId}`}
              className="hover:text-[var(--marsilii-primary)]"
            >
              {category.name}
            </Link>
            <span>/</span>
            <span className="text-[var(--marsilii-primary)] font-medium">
              {product.name}
            </span>
          </div>
          <div className="mt-4">
            <Link href={`/products/${categoryId}`}>
              <Button
                className="text-[var(--marsilii-primary)] font-light"
                variant="light"
                startContent={<ArrowLeft size={16} />}
              >
                Torna alla Categoria
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Dettagli Prodotto */}
      <div className="py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Immagine */}
            <div className="">
              {product.image ? (
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-square bg-[var(--marsilii-background-secondary)] rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Shield size={64} className="mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-500">Immagine non disponibile</p>
                  </div>
                </div>
              )}
            </div>

            {/* Informazioni */}
            <div className="">
              <div className="mb-6">
                <span className="bg-[var(--marsilii-background-secondary)] text-[var(--marsilii-primary)] px-3 py-1 rounded-full text-sm font-medium">
                  {category.name}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-[var(--marsilii-primary)] mb-4">
                {product.name}
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                {product.description}
              </p>

              {/* Caratteristiche */}
              {product.specifications && product.specifications.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[var(--marsilii-primary)] mb-4 flex items-center gap-2">
                    <Settings size={20} />
                    Caratteristiche Tecniche
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[var(--marsilii-primary)] rounded-full"></div>
                        <span className="text-gray-700 w-full">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certificazioni */}
              {product.certifications && product.certifications.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[var(--marsilii-primary)] mb-4 flex items-center gap-2">
                    <Award size={20} />
                    Certificazioni
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 px-3 py-2 rounded-lg font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Azioni */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    className="bg-[var(--marsilii-primary)] text-white font-light"
                    radius="md"
                    size="lg"
                    startContent={<Mail size={16} />}
                  >
                    Richiedi Preventivo
                  </Button>
                </Link>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Informazioni Aggiuntive */}
      <div className="py-16 px-4 bg-[var(--marsilii-background-secondary)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield
                className="mx-auto mb-4 text-[var(--marsilii-primary)]"
                size={48}
              />
              <h3 className="text-xl font-semibold text-[var(--marsilii-primary)] mb-2">
                Garanzia Qualità
              </h3>
              <p className="text-gray-600">
                Tutti i nostri prodotti sono coperti da garanzia e realizzati
                secondo i più alti standard di qualità
              </p>
            </div>
            <div className="text-center">
              <Settings
                className="mx-auto mb-4 text-[var(--marsilii-primary)]"
                size={48}
              />
              <h3 className="text-xl font-semibold text-[var(--marsilii-primary)] mb-2">
                Installazione Professionale
              </h3>
              <p className="text-gray-600">
                Il nostro team di tecnici specializzati garantisce
                un&apos;installazione perfetta e sicura
              </p>
            </div>
            <div className="text-center">
              <Phone
                className="mx-auto mb-4 text-[var(--marsilii-primary)]"
                size={48}
              />
              <h3 className="text-xl font-semibold text-[var(--marsilii-primary)] mb-2">
                Assistenza Post-Vendita
              </h3>
              <p className="text-gray-600">
                Supporto tecnico continuo e servizio di manutenzione per
                garantire prestazioni ottimali
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Prodotti Correlati */}
      <div className="py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold text-[var(--marsilii-primary)] mb-8 text-center">
            Altri Prodotti della Categoria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.products
              .filter((p) => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                  {relatedProduct.image && (
                    <div className="relative h-32 bg-gray-100">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
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
                      <Button
                        className="w-full text-[var(--marsilii-primary)] border-[var(--marsilii-primary)] font-light"
                        variant="bordered"
                        radius="md"
                        size="sm"
                      >
                        Visualizza
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          <div className="text-center mt-8">
            <Link href={`/products/${categoryId}`}>
              <Button
                className="bg-[var(--marsilii-primary)] text-white font-light"
                radius="md"
              >
                Vedi Tutti i Prodotti della Categoria
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
