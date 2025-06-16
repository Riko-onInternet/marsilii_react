export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image?: string;
  specifications?: string[];
  certifications?: string[];
  slug: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "porte-blindate-civili",
    name: "Porte e Infissi Blindati Civili",
    description: "Soluzioni di sicurezza per abitazioni private con tecnologie all'avanguardia",
    icon: "🏠",
    products: [
      {
        id: "porta-estro",
        name: "Porta Estro",
        description: "Porta blindata Classe 4 con design moderno e massima sicurezza",
        category: "porte-blindate-civili",
        image: "/img/bannerestro.jpg",
        specifications: ["Classe 4", "Design moderno", "Chiusura automatica"],
        certifications: ["Certificata Classe 4"],
        slug: "porta-estro"
      },
      {
        id: "porta-estro-zelo",
        name: "Porta Estro Finitura Zelo",
        description: "Porta blindata Classe 4 con finitura Zelo per un'estetica raffinata",
        category: "porte-blindate-civili",
        image: "/img/02_Modello-Zelo-Boiserie_Vista_02_05_.jpg",
        specifications: ["Classe 4", "Finitura Zelo", "Estetica raffinata"],
        certifications: ["Certificata Classe 4"],
        slug: "porta-estro-zelo"
      },
      {
        id: "porta-zelo-marsilii",
        name: "Porta Zelo Marsilii",
        description: "Porta blindata in attesa di certificazione Classe 5",
        category: "porte-blindate-civili",
        image: "/img/02_Modello-Zelo-Boiserie_Vista_07_01_.jpg",
        specifications: ["In attesa certificazione Classe 5", "Tecnologia Marsilii"],
        certifications: ["In attesa di certificazione Classe 5"],
        slug: "porta-zelo-marsilii"
      },
      {
        id: "porta-ei120-tagliafuoco",
        name: "Porta EI-120 Tagliafuoco Blindata",
        description: "Porta blindata certificata Classe 4 e REI 120 per massima protezione",
        category: "porte-blindate-civili",
        image: "/img/03_Modello_Estro_Vista_03b_02_.jpg",
        specifications: ["Classe 4", "REI 120", "Resistenza al fuoco"],
        certifications: ["Certificata Classe 4", "REI 120"],
        slug: "porta-ei120-tagliafuoco"
      },
      {
        id: "porta-satus",
        name: "Porta Satus",
        description: "Porta blindata in attesa di certificazione Classe 4",
        category: "porte-blindate-civili",
        specifications: ["In attesa certificazione Classe 4"],
        certifications: ["In attesa di certificazione Classe 4"],
        slug: "porta-satus"
      },
      {
        id: "porta-custos",
        name: "Porta Custos",
        description: "Porta blindata adatta per le ristrutturazioni",
        category: "porte-blindate-civili",
        image: "/img/05_Custos_Esterno_Vista_02_04_.jpg",
        specifications: ["Adatta per ristrutturazioni", "Installazione facilitata"],
        slug: "porta-custos"
      },
      {
        id: "grate-persiane-vetrate",
        name: "Grate, Persiane e Vetrate Blindate",
        description: "Soluzioni blindate fisse, apribili e su misura",
        category: "porte-blindate-civili",
        specifications: ["Fisse", "Apribili", "Su misura"],
        slug: "grate-persiane-vetrate"
      }
    ]
  },
  {
    id: "infissi-arredi-carcerari",
    name: "Infissi e Arredi Carcerari",
    description: "Soluzioni specializzate per istituti penitenziari e strutture di sicurezza",
    icon: "🏛️",
    products: [
      {
        id: "porta-tamburata-cavedi",
        name: "Porta Tamburata per Cavedi",
        description: "Porta specializzata per cavedi in ambito carcerario",
        category: "infissi-arredi-carcerari",
        slug: "porta-tamburata-cavedi"
      },
      {
        id: "porta-tamburata-sportello",
        name: "Porta Tamburata con Sportello di Ispezione",
        description: "Porta con sportello integrato per controlli di sicurezza",
        category: "infissi-arredi-carcerari",
        slug: "porta-tamburata-sportello"
      },
      {
        id: "porta-sportellone-detentive",
        name: "Porta con Sportellone per Aree Detentive",
        description: "Porta rinforzata per aree ad alta sicurezza",
        category: "infissi-arredi-carcerari",
        slug: "porta-sportellone-detentive"
      },
      {
        id: "porta-monoblocco-cancello",
        name: "Porta Monoblocco Anta + Cancello",
        description: "Sistema integrato porta e cancello per aree detentive",
        category: "infissi-arredi-carcerari",
        slug: "porta-monoblocco-cancello"
      },
      {
        id: "porte-servizi-igienici",
        name: "Porte per Servizi Igienici",
        description: "Porte battente e tipo saloon per servizi igienici",
        category: "infissi-arredi-carcerari",
        specifications: ["Battente", "Tipo Saloon"],
        slug: "porte-servizi-igienici"
      },
      {
        id: "cancelli-sbarramento",
        name: "Cancelli di Sbarramento",
        description: "Cancelli tamburati e ciechi per controllo accessi",
        category: "infissi-arredi-carcerari",
        specifications: ["Tamburati", "Ciechi"],
        slug: "cancelli-sbarramento"
      },
      {
        id: "portoni-carrai",
        name: "Portoni Carrai",
        description: "Portoni a battente e scorrevoli per accessi veicolari",
        category: "infissi-arredi-carcerari",
        specifications: ["A battente", "Scorrevoli"],
        slug: "portoni-carrai"
      },
      {
        id: "box-vetrate-blindate",
        name: "Box e Vetrate Blindate",
        description: "Soluzioni blindate trasparenti per controllo visivo",
        category: "infissi-arredi-carcerari",
        slug: "box-vetrate-blindate"
      },
      {
        id: "recinzioni",
        name: "Recinzioni",
        description: "Sistemi di recinzione per perimetri di sicurezza",
        category: "infissi-arredi-carcerari",
        slug: "recinzioni"
      },
      {
        id: "motorizzazioni-consolle",
        name: "Motorizzazioni e Consolle di Comando",
        description: "Sistemi automatizzati per controllo accessi",
        category: "infissi-arredi-carcerari",
        slug: "motorizzazioni-consolle"
      },
      {
        id: "serramenti-taglio-termico",
        name: "Serramenti a Taglio Termico",
        description: "Serramenti con isolamento termico per efficienza energetica",
        category: "infissi-arredi-carcerari",
        slug: "serramenti-taglio-termico"
      },
      {
        id: "inferiate-sicurezza",
        name: "Inferiate di Sicurezza Penitenziaria",
        description: "Grate antiseghetto per massima sicurezza",
        category: "infissi-arredi-carcerari",
        specifications: ["Antiseghetto"],
        slug: "inferiate-sicurezza"
      },
      {
        id: "rete-antigetto",
        name: "Rete Antigetto",
        description: "Protezione contro lanci di oggetti",
        category: "infissi-arredi-carcerari",
        slug: "rete-antigetto"
      },
      {
        id: "sportelli-oscuranti",
        name: "Sportelli Oscuranti",
        description: "Sistemi di oscuramento per controllo luminosità",
        category: "infissi-arredi-carcerari",
        slug: "sportelli-oscuranti"
      },
      {
        id: "spioncini-vetrati",
        name: "Spioncini Vetrati",
        description: "Spioncini fissi e apribili per controllo visivo",
        category: "infissi-arredi-carcerari",
        specifications: ["Fissi", "Apribili"],
        slug: "spioncini-vetrati"
      },
      {
        id: "arredi-detentivi",
        name: "Arredi Detentivi",
        description: "Mobilio specializzato per celle e aree comuni",
        category: "infissi-arredi-carcerari",
        specifications: ["Letti", "Comodini", "Armadietti pensili", "Tavoli", "Panche"],
        slug: "arredi-detentivi"
      },
      {
        id: "armadi-sicurezza",
        name: "Armadi di Sicurezza e Casellari",
        description: "Sistemi di stoccaggio sicuro per oggetti personali",
        category: "infissi-arredi-carcerari",
        slug: "armadi-sicurezza"
      },
      {
        id: "soluzioni-speciali",
        name: "Soluzioni Speciali",
        description: "Progetti personalizzati per carceri, istituti e celle",
        category: "infissi-arredi-carcerari",
        slug: "soluzioni-speciali"
      }
    ]
  },
  {
    id: "serrature-sicurezza",
    name: "Serrature di Sicurezza",
    description: "Sistemi di chiusura innovativi con tecnologia brevettata Marsilii",
    icon: "🔐",
    products: [
      {
        id: "custos-1-punto",
        name: "Custos ad 1 Punto di Chiusura",
        description: "Serratura a chiusura automatica con 1 punto di ancoraggio",
        category: "serrature-sicurezza",
        slug: "custos-1-punto"
      },
      {
        id: "custos-1-2-punti",
        name: "Custos Compatibile 1 o 2 Punti",
        description: "Serratura versatile compatibile con 1 o 2 punti di chiusura",
        category: "serrature-sicurezza",
        slug: "custos-1-2-punti"
      },
      {
        id: "custos-elettrica",
        name: "Custos Elettrica",
        description: "Versione elettronica della serratura Custos",
        category: "serrature-sicurezza",
        slug: "custos-elettrica"
      },
      {
        id: "trium-elettrica",
        name: "Trium Elettrica",
        description: "Serratura elettrica a 3 punti di chiusura",
        category: "serrature-sicurezza",
        specifications: ["3 punti di chiusura", "Elettrica"],
        slug: "trium-elettrica"
      },
      {
        id: "tutor-manuale-elettrica",
        name: "Tutor Manuale e Elettrica",
        description: "Serratura disponibile in versione manuale ed elettrica",
        category: "serrature-sicurezza",
        specifications: ["Manuale", "Elettrica"],
        slug: "tutor-manuale-elettrica"
      },
      {
        id: "tutor-k-kromer",
        name: "Tutor K (Compatibile Kromer)",
        description: "Serratura compatibile Kromer in versione manuale ed elettrica",
        category: "serrature-sicurezza",
        specifications: ["Compatibile Kromer", "Manuale", "Elettrica"],
        slug: "tutor-k-kromer"
      },
      {
        id: "hook-gancio",
        name: "Hook (a Gancio)",
        description: "Serratura a gancio manuale ed elettrica, con o senza funzione scrocco",
        category: "serrature-sicurezza",
        specifications: ["A gancio", "Manuale", "Elettrica", "Con/senza scrocco"],
        slug: "hook-gancio"
      },
      {
        id: "serratura-fascia-antibarricamento",
        name: "Serratura a Fascia Antibarricamento",
        description: "Serratura di serie sulle porte blindate civili Marsilii",
        category: "serrature-sicurezza",
        specifications: ["Di serie su porte blindate civili"],
        slug: "serratura-fascia-antibarricamento"
      },
      {
        id: "applicazione-axe",
        name: "Applicazione AXE",
        description: "Sistema di applicazione specializzato AXE",
        category: "serrature-sicurezza",
        slug: "applicazione-axe"
      }
    ]
  },
  {
    id: "infissi-non-blindati",
    name: "Infissi Non Blindati",
    description: "Soluzioni tradizionali per porte, finestre e serramenti",
    icon: "🚪",
    products: [
      {
        id: "porte-interne",
        name: "Porte Interne",
        description: "Porte per interni in vari materiali e finiture",
        category: "infissi-non-blindati",
        slug: "porte-interne"
      },
      {
        id: "finestre-vetrate-portoncini",
        name: "Finestre, Vetrate e Portoncini",
        description: "Serramenti in alluminio e PVC per ogni esigenza",
        category: "infissi-non-blindati",
        specifications: ["Alluminio", "PVC"],
        slug: "finestre-vetrate-portoncini"
      },
      {
        id: "zanzariere",
        name: "Zanzariere",
        description: "Protezione dagli insetti in diverse tipologie",
        category: "infissi-non-blindati",
        specifications: ["Avvolgibili", "Scorrevoli", "Fisse"],
        slug: "zanzariere"
      },
      {
        id: "persiane-alluminio",
        name: "Persiane in Alluminio",
        description: "Persiane resistenti e durevoli in alluminio",
        category: "infissi-non-blindati",
        slug: "persiane-alluminio"
      },
      {
        id: "portoni-sezionali",
        name: "Portoni Sezionali",
        description: "Portoni sezionali per garage e capannoni",
        category: "infissi-non-blindati",
        slug: "portoni-sezionali"
      }
    ]
  },
  {
    id: "accessori",
    name: "Accessori",
    description: "Complementi e accessori per completare i sistemi di sicurezza",
    icon: "🔧",
    products: [
      {
        id: "maniglioni-inox-design",
        name: "Maniglioni Inox Design Marsilii",
        description: "Maniglioni in acciaio inox con design esclusivo Marsilii",
        category: "accessori",
        slug: "maniglioni-inox-design"
      },
      {
        id: "pomo-inox-design",
        name: "Pomo Inox Design Marsilii",
        description: "Pomo in acciaio inox con design esclusivo Marsilii",
        category: "accessori",
        slug: "pomo-inox-design"
      },
      {
        id: "maniglia-classica-serie",
        name: "Maniglia Classica di Serie",
        description: "Maniglia standard inclusa nelle forniture Marsilii",
        category: "accessori",
        slug: "maniglia-classica-serie"
      },
      {
        id: "maniglia-rotativa-push",
        name: "Maniglia Rotativa Push",
        description: "Maniglia con meccanismo rotativo e funzione push",
        category: "accessori",
        slug: "maniglia-rotativa-push"
      },
      {
        id: "maniglia-scorrevole",
        name: "Maniglia Scorrevole",
        description: "Maniglia con meccanismo scorrevole",
        category: "accessori",
        slug: "maniglia-scorrevole"
      },
      {
        id: "serratura-porte-interno-push",
        name: "Serratura per Porte da Interno con Maniglia Rotativa Push",
        description: "Sistema completo serratura e maniglia per porte interne",
        category: "accessori",
        slug: "serratura-porte-interno-push"
      },
      {
        id: "lettore-biometrico",
        name: "Lettore Biometrico",
        description: "Sistema di accesso biometrico per massima sicurezza",
        category: "accessori",
        slug: "lettore-biometrico"
      },
      {
        id: "pomo-inox-biometrico",
        name: "Pomo Inox con Lettore Biometrico Integrato",
        description: "Pomo in acciaio inox con lettore biometrico integrato",
        category: "accessori",
        slug: "pomo-inox-biometrico"
      }
    ]
  }
];

