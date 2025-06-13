"use client";

import Hero from "@/components/hero";

import { Button } from "@heroui/react";

// icons
import { MapPin, Phone, Clock5, Send } from "lucide-react";

const about = [
  {
    icon: MapPin,
    title: "Sede Principale",
    description: [
      {
        text: "Via Salara Vecchia, 136",
      },
      {
        text: "65129 Pescara",
      },
      {
        text: "Italia",
      },
    ],
  },
  {
    icon: Phone,
    title: "Contatti Diretti",
    description: [
      {
        text: "Tel: 085 8624773",
      },
      {
        text: "Email: info@marsiliiserrature.it",
      },
      {
        text: "P.I. C.F. 01937080685",
      },
    ],
  },
  {
    icon: Clock5,
    title: "Orari di Ufficio",
    description: [
      {
        text: "Lunedì - Venerdì",
      },
      {
        text: "8:30 - 12:30 | 14:30 - 18:30",
      },
      {
        text: "Sabato su appuntamento",
      },
    ],
  },
];

export default function About() {
  return (
    <div>
      <Hero
        title="Contatti"
        subtitle="Siamo a vostra disposizione per fornire consulenza specializzata e supporto tecnico per tutte le vostre esigenze di sicurezza"
        size="sm"
      />

      {/* Contatti */}
      <div className="py-16 px-4 flex flex-col md:flex-row gap-10 items-center md:justify-evenly">
        {about.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start max-w-[300px] w-full gap-4"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--marsilii-background-secondary)] flex items-center justify-center">
              <item.icon size={32} />
            </div>
            <p className="font-semibold text-center text-xl">{item.title}</p>
            <div className="flex flex-col gap-1">
              {Array.isArray(item.description)
                ? item.description.map((desc, index) => (
                    <p key={index} className="text-center">
                      {desc.text}
                    </p>
                  ))
                : null}
            </div>
          </div>
        ))}
      </div>

      {/* Form */}
      <div className="px-4 py-8 flex flex-col md:flex-row items-center justify-center gap-10 max-w-[1400px] mx-auto">
        {/* Form Message */}
        <div className="flex flex-col items-start gap-8 w-full">
          <p className="text-2xl font-medium">Invia una Richiesta</p>
          {/* Form */}
          <form className="flex flex-row flex-wrap gap-3 w-full">
            {/* Name & Email */}
            <div className="flex flex-col sm:flex-row items-center w-full gap-6">
              <div className="flex flex-col items-start w-full">
                <label htmlFor="name">
                  Nome <span className="text-red-600">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Il tuo nome"
                  className="border-[#D1D5DC] border p-4 w-full"
                  required
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <label htmlFor="email">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Il tuo nome"
                  className="border-[#D1D5DC] border p-4 w-full"
                  required
                />
              </div>
            </div>

            {/* Phone & Company */}
            <div className="flex flex-col sm:flex-row  items-center w-full gap-6">
              <div className="flex flex-col items-start w-full">
                <label htmlFor="phone">Telefono</label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Il tuo nome"
                  className="border-[#D1D5DC] border p-4 w-full"
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <label htmlFor="company">Azienda</label>
                <input
                  id="company"
                  type="text"
                  placeholder="Il tuo nome"
                  className="border-[#D1D5DC] border p-4 w-full"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="w-full">
              <label htmlFor="messagge">
                Messaggio <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                placeholder="Descrivi la tua richiesta o le tue esigenze di sicurezza..."
                className="border-[#D1D5DC] border p-4 w-full min-h-[150px]"
                required
              ></textarea>
            </div>

            {/* Send Message */}
            <div className="w-full">
              <Button
                radius="none"
                className="bg-[var(--marsilii-primary)] text-white font-light px-10 w-full"
                type="submit"
                size="lg"
              >
                <Send />
                Invia Messaggio
              </Button>
            </div>
          </form>
        </div>

        {/* Info */}
        <div className="flex flex-col items-start w-full gap-6">
          <p className="font-medium text-2xl">Come possiamo aiutarti</p>
          <div className="flex flex-col items-start gap-2">
            <p className="text-xl font-medium">Consulenza Tecnica</p>
            <p className="font-light text-lg text-[#4A5565]">
              I nostri esperti sono a disposizione per analizzare le vostre
              esigenze e proporre la soluzione di sicurezza pi
              <span className="font-semibold">ù</span> adatta al vostro
              contesto.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-xl font-medium">Supporto Post-Vendita</p>
            <p className="font-light text-lg text-[#4A5565]">
              Offriamo assistenza tecnica completa, manutenzione e ricambi
              originali per tutti i nostri prodotti.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-xl font-medium">Preventivi Personalizzati</p>
            <p className="font-light text-lg text-[#4A5565]">
              Realizziamo preventivi dettagliati e personalizzati per progetti
              residenziali, commerciali e istituzionali.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-xl font-medium">Soluzioni Custom</p>
            <p className="font-light text-lg text-[#4A5565]">
              Sviluppiamo soluzioni su misura per esigenze specifiche,
              leveraging la nostra esperienza ultra-cinquantennale nel settore.
            </p>
          </div>
        </div>
      </div>
      {/* La nostra sede */}
      <div className="w-full py-8 bg-[var(--marsilii-background-secondary)] px-4 flex flex-col items-center gap-4 mt-10">
        <div className="flex flex-col text-center gap-2">
          <p className="text-2xl font-medium">La Nostra Sede</p>
          <p>Vieni a trovarci nella nostra sede di Pescara</p>
        </div>
        <div className="max-w-[1200px] w-full border border-[#D1D5DC] bg-white mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.217525656386!2d14.19936917648163!3d42.444387629769196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1331a602f7a8dc35%3A0x5784327089bdbf69!2sVia%20Salara%20Vecchia%2C%20136%2C%2065129%20Pescara%20PE!5e0!3m2!1sit!2sit!4v1749828861621!5m2!1sit!2sit"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
