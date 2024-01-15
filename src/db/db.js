import zac1 from "../assets/terrenos/zacanco/1.png";
import zac2 from "../assets/terrenos/zacanco/2.png";
import zac3 from "../assets/terrenos/zacanco/3.png";

const db = [
  {
    nombre: "Acatitla",
    ubicacion: 'San Andrés Cuauhtémpan',
    municipio: 'Morelos',
    metrosCuadrados: 323,
    tipoEscritura: 'publica',
    precio: 161545,
    descripcion:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
    servicios: {
      electricidad: false,
      // pavimentado: true,
    },
    enganche: 48463.5,
    mensualidades: [36],
    id: 1,
    imagenes: [zac1, zac2, zac3],
  },
  {
    nombre: "Aguador",
    ubicacion: 'Tlayacapan',
    municipio: 'Morelos',
    metrosCuadrados: 200,
    tipoEscritura: 'publica',
    precio: 270000,
    descripcion:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
    servicios: {
      electricidad: true,
      // pavimentado: true,
    },
    enganche: 81000,
    mensualidades: [36],
    id: 2,
    imagenes: [zac1, zac2, zac3],
  },
  {
    nombre: "Colatitla",
    ubicacion: 'San Andrés Cuauhtémpan',
    municipio: 'Morelos',
    metrosCuadrados: 260,
    tipoEscritura: 'privada',
    precio: 208000,
    descripcion:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
    servicios: {
      electricidad: false,
      // pavimentado: true,
    },
    enganche: 62400,
    mensualidades: [36],
    id: 3,
    imagenes: [zac1, zac2, zac3],
  },
  {
    nombre: "El Potrero",
    ubicacion: 'Lomas "El Potrero"',
    municipio: 'Morelos',
    metrosCuadrados: 244,
    tipoEscritura: 'publica',
    precio: 317200,
    descripcion:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
    servicios: {
      electricidad: true,
      // pavimentado: true,
    },
    enganche: 95160,
    mensualidades: [36],
    id: 4,
    imagenes: [zac1, zac2, zac3],
  },
  {
    nombre: "La Escondida",
    ubicacion: 'Totoloapan',
    municipio: 'Morelos',
    metrosCuadrados: 210,
    tipoEscritura: 'publica',
    precio: 189000,
    descripcion:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
    servicios: {
      electricidad: true,
      // pavimentado: true,
    },
    enganche: 56700,
    mensualidades: [36],
    id: 5,
    imagenes: [zac1, zac2, zac3],
  },
  {
    nombre: "Rancho San Miguel",
    ubicacion: 'San Andrés Cuauhtémpan',
    municipio: 'Tlayacapan',
    metrosCuadrados: 623.55,
    tipoEscritura: 'privada',
    precio: 498840,
    descripcion:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
    servicios: {
      electricidad: true,
      // pavimentado: true,
    },
    enganche: 149652,
    mensualidades: [36],
    id: 6,
    imagenes: [zac1, zac2, zac3],
  },
  {
    nombre: "Tlatenco",
    ubicacion: 'Totoloapan',
    municipio: 'Morelos',
    metrosCuadrados: 261,
    tipoEscritura: 'publica',
    precio: 208800,
    descripcion:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
    servicios: {
      electricidad: true,
      // pavimentado: true,
    },
    enganche: 62640,
    mensualidades: [36],
    id: 1,
    imagenes: [zac1, zac2, zac3],
  },
  {
    nombre: "Tlaltenco",
    ubicacion: 'Totoloapan',
    municipio: 'Morelos',
    metrosCuadrados: 344.42,
    tipoEscritura: 'publica',
    precio: 275536,
    descripcion:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
    servicios: {
      electricidad: false,
      // pavimentado: true,
    },
    enganche: 82660.8,
    mensualidades: [36],
    id: 7,
    imagenes: [zac1, zac2, zac3],
  },
  {
    nombre: "Valle Verde",
    ubicacion: 'Totoloapan',
    municipio: 'Morelos',
    metrosCuadrados: 200,
    tipoEscritura: 'privada',
    precio: 180000,
    descripcion:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
    servicios: {
      electricidad: false,
      // pavimentado: true,
    },
    enganche: 54000,
    mensualidades: [36],
    id: 8,
    imagenes: [zac1, zac2, zac3],
  },
  {
    nombre: "Zacanco",
    ubicacion: 'Ahuatlan',
    municipio: 'Morelos',
    metrosCuadrados: 200,
    tipoEscritura: 'publica',
    precio: 306000,
    descripcion:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
    servicios: {
      electricidad: true,
      // pavimentado: true,
    },
    enganche: 91800,
    mensualidades: [36],
    id: 9,
    imagenes: [zac1, zac2, zac3],
  },
]

export default db