export const downloadableDocuments = [
  {
    id: "schema-montaggio-controtelaio",
    name: "Schema di Montaggio del Controtelaio",
    description: "Guida tecnica per l'installazione del controtelaio",
    fileUrl: "/downloads/schema-montaggio-controtelaio.pdf"
  },
  {
    id: "schema-motorizzazione",
    name: "Schema per la Predisposizione della Motorizzazione",
    description: "Istruzioni per la predisposizione dei sistemi motorizzati",
    fileUrl: "/downloads/schema-predisposizione-motorizzazione.pdf"
  },
  {
    id: "schemi-apertura-serrature",
    name: "Schemi per Versi di Apertura delle Serrature",
    description: "Diagrammi tecnici per l'orientamento delle serrature",
    fileUrl: "/downloads/schemi-versi-apertura-serrature.pdf"
  }
];

// Funzioni helper
export const getProductsByCategory = (categoryId: string): Product[] => {
  const category = productCategories.find(cat => cat.id === categoryId);
  return category ? category.products : [];
};

export const getProductBySlug = (slug: string): Product | undefined => {
  for (const category of productCategories) {
    const product = category.products.find(p => p.slug === slug);
    if (product) return product;
  }
  return undefined;
};

export const getCategoryByProduct = (productId: string): ProductCategory | undefined => {
  return productCategories.find(category => 
    category.products.some(product => product.id === productId)
  );
};