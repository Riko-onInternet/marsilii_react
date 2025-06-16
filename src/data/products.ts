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
      // Porte Estro (A1)
      {
        id: "porta-estro",
        name: "Porta Blindata Linea Estro",
        description: "Porta blindata Classe RC4 con serratura a chiusura automatica meccanica brevettata. Controtelaio in acciaio zincato 25/10, telaio in doppia lamiera zincata 20/10, anta mobile con pannelli pressopiegati e 3 rinforzi omega.",
        category: "porte-blindate-civili",
        image: "/img/products/a/A1/Estro.jpg",
        specifications: [
          "Classe di Resistenza Effrazione RC4",
          "Cerniere a scomparsa autosollevanti",
          "Serratura a chiusura automatica meccanica brevettata",
          "Defender di sicurezza in acciaio inox monoblocco",
          "Maniglia Marsilii a martellina",
          "Pannello interno ed esterno laminato 7mm",
          "Carter a vista lato interno",
          "Soglia mobile inclinata antidrip",
          "Profilo anti-scardinamento lato cerniera",
          "Serratura a fascia a tutta altezza",
          "Parafreddo mod. ANTIDRIP",
          "Doppia tenuta perimetrale con guarnizione EPDM"
        ],
        certifications: [
          "Classe di Resistenza Effrazione RC4",
          "Permeabilità all'Aria CLASSE 2",
          "Permeabilità all'Acqua CLASSE 3A",
          "Permeabilità al vento CLASSE C3",
          "Trasmittanza Termica U = 1.39 W/mqK"
        ],
        slug: "porta-estro"
      },
      // Porte Estro Zelo (A2)
      {
        id: "porta-estro-zelo",
        name: "Porta Blindata Linea Estro - Finitura Zelo",
        description: "Porta blindata Classe RC4 con finitura Zelo per un'estetica raffinata. Pannello interno in MDF laccato opaco nei colori RAL e carter a scomparsa lato interno per una finitura di pregio.",
        category: "porte-blindate-civili",
        image: "/img/products/a/A2/Zelo.png",
        specifications: [
          "Classe di Resistenza Effrazione RC4",
          "Cerniere a scomparsa autosollevanti",
          "Serratura a chiusura automatica meccanica brevettata",
          "Defender di sicurezza in acciaio inox monoblocco",
          "Maniglia Marsilii a martellina",
          "Pannello esterno laminato 7mm",
          "Pannello interno in MDF laccato opaco RAL",
          "Carter a scomparsa lato interno",
          "Soglia mobile inclinata antidrip",
          "Profilo anti-scardinamento lato cerniera",
          "Serratura a fascia a tutta altezza",
          "Montaggio Filomuro disponibile",
          "Maniglia rotativa push e scorrevole opzionali"
        ],
        certifications: [
          "Classe di Resistenza Effrazione RC4",
          "Permeabilità all'Aria CLASSE 2",
          "Permeabilità all'Acqua CLASSE 3A",
          "Permeabilità al vento CLASSE C3",
          "Trasmittanza Termica U = 1.39 W/mqK"
        ],
        slug: "porta-estro-zelo"
      },
      // Porte Zelo Marsilii (A3)
      {
        id: "porta-zelo-marsilii",
        name: "Porta Blindata Linea Estro - Finitura Zelo Marsilii",
        description: "Porta blindata con resistenza extra dell'anta e piastre anti-mola tra scocca e coperchio. Struttura interna rinforzata, in attesa di certificazione Classe 5.",
        category: "porte-blindate-civili",
        image: "/img/products/a/A3/Zelo_Marsilii.png",
        specifications: [
          "In attesa di certificazione Classe 5",
          "Struttura interna rinforzata da piastre anti-mola",
          "Cerniere a scomparsa autosollevanti",
          "Serratura a chiusura automatica meccanica brevettata",
          "Defender di sicurezza in acciaio inox monoblocco",
          "Maniglia Marsilii a martellina",
          "Pannello esterno laminato 7mm",
          "Pannello interno in MDF laccato opaco RAL",
          "Carter a scomparsa lato interno",
          "Resistenza extra con piastre anti-mola",
          "Soglia mobile inclinata antidrip",
          "Profilo anti-scardinamento lato cerniera",
          "Montaggio Filomuro disponibile"
        ],
        certifications: [
          "In attesa di certificazione Classe 5"
        ],
        slug: "porta-zelo-marsilii"
      },
      // Porte Tagliafuoco (A4)
      {
        id: "porta-ei120-tagliafuoco",
        name: "Porta Blindata Tagliafuoco EI-120",
        description: "Porta blindata con resistenza al fuoco EI 120 omologata. Basata sulla struttura Estro maggiorata con materiali idonei alla resistenza al fuoco. Disponibile con cerniere a vista e a scomparsa.",
        category: "porte-blindate-civili",
        image: "/img/products/a/A4/Tagliafuoco.jpg",
        specifications: [
          "Resistenza al fuoco EI 120",
          "Struttura basata su porta Estro maggiorata",
          "Disponibile con cerniere a vista e a scomparsa",
          "Finitura interna priva di parti metalliche a vista",
          "Controtelaio in acciaio 25/10",
          "Telaio in doppia lamiera 20/10",
          "Anta con pannelli pressopiegati rinforzati",
          "Materiali certificati per resistenza al fuoco",
          "Adatta per ambienti di pregio"
        ],
        certifications: [
          "Resistenza al Fuoco EI 120 Omologata",
          "Certificazione antincendio"
        ],
        slug: "porta-ei120-tagliafuoco"
      },
      // Porte Satus (A5)
      {
        id: "porta-satus",
        name: "Porta Blindata Linea Satus",
        description: "Porta bi-lamiera con cerniere a vista, doppia battuta e doppia guarnizione di tenuta. Telaio in lamiera inox 15/10 e anta con pannelli zincati 10/10.",
        category: "porte-blindate-civili",
        image: "/img/products/a/A5/Porta_Satus.png",
        specifications: [
          "Classe Effrazione RC4 (in via di certificazione)",
          "Porta bi-lamiera con doppia battuta",
          "Cerniere a vista autosollevanti",
          "Telaio in lamiera inox 15/10",
          "Anta con pannelli zincati 10/10",
          "3 rinforzi profilo omega in lamiera 20/10",
          "Serratura a chiusura automatica meccanica",
          "Defender di sicurezza in acciaio inox",
          "Maniglia classica oro o argento",
          "Pannelli laminati 7mm interni ed esterni",
          "Assenza mostre lato interno",
          "Soglia mobile inclinata antidrip",
          "Profilo anti-scardinamento lato cerniera"
        ],
        certifications: [
          "Classe Effrazione RC4 (in via di certificazione)",
          "Acustica 42 Db (in via di certificazione)",
          "Permeabilità Aria Classe 3 (in via di certificazione)",
          "Resistenza Vento 5C (in via di certificazione)",
          "Trasmittanza Termica Ud = 1.37 W/mqK (MDF 6mm)",
          "Trasmittanza Termica Ud = 1.11 W/mqK (Compensato Marino 15mm)"
        ],
        slug: "porta-satus"
      },
      // Porte Custos (A6)
      {
        id: "porta-custos",
        name: "Porta Blindata Linea Custos",
        description: "Porta blindata per ristrutturazioni con serratura a chiusura automatica CUSTOS. Assenza di controtelaio, telaio saldato direttamente alla parete. Funzione antipanico integrata.",
        category: "porte-blindate-civili",
        image: "/img/products/a/A6/Custos.jpg",
        specifications: [
          "Assenza di controtelaio",
          "Telaio saldato direttamente alla parete",
          "Telaio in doppia lamiera sagomata 25/10",
          "Anta con pannelli pressopiegati 20/10",
          "Rinforzi in tubolare 60x30 a cancellata",
          "Serratura a chiusura automatica CUSTOS",
          "Chiusura automatica meccanica ad ogni accostamento",
          "Funzione antipanico (apertura interna senza chiave)",
          "Dispositivo anti-inceppamento",
          "Cerniere registrabili autolubrificanti",
          "Apertura porta a 180°",
          "Montaggio anta senza sollevamento",
          "Vincolo antistrappo lato cerniere",
          "Pannello esterno laminato 7mm",
          "Pannello interno laccato opaco RAL"
        ],
        certifications: [
          "Porta non certificata"
        ],
        slug: "porta-custos"
      },
      // Persiane Vetrate (A7)
      {
        id: "grate-persiane-vetrate",
        name: "Grate, Persiane e Vetrate Blindate",
        description: "Soluzioni blindate fisse e apribili. Grate con tubo ø35 e tondo ø20 rullante, persiane con lamelle presso-piegate, vetrate con vetro antisfondamento. Serratura a chiusura automatica meccanica.",
        image: "/img/products/a/A7/Grate.jpg",
        category: "porte-blindate-civili",
        specifications: [
          "Grate con tubo diametro 35mm",
          "Tondo diametro 20mm rullante",
          "Persiane con lamelle fisse presso-piegate",
          "Materiale in acciaio inox",
          "Verniciatura a fuoco colori RAL",
          "Fissaggio con perni pieni o ancoraggio chimico",
          "Variante con vetro antisfondamento",
          "Intercapedine d'aria per ventilazione",
          "Serratura a chiusura automatica meccanica",
          "Versioni fisse e apribili",
          "Realizzazione su misura"
        ],
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
        description: "Grateantiseghetto per massima sicurezza",
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