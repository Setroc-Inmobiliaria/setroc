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
    ubicacion: "San Andres Cuauhtempan",
    municipio: "Morelos",
    metrosCuadrados: 423,
    tipoEscritura: "privada",
    precio: 211546,
    descripcion:
      "1 hora de CDMX. Inversión única en Acatitla, San Andrés Cuauhtémpan, Morelos. Terreno rústico con potencial de desarrollo futuro, escrituración privada. Costo desde $500 MXN por metro cuadrado. Enganche del 30% y facilidades de pago en 12, 24 y 36 meses sin intereses. ¡Aprovecha esta oportunidad de crecimiento en un entorno prometedor!",
    servicios: {
      electricidad: false,
    },
    coordenadas: [18.980071, -98.9511693],
    enganche: 63464,
    mensualidades: [36],
    id: 1,
    imagenes: [aca1, aca2, aca3, aca4],
    amenidades: "1 hora de CDMX",
  },
  {
    nombre: "Aguador",
    ubicacion: "Tlayacapan",
    municipio: "Morelos",
    metrosCuadrados: 200,
    tipoEscritura: "privada",
    precio: 300000,
    descripcion:
      "Cerca del club Paraiso del Sol, 15 minutos del corazón de Tlayacapan, a 5 minutos de la carretera México-Cuautla. Inversión única en Aguador, Tlayacapan, Morelos. Terreno rústico con potencial de desarrollo futuro, escrituración privada. Costo desde $1500 MXN por metro cuadrado. Enganche del 30% y facilidades de pago en 12, 24 y 36 meses sin intereses. ¡Aprovecha esta oportunidad de crecimiento en un entorno prometedor!",
    servicios: {
      electricidad: true,
      pavimentacion: true,
      telefono: true,
    },
    coordenadas: [18.9439155, -98.9710452],
    enganche: 90000,
    mensualidades: [36],
    id: 2,
    imagenes: [agu1, agu2, agu3],
    amenidades:
      "Cerca del club Paraiso del Sol, 15 minutos del corazón de Tlayacapan, A 5 minutos de la carretera México-Cuautla",
  },
  {
    nombre: "Colatitla",
    ubicacion: "San Andres Cuauhtempan",
    municipio: "Morelos",
    metrosCuadrados: 260,
    tipoEscritura: "privada",
    precio: 208000,
    descripcion:
      "Inversión única en Colatitla, San Andrés Cuauhtémpan, Morelos. Terreno rústico con potencial de desarrollo futuro, escrituración privada. Costo desde $800 MXN por metro cuadrado. Enganche del 30% y facilidades de pago en 12 meses sin intereses. ¡Aprovecha esta oportunidad de crecimiento en un entorno prometedor!",
    servicios: {
      electricidad: false,
    },
    coordenadas: [18.9750626, -98.9506144],
    enganche: 62400,
    mensualidades: [36],
    id: 3,
    imagenes: [col1, col2],
    amenidades: "",
  },
  {
    nombre: "El Potrero",
    ubicacion: 'Lomas "El Potrero"',
    municipio: "Oaxtepec",
    metrosCuadrados: 244.59,
    tipoEscritura: "publica",
    precio: 317200,
    descripcion:
      "Inversión única en El Potrero, Lomas 'El Potrero', Oaxtepec. Terreno rústico con potencial de desarrollo futuro, escrituración pública. Costo desde $1000 MXN por metro cuadrado. Enganche del 30% y facilidades de pago en 12 meses sin intereses. ¡Aprovecha esta oportunidad de crecimiento en un entorno prometedor!",
    servicios: {
      electricidad: true,
    },
    coordenadas: [18.9964, -98.932971],
    enganche: 95160,
    mensualidades: [36],
    id: 4,
    imagenes: [pot1, pot2, pot3],
    amenidades:
      "A 1 hora con 30 de CDMX, A 15 minutos de Six Flags Oaxtepec, Fácil Acceso, Colindante con Lomas de Cocoyoc",
  },
  {
    nombre: "La Escondida",
    ubicacion: "Totoloapan",
    municipio: "Morelos",
    metrosCuadrados: 210,
    tipoEscritura: "publica",
    precio: 189000,
    descripcion:
      "Inversión única en La Escondida, Totoloapan, Morelos. Terreno rústico con potencial de desarrollo futuro, escrituración pública. Costo desde $900 MXN por metro cuadrado. Enganche del 30% y facilidades de pago en 12, 24 y 36 meses sin intereses. ¡Aprovecha esta oportunidad de crecimiento en un entorno prometedor!",
    servicios: {
      electricidad: false,
    },
    coordenadas: [18.992215, -98.935113],
    enganche: 56700,
    mensualidades: [36],
    id: 5,
    imagenes: [es1, es2, es3, es4],
    amenidades:
      "A 5 minutos de la escuela de estudios superiores de Totolapan (UAEM), A una hora con treinta minutos de metro taxqueña",
  },
  {
    nombre: "Rancho San Miguel",
    ubicacion: "San Andres Cuauhtempan",
    municipio: "Tlayacapan",
    metrosCuadrados: 623.55,
    tipoEscritura: "privada",
    precio: 498840,
    descripcion:
      "Inversión única en Rancho San Miguel, San Andrés Cuauhtémpan, Tlayacapan. Terreno rústico con potencial de desarrollo futuro, escrituración privada. Costo desde $800 MXN por metro cuadrado. Enganche del 30% y facilidades de pago en 12, 24 y 36 meses sin intereses. ¡Aprovecha esta oportunidad de crecimiento en un entorno prometedor!",
    servicios: {
      electricidad: true,
    },
    coordenadas: [18.980071, -98.9511693],
    enganche: 149652,
    mensualidades: [36],
    id: 6,
    imagenes: [sm1, sm2, sm3, sm4],
    amenidades:
      "A 1 hora de CDMX, A 15 minutos de Six Flags Oaxtepec, Facil Acceso, Colindante con Lomas de Cocoyoc",
  },
  {
    nombre: "Tlatenco 261",
    ubicacion: "Totoloapan",
    municipio: "Morelos",
    metrosCuadrados: 261,
    tipoEscritura: "publica",
    precio: 208800,
    descripcion:
      "Inversión única en Tlatenco, Totoloapan, Morelos. Terreno rústico con potencial de desarrollo futuro, escrituración pública. Costo desde $500 MXN por metro cuadrado. Enganche del 30% y facilidades de pago en 12, 24 y 36 meses sin intereses. ¡Aprovecha esta oportunidad de crecimiento en un entorno prometedor!",
    servicios: {
      electricidad: true,
    },
    coordenadas: [18.9964, -98.932971],
    enganche: 62640,
    mensualidades: [36],
    id: 7,
    imagenes: [tla1, tla2, tla3],
    amenidades:
      "Calles de 8 metros, A 5 minutos de la escuela de estudios superiores de Totolapan (UAEM), A una hora con treinta minutos de metro taxqueña",
  },
  {
    nombre: "Tlaltenco 344",
    ubicacion: "Totoloapan",
    municipio: "Morelos",
    metrosCuadrados: 344.42,
    tipoEscritura: "publica",
    precio: 275536,
    descripcion:
      "Inversión única en Tlaltenco, Totoloapan, Morelos. Terreno rústico con potencial de desarrollo futuro, escrituración pública. Costo desde $500 MXN por metro cuadrado. Enganche del 30% y facilidades de pago en 12, 24 y 36 meses sin intereses. ¡Aprovecha esta oportunidad de crecimiento en un entorno prometedor!",
    servicios: {
      electricidad: false,
    },
    coordenadas: [18.9964, -98.932971],
    enganche: 82660.8,
    mensualidades: [36],
    id: 8,
    imagenes: [tla1, tla2, tla3],
    amenidades:
      "Calles de 8 metros, A 5 minutos de la escuela de estudios superiores de Totolapan (UAEM), A una hora con treinta minutos de metro taxqueña",
  },
  {
    nombre: "Valle Verde",
    ubicacion: "Totoloapan",
    municipio: "Morelos",
    metrosCuadrados: 200,
    tipoEscritura: "privada",
    precio: 180000,
    descripcion:
      "Inversión única en Valle Verde, Totoloapan, Morelos. Terreno rústico con potencial de desarrollo futuro, escrituración privada. Costo desde $500 MXN por metro cuadrado. Enganche del 30% y facilidades de pago en 12, 24 y 36 meses sin intereses. ¡Aprovecha esta oportunidad de crecimiento en un entorno prometedor!",
    servicios: {
      electricidad: false,
    },
    coordenadas: [18.9964, -98.932971],
    enganche: 54000,
    mensualidades: [36],
    id: 9,
    imagenes: [val1, val2, val3, val4],
    amenidades:
      "Calles de 8 metros, A 5 minutos de la escuela de estudios superiores de Totolapan (UAEM), A una hora con treinta minutos de metro taxqueña",
  },
  {
    nombre: "Zacanco",
    ubicacion: "Ahuatlan",
    municipio: "Morelos",
    metrosCuadrados: 306,
    tipoEscritura: "publica",
    precio: 306000,
    descripcion:
      "Inversión única en Zacanco, Ahuatlan, Morelos. Terreno rústico con potencial de desarrollo futuro, escrituración pública. Costo desde $1000 MXN por metro cuadrado. Enganche del 30% y facilidades de pago en 12, 24 y 36 meses sin intereses. ¡Aprovecha esta oportunidad de crecimiento en un entorno prometedor!",
    servicios: {
      electricidad: true,
    },
    coordenadas: [18.9964, -98.932971],
    enganche: 91800,
    mensualidades: [36],
    id: 10,
    imagenes: [zac1, zac2, zac3],
    amenidades:
      "Calles de 8 metros, A 5 minutos de la escuela de estudios superiores de Totolapan (UAEM), A una hora con treinta minutos de metro taxqueña",
  },
];

export default db;
