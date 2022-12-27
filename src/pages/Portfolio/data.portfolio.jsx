import {
  FaFacebook as Facebook,
  FaLinkedin as Linkedin,
  FaWhatsapp as Whatsapp,
} from "react-icons/fa";
export const headerData = [
  {
    contact: [
      {
        divice: "TEL",
        href: 'href="tel:+34669997156l"',
        disti: "+34 669 997 156",
      },
      {
        divice: "EMAIL",
        href: 'href="mailto:beckjacob56@gmail.com"',
        disti: "beckjacob56@gmail.com",
      },
    ],
    social: [
      {
        media: Facebook,
        href: "https://www.facebook.com/guirigandul",
      },
      {
        media: Linkedin,
        href: "https://www.linkedin.com/in/jacob-beck-el-guiri",
      },
      {
        media: Whatsapp,
        href: "https://wa.me/qr/PM7TJB2G2F2HA1",
      },
    ],
  },
];
export const educationData = [
  {
    id: 1,
    title: "excel avanzada",
    description: "core network SL",
    image: "excel-avanzada.jpg",
  },
  {
    id: 2,
    title: "recepcion-y-atencion-de-cliente",
    description: "core network SL",
    image: "recepcion-y-atencion-al-cliente.jpg",
  },
  {
    id: 3,
    title: "analisis de la rentabilidad en los establecimientos hoteleros",
    description: "core network SL",
    image: "analisis-de-rentabilidad.jpg",
  },
  {
    id: 4,
    title: "introducion al desarollo web II ",
    description: "google y instituto economia international",
    image: "certificado-intro-des-web-II.jpg",
  },
  {
    id: 5,
    title: "dessarollo de aplicationes con java",
    description: "grupo hedima",
    image: "desarrollo-de-app-java.jpg",
  },
  {
    id: 6,
    title: "Competencias clave nivel 2",
    description: "instituto canario de las calificaciones profecionales",
  },
  {
    id: 7,
    title: "especialista en seguridad en internet",
    description: "academia focyl",
    image: "seguridad-internet.jpg",
  },
  {
    id: 8,
    title: "introducion al desarollo web I",
    description: "google y instituto economia international",
    image: "certificado-intro-des-web-I.jpg",
  },
];

export const descriptionPersonal = [
  {
    title: "objectivo profesional",
    description:
      "Soy una persona responsable y con una amplia experiencia en realizados coneficiencia. En mi carrera, la proactividad y elcompromiso con el cliente y laempresa son valores fundamentales.",
  },
  {
    title: "aptitudes",
    description:
      " Cocimiento de planos y proyectos Competencias en protocolo deseguridad Dirección de proyectos Optimización de recursos Control de costes",
  },
  {
    title: "resumen personal",
    description:
      "Persona muy seria, responsable, dinamica y proactiva, capaz deadaptarme a cualquier circunstanciay dar siempre lo mejor de mí encualquier proyecto.",
  },
];

export const skills = [
  {
    title: "Habilidades",
    children: [
      { p: "Confianza" },
      { p: "Honestidad e integridad." },
      { p: "Trabajo en equipo." },
      { p: "Carácter proactivo." },
      { p: "Flexibilidad y adaptación." },
      { p: "Atención a los detalles." },
      { p: " Capacidad analítica." },
      { p: "Polivalencia." },
      { p: "Creatividad." },
      { p: "Capacidad de negociación." },
    ],
  },
];
export const experience = [
  {
    title: "Recepción - hotel marina elite -",
    listItems: [
      { li: "- 2020.01.14 - 2020.09.14" },
      {
        li: "Funciones de recepción en alojamientos, gestionar laestancia de los clientes.",
      },
      { li: "Reservas y cancelaciones." },
      { li: "Información turística." },
      { li: "Resolución de dudas." },
      { li: "Check-out, facturación y control de gastos." },
      { li: "Gestionar los ingresos." },
      { li: "Up-grades y servicios extra o adicionales" },
    ],
  },
  {
    title: " chofer profesional de taxi ",
    listItems: [
      { li: "-2009 - 2020" },
      { li: "Recoger a los pasajeros y llevarlos a sus destinos." },
      { li: "Ofrecer información turistica y guía en las excursiones." },
      {
        li: " Cobrar la tarifa pertinente y hacerles entrega de las facturas.",
      },
    ],
  },
  {
    title: "barcelo albañil",
    listItems: [
      {
        li: "Conocimientos del proceso de construcción desde el diseñohasta la ejecución.",
      },
      {
        li: "Asistencia periodica a las reuniones de seguimiento de lasobras.",
      },
    ],
  },
  {
    title: "autonomo - empresa de constructiones y reformas",
    listItems: [
      { li: "- 2001 - 2004" },
      {
        li: " Gestión integral de la empresa, desde la constitución,relaciona con las distintas Administraciones Publicas, hasta losproveedores, inventarios y ejecución de las obras.",
      },
    ],
  },
];
export const languages = [
  {
    title: "idiomas",
    children: [
      { p: "Idanés - nativo" },
      { p: "noruego - avanzada" },
      { p: "ingles - avanzada" },
      { p: "español - avanzada" },
      { p: "aleman - intermediate" },
    ],
  },
];
