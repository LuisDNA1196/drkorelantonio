export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  category: string;
  comment: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface DoctorConfig {
  name: string;
  firstName: string;
  specialty: string;
  tagline: string;
  bio: string;
  // experienceYears: number;
  hospitals: string[];
  certifications: string[];
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  schedule: string[];
  socials: { instagram: string; facebook: string; linkedin: string };
  services: Service[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  mapEmbedUrl: string;
  siteUrl: string;
}

export const doctor: DoctorConfig = {
  name: "Dr.  Korel Hernandez",
  firstName: "",
  specialty: "Cirujano General",
  tagline:
    "Atención quirúrgica segura, ética y personalizada para brindarte la mejor solución.",
  bio: "Mi compromiso es acompañarte con claridad desde la primera consulta hasta tu recuperación. Combino experiencia quirúrgica, técnicas de mínima invasión y un trato cercano para que tomes decisiones informadas y seguras.",
  // experienceYears: 3,
  hospitals: ["Zona Metropolitana de Guadalajara"],
  certifications: [
    "Consejo Mexicano de Cirugía General",
    "Asociación Mexicana de Cirugía General",

  ],
  address: "Hospital Angeles Andares, Consultorio 1825B, Av. Patria 1355-Piso 18, Puerta de Hierro, 45116 Zapopan, Jal.",
  phone: "+52  33 1605 4777",
  whatsapp: "523316054777",
  email: "md.korel.hl@gmail.com",
  schedule: ["Lunes a viernes · 09:00–19:00", "Sábado · 09:00–14:00"],
  socials: {
    instagram: "https://www.instagram.com/dr.korel/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
  },
  services: [
    {
      icon: "✦",
      title: "Consulta de primera vez",
      description: "Evaluación integral, diagnóstico claro y un plan de tratamiento hecho para ti.",
    },
    {
      icon: "◇",
      title: "Hernias",
      description: "Diagnóstico y reparación de hernias inguinales, umbilicales y de pared abdominal.",
    },
    {
      icon: "◌",
      title: "Cirugía de mínima invasión",
      description:
        "Procedimientos laparoscópicos cuando están indicados, con incisiones más pequeñas.",
    },
    {
      icon: "◒",
      title: "Vesícula",
      description: "Valoración y tratamiento de cálculos e inflamación de la vesícula biliar.",
    },
    {
      icon: "⌁",
      title: "Lipomas y lesiones de piel",
      description:
        "Valoración y retiro de lipomas, quistes y otras lesiones de tejidos superficiales.",
    },
    {
      icon: "◎",
      title: "Cirugía gastrointestinal",
      description: "Valoración y tratamiento quirúrgico de enfermedades del estómago e intestino.",
    },
  ],
  testimonials: [
    {
      name: "Eduardo Navarro Lozano",
      category: "Experiencia quirúrgica y satisfacción",
      comment:
        "El Dr Korel peca de agradable, servicial y profesional. Estoy muy satisfecho con su atención, me operó de la vesícula y me cambió la vida. Gracias a Dios por ponerlo en mi camino.",
      rating: 5,
    },
    {
      name: "Fernanda Borruel",
      category: "Empatía y claridad en el diagnóstico",
      comment:
        "Doctor, ¡muchísimas gracias por su increíble trabajo! Su explicación de mi diagnóstico y la atención a todas mis preguntas hicieron toda la diferencia. Se agradece enormemente su empatía y profesionalismo. 🫶🏻",
      rating: 5,
    },
    {
      name: "Fer Aguilar",
      category: "Confianza durante el proceso quirúrgico",
      comment:
        "Una excelente persona y cirujano, en todo momento me explicó todo muy claro, resolvió cada una de mis dudas!! Sin duda me volvería a operar con él Dr",
      rating: 5,
    },
    {
      name: "Jhair Córdova",
      category: "Profesionalismo y calidad humana",
      comment:
        "Excelente médico y excelente cirujano. Gran calidad humana, profesionalismo y compromiso con sus pacientes. Sin duda, ampliamente recomendado.",
      rating: 5,
    },
    {
      name: "Jesús Mora",
      category: "Seguridad y atención ante una preocupación médica",
      comment:
        "Excelente doctor, tenía miedo por un dolor muy fuerte en la parte baja del estomago y en consulta se soluciono todo",
      rating: 5,
    },
  ],
  faqs: [
    {
      question: "¿Acepta seguros de gastos médicos?",
      answer:
        "Sí. Trabajamos con las principales aseguradoras bajo esquema de reembolso. Durante tu valoración revisamos la documentación y el proceso aplicable a tu póliza.",
    },
    {
      question: "¿Cuánto dura la recuperación?",
      answer:
        "Depende del procedimiento y de cada paciente. Muchas cirugías laparoscópicas permiten retomar actividades ligeras en pocos días; recibirás indicaciones personalizadas.",
    },
    {
      question: "¿Cómo agendo una consulta?",
      answer:
        "Puedes escribirnos por WhatsApp, llamar al consultorio o completar el formulario de esta página. Confirmaremos contigo el horario disponible.",
    },
    {
      question: "¿Dónde se encuentra el consultorio?",
      answer:
        "Hospital Angeles Andares, Consultorio 1825B, Av. Patria 1355-Piso 18, Puerta de Hierro, 45116 Zapopan, Jal.",
    },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps?q=Hospital%20Angeles%20Andares%2C%20Consultorio%201825B%2C%20Av.%20Patria%201355%2C%20Piso%2018%2C%20Puerta%20de%20Hierro%2C%2045116%20Zapopan%2C%20Jal.&output=embed",
  siteUrl: "https://www.drkorel.mx",
};

export const whatsappUrl = (message = "Hola, quiero agendar una consulta.") =>
  `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(message)}`;
