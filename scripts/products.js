// Nord Aventure — catalogue produits (fictif, démo)
// Tous les produits, prix et descriptions sont fictifs.

const PRODUCTS = [
  {
    id: 'hellsund-96-steelhead',
    name: 'Hellsund 9\'6" Steelhead',
    eyebrow: 'Canne mouche',
    category: 'Cannes',
    brand: 'Hellsund',
    price: 685,
    pitch: 'Canne mouche action rapide, blanc graphite IM10, conçue pour la steelhead.',
    image: 'https://images.unsplash.com/photo-1542338347-4fff3276af78?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1542338347-4fff3276af78?w=1200&q=80',
      'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=1200&q=80',
      'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=1200&q=80'
    ],
    description: "Conçue pour les rivières puissantes du Bas-Saint-Laurent et de la Côte-Nord, la Hellsund 9'6\" Steelhead combine un blanc IM10 haute densité avec une action rapide qui donne le contrôle nécessaire pour poser une mouche à 25 mètres dans un vent latéral. Les anneaux SiC titanium réduisent la friction sur soie WF7. Le porte-moulinet en aluminium anodisé noir mat résiste à l'eau salée des estuaires. Livrée dans un tube triangulaire en aluminium avec garantie 25 ans contre tout défaut de fabrication. Une canne sérieuse pour pêcheurs sérieux qui ne veulent plus jamais entendre le mot \"casse\".",
    specs: {
      'Longueur': '9\'6" (2,90 m)',
      'Soie recommandée': 'WF7F',
      'Action': 'Rapide',
      'Poids': '108 g',
      'Sections': '4',
      'Garantie': '25 ans',
      'Origine': 'Assemblée au Québec'
    }
  },
  {
    id: 'bjorka-s78-saumon',
    name: 'Bjørka Reel S78 Manuel',
    eyebrow: 'Moulinet mouche',
    category: 'Moulinets',
    brand: 'Bjørka',
    price: 945,
    pitch: 'Moulinet mouche manuel, frein à disques de carbone, dédié saumon atlantique.',
    image: 'https://images.unsplash.com/photo-1485727749690-d091e8284ef3?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1485727749690-d091e8284ef3?w=1200&q=80',
      'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=1200&q=80'
    ],
    description: "Le S78 est un moulinet à grande arbre usiné dans un seul bloc d'aluminium 6061-T6, anodisé type II noir profond. Son frein à disques de carbone scellés délivre 7,5 kg de pression sans broncher, parfait pour ralentir un saumon atlantique de 18 livres dans un courant rapide. Capacité 200 verges de soutien 30 lb sous une WF8F. Utilisé en condition réelle sur la Moisie, la Mitis et la Bonaventure pendant trois saisons par notre équipe avant mise en marché. Aucune corrosion observée. Roulements scellés inox, étanches IPX7.",
    specs: {
      'Diamètre': '4,1 po',
      'Poids': '215 g',
      'Capacité soie': 'WF8F + 200 verges',
      'Frein': 'Disques carbone scellés',
      'Pression max': '7,5 kg',
      'Garantie': 'À vie',
      'Origine': 'Norvège'
    }
  },
  {
    id: 'streamer-cote-nord-pack',
    name: 'Streamer Côte-Nord — Pack 6',
    eyebrow: 'Mouches',
    category: 'Leurres',
    brand: 'Atelier Tadoussac',
    price: 38,
    pitch: 'Six streamers patterns testés sur la Moisie, montés à la main au Québec.',
    image: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1591025207163-942350e47db2?w=1200&q=80',
      'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=1200&q=80'
    ],
    description: "Notre pack signature de six streamers, monté à la main par Jean-Sébastien Côté à son atelier de Tadoussac. Inclut deux Black Ghost taille 4, deux Mickey Finn taille 6, deux Muddler Minnow taille 4. Hameçons Mustad 36890 inox, tinsel argent, plumes de coq sélectionnées pour leur fibre raide. Conçus pour pêcher la truite mouchetée des plans d'eau noirs de la Côte-Nord et la ouananiche du Lac-Saint-Jean. Présentés dans une boîte de transport en bois de cèdre à fermeture aimantée — pas de plastique cheap.",
    specs: {
      'Quantité': '6 mouches',
      'Tailles': '#4 et #6',
      'Hameçons': 'Mustad 36890 inox',
      'Boîte': 'Cèdre massif',
      'Garantie': 'Aucune (montées main)',
      'Origine': 'Tadoussac, QC'
    }
  },
  {
    id: 'subzero-fjord-wader-pro',
    name: 'Sub-Zero Fjord Wader Pro',
    eyebrow: 'Wader',
    category: 'Vêtements',
    brand: 'Sub-Zero',
    price: 1240,
    pitch: 'Wader 5 couches respirant, bretelles renforcées, conçu pour températures sous zéro.',
    image: 'https://images.unsplash.com/photo-1574870111867-089730e5a72b?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1574870111867-089730e5a72b?w=1200&q=80',
      'https://images.unsplash.com/photo-1516873240891-4bf014598ab4?w=1200&q=80'
    ],
    description: "Le Fjord Wader Pro est notre référence absolue pour pêcher debout dans 4 °C en mai. Cinq couches techniques: membrane principale en polyester laminé 30 000 mm de colonne d'eau, doublure intérieure en mesh respirant, couche d'isolation thermique 60 g/m², renfort genoux en Cordura 500D, chaussons néoprène 4 mm intégrés. Bretelles ajustables avec boucles métal, ceinture intégrée, deux poches poitrine étanches, attache filet derrière. Coutures soudées haute fréquence — aucun fil apparent. Testé 47 jours en immersion sur la rivière Sainte-Anne sans suintement.",
    specs: {
      'Membrane': '5 couches, 30 000 mm',
      'Isolation': '60 g/m²',
      'Tailles': 'S à XXL',
      'Pieds': 'Néoprène 4 mm intégré',
      'Renforts': 'Cordura 500D',
      'Garantie': '3 ans étanchéité',
      'Origine': 'Suède'
    }
  },
  {
    id: 'couteau-filagord-4',
    name: 'Couteau finition Filagord 4 po',
    eyebrow: 'Couteau',
    category: 'Accessoires',
    brand: 'Filagord',
    price: 165,
    pitch: 'Lame inox VG-10, manche micarta vert forêt, étui cuir inclus.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80'
    ],
    description: "Couteau de finition à lame fixe 4 pouces en acier inox VG-10 japonais, dureté HRC 60-61. Géométrie scandi-grind affûtée à 17°, idéale pour lever rapidement un filet de doré ou de truite. Manche en micarta vert forêt avec liner en G10 noir, soie pleine traversante rivetée à trois points. Étui en cuir pleine fleur cousu à la main au Saguenay, boucle laiton, passant ceinture. Le couteau de finition que vous garderez 30 ans et que votre fils héritera. Affûtage en usine au papier de cuir, prêt à raser un poil de bras dès la sortie de la boîte.",
    specs: {
      'Lame': 'VG-10, 4 po',
      'Dureté': 'HRC 60-61',
      'Manche': 'Micarta + G10',
      'Étui': 'Cuir pleine fleur',
      'Poids': '142 g',
      'Garantie': 'À vie',
      'Origine': 'Lame Japon, montage QC'
    }
  },
  {
    id: 'sac-voyageur-65l',
    name: 'Sac Voyageur 65 L étanche IP67',
    eyebrow: 'Bagagerie',
    category: 'Bagagerie',
    brand: 'Nord Aventure',
    price: 320,
    pitch: 'Sac de portage 65 L, soudé haute fréquence, IP67, sangles renforcées.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80'
    ],
    description: "Conçu pour l'hydravion en pourvoirie, le Voyageur 65 L est un sac de portage souple soudé haute fréquence en TPU 600D, classé IP67 (immersion 1 m, 30 min). Aucune couture cousue: tout est thermoscellé. Fermeture roll-top avec double clip aluminium, sangles compression latérales, bretelles dorsales rembourrées détachables, poignées renforcées sur quatre faces. Idéal pour transporter votre matériel sec dans un canot ou en bivouac. Couleur olive mate pour ne pas effrayer le poisson lorsque déposé sur la berge.",
    specs: {
      'Capacité': '65 L',
      'Étanchéité': 'IP67',
      'Matériau': 'TPU 600D soudé',
      'Poids': '1,2 kg',
      'Couleur': 'Olive mat',
      'Garantie': '5 ans coutures',
      'Origine': 'Conçu QC, fabriqué Vietnam'
    }
  },
  {
    id: 'manteau-isolat-h7',
    name: 'Manteau isolant H7 Nord-Ouest',
    eyebrow: 'Veste isolante',
    category: 'Vêtements',
    brand: 'H7',
    price: 540,
    pitch: 'Veste isolante PrimaLoft Gold 100 g, coupe-vent, capuchon ajustable.',
    image: 'https://images.unsplash.com/photo-1516873240891-4bf014598ab4?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1516873240891-4bf014598ab4?w=1200&q=80'
    ],
    description: "La H7 Nord-Ouest est une veste isolante synthétique PrimaLoft Gold 100 g/m² avec coquille extérieure en nylon ripstop 30D traité DWR. Garde la chaleur même mouillée, contrairement au duvet. Coupe athlétique, deux poches mains zippées YKK, une poche poitrine, capuchon ajustable trois points. Idéale comme couche intermédiaire sous un imperméable ou comme veste d'extérieur en septembre. Compressible: tient dans sa propre poche, format brique de lait, pour glisser dans un sac de pêche sans encombrer.",
    specs: {
      'Isolation': 'PrimaLoft Gold 100 g',
      'Coquille': 'Nylon ripstop 30D',
      'Traitement': 'DWR durable',
      'Poids': '385 g (M)',
      'Tailles': 'XS à XXL',
      'Garantie': '2 ans',
      'Origine': 'Vietnam'
    }
  },
  {
    id: 'canne-spinning-arctic-7',
    name: 'Arctic Spin 7\' MH',
    eyebrow: 'Canne lancer',
    category: 'Cannes',
    brand: 'Arctic',
    price: 295,
    pitch: 'Canne spinning 7 pieds medium-heavy pour doré, blanc graphite 30T.',
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=1200&q=80'
    ],
    description: "Canne spinning 7 pieds puissance medium-heavy, blanc graphite 30T à action rapide-modérée, conçue pour la pêche au doré jaune sur le Saint-Laurent et les grands lacs québécois. Anneaux Fuji K en alconite, porte-moulinet Fuji VSS, poignée EVA haute densité avec section liège AAA pour sentir la moindre touche. Lance des leurres entre 1/4 et 3/4 oz, tresse 10-20 lb. Une canne polyvalente, sans fioritures, qui fait son travail saison après saison. Livrée en deux sections avec sac de transport en toile cirée.",
    specs: {
      'Longueur': '7\' (2,13 m)',
      'Puissance': 'Medium-Heavy',
      'Action': 'Rapide-modérée',
      'Lancers': '1/4 à 3/4 oz',
      'Lignes': '10-20 lb',
      'Garantie': '5 ans',
      'Origine': 'Conçue Québec'
    }
  },
  {
    id: 'moulinet-spin-aurora-3000',
    name: 'Aurora Spin 3000',
    eyebrow: 'Moulinet spinning',
    category: 'Moulinets',
    brand: 'Aurora',
    price: 385,
    pitch: 'Moulinet spinning 3000, 10 roulements scellés, frein étanche 9 kg.',
    image: 'https://images.unsplash.com/photo-1485727749690-d091e8284ef3?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1485727749690-d091e8284ef3?w=1200&q=80'
    ],
    description: "Moulinet spinning taille 3000 à corps en magnésium usiné CNC. Dix roulements à billes scellés inox, frein avant à disques carbone étanche jusqu'à 9 kg de pression. Bobine Long Cast en aluminium pour des lancers loin et précis. Ratio 6.2:1 — récupération rapide pour ramener un leurre sans baisser le pouce. Manivelle interchangeable gauche/droite, pommeau EVA, anti-retour instantané. Notre choix pour pêcher le doré ou la truite arc-en-ciel en lancer-léger sans se retrouver avec un moulinet grippé après deux saisons.",
    specs: {
      'Taille': '3000',
      'Poids': '230 g',
      'Roulements': '10 inox scellés',
      'Ratio': '6.2:1',
      'Frein max': '9 kg',
      'Garantie': '5 ans',
      'Origine': 'Japon'
    }
  },
  {
    id: 'leurre-doré-walleye-pack',
    name: 'Pack Doré Saint-Laurent',
    eyebrow: 'Leurres durs',
    category: 'Leurres',
    brand: 'Atelier Tadoussac',
    price: 72,
    pitch: 'Cinq jerkbaits ABS 11 cm, finitions main, hameçons VMC inox.',
    image: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1591025207163-942350e47db2?w=1200&q=80'
    ],
    description: "Cinq jerkbaits ABS 11 cm finis à la main, peintures aérographe en cinq patrons éprouvés sur le doré jaune du fleuve: perchaude, doré naturel, fantôme blanc, feu, et nuit étoilée. Hameçons triples VMC inox taille 4, anneaux brisés inox renforcés, lèvre polycarbonate lexan plongée 1,2 m. Présentés dans une boîte rigide à compartiments mousse — vos leurres restent alignés. Un investissement raisonnable pour ne plus pêcher avec des génériques chinois qui se décollent au troisième usage.",
    specs: {
      'Quantité': '5 leurres',
      'Taille': '11 cm',
      'Profondeur': '1,2 m',
      'Hameçons': 'VMC inox #4',
      'Finition': 'Aérographe main',
      'Garantie': 'Aucune',
      'Origine': 'Tadoussac, QC'
    }
  },
  {
    id: 'tubes-mouche-saumon-3',
    name: 'Tubes Saumon Atlantique — Pack 3',
    eyebrow: 'Mouches saumon',
    category: 'Leurres',
    brand: 'Atelier Tadoussac',
    price: 56,
    pitch: 'Trois tubes mouche montés sur cuivre, signatures Sunray Shadow et Cascade.',
    image: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1591025207163-942350e47db2?w=1200&q=80'
    ],
    description: "Trois tubes mouche montés sur tube cuivre 1,5 pouce: un Sunray Shadow noir, un Cascade orange-jaune, un Green Highlander classique. Plumes de coq Métis, fil Veevus, finition vernis UV trois couches. Tubes Pro-Sportfisher avec embouts conique pour passage facile sur la soie. Idéaux pour pêcher la fosse profonde ou la queue de seuil sur la Bonaventure et la Petite-Cascapédia. Montage solide qui résistera à plusieurs poissons sans démonter — testé sur des grilses de 6 livres en juillet 2025.",
    specs: {
      'Quantité': '3 tubes',
      'Longueur': '1,5 po',
      'Matériau tube': 'Cuivre',
      'Patrons': 'Sunray, Cascade, Green Highlander',
      'Finition': 'Vernis UV 3 couches',
      'Garantie': 'Aucune',
      'Origine': 'Tadoussac, QC'
    }
  },
  {
    id: 'bottes-wading-felt-pro',
    name: 'Bottes Wading FeltPro Côte-Nord',
    eyebrow: 'Bottes wading',
    category: 'Vêtements',
    brand: 'Sub-Zero',
    price: 425,
    pitch: 'Bottes de wading semelle feutre, renfort caoutchouc, drainage rapide.',
    image: 'https://images.unsplash.com/photo-1574870111867-089730e5a72b?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1574870111867-089730e5a72b?w=1200&q=80'
    ],
    description: "Bottes de wading hautes en cuir synthétique imperméable avec renforts caoutchouc bumper sur l'avant et les côtés. Semelle feutre haute densité avec drainage rapide via huit oeillets latéraux. Lacage rapide à crochets, doublure mesh, contrefort rigide pour soutien latéral en rivière à fort courant. Compatibles avec chaussons néoprène intégrés du Fjord Wader Pro. Dépend de votre province: certaines interdisent le feutre pour limiter la propagation d'algues — vérifier la réglementation locale avant achat.",
    specs: {
      'Semelle': 'Feutre haute densité',
      'Drainage': '8 oeillets latéraux',
      'Tailles': '7 à 14 US',
      'Poids': '1,8 kg la paire',
      'Lacage': 'Crochets rapides',
      'Garantie': '2 ans coutures',
      'Origine': 'Suède'
    }
  },
  {
    id: 'gants-mouche-merino',
    name: 'Gants mouche Mérinos sans doigts',
    eyebrow: 'Gants',
    category: 'Vêtements',
    brand: 'H7',
    price: 78,
    pitch: 'Gants laine mérinos 100%, sans doigts, antidérapant cuir au creux.',
    image: 'https://images.unsplash.com/photo-1516873240891-4bf014598ab4?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1516873240891-4bf014598ab4?w=1200&q=80'
    ],
    description: "Gants tricotés en laine mérinos 100% (200 g/m²), coupe sans doigts pour garder la dextérité nécessaire au montage des mouches et au nouage des hameçons. Renforts cuir pleine fleur dans la paume pour antidérapant et durabilité. La laine mérinos garde la chaleur même humide, ne pique pas, ne sent pas mauvais après cinq jours en bivouac. Couleur charbon ou olive. Faits en Nouvelle-Écosse par une coopérative de tricot maritime.",
    specs: {
      'Matière': 'Mérinos 200 g',
      'Coupe': 'Sans doigts',
      'Renforts': 'Cuir paume',
      'Tailles': 'S à XL',
      'Couleurs': 'Charbon, olive',
      'Garantie': '1 an',
      'Origine': 'Nouvelle-Écosse'
    }
  },
  {
    id: 'pince-multi-tactical',
    name: 'Pince multifonction Tactical 7',
    eyebrow: 'Outil',
    category: 'Accessoires',
    brand: 'Filagord',
    price: 195,
    pitch: 'Pince multifonction inox 7 outils, étui ceinture, traitement anticorrosion.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80'
    ],
    description: "Pince multifonction tout-inox 420HC avec sept outils: pince à bec long, coupe-fil tungstène pour tresse, lime, tournevis plat et cruciforme, ouvre-bouteille, anneau de retenue. Traitement DLC anticorrosion noir mat — résiste à l'eau salée des estuaires sans rouiller. Étui ceinture en nylon balistique 1000D avec boucle Malice clip. Tient dans la poche d'un wader sans gêner. L'outil que vous attachez à votre veste de pêche dès le printemps et que vous oubliez tellement il fait partie de vous.",
    specs: {
      'Outils': '7 fonctions',
      'Acier': 'Inox 420HC',
      'Traitement': 'DLC anticorrosion',
      'Poids': '210 g',
      'Étui': 'Nylon 1000D',
      'Garantie': '25 ans',
      'Origine': 'Conçu QC, fabriqué Taiwan'
    }
  },
  {
    id: 'bouilloire-titane-1l',
    name: 'Bouilloire titane 1 L bivouac',
    eyebrow: 'Bivouac',
    category: 'Accessoires',
    brand: 'Filagord',
    price: 145,
    pitch: 'Bouilloire titane 1 litre, 145 g, idéale réchaud expédition.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80'
    ],
    description: "Bouilloire en titane pur grade 1, capacité 1 litre, poids total 145 grammes. Anse rabattable en acier inoxydable, bec verseur formé pour précision sans débordement, couvercle avec poignée silicone. Compatible directement sur réchauds canister ou feu de bois. Le titane chauffe vite, ne rouille pas, ne donne aucun goût métallique au thé du matin sur le bord du lac. Pour faire votre café à 5 h du matin avant que la truite commence à monter.",
    specs: {
      'Capacité': '1 L',
      'Poids': '145 g',
      'Matériau': 'Titane grade 1',
      'Compatible': 'Canister, feu de bois',
      'Anse': 'Inox rabattable',
      'Garantie': 'À vie',
      'Origine': 'Japon'
    }
  },
  {
    id: 'sac-bandouliere-chest',
    name: 'Sac bandoulière poitrine 6 L',
    eyebrow: 'Sac de pêche',
    category: 'Bagagerie',
    brand: 'Nord Aventure',
    price: 185,
    pitch: 'Chest pack 6 litres pour pêche en marchant, accès rapide, attaches outils.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80'
    ],
    description: "Chest pack de 6 litres conçu pour la pêche en marchant des petites rivières et seuils. Compartiment principal zippé YKK, deux poches frontales mailles, attache D-ring pour pince, anneau zinger pour ciseaux, sangle filet derrière. Tissu Cordura 500D enduit polyuréthane, fond renforcé. Bretelles ajustables avec sangle stabilisatrice ventrale. Conçu pour porter trois boîtes de mouches, un moulinet de rechange, des leaders, une barre granola et votre carte SOPFEU sans avoir un sac à dos qui vous gêne sur les épaules.",
    specs: {
      'Capacité': '6 L',
      'Tissu': 'Cordura 500D PU',
      'Poids': '410 g',
      'Poches': '3 + 2 mailles',
      'Couleur': 'Olive mat',
      'Garantie': '3 ans',
      'Origine': 'Conçu QC, fabriqué Vietnam'
    }
  }
];

// Expose globalement
if (typeof window !== 'undefined') {
  window.PRODUCTS = PRODUCTS;
}
