
interface DancersSelected {
  email: string;
  ig: string;
  videoLinkURL: string;
  dancarinos: {
    nome: string;
    cpf: string;
    nascimento: Date;
  }[];
  nome: string;
  cpfList: string[];
  tel: string;
  type: string;
  cidade: string;
}

export const DANCERS_SELECTEDS: DancersSelected[] = [
  {
    cpfList: ["272.289.243-04", "062.578.753-66"],
    type: "dancers",
    dancarinos: [
      {
        nascimento: new Date(Date.UTC(1967, 3, 12)),
        cpf: "272.289.243-04",
        nome: "Carlos Magno Sousa Cardoso",
      },
      {
        nome: "Amanda Rocha Cantanhede",
        cpf: "062.578.753-66",
        nascimento: new Date(Date.UTC(1994, 5, 29)),
      },
    ],
    cidade: "São Luís",
    tel: "(55) 98888-7571",
    ig: "https://www.instagram.com/reel/C30K9dFrhMfqiGOdU0gkxv7iCF0dmoyvIs4xtc0/?igsh=MTV5Z3Zhdjl0bTdqaA==",
    email: "amandinharochacantanhede@gmail.com",
    nome: "CARLOS MAGNO SOUSA CARDOSO E AMANDA ROCHA CANTANHEDE",
    videoLinkURL:
      "https://www.instagram.com/reel/C30K9dFrhMfqiGOdU0gkxv7iCF0dmoyvIs4xtc0/?igsh=MTV5Z3Zhdjl0bTdqaA==",
  },
  {
    email: "ducilenesilva277@gmail.com",
    ig: "https://www.instagram.com/reel/Cz9KeSRutDS/?igsh=MTljajB1bGdoYmpuNA==",
    videoLinkURL: "https://vm.tiktok.com/ZMMmdoFwH/",
    dancarinos: [
      {
        nome: "Dulcilene dos Santos Mendes Silva",
        cpf: "432.405.933-00",
        nascimento: new Date(Date.UTC(1972, 3, 27)),
      },
      {
        nome: "Carlos Henrique Alves costa",
        nascimento: new Date(Date.UTC(1958, 5, 11)),
        cpf: "137.302.313-91",
      },
    ],
    nome: "DULCILENE DOS SANTOS MENDES SILVA E CARLOS HENRIQUE ALVES COSTA",
    cpfList: ["432.405.933-00", "137.302.313-91"],
    tel: "(55) 98981-6118",
    type: "dancers",
    cidade: "São Luís",
  },
  {
    cpfList: ["610.134.243-36", "613.578.463-39"],
    type: "dancers",
    email: "rainanpevit@gmail.com",
    cidade: "São Luís",
    ig: "https://www.instagram.com/felippe_pfarias?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    tel: "(99) 98346-4920",
    videoLinkURL:
      "https://drive.google.com/file/d/1bLXtlLmAJMGitniLcnJ3U1yN80wHb8i6/view?usp=sharing",
    dancarinos: [
      {
        nome: "Felipe Pinto de Farias",
        nascimento: new Date(Date.UTC(1995, 0, 16)),
        cpf: "610.134.243-36",
      },
      {
        cpf: "613.578.463-39",
        nome: "Djamilla Dandara Santos Macedo",
        nascimento: new Date(Date.UTC(1995, 10, 6)),
      },
    ],
    nome: "FELIPE PINTO DE FARIAS E DJAMILLA DANDARA SANTOS MACEDO",
  },
  {
    cpfList: ["618.842.623-50", "605.887.683-40"],
    ig: "https://www.instagram.com/regueiros_jay_wesley?igsh=MW9jczJnM2ppZHgxMQ==",
    cidade: "São Luís",
    nome: "JAY LOBATO E WESLEY FREIRE",
    type: "dancers",
    email: "lobatojayne@gmail.com",
    videoLinkURL:
      "https://www.instagram.com/reel/CfcCfBkFrCQ/?igsh=ZXN6MHV3bXk3NXJq",
    dancarinos: [
      {
        cpf: "618.842.623-50",
        nome: "Jay Lobato",
        nascimento: new Date(Date.UTC(1999, 1, 15)),
      },
      {
        nascimento: new Date(Date.UTC(1997, 0, 10)),
        nome: "Wesley Freire",
        cpf: "605.887.683-40",
      },
    ],
    tel: "(98) 98432-2683",
  },
  {
    nome: "KEILA CRISTINA COELHO NOGUEIRA E WEVERSON JULIO NOGUEIRA MARTINS",
    cidade: "São Luís",
    ig: "https://www.instagram.com/weverson_martiins_?igsh=cnRwZDh4YW01eWZh&utm_source=qr",
    cpfList: ["026.468.773-66", "613.084.943-51"],
    email: "keilacristina0315@gmail.com",
    tel: "(98) 98533-2352",
    dancarinos: [
      {
        cpf: "026.468.773-66",
        nascimento: new Date(Date.UTC(1988, 2, 25)),
        nome: "Keila Cristina Coelho Nogueira",
      },
      {
        cpf: "613.084.943-51",
        nome: "Weverson julio Nogueira Martins",
        nascimento: new Date(Date.UTC(2000, 3, 12)),
      },
    ],
    type: "dancers",
    videoLinkURL:
      "https://www.instagram.com/reel/Cx54Lu3AdihAs77XRSn-x8I50OvxDHAZjSKd9Y0/?igsh=bTRmOHhuZXhlaG03",
  },

  {
    tel: "(98) 97005-7816",
    type: "dancers",
    dancarinos: [
      {
        nascimento: new Date(Date.UTC(1997, 8, 2)),
        nome: "Letícia ketlen muniz lima",
        cpf: "613.005.103-40",
      },
      {
        nascimento: new Date(Date.UTC(1980, 9, 7)),
        cpf: "467.550.633-04",
        nome: "José Orlando de Jesus Júnior",
      },
    ],
    email: "leticiaketlen229@gmail.com",
    ig: "https://www.instagram.com/reel/CzcgvhfLdOS/?igsh=dTducTBvNThxNTUx",
    videoLinkURL:
      "https://www.instagram.com/reel/C5JBd6YAx5z/?igsh=MTZxZ2Y1ODJ6emYyag==",
    nome: "LETÍCIA KETLEN MUNIZ LIMA E JOSÉ ORLANDO DE JESUS JÚNIOR",
    cidade: "São Luís",
    cpfList: ["613.005.103-40", "467.550.633-04"],
  },

  {
    tel: "(98) 97014-1530",
    type: "dancers",
    email: "nilida795@gmail.com",
    nome: "NILDA COELHO E ANTÔNIO JOSÉ MENDES",
    cidade: "São Luís",
    videoLinkURL:
      "https://www.instagram.com/reel/C2jV0XkO05U/?igsh=c3hia3FqZTFrZ20w",
    cpfList: ["515.706.373-34", "255.678.373-72"],
    dancarinos: [
      {
        nome: "Nilda Coelho",
        nascimento: new Date(Date.UTC(1972, 6, 2)),
        cpf: "515.706.373-34",
      },
      {
        nome: "Antônio José Mendes",
        cpf: "255.678.373-72",
        nascimento: new Date(Date.UTC(1961, 6, 31)),
      },
    ],
    ig: "https://www.instagram.com/pointnildacoelho?igsh=MWpqdTZ0dXJtYWN5aA==",
  },

  {
    type: "dancers",
    nome: "ROSEANA GUSMÃO BORGES E JOSUÉ LICAR DA SILVA",
    tel: "(98) 98408-8853",
    dancarinos: [
      {
        nome: "Roseana Gusmão Borges",
        nascimento: new Date(Date.UTC(1984, 8, 7)),
        cpf: "020.833.873-09",
      },
      {
        nome: "Josué licar da Silva",
        cpf: "788.476.803-87",
        nascimento: new Date(Date.UTC(1997, 6, 22)),
      },
    ],
    cidade: "São Luís",
    ig: "https://www.instagram.com/",
    videoLinkURL:
      "https://drive.google.com/file/d/1aC7ydY_pw3jT0LiNvxzItLE9xOUwYJF6/view?usp=sharing",
    email: "contactdevwing@gmail.com",
    cpfList: ["020.833.873-09", "788.476.803-87"],
  },

  {
    cidade: "São Luís",
    tel: "(98) 99605-4409",
    cpfList: ["254.241.573-00", "504.360.430-17"],
    dancarinos: [
      {
        nascimento: new Date(Date.UTC(1964, 10, 15)),
        cpf: "254.241.573-00",
        nome: "Rosângela santos de Farias",
      },
      {
        cpf: "504.360.430-17",
        nome: "ALEXANDRE MAGNO OLIVEIRA MUNIZ",
        nascimento: new Date(Date.UTC(1962, 2, 8)),
      },
    ],
    videoLinkURL:
      "https://drive.google.com/file/d/1FuuWbt8NOndRvpIt0SdAO6LdqWOD267o/view?usp=sharing",
    ig: "https://www.instagram.com/",
    nome: "ROSÂNGELA SANTOS DE FARIAS E ALEXANDRE MAGNO OLIVEIRA MUNIZ",
    email: "contactdevwing@gmail.com",
    type: "dancers",
  },
  {
    cidade: "São Luís",
    email: "teresacristina2812@gmail.com",
    type: "dancers",
    videoLinkURL:
      "https://www.instagram.com/reel/C49KPCCJDcVAlD5-r_79RF-kj4h41xE4DY1m7Y0/?igsh=MXRjejB1d3VrZHBtcw==",
    ig: "https://www.instagram.com/teresa._cristina?igsh=MWJjbzYwbDkyeGRkbA==",
    cpfList: ["976.169.403-82", "005.621.083-35"],
    dancarinos: [
      {
        nascimento: new Date(Date.UTC(1973, 11, 28)),
        cpf: "976.169.403-82",
        nome: "Teresa Cristina Pinto Diniz",
      },
      {
        nascimento: new Date(Date.UTC(1983, 5, 27)),
        cpf: "005.621.083-35",
        nome: "Luis André Diniz Lopes",
      },
    ],
    nome: "TERESA CRISTINA PINTO DINIZ E LUIS ANDRÉ DINIZ LOPES",
    tel: "(98) 98210-5584",
  },
];
