"use client";

import { useParams } from "next/navigation";
import Hero from "@/components/hero";
import { Button, Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { productCategories, getProductsByCategory } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Eye } from "lucide-react";
import AccentedText from "@/components/AccentedText";

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;

  const category = productCategories.find((cat) => cat.id === categoryId);
  const products = getProductsByCategory(categoryId);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
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
        </div>
      </div>
    );
  }

  return (
    <div>
      <Hero title={category.name} subtitle={category.description} size="sm" />

      {/* Breadcrumb e Back Button */}
      <div className="py-6 px-4 bg-[var(--marsilii-background-secondary)]">
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
          </Link>
        </div>
      </div>

      {/* Lista Prodotti */}
      <div className="py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                {product.image && (
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
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
                              <span
                                key={index}
                                className="bg-[var(--marsilii-background-secondary)] text-xs px-2 py-1 rounded"
                              >
                                <AccentedText
                                  text={`${spec}`}
                                  baseWeight={300}
                                  accentWeight={500}
                                />
                              </span>
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
                              <span
                                key={index}
                                className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                              >
                                <AccentedText
                                  text={`${cert}`}
                                  baseWeight={300}
                                  accentWeight={500}
                                />
                              </span>
                            ))}
                          {product.certifications.length > 2 && (
                            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                              <AccentedText
                                text={`+${
                                  product.certifications.length - 2
                                } certificati`}
                                baseWeight={300}
                                accentWeight={500}
                              />
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                  <Link href={`/products/${categoryId}/${product.slug}`}>
                    <Button
                      className="w-full bg-[var(--marsilii-primary)] text-white font-light"
                      radius="md"
                      startContent={<Eye size={16} />}
                    >
                      <AccentedText
                        text="Visualizza Dettagli"
                        baseWeight={300}
                        accentWeight={500}
                      />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4 bg-[var(--marsilii-background-secondary)]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl font-bold text-[var(--marsilii-primary)] mb-4">
            <AccentedText
              text="Interessato a questi prodotti?"
              baseWeight={600}
              accentWeight={800}
            />
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            <AccentedText
              text="Contattaci per ricevere informazioni dettagliate e preventivi personalizzati"
              baseWeight={300}
              accentWeight={500}
            />
          </p>
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
        </div>
      </div>
    </div>
  );
}
