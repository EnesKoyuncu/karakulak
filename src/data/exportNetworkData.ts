export interface Country {
  name: {
    tr: string;
    en: string;
  };
  coordinates: [number, number];
  region: {
    tr: string;
    en: string;
  };
}

export const countries: Country[] = [
  // Avrupa
  {
    name: {
      tr: "Almanya",
      en: "Germany",
    },
    coordinates: [51.1657, 10.4515],
    region: {
      tr: "Avrupa",
      en: "Europe",
    },
  },
  {
    name: {
      tr: "Avusturya",
      en: "Austria",
    },
    coordinates: [47.5162, 14.5501],
    region: {
      tr: "Avrupa",
      en: "Europe",
    },
  },
  {
    name: {
      tr: "Bulgaristan",
      en: "Bulgaria",
    },
    coordinates: [42.7339, 25.4858],
    region: {
      tr: "Avrupa",
      en: "Europe",
    },
  },
  {
    name: {
      tr: "Fransa",
      en: "France",
    },
    coordinates: [46.2276, 2.2137],
    region: {
      tr: "Avrupa",
      en: "Europe",
    },
  },
  {
    name: {
      tr: "Hırvatistan",
      en: "Croatia",
    },
    coordinates: [45.1, 15.2],
    region: {
      tr: "Avrupa",
      en: "Europe",
    },
  },
  {
    name: {
      tr: "İsveç",
      en: "Sweden",
    },
    coordinates: [60.1282, 18.6435],
    region: {
      tr: "Avrupa",
      en: "Europe",
    },
  },
  {
    name: {
      tr: "Kosova",
      en: "Kosovo",
    },
    coordinates: [42.6026, 20.903],
    region: {
      tr: "Avrupa",
      en: "Europe",
    },
  },
  {
    name: {
      tr: "Makedonya",
      en: "Macedonia",
    },
    coordinates: [41.6086, 21.7453],
    region: {
      tr: "Avrupa",
      en: "Europe",
    },
  },
  {
    name: {
      tr: "Portekiz",
      en: "Portugal",
    },
    coordinates: [39.3999, -8.2245],
    region: {
      tr: "Avrupa",
      en: "Europe",
    },
  },
  {
    name: {
      tr: "Romanya",
      en: "Romania",
    },
    coordinates: [45.9432, 24.9668],
    region: {
      tr: "Avrupa",
      en: "Europe",
    },
  },
  {
    name: {
      tr: "Rusya",
      en: "Russia",
    },
    coordinates: [55.7558, 37.6173],
    region: {
      tr: "Avrupa",
      en: "Europe",
    },
  },
  {
    name: {
      tr: "Yunanistan",
      en: "Greece",
    },
    coordinates: [39.0742, 21.8243],
    region: {
      tr: "Avrupa",
      en: "Europe",
    },
  },

  // Asya
  {
    name: {
      tr: "Afganistan",
      en: "Afghanistan",
    },
    coordinates: [33.9391, 67.71],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "Azerbaycan",
      en: "Azerbaijan",
    },
    coordinates: [40.1431, 47.5769],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "Dubai",
      en: "Dubai",
    },
    coordinates: [25.2048, 55.2708],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "Gürcistan",
      en: "Georgia",
    },
    coordinates: [42.3154, 43.3569],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "Hindistan",
      en: "India",
    },
    coordinates: [20.5937, 78.9629],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "Irak",
      en: "Iraq",
    },
    coordinates: [33.2232, 43.6793],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "İran",
      en: "Iran",
    },
    coordinates: [32.4279, 53.688],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "Japonya",
      en: "Japan",
    },
    coordinates: [36.2048, 138.2529],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "Katar",
      en: "Qatar",
    },
    coordinates: [25.3548, 51.1839],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "Kuveyt",
      en: "Kuwait",
    },
    coordinates: [29.3117, 47.4818],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "Kuzey Kıbrıs",
      en: "Northern Cyprus",
    },
    coordinates: [35.1856, 33.3823],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "Lübnan",
      en: "Lebanon",
    },
    coordinates: [33.8547, 35.8623],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "Suudi Arabistan",
      en: "Saudi Arabia",
    },
    coordinates: [23.8859, 45.0792],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "Suriye",
      en: "Syria",
    },
    coordinates: [34.8021, 38.9968],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "Tayvan",
      en: "Taiwan",
    },
    coordinates: [23.5937, 120.9685],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "Türkmenistan",
      en: "Turkmenistan",
    },
    coordinates: [38.9697, 59.5563],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "Ukrayna",
      en: "Ukraine",
    },
    coordinates: [48.3794, 31.1656],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "Ürdün",
      en: "Jordan",
    },
    coordinates: [30.5852, 36.2384],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },
  {
    name: {
      tr: "Yemen",
      en: "Yemen",
    },
    coordinates: [15.5527, 48.5164],
    region: {
      tr: "Asya",
      en: "Asia",
    },
  },

  // Afrika
  {
    name: {
      tr: "Angola",
      en: "Angola",
    },
    coordinates: [-11.2027, 17.8739],
    region: {
      tr: "Afrika",
      en: "Africa",
    },
  },
  {
    name: {
      tr: "Cezayir",
      en: "Algeria",
    },
    coordinates: [36.7538, 3.0588],
    region: {
      tr: "Afrika",
      en: "Africa",
    },
  },
  {
    name: {
      tr: "Fas",
      en: "Morocco",
    },
    coordinates: [31.7917, -7.0926],
    region: {
      tr: "Afrika",
      en: "Africa",
    },
  },
  {
    name: {
      tr: "Filistin",
      en: "Palestine",
    },
    coordinates: [31.9522, 35.2332],
    region: {
      tr: "Afrika",
      en: "Africa",
    },
  },
  {
    name: {
      tr: "Gana",
      en: "Ghana",
    },
    coordinates: [7.9465, -1.0232],
    region: {
      tr: "Afrika",
      en: "Africa",
    },
  },
  {
    name: {
      tr: "Libya",
      en: "Libya",
    },
    coordinates: [26.3351, 17.2283],
    region: {
      tr: "Afrika",
      en: "Africa",
    },
  },
  {
    name: {
      tr: "Mısır",
      en: "Egypt",
    },
    coordinates: [26.8206, 30.8025],
    region: {
      tr: "Afrika",
      en: "Africa",
    },
  },
  {
    name: {
      tr: "Nijerya",
      en: "Nigeria",
    },
    coordinates: [9.082, 8.6753],
    region: {
      tr: "Afrika",
      en: "Africa",
    },
  },
  {
    name: {
      tr: "Senegal",
      en: "Senegal",
    },
    coordinates: [14.4974, -14.4524],
    region: {
      tr: "Afrika",
      en: "Africa",
    },
  },
];
