export interface DownloadableDocument {
  id: string;
  name: string;
  description: string;
  fileUrl: string;
  category?: string;
  fileSize?: string;
  fileType?: string;
  lastUpdated?: string;
}

export const downloadableDocuments: DownloadableDocument[] = [
  {
    id: "scheda-tecnica-porte-blindate",
    name: "Scheda Tecnica Porte Blindate",
    description: "Specifiche tecniche dettagliate per l'installazione e la manutenzione delle porte blindate Marsilii",
    fileUrl: "/documents/scheda-tecnica-porte-blindate.pdf",
    category: "porte-blindate-civili",
    fileSize: "2.4 MB",
    fileType: "PDF",
    lastUpdated: "2023-09-15"
  },
  {
    id: "manuale-installazione-porte-estro",
    name: "Manuale di Installazione Linea Estro",
    description: "Guida passo-passo per l'installazione corretta delle porte blindate della linea Estro",
    fileUrl: "/documents/manuale-installazione-estro.pdf",
    category: "porte-blindate-civili",
    fileSize: "3.1 MB",
    fileType: "PDF",
    lastUpdated: "2023-10-20"
  },
  {
    id: "certificazioni-porte-blindate",
    name: "Certificazioni e Normative",
    description: "Documentazione completa sulle certificazioni di sicurezza e le normative rispettate dai prodotti Marsilii",
    fileUrl: "/documents/certificazioni-porte-blindate.pdf",
    category: "certificazioni",
    fileSize: "1.8 MB",
    fileType: "PDF",
    lastUpdated: "2023-11-05"
  },
  {
    id: "catalogo-prodotti-2023",
    name: "Catalogo Prodotti 2023",
    description: "Catalogo completo della gamma di prodotti Marsilii con specifiche tecniche e opzioni disponibili",
    fileUrl: "/documents/catalogo-prodotti-2023.pdf",
    fileSize: "5.2 MB",
    fileType: "PDF",
    lastUpdated: "2023-08-01"
  },
  {
    id: "guida-manutenzione",
    name: "Guida alla Manutenzione",
    description: "Consigli e procedure per la corretta manutenzione dei prodotti Marsilii per garantirne la durata nel tempo",
    fileUrl: "/documents/guida-manutenzione.pdf",
    fileSize: "1.5 MB",
    fileType: "PDF",
    lastUpdated: "2023-07-12"
  },
  {
    id: "schemi-tecnici-serrature",
    name: "Schemi Tecnici Serrature",
    description: "Dettagli tecnici e schemi di montaggio per le serrature di sicurezza utilizzate nei prodotti Marsilii",
    fileUrl: "/documents/schemi-tecnici-serrature.pdf",
    category: "componenti",
    fileSize: "1.9 MB",
    fileType: "PDF",
    lastUpdated: "2023-09-30"
  }
];

export const getDocumentsByCategory = (categoryId: string): DownloadableDocument[] => {
  return downloadableDocuments.filter(doc => doc.category === categoryId);
};

export const getDocumentById = (documentId: string): DownloadableDocument | undefined => {
  return downloadableDocuments.find(doc => doc.id === documentId);
};