import pot1 from "../assets/terrenos/potrero/1.png";
import pot2 from "../assets/terrenos/potrero/2.png";
import pot3 from "../assets/terrenos/potrero/3.png";

import zac1 from "../assets/terrenos/zacanco/1.png";
import zac2 from "../assets/terrenos/zacanco/2.png";
import zac3 from "../assets/terrenos/zacanco/3.png";

import agu1 from "../assets/terrenos/aguador/1.png";
import agu2 from "../assets/terrenos/aguador/2.png";
import agu3 from "../assets/terrenos/aguador/3.png";

import aca1 from "../assets/terrenos/acatitla/1.png";
import aca2 from "../assets/terrenos/acatitla/2.png";
import aca3 from "../assets/terrenos/acatitla/3.png";
import aca4 from "../assets/terrenos/acatitla/4.png";

import col1 from "../assets/terrenos/colatitla/1.png";
import col2 from "../assets/terrenos/colatitla/2.png";

import es1 from "../assets/terrenos/escondida/1.png";
import es2 from "../assets/terrenos/escondida/2.png";
import es3 from "../assets/terrenos/escondida/3.png";
import es4 from "../assets/terrenos/escondida/4.png";

import val1 from "../assets/terrenos/valle/1.png";
import val2 from "../assets/terrenos/valle/2.png";
import val3 from "../assets/terrenos/valle/3.png";
import val4 from "../assets/terrenos/valle/4.png";

import sm1 from "../assets/terrenos/miguel/1.png";
import sm2 from "../assets/terrenos/miguel/2.png";
import sm3 from "../assets/terrenos/miguel/3.png";
import sm4 from "../assets/terrenos/miguel/4.png";

import tla1 from "../assets/terrenos/tlaltenco/1.png";
import tla2 from "../assets/terrenos/tlaltenco/2.png";
import tla3 from "../assets/terrenos/tlaltenco/3.png";

