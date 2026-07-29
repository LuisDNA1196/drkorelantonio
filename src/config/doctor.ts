export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  treatment: string;
  comment: string;
  rating: number;
  photoPosition: "left" | "center" | "right";
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
  experienceYears: number;
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
  name: "Dr.  Korel",
  firstName: "",
  specialty: "Cirujano General",
  tagline:
    "Atención quirúrgica segura, ética y personalizada para brindarte la mejor solución.",
  bio: "Mi compromiso es acompañarte con claridad desde la primera consulta hasta tu recuperación. Combino experiencia quirúrgica, técnicas de mínima invasión y un trato cercano para que tomes decisiones informadas y seguras.",
  experienceYears: 14,
  hospitals: ["Hospital Ángeles", "Centro Médico ABC"],
  certifications: [
    "Consejo Mexicano de Cirugía General",
    "Asociación Mexicana de Cirugía General",
    "Alta especialidad en cirugía laparoscópica",
  ],
  address: "Hospital Angeles Andares, Consultorio 1825B, Av. Patria 1355-Piso 18, Puerta de Hierro, 45116 Zapopan, Jal.",
  phone: "+52  33 1605 4777",
  whatsapp: "523316054777",
  email: "consulta@drkorel.mx",
  schedule: ["Lunes a viernes · 09:00–19:00", "Sábado · 09:00–14:00"],
  socials: {
    instagram: "https://www.instagram.com/dr.korel/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
  },
  services: [
    {
      icon: "◌",
      title: "Cirugía laparoscópica",
      description: "Procedimientos de mínima invasión para una recuperación más ágil y menor dolor.",
    },
    {
      icon: "◇",
      title: "Hernias",
      description: "Diagnóstico y reparación de hernias inguinales, umbilicales y de pared abdominal.",
    },
    {
      icon: "◒",
      title: "Vesícula",
      description: "Valoración y tratamiento de cálculos e inflamación de la vesícula biliar.",
    },
    {
      icon: "⌁",
      title: "Apendicitis",
      description: "Atención oportuna y resolución quirúrgica segura ante cuadros de urgencia.",
    },
    {
      icon: "◎",
      title: "Cirugía gastrointestinal",
      description: "Tratamiento especializado de padecimientos del aparato digestivo.",
    },
    {
      icon: "✦",
      title: "Consulta de valoración",
      description: "Evaluación integral, diagnóstico claro y un plan de tratamiento hecho para ti.",
    },
  ],
  testimonials: [
    {
      name: "Mariana López",
      treatment: "Cirugía de vesícula",
      comment:
        "Desde la primera consulta me explicó todo con mucha claridad. La cirugía y mi recuperación fueron mejor de lo que esperaba.",
      rating: 5,
      photoPosition: "left",
    },
    {
      name: "Roberto Hernández",
      treatment: "Reparación de hernia",
      comment:
        "Excelente trato y seguimiento. Siempre tuve respuesta a mis dudas y regresé a mis actividades muy pronto.",
      rating: 5,
      photoPosition: "center",
    },
    {
      name: "Claudia Méndez",
      treatment: "Consulta de valoración",
      comment:
        "Me sentí escuchada y en confianza. Recibí un diagnóstico preciso y opciones explicadas sin prisas.",
      rating: 5,
      photoPosition: "right",
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
        "Nos encontramos en Av. Ejército Nacional 613, colonia Granada, Miguel Hidalgo, Ciudad de México.",
    },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps?q=Hospital%20Angeles%20Andares%2C%20Consultorio%201825B%2C%20Av.%20Patria%201355%2C%20Piso%2018%2C%20Puerta%20de%20Hierro%2C%2045116%20Zapopan%2C%20Jal.&output=embed",
  siteUrl: "https://www.drkorel.mx",
};

export const whatsappUrl = (message = "Hola, quiero agendar una consulta.") =>
  `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(message)}`;
