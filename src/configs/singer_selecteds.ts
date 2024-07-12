interface SingerSelected {
  cpf: string;
  cpfList: string[];
  email: string;
  type: string;
  videoLinkURL: string;
  ig: string;
  cidade: string;
  nascimento: Date;
  tel: string;
  nome: string;
}

export const SINGER_SELECTEDS: SingerSelected[] = [
  {
    cpf: "028.963.713-97",
    cpfList: ["028.963.713-97"],
    tel: "(98) 98447-4165",
    email: "claudinetebatista531@gmail.com",
    cidade: "Itapecuru Mirim",
    type: "singer",
    nome: "CLAUDINETE BATISTA VIERA",
    videoLinkURL: "https://www.youtube.com/watch?v=z8TUD5meCCA",
    ig: "https://www.instagram.com/claudinetebatista01?igsh=MW02am5mNzJua2JtaA==",
    nascimento: new Date("1983-12-07T00:00:00Z"),
  },
  {
    cpfList: ["001.619.917-00"],
    type: "singer",
    videoLinkURL: "https://youtu.be/UcCF-O-PGdI?si=Y6zzG8V-ysJ0yIVS",
    email: "edycandido50@gmail.com",
    tel: "(98) 98751-0034",
    nome: "EDY CANDIDO",
    cidade: "São Luís",
    ig: "https://www.instagram.com/edycandido67?utm_source=qr&igsh=MWIxYnJtejRqcnplbw==",
    nascimento: new Date("1967-09-10T00:00:00Z"),
    cpf: "001.619.917-00",
  },
  {
    videoLinkURL: "https://youtu.be/kvwWPfaPJ1s",
    cidade: "São Luís",
    email: "emanuelepazzz@gmail.com",
    cpfList: ["614.360.423-13"],
    ig: "https://www.instagram.com/emanuelepazz/",
    nascimento: new Date("1996-09-07T00:00:00Z"),
    cpf: "614.360.423-13",
    type: "singer",
    tel: "(98) 98563-9659",
    nome: "EMANUELE PAZ",
  },
  {
    nome: "GEORGE GOMES",
    cpfList: ["471.112.673-20"],
    email: "georgelegenda@hotmail.com",
    type: "singer",
    videoLinkURL:
      "https://www.instagram.com/reel/C5bGNE8uuTS/?igsh=MXZkbHZqbjJkY2Rudg==",
    ig: "https://www.instagram.com/georgelegenda?igsh=MTU3a3IzeXJxd25ueQ%3D%3D&utm_source=qr",
    cidade: "São Luís",
    nascimento: new Date("1973-06-01T00:00:00Z"),
    tel: "(98) 98217-7264",
    cpf: "471.112.673-20",
  },
  {
    cpf: "137.641.873-87",
    nascimento: new Date("1957-01-20T00:00:00Z"),
    type: "singer",
    tel: "(99) 98121-0447",
    videoLinkURL: "https://we.tl/t-6eXGIiJQQN",
    cpfList: ["137.641.873-87"],
    ig: "https://www.instagram.com/joao1376?igsh=YzljYTk1ODg3Zg==",
    nome: "JOÃO CARLOS",
    cidade: "São Luís",
    email: "katilane26@gmail.com",
  },
  {
    email: "ateliedosonho37@gmail.com",
    nome: "OSWALDO ABREU",
    cidade: "São Luís",
    cpfList: ["401.236.118-06"],
    videoLinkURL: "https://youtu.be/z6R8eGtlxS4?si=zqP06z2wU7VY3YYX",
    type: "singer",
    cpf: "401.236.118-06",
    nascimento: new Date("1991-11-22T00:00:00Z"),
    tel: "(98) 98728-3760",
    ig: "https://www.instagram.com/oswaldoylu?igsh=ajFzZHhqOTd6M2dh",
  },
];