const db = [




  {
    nombre: "Acatitla",
    municipio: "San Andrés Cuauhtempan",
    estado: "Morelos",
    metrosCuadrados: [374.45, 423.09, 439.33, 448.89, 808.38, 1018, 1929],
    costoPorMetroCuadrado: 500,
    tipoEscritura: "Pública",
    precio: 2115646,
    descripcion:
      'Gran oportunidad de inversión en nuestros lotes de nombre "Acatitla" ubicados en el municipio de San Andrés Cuauhtempan, Estado de Morelos. Estos terrenos rústicos ofrecen un potencial prometedor para el futuro. El costo por metro cuadrado es de 500 pesos, con facilidades de pago. El enganche es del 30%, que se puede diferir hasta en 3 meses, y también ofrecemos opciones de financiamiento a 12, 24 y 36 meses sin intereses. Aprovecha esta oportunidad para tener tu casa de vacaciones, tu nuevo hogar o incluso una nueva fuente de ingresos.',
    servicios: {
      electricidad: false,
    },
    coordenadas: [18.980071, -98.9511693],
    enganche: 91800,
    mensualidades: [12, 24, 36],
    id: 10,
    imagenes: [aca1, aca2, aca3, aca4],
    amenidades:
      "A 1 hora de CDMX",
  },


  {
    nombre: "Aguador",
    municipio: "Totoloapan",
    estado: "Morelos",
    metrosCuadrados: [200, 400, 453.21, 600, 800, 825.55, 1000, 1089.145],
    costoPorMetroCuadrado: 1500,
    tipoEscritura: "publica",
    precio: 300000,
    descripcion:
      'Gran oportunidad de inversión en nuestros lotes de nombre "Aguador" ubicados en el municipio de Totoloapan, Estado de Morelos. El costo por metro cuadrado es de 1500 pesos, con facilidades de pago. El enganche es del 30%, que se puede diferir hasta en 3 meses, y también ofrecemos opciones de financiamiento a 12, 24, 36 y 40 meses sin intereses. Aprovecha esta oportunidad para tener tu casa de vacaciones, tu nuevo hogar o incluso una nueva fuente de ingresos.',
    servicios: {
      electricidad: true,
      pavimentacion: true,
      telefono: true,
      internet: true,
    },
    coordenadas: [18.9439155, -98.9710452],
    enganche: 90000,
    mensualidades: [12, 24, 36],
    id: 10,
    imagenes: [agu1, agu2 ,agu3],
    amenidades:
      "A espalda del “Club paraiso del sol, A 15 minutos del corazón de Tlayacapan A 5 minutos de la carretera México - Cuautla"
  },


  {
    nombre: "Colatitla",
    municipio: "San Andres Cuauhtempan",
    estado: "Morelos",
    metrosCuadrados: [260],
    costoPorMetroCuadrado: 800,
    tipoEscritura: "Privada",
    precio: 208000,
    descripcion:
      'Gran oportunidad de inversión en nuestros lotes de nombre "Colatitla" ubicados en el municipio de San Andrés Cuauhtempan, Estado de Morelos. Estos terrenos rústicos ofrecen un potencial prometedor para el futuro. El costo por metro cuadrado es de 800 pesos, con facilidades de pago. El enganche es del 30%, que se puede diferir hasta en 3 meses, y también ofrecemos opciones de financiamiento a 12 meses sin intereses. Aprovecha esta oportunidad para tener tu casa de vacaciones, tu nuevo hogar o incluso una nueva fuente de ingresos.',
    servicios: {
      electricidad: false,
    },
    coordenadas: [18.9750626, -98.9506144],
    enganche: 62400,
    mensualidades: [12, 24, 36],
    id: 10,
    imagenes: [col1, col2],
    amenidades:
      "A 5 minutos del Centro de San Andrés Cuauhtempan"
  },


  // {
  //   nombre: "Escondida",
  //   municipio: "Totoloapan",
  //   estado: "Morelos",
  //   metrosCuadrados: [210],
  //   tipoEscritura: "Pública",
  //   precio: 189000,
  //   descripcion:
  //     'Gran oportunidad de inversión en nuestros lotes de nombre "Escondida" ubicados en el municipio de Totoloapan, Estado de Morelos. Estos terrenos rústicos ofrecen un potencial prometedor para el futuro. El costo por metro cuadrado es de 900 pesos, con facilidades de pago. El enganche es del 30%, ofrecemos opciones de financiamiento a 12, 24 y 36 meses sin intereses. Aprovecha esta oportunidad para tener tu casa de vacaciones, tu nuevo hogar o incluso una nueva fuente de ingresos.',
  //   servicios: {
  //     electricidad: false,
  //   },
  //   coordenadas: [18.992215, -98.935113],
  //   enganche: 56700,
  //   mensualidades: [12, 24, 36],
  //   id: 10,
  //   imagenes: [es1, es2 ,es3 ,es4],
  //   amenidades:
  //     "A 5 minutos de la Escuela de Estudios Superiores de Totolapan (UAEM)”, A 1 hora con 30 minutos de CDMX"
  // },

  {
    nombre: "Potrero",
    municipio: "Oaxtepec",
    estado: "Morelos",
    metrosCuadrados: [244.59],
    costoPorMetroCuadrado: 1000,
    tipoEscritura: "Privada",
    precio: 317200,
    descripcion:
      ' Gran oportunidad de inversión en el terreno de  nombre "Potrero" ubicado en el municipio de Oaxtepec, Estado de Morelos. El costo por metro cuadrado es de 1300 pesos, con facilidades de pago. El enganche es del 30%, ofrecemos opciones de financiamiento a 12 meses sin intereses. Aprovecha esta oportunidad para tener tu casa de vacaciones, tu nuevo hogar o incluso una nueva fuente de ingresos.',
    servicios: {
      electricidad: true,
    },
    coordenadas: [18.8868064, -99.0768712],
    enganche: 951600,
    mensualidades: [12],
    id: 10,
    imagenes: [pot1, pot2 ,pot3],
    amenidades:
      "A 15 minutos de Six Flags Oaxtepec, A 1 hora con 30 minutos de CDMX, Colindante con “Lomas de Cocoyoc"
  },

  {
    nombre: "Rancho San Miguel",
    municipio: "San Andres Cuauhtempan",
    estado: "Morelos",
    metrosCuadrados: [623.55],
    costoPorMetroCuadrado: 800,
    tipoEscritura: "Pública",
    precio: 498840,
    descripcion:
      ' Gran oportunidad de inversión en el terreno de nombre  "Rancho San Miguel" ubicado en el municipio de San Andrés Cuauhtempan, Estado de Morelos. El costo por metro cuadrado es de 800 pesos, con facilidades de pago. El enganche es del 30%, ofrecemos opciones de financiamiento a 12, 24 y 36 meses sin intereses. Aprovecha esta oportunidad para tener tu casa de vacaciones, tu nuevo hogar o incluso una nueva fuente de ingresos.',
    servicios: {
      electricidad: true,
    },
    coordenadas: [18.9640357, -98.9257589],
    enganche: 149652,
    mensualidades: [12, 24, 36],
    id: 10,
    imagenes: [sm1, sm2, sm3, sm4],
    amenidades: "A 10 minutos del corazón de Tlayacapan, A 20 minutos de Oaxtepec"

  },
  {
    nombre: "Tlatenco",
    municipio: "Totoloapan",
    estado: "Morelos",
    metrosCuadrados: [261, 344.42, 605.42],
    costoPorMetroCuadrado: 800,
    tipoEscritura: "Pública",
    precio: 296000,
    descripcion:
      'Gran oportunidad de inversión en el terreno de nombre Tlatenco ubicado en el municipio de Totoloapan, Estado de Morelos. El costo por metro cuadrado es de 800 pesos, con facilidades de pago. El enganche es del 30%, ofrecemos opciones de financiamiento a 12, 24 y 36 meses sin intereses. Aprovecha esta oportunidad para tener tu casa de vacaciones, tu nuevo hogar o incluso una nueva fuente de ingresos.',
    servicios: {
      electricidad: true,
    },
    coordenadas: [18.9913531, -98.9338029],
    enganche: 88800,
    mensualidades: [12, 24, 36],
    id: 10,
    imagenes: [tla1, tla2, tla3],
    amenidades:
      "A 5 minutos de la Escuela de Estudios Superiores de Totolapan (UAEM) Calles de 8 metros"

  },

  {
    nombre: "Valle Verde",
    municipio: "Totoloapan",
    estado: "Morelos",
    metrosCuadrados: [200],
    costoPorMetroCuadrado: 900,
    tipoEscritura: "Privada",
    precio: 180000,
    descripcion:
      'Gran oportunidad de inversión en nuestros lotes de nombre "Valle Verde" ubicados en el municipio de Totoloapan, Estado de Morelos.Estos terrenos rústicos ofrecen un potencial prometedor para el futuro.El costo por metro cuadrado es de 900 pesos, con facilidades de pago.El enganche es del 30%, ofrecemos opciones de financiamiento a 12, 24 y 36 meses sin intereses.Aprovecha esta oportunidad para tener tu casa de vacaciones, tu nuevo hogar o incluso una nueva fuente de ingresos.',

    servicios: {
      electricidad: false
    },
    coordenadas: [18.979909, -98.951170],
    enganche: 54000,
    mensualidades: [12, 24, 36],
    id: 10,
    imagenes: [val1, val2, val3, val4],
    amenidades: "A 5 minutos de la Escuela de Estudios Superiores de Totolapan(UAEM), A 1 hora con 30 minutos de CDMX, Calles de 8 metros"


  },













  {
    nombre: "Zacanco",
    municipio: "Ahuatlan",
    estado: "Morelos",
    metrosCuadrados: [305.95, 306.00, 400, 503.22, 516.28, 521.21, 669.56, 800],
    costoPorMetroCuadrado: 1000,
    tipoEscritura: "Pública",
    precio: 306000,
    descripcion:
      ' Gran oportunidad de inversión en nuestros lotes de nombre "Zacanco" ubicados en el municipio de Ahuatlan, Estado de Morelos.El costo por metro cuadrado es de 1000 pesos, con facilidades de pago.El enganche es del 30 %, ofrecemos opciones de financiamiento a 12, 24, 36 y 40 meses sin intereses.Aprovecha esta oportunidad para tener tu casa de vacaciones, tu nuevo hogar o incluso una nueva fuente de ingresos.',

    servicios: {
      electricidad: true,
      pavimentacion: true,
    },
    coordenadas: [18.996400, -98.932971],
    enganche: 91800,
    mensualidades: [12, 24, 36, 40],
    id: 10,
    imagenes: [zac1, zac2 ,zac3],
    amenidades: "A 5 minutos de la Escuela de Estudios Superiores de Totolapan(UAEM), A 1 hora con 30 minutos de CDMX, Calles de 8 metros"

  }


];

export default db;
