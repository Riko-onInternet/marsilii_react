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
  // Documenti A1 - Porta Estro
  {
    id: "permeabilita-aria-acqua-vento-a1",
    name: "Permeabilità all'Aria, Tenuta All'Acqua e Resistenza al Vento",
    description: "Certificazione delle prestazioni di permeabilità all'aria, tenuta all'acqua e resistenza al vento per la Porta Blindata Linea Estro",
    fileUrl: "/doc/a1/Permeabilità allAria, Tenuta All_Acqua e Resistenza al vento 2017.pdf",
    category: "porte-blindate-civili",
    fileSize: "1.8 MB",
    fileType: "PDF",
    lastUpdated: "2017"
  },
  {
    id: "potere-fonoisolante-a1",
    name: "Potere Fonoisolante",
    description: "Certificazione dell'isolamento acustico e del potere fonoisolante della Porta Blindata Linea Estro",
    fileUrl: "/doc/a1/Potere Fonoisolante 2017.pdf",
    category: "porte-blindate-civili",
    fileSize: "1.5 MB",
    fileType: "PDF",
    lastUpdated: "2017"
  },
  {
    id: "resistenza-fuoco-a1",
    name: "Resistenza al Fuoco",
    description: "Certificazione della resistenza al fuoco della Porta Blindata Linea Estro",
    fileUrl: "/doc/a1/Resistenza a Fuoco.pdf",
    category: "porte-blindate-civili",
    fileSize: "1.6 MB",
    fileType: "PDF",
    lastUpdated: "2017"
  },
  {
    id: "resistenza-azione-manuale-a1",
    name: "Resistenza all'Azione Manuale",
    description: "Certificazione della resistenza all'effrazione e all'azione manuale della Porta Blindata Linea Estro",
    fileUrl: "/doc/a1/Resistenza all_Azione Manuale 2017.pdf",
    category: "porte-blindate-civili",
    fileSize: "1.7 MB",
    fileType: "PDF",
    lastUpdated: "2017"
  },
  {
    id: "trasmittanza-termica-a1",
    name: "Trasmittanza Termica",
    description: "Certificazione dell'isolamento termico e della trasmittanza termica della Porta Blindata Linea Estro",
    fileUrl: "/doc/a1/Trasmittanza Termica 2017.pdf",
    category: "porte-blindate-civili",
    fileSize: "1.4 MB",
    fileType: "PDF",
    lastUpdated: "2017"
  },
  
  // Documenti A2 - Porta Estro Zelo
  {
    id: "permeabilita-aria-acqua-vento-a2",
    name: "Permeabilità all'Aria, Tenuta All'Acqua e Resistenza al Vento - Zelo",
    description: "Certificazione delle prestazioni di permeabilità all'aria, tenuta all'acqua e resistenza al vento per la Porta Blindata Linea Estro con finitura Zelo",
    fileUrl: "/doc/a2/Permeabilità allAria, Tenuta All_Acqua e Resistenza al vento 2017.pdf",
    category: "porte-blindate-civili",
    fileSize: "1.8 MB",
    fileType: "PDF",
    lastUpdated: "2017"
  },
  {
    id: "potere-fonoisolante-a2",
    name: "Potere Fonoisolante - Zelo",
    description: "Certificazione dell'isolamento acustico e del potere fonoisolante della Porta Blindata Linea Estro con finitura Zelo",
    fileUrl: "/doc/a2/Potere Fonoisolante 2017.pdf",
    category: "porte-blindate-civili",
    fileSize: "1.5 MB",
    fileType: "PDF",
    lastUpdated: "2017"
  },
  {
    id: "resistenza-fuoco-a2",
    name: "Resistenza al Fuoco - Zelo",
    description: "Certificazione della resistenza al fuoco della Porta Blindata Linea Estro con finitura Zelo",
    fileUrl: "/doc/a2/Resistenza a Fuoco.pdf",
    category: "porte-blindate-civili",
    fileSize: "1.6 MB",
    fileType: "PDF",
    lastUpdated: "2017"
  },
  {
    id: "resistenza-azione-manuale-a2",
    name: "Resistenza all'Azione Manuale - Zelo",
    description: "Certificazione della resistenza all'effrazione e all'azione manuale della Porta Blindata Linea Estro con finitura Zelo",
    fileUrl: "/doc/a2/Resistenza all_Azione Manuale 2017.pdf",
    category: "porte-blindate-civili",
    fileSize: "1.7 MB",
    fileType: "PDF",
    lastUpdated: "2017"
  },
  {
    id: "trasmittanza-termica-a2",
    name: "Trasmittanza Termica - Zelo",
    description: "Certificazione dell'isolamento termico e della trasmittanza termica della Porta Blindata Linea Estro con finitura Zelo",
    fileUrl: "/doc/a2/Trasmittanza Termica 2017.pdf",
    category: "porte-blindate-civili",
    fileSize: "1.4 MB",
    fileType: "PDF",
    lastUpdated: "2017"
  },
  
  // Documenti A3 - Porta Tagliafuoco EI-120
  {
    id: "omologazione-porta-ei120",
    name: "Omologazione Porta EI 120",
    description: "Certificato di omologazione della Porta Blindata Tagliafuoco con resistenza al fuoco EI 120",
    fileUrl: "/doc/a3/OMOLOGAZIONE PORTA EI 120.pdf",
    category: "porte-blindate-civili",
    fileSize: "2.1 MB",
    fileType: "PDF",
    lastUpdated: "2020"
  },
  {
    id: "rinnovo-omologazione-ei120",
    name: "Rinnovo Omologazione EI 120",
    description: "Documento di rinnovo della certificazione e omologazione della Porta Blindata Tagliafuoco EI 120",
    fileUrl: "/doc/a3/Rinnovo omologazione EI120.pdf",
    category: "porte-blindate-civili",
    fileSize: "1.9 MB",
    fileType: "PDF",
    lastUpdated: "2022"
  }
];

export const getDocumentsByCategory = (categoryId: string): DownloadableDocument[] => {
  return downloadableDocuments.filter(doc => doc.category === categoryId);
};

export const getDocumentById = (documentId: string): DownloadableDocument | undefined => {
  return downloadableDocuments.find(doc => doc.id === documentId);
};