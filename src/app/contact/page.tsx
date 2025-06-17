"use client";

import Hero from "@/components/hero";

import { Button } from "@heroui/react";

// icons
import { MapPin, Phone, Clock5, Send } from "lucide-react";

// Framer Motion
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

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
  // Refs per le animazioni al scroll
  const contactsRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);
  
  // Hook per rilevare quando gli elementi entrano nel viewport
  const contactsInView = useInView(contactsRef, { once: true, amount: 0.2 });
  const formInView = useInView(formRef, { once: true, amount: 0.2 });
  const infoInView = useInView(infoRef, { once: true, amount: 0.2 });
  const mapInView = useInView(mapRef, { once: true, amount: 0.2 });
  
  // Variante per le animazioni delle card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };
  
  return (
    <div>
      <Hero
        title="Contatti"
        subtitle="Siamo a vostra disposizione per fornire consulenza specializzata e supporto tecnico per tutte le vostre esigenze di sicurezza"
        size="sm"
      />

      {/* Contatti con animazioni */}
      <motion.div 
        ref={contactsRef}
        className="py-16 px-4 flex flex-col md:flex-row gap-10 items-center md:justify-evenly"
        initial={{ opacity: 0 }}
        animate={contactsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {about.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-start max-w-[300px] w-full gap-4"
            custom={index}
            initial="hidden"
            animate={contactsInView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div 
              className="w-16 h-16 rounded-full bg-[var(--marsilii-background-secondary)] flex items-center justify-center"
              whileHover={{ scale: 1.1, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <item.icon size={32} />
            </motion.div>
            <motion.p 
              className="font-semibold text-center text-xl"
              initial={{ opacity: 0 }}
              animate={contactsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
            >
              {item.title}
            </motion.p>
            <motion.div 
              className="flex flex-col gap-1"
              initial={{ opacity: 0 }}
              animate={contactsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
            >
              {Array.isArray(item.description)
                ? item.description.map((desc, descIndex) => (
                    <motion.p 
                      key={descIndex} 
                      className="text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={contactsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: 0.5 + (index * 0.1) + (descIndex * 0.05), duration: 0.3 }}
                    >
                      {desc.text}
                    </motion.p>
                  ))
                : null}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Form con animazioni */}
      <motion.div 
        ref={formRef}
        className="px-4 py-8 flex flex-col md:flex-row items-center justify-center gap-10 max-w-[1400px] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {/* Form Message */}
        <motion.div 
          className="flex flex-col items-start gap-8 w-full"
          initial={{ x: -50, opacity: 0 }}
          animate={formInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.p 
            className="text-2xl font-medium"
            initial={{ y: -20, opacity: 0 }}
            animate={formInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Invia una Richiesta
          </motion.p>
          {/* Form */}
          <form className="flex flex-row flex-wrap gap-3 w-full">
            {/* Name & Email */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center w-full gap-6"
              initial={{ y: 30, opacity: 0 }}
              animate={formInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
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
            </motion.div>

            {/* Phone & Company */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center w-full gap-6"
              initial={{ y: 30, opacity: 0 }}
              animate={formInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
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
            </motion.div>

            {/* Message */}
            <motion.div 
              className="w-full"
              initial={{ y: 30, opacity: 0 }}
              animate={formInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label htmlFor="messagge">
                Messaggio <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                placeholder="Descrivi la tua richiesta o le tue esigenze di sicurezza..."
                className="border-[#D1D5DC] border p-4 w-full min-h-[150px]"
                required
              ></textarea>
            </motion.div>

            {/* Send Message */}
            <motion.div 
              className="w-full"
              initial={{ y: 30, opacity: 0 }}
              animate={formInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                radius="none"
                className="bg-[var(--marsilii-primary)] text-white font-light px-10 w-full"
                type="submit"
                size="lg"
              >
                <Send />
                Invia Messaggio
              </Button>
            </motion.div>
          </form>
        </motion.div>

        {/* Info con animazioni */}
        <motion.div 
          ref={infoRef}
          className="flex flex-col items-start w-full gap-6"
          initial={{ x: 50, opacity: 0 }}
          animate={infoInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.p 
            className="font-medium text-2xl"
            initial={{ y: -20, opacity: 0 }}
            animate={infoInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Come possiamo aiutarti
          </motion.p>
          
          {[
            {
              title: "Consulenza Tecnica",
              description: "I nostri esperti sono a disposizione per analizzare le vostre esigenze e proporre la soluzione di sicurezza più adatta al vostro contesto."
            },
            {
              title: "Supporto Post-Vendita",
              description: "Offriamo assistenza tecnica completa, manutenzione e ricambi originali per tutti i nostri prodotti."
            },
            {
              title: "Preventivi Personalizzati",
              description: "Realizziamo preventivi dettagliati e personalizzati per progetti residenziali, commerciali e istituzionali."
            },
            {
              title: "Soluzioni Custom",
              description: "Sviluppiamo soluzioni su misura per esigenze specifiche, leveraging la nostra esperienza ultra-cinquantennale nel settore."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-start gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.15) }}
              whileHover={{ x: 5 }}
            >
              <motion.p 
                className="text-xl font-medium"
                whileHover={{ color: "var(--marsilii-primary)" }}
              >
                {item.title}
              </motion.p>
              <p className="font-light text-lg text-[#4A5565]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* La nostra sede con animazioni */}
      <motion.div 
        ref={mapRef}
        className="w-full py-8 bg-[var(--marsilii-background-secondary)] px-4 flex flex-col items-center gap-4 mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="flex flex-col text-center gap-2"
          initial={{ y: -20, opacity: 0 }}
          animate={mapInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-2xl font-medium">La Nostra Sede</p>
          <p>Vieni a trovarci nella nostra sede di Pescara</p>
        </motion.div>
        <motion.div 
          className="max-w-[1200px] w-full border border-[#D1D5DC] bg-white mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={mapInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.1)" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.217525656386!2d14.19936917648163!3d42.444387629769196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1331a602f7a8dc35%3A0x5784327089bdbf69!2sVia%20Salara%20Vecchia%2C%20136%2C%2065129%20Pescara%20PE!5e0!3m2!1sit!2sit!4v1749828861621!5m2!1sit!2sit"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </div>
  );
}
