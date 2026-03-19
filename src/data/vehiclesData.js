export const allVehicles = [
  {
    id: 1,
    brand: "Peugeot",
    model: "308 Feline 1.6",
    year: 2021,
    km: 45000,
    price: 15910000,
    image: "https://www.carsmagazine.com.ar/wp-content/uploads/2012/02/peugeot-308-argentina.jpg",
    gallery: [
      "https://professional.peugeot.com.ar/content/dam/peugeot/argentina/b2b/our-range/308/s/308-MultimediaTeaserWithTabs-Mobile-Imagen1.jpg?imwidth=768",
      "https://www.carsmagazine.com.ar/wp-content/uploads/2011/11/peugeot-308-argentina-1.jpg",
      "https://auto-mall.hr/wp-content/uploads/2024/07/1719572524-image002.jpg",
      "https://motormagazine.com.ar/wp-content/uploads/2015/09/prueba-nuevo-308-14.jpg",
      "https://www.megautos.com/wp-content/uploads/2016/07/Peugeot-308-GTI-2016-interior-1024x669.jpg"
    ],
    transmission: "Manual",
    fuel: "Nafta",
    description: "Excelente estado, service oficial realizado recientemente. Cubiertas nuevas.",
    categories: ["next", "latest"],
    specs: {
      motor: "1.6 VTi",
      potencia: "115 hp",
      valvulas: 16,
      cilindros: 4,
      carroceria: "Hatchback",
      puertas: 5,
      capacidad: 5,
      tanque: "60 L",
      seguridad: ["Frenos ABS", "Airbags Frontales", "ISOFIX", "Control de estabilidad"],
      confort: ["Techo Cielo", "Climatizador Bizona", "Navegador Touch", "Tapizado Cuero/Tela"],
      exterior: ["Llantas de aleación 17\"", "Luces LED diurnas", "Porta equipaje"]
    }
  },
  {
    id: 2,
    brand: "Toyota",
    model: "Corolla 2.0 SEG CVT",
    year: 2019,
    km: 54000,
    price: 25460000,
    image: "https://autotest.com.ar/wp-content/uploads/2021/02/TOYOTA-COROLLA-GR-S-7.jpg",
    gallery: [
      "https://acnews.blob.core.windows.net/imgnews/large/NAZ_1131c4af4c454e418c9ac4b8e90d8962.webp",
      "https://http2.mlstatic.com/D_NQ_NP_673796-MLA106758294742_022026-O.webp",
      "https://carroscomcamanzi.com.br/wp-content/uploads/2024/09/toyota-corolla-2025.jpg",
      "https://fotos.perfil.com//2020/03/03/900/0/toyota-corolla-20-seg-cvt-922080.jpg",
      "https://cdn11.bigcommerce.com/s-x5b856eqxr/images/stencil/1280x1280/products/2507/7865/s-l500__83773.1657829287.jpg?c=1"
    ],
    transmission: "Automática (CVT)",
    fuel: "Nafta",
    description: "Versión tope de gama. Seguridad Toyota Safety Sense y tapizados de cuero.",
    categories: ["next", "latest"],
    specs: {
      motor: "2.0 Dynamic Force",
      potencia: "170 hp",
      valvulas: 16,
      cilindros: 4,
      carroceria: "Sedán",
      puertas: 4,
      capacidad: 5,
      tanque: "50 L",
      seguridad: ["Toyota Safety Sense", "7 Airbags", "Frenado autónomo", "Control de crucero adaptativo"],
      confort: ["Butaca eléctrica", "Pantalla 8\"", "Apple CarPlay/Android Auto", "Climatizador digital"],
      exterior: ["Llantas 17\"", "Faros Full LED", "Cámara de retroceso"]
    }
  },
  {
    id: 3,
    brand: "BMW",
    model: "M5 CS",
    year: 2021,
    km: 12000,
    price: 185000000,
    image: "https://s.list.am/f/393/83956393.webp",
    gallery: [
      "https://www.shutterstock.com/image-photo/indianapolis-june-30-2024-used-600nw-2484234367.jpg",
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F08%2Fmanhart-mh5-gtr-bmw-m5-cs-v8-limited-edition-tuned-custom-german-supercar-saloon-14.jpg?q=75&w=800&cbr=1&fit=max",
      "https://hips.hearstapps.com/hmg-prod/images/bmw-m5-speed-yellow-094-671a4c2f663ca.jpg?crop=1.00xw:0.752xh;0,0.0889xh&resize=1800:*",
      "https://automagazine.ec/wp-content/uploads/2021/01/Nuevo-BMW-M5-CS.e.jpg"
    ],
    transmission: "Automática",
    fuel: "Nafta",
    description: "Máximo rendimiento. Motor V8 Twin-Turbo, edición limitada CS con detalles en fibra de carbono.",
    categories: ["stock"],
    specs: {
      motor: "4.4 V8 Twin-Power Turbo",
      potencia: "635 hp",
      valvulas: 32,
      cilindros: 8,
      carroceria: "Sedán Deportivo",
      puertas: 4,
      capacidad: 5,
      tanque: "68 L",
      seguridad: ["Frenos Cerámicos", "Tracción M xDrive", "Asistente de carril", "DSC dinámico"],
      confort: ["Butacas de competición", "Sistema Harman Kardon", "Head-up Display", "Alcantara"],
      exterior: ["Llantas 20\" Gold Bronze", "Capot de carbono", "Escape deportivo M"]
    }
  },
  {
    id: 4,
    brand: "Honda",
    model: "Civic 1.5 Turbo EXT",
    year: 2020,
    km: 67000,
    price: 22950000,
    image: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_b896903ed5984615b7cc4712755f3cdc.jpg",
    gallery: [
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/Civic/7742/1597221770778/side-view-(left)-90.jpg",
      "https://img.sm360.ca/images/article/dilawri-group-of-companies/63531//capture1565014207301.PNG",
      "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/621000/300/621339.jpg",
      "https://scontent.faep9-3.fna.fbcdn.net/v/t1.6435-9/121527165_1242726519423409_2563531811972654886_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=Y-iBkTVj9gsQ7kNvwFGg9qQ&_nc_oc=AdpfPKsQ6-BrbZcUwNjqFDkRln74JqRyMsZjXpI2Be6k0KQtlIZJGKPbkGIwUlWGRvI&_nc_zt=23&_nc_ht=scontent.faep9-3.fna&_nc_gid=F1w-u1d2MqWQny1yWd0xwQ&_nc_ss=7a30f&oh=00_AfzMP_qHv8KOs8jTc8RoSy4jQBSui2g2rZs_5nNDtoryRA&oe=69E3D615",
      "https://scontent.faep9-3.fna.fbcdn.net/v/t1.6435-9/122778292_3364291193654292_4531069872674943011_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=108&ccb=1-7&_nc_sid=06a7ca&oh=00_AfxSYOMDCMbHUgVaRuuK-0hK6qgQSfkd-hS9p667GZ-xxw&oe=69E3D8E0"
    ],
    transmission: "Automática",
    fuel: "Nafta",
    description: "Service oficial Honda. Única mano, auxilio sin rodar. Motor turbo de alta eficiencia.",
    categories: ["next", "latest"],
    specs: {
      motor: "1.5 Turbo VTEC",
      potencia: "173 hp",
      valvulas: 16,
      cilindros: 4,
      carroceria: "Sedán",
      puertas: 4,
      capacidad: 5,
      tanque: "47 L",
      seguridad: ["6 Airbags", "Control de tracción VSA", "Asistente de arranque en pendientes", "LaneWatch"],
      confort: ["Techo solar eléctrico", "Encendido por botón", "Climatizador bizona", "Cuero"],
      exterior: ["Llantas de aleación 17\"", "Faros de xenón", "Espejos eléctricos"]
    }
  },
  {
    id: 5,
    brand: "Ford",
    model: "Focus 2.0 Titanium",
    year: 2018,
    km: 72000,
    price: 18010000,
    image: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_e57174b319c14750a9b772448bba04a0.jpg",
    gallery: [
      "https://scontent.faep9-2.fna.fbcdn.net/v/t45.5328-4/421760826_6913919458736915_1705935551328058667_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=XTjpmrGe2zIQ7kNvwGAfsKX&_nc_oc=AdpA69cqG5h4EfZEZ3HK9AFu4UAGnk-da0bFkWlg5PXh_oTC8RiNh8i98JwOcaYz8M0&_nc_zt=23&_nc_ht=scontent.faep9-2.fna&_nc_gid=ximkEq4PnNvb4lcl7yh4oA&_nc_ss=7a30f&oh=00_AfwQlCFweZMjKDupZcRjQfHFi-Qes5hD1JQCp3Lq-DW8iA&oe=69C2348E",
      "https://scontent.faep9-1.fna.fbcdn.net/v/t45.5328-4/428982307_7297332533693364_2195527970633759031_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=M2-4uHDeWtUQ7kNvwHJe9Ae&_nc_oc=AdrgjqYFrFOzeXwrYUmRLS8De0PPX5NANMlBjg439BzqEW9-C4vlGCRFgtScvTqjQ5I&_nc_zt=23&_nc_ht=scontent.faep9-1.fna&_nc_gid=ximkEq4PnNvb4lcl7yh4oA&_nc_ss=7a30f&oh=00_AfxxfxboyOQIASk0fGgYgjWMdYLc0zGZaeC8mJW6kOn-mw&oe=69C2289A",
      "https://scontent.faep9-2.fna.fbcdn.net/v/t45.5328-4/429462306_7221890171197486_1499095700012864607_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=J-Lczc1npO8Q7kNvwF02401&_nc_oc=AdpJNwRuvqtp5qXpKXyEIcQq26oxl5VkI3unljOTuOShUiUrRbAWtkTFBu-SbQGLFno&_nc_zt=23&_nc_ht=scontent.faep9-2.fna&_nc_gid=ximkEq4PnNvb4lcl7yh4oA&_nc_ss=7a30f&oh=00_AfzwRI7YfaFq4vUmsroA7CRSBeB4fnGe4_W4Fh2PvypJ6w&oe=69C223C7",
      "https://scontent.faep9-3.fna.fbcdn.net/v/t45.5328-4/429949493_25019707827677502_9136337322035775362_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=ppbu0viF7UUQ7kNvwHN8muu&_nc_oc=AdopS5G7LD6bzrANYIrIBW-N4RiIWNjRGp3hIndx1VNTVsJ6QL0-4sw6E4lZTVUff30&_nc_zt=23&_nc_ht=scontent.faep9-3.fna&_nc_gid=ximkEq4PnNvb4lcl7yh4oA&_nc_ss=7a30f&oh=00_AfzkbbZcOg5TgTexUvgbUp43IbCBfKlRwej82tah5F4j8w&oe=69C23CFD",
      "https://scontent.faep9-2.fna.fbcdn.net/v/t45.5328-4/421760826_6913919458736915_1705935551328058667_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=XTjpmrGe2zIQ7kNvwGAfsKX&_nc_oc=AdpA69cqG5h4EfZEZ3HK9AFu4UAGnk-da0bFkWlg5PXh_oTC8RiNh8i98JwOcaYz8M0&_nc_zt=23&_nc_ht=scontent.faep9-2.fna&_nc_gid=ximkEq4PnNvb4lcl7yh4oA&_nc_ss=7a30f&oh=00_AfwQlCFweZMjKDupZcRjQfHFi-Qes5hD1JQCp3Lq-DW8iA&oe=69C2348E"
    ],
    transmission: "Manual",
      fuel: "Nafta",
      description: "Máximo confort. Estacionamiento asistido y techo solar. Tecnología SYNC 3.",
      categories: ["next", "latest"],
      specs: {
        motor: "2.0 Duratec GDI",
        potencia: "170 hp",
        valvulas: 16,
        cilindros: 4,
        carroceria: "Hatchback",
        puertas: 5,
        capacidad: 5,
        tanque: "55 L",
        seguridad: ["Frenado automático", "7 Airbags", "Control de estabilidad", "Sensores 360"],
        confort: ["Park Assist", "Sony Premium Audio", "GPS Nativo", "Butaca eléctrica"],
        exterior: ["Llantas 17\"", "Techo solar", "Limpiafaros"]
      }
  },
  {
    id: 6,
    brand: "VW",
    model: "Nivus 1.0 TSI Comfort",
    year: 2020,
    km: 35000,
    price: 21500000,
    image: "https://www.opencars.com.ar/wp-content/uploads/2020/11/7.jpg",
    gallery: [
      "https://autocity.com.ar/wp-content/uploads/2025/03/Nivus-2025-vokkswagen-cordoba-autocity_-2.webp",
      "https://autocity.com.ar/wp-content/uploads/2025/03/Nivus-2025-vokkswagen-cordoba-autocity_-3.webp",
      "https://autocity.com.ar/wp-content/uploads/2025/03/Nivus-2025-vokkswagen-cordoba-autocity_-4.webp",
      "https://i.blogs.es/41b0a5/volkswagen-nivus-2025_2/1366_2000.jpeg",
      "https://i.blogs.es/86ef1f/volkswagen-nivus-2025_/1366_2000.jpeg"
    ],
    transmission: "Automática",
    fuel: "Nafta",
    description: "Motor turbo eficiente. Pantalla VW Play de 10 pulgadas. Diseño moderno y deportivo.",
    categories: ["latest"],
    specs: {
      motor: "1.0 TSI",
      potencia: "116 hp",
      valvulas: 12,
      cilindros: 3,
      carroceria: "Crossover",
      puertas: 5,
      capacidad: 5,
      tanque: "52 L",
      seguridad: ["Frenos ABS", "6 Airbags", "Control crucero adaptativo", "Post-collision brake"],
      confort: ["VW Play 10\"", "Cargador inalámbrico", "Apple CarPlay", "Sensores traseros"],
      exterior: ["Faros LED", "Barras de techo", "Llantas 16\""]
    }
  }
];

export const createSlug = (brand, model) => {
  return `${brand}-${model}`
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};