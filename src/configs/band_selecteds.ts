interface BandSelected {
  email: string;
  imgPatch: string;
  tel: string;
  instrumentistas: {
    cpf: string;
    nascimento: Date;
    nome: string;
    instrumento: string;
  }[];
  cantores: {
    cpf: string;
    nascimento: Date;
    nome: string;
  }[];
  videoLinkURL: string;
  ig: string;
  nome: string;
  type: string;
  cidade: string;
  cpfList: string[];
}

export const BAND_SELECTEDS: BandSelected[] = [
  {
    email: "ronadrums@hotmail.com",
    tel: "(98) 98419-2655",
    imgPatch: "/participants/dona_rita.png",
    instrumentistas: [
      {
        nascimento: new Date("1991-10-02T00:00:00Z"),
        nome: "Filipe da Cunha Lisboa",
        instrumento: "Guitarra",
        cpf: "037.263.693-41",
      },
      {
        instrumento: "Baixo",
        cpf: "649.301.733-53",
        nascimento: new Date("1983-08-02T00:00:00Z"),
        nome: "Adiel Teles dos Santos",
      },
      {
        nascimento: new Date("1986-05-13T00:00:00Z"),
        cpf: "015.460.023-75",
        nome: "Léo Vand Rest Vieira Lindoso",
        instrumento: "Bateria",
      },
    ],
    cantores: [
      {
        cpf: "025.548.333-38",
        nascimento: new Date("1987-01-14T00:00:00Z"),
        nome: "Ronaldo Silva Lisboa Junior",
      },
    ],
    videoLinkURL: "https://youtu.be/YOiLZYWbxZA?si=g3P97zFEONlEMnON",
    ig: "https://www.instagram.com/donaritareggae?igsh=MW90YTJjdHMwYXB5bw==",
    nome: "Banda Dona Rita",
    type: "band",
    cidade: "São Luís",
    cpfList: [
      "025.548.333-38",
      "037.263.693-41",
      "649.301.733-53",
      "015.460.023-75",
    ],
  },
  {
    cantores: [
      {
        cpf: "252.662.333-20",
        nascimento: new Date("1966-11-21T00:00:00Z"),
        nome: "Francisco Sérgio Barreto ",
      },
    ],
    videoLinkURL: "https://youtu.be/G4YLvFTM2hY?si=MsRVsc4W57-cs3bq",
    nome: "Banda Guetos",
    imgPatch: "/participants/guetos.png",
    cidade: "São Luís",
    ig: "https://www.instagram.com/bandaguetos_?igsh=cGdvbHhrbmc4dTI0",
    cpfList: ["252.662.333-20", "215.729.173-34"],
    instrumentistas: [
      {
        nascimento: new Date("1964-01-21T00:00:00Z"),
        instrumento: "Violão",
        nome: "Antônio Tadeu  Tavares",
        cpf: "215.729.173-34",
      },
    ],
    email: "barretoeconomista@gmail.com",
    type: "band",
    tel: "(98) 98319-3339",
  },
  {
    email: "magaproducoes3@gmail.com",
    cidade: "São Luís",
    type: "band",
    imgPatch: "/participants/orquestra.png",
    nome: "Orquestra Maranhense de Reggae",
    cpfList: [
      "032.653.683-35",
      "022.929.543-62",
      "656.704.343-15",
      "024.277.213-79",
      "825.678.403-20",
      "611.102.113-33",
      "051.741.543-77",
      "003.999.873-80",
      "810.627.023-87",
      "040.403.283-45",
      "607.355.493-11",
      "962.261.023-49",
      "906.171.503-20",
      "950.862.343-87",
    ],
    instrumentistas: [
      {
        nome: "Marcel Pereira da Silva ",
        cpf: "656.704.343-15",
        nascimento: new Date("1980-11-26T00:00:00Z"),
        instrumento: "Baixo",
      },
      {
        cpf: "024.277.213-79",
        nascimento: new Date("1987-02-27T00:00:00Z"),
        nome: "Jauberte Lobato Soares ",
        instrumento: "Trompete",
      },
      {
        cpf: "825.678.403-20",
        nascimento: new Date("1977-08-29T00:00:00Z"),
        instrumento: "Saxofone",
        nome: "Carlos Magno Rocha",
      },
      {
        nome: "Gabriel Oliveira Pinheiro",
        instrumento: "Trompete",
        nascimento: new Date("1998-06-22T00:00:00Z"),
        cpf: "611.102.113-33",
      },
      {
        nascimento: new Date("2002-05-10T00:00:00Z"),
        cpf: "051.741.543-77",
        nome: "Matheus Aguiar da Silva",
        instrumento: "Saxofone",
      },
      {
        nascimento: new Date("1985-01-07T00:00:00Z"),
        nome: "André Roberto Lopes Pereira",
        instrumento: "Saxofone",
        cpf: "003.999.873-80",
      },
      {
        instrumento: "Teclado",
        nascimento: new Date("1978-05-14T00:00:00Z"),
        cpf: "810.627.023-87",
        nome: "Ricardo de Assis Sá dos Santos  ",
      },
      {
        instrumento: "Saxofone",
        nascimento: new Date("1989-05-09T00:00:00Z"),
        cpf: "040.403.283-45",
        nome: "Manoel de Jesus Costa Filho",
      },
      {
        nome: "Daniel dos Santos da Silva",
        nascimento: new Date("1997-10-06T00:00:00Z"),
        instrumento: "Baixo",
        cpf: "607.355.493-11",
      },
      {
        nome: "Enilson Carvalho Dias",
        cpf: "962.261.023-49",
        instrumento: "Trombone",
        nascimento: new Date("1982-02-12T00:00:00Z"),
      },
      {
        cpf: "906.171.503-20",
        nascimento: new Date("1979-10-25T00:00:00Z"),
        instrumento: "Guitarra",
        nome: "Sandréia Pereira Santana Lopes",
      },
      {
        nascimento: new Date("1982-09-22T00:00:00Z"),
        cpf: "950.862.343-87",
        instrumento: "Trombone",
        nome: "Daniel Miranda Costa",
      },
    ],
    tel: "(98) 98122-6935",
    cantores: [
      {
        nascimento: new Date("2005-10-11T00:00:00Z"),
        nome: "Ana Beatriz Diniz Silva",
        cpf: "032.653.683-35",
      },
      {
        nome: "Robson Claudio Lopes dos Santos",
        cpf: "022.929.543-62",
        nascimento: new Date("1987-10-12T00:00:00Z"),
      },
    ],
    videoLinkURL: "https://youtu.be/eC4gPB9fsw4?si=8DVYcrsaRq5HN43K",
    ig: "https://www.instagram.com/orquestramr?igsh=MTBhbmIyYTh1eG51bA==",
  },

  {
    cantores: [
      {
        nascimento: new Date("1991-04-04T00:00:00Z"),
        nome: "Rafael Hachem Muniz",
        cpf: "008.027.723-31",
      },
    ],
    imgPatch: "/participants/radio_98.png",
    cidade: "São Luís",
    type: "band",
    email: "rafaelhachemm@gmail.com",
    nome: "Rádio 98",
    ig: "https://www.instagram.com/bandaradio98?igsh=MTV6ZzFmdm9xamxieg==",
    tel: "(98) 98136-0002",
    instrumentistas: [
      {
        nascimento: new Date("1992-04-26T00:00:00Z"),
        instrumento: "Percussão",
        nome: "Paulo José Lopes Moura",
        cpf: "054.567.503-09",
      },
      {
        cpf: "655.904.653-20",
        nascimento: new Date("1980-12-07T00:00:00Z"),
        nome: "João Paulo Pinto Cardoso",
        instrumento: "Baixo",
      },
      {
        nascimento: new Date("1976-01-15T00:00:00Z"),
        nome: "Marcelo Antônio Rebelo Jansen Ferreira",
        cpf: "736.849.103-68",
        instrumento: "Teclado",
      },
      {
        cpf: "685.787.093-49",
        nascimento: new Date("1970-07-27T00:00:00Z"),
        instrumento: "Bateria",
        nome: "Moises Ferreira Mota",
      },
    ],
    cpfList: [
      "008.027.723-31",
      "054.567.503-09",
      "655.904.653-20",
      "736.849.103-68",
      "685.787.093-49",
    ],
    videoLinkURL: "https://youtu.be/mhatBncP9YA?si=dAnZNmG91ngoDUHE",
  },
  {
    imgPatch: "/participants/rasta_mind.png",
    cantores: [
      {
        nome: "Alan Christian Machado Dias",
        cpf: "059.178.283-93",
        nascimento: new Date("1993-06-25T00:00:00Z"),
      },
    ],

    instrumentistas: [
      {
        nome: "José Jonas Ribeiro Alves Filho",
        nascimento: new Date("2001-07-14T00:00:00Z"),
        instrumento: "Bateria",
        cpf: "614.685.053-51",
      },
      {
        instrumento: "Baixo",
        nome: "João Pedro Soares Costa",
        nascimento: new Date("2002-03-08T00:00:00Z"),
        cpf: "030.755.293-46",
      },
      {
        nome: "João Gabriel Machado Dias",
        cpf: "620.840.863-61",
        instrumento: "Guitarra",
        nascimento: new Date("1999-10-29T00:00:00Z"),
      },
    ],
    nome: "Rastamind",
    videoLinkURL:
      "https://www.youtube.com/watch?v=1gxXbcSiauQ&ab_channel=Rastamind",
    cpfList: [
      "059.178.283-93",
      "614.685.053-51",
      "030.755.293-46",
      "620.840.863-61",
    ],
    email: "gaprielsoham@gmail.com",
    tel: "(98) 99916-8632",
    type: "band",
    ig: "https://www.instagram.com/rastamindoficial/",
    cidade: "Pinheiro",
  },
  {
    imgPatch: "/participants/tav_zareia.png",
    instrumentistas: [
      {
        cpf: "050.920.263-24",
        nome: "Willamy Oliveira Garcia",
        instrumento: "Guitarra",
        nascimento: new Date("1992-11-10T00:00:00Z"),
      },
      {
        nascimento: new Date("1986-12-19T00:00:00Z"),
        cpf: "011.924.783-63",
        nome: "Renan Michael Teles Costa",
        instrumento: "Bateria",
      },
      {
        nome: "Jonas Felicíssimo Silva",
        instrumento: "Baixo",
        nascimento: new Date("1998-08-29T00:00:00Z"),
        cpf: "613.035.923-39",
      },
    ],
    videoLinkURL:
      "https://www.instagram.com/reel/C5judRSMZgO/?igsh=MTB1dDc3bjlyYWM4aw==",
    ig: "https://www.instagram.com/p/C5GZqrBOMwF/?igsh=MTJiMDhncDI1djZxYg==",
    cantores: [
      {
        nascimento: new Date("1993-04-19T00:00:00Z"),
        cpf: "034.316.463-95",
        nome: "Carlos Otávio Corrêa de Moraes Rego",
      },
    ],
    cidade: "Barreirinhas",
    type: "band",
    tel: "(86) 99559-9558",
    nome: "Tav Zareia",
    cpfList: [
      "034.316.463-95",
      "050.920.263-24",
      "011.924.783-63",
      "613.035.923-39",
    ],
    email: "Correatav@gmail.com",
  },
];
