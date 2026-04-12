export interface Actividad {
  id: string;
  nombre: string;
  fecha: string;
  eje: "academico" | "interaccion-social" | "desarrollo-profesional" | "social";
  eventSlug: string;
}

export interface Observacion {
  fecha: string;
  tipo: "inasistencia" | "incumplimiento" | "otro";
  descripcion: string;
  actividadId?: string;
}

export interface Participacion {
  actividadId: string;
  aporte: string;
}

export interface Miembro {
  nombre: string;
  participaciones: Participacion[];
  observaciones?: Observacion[];
}

export const ejes = {
  "academico": { label: "Eje Académico", color: "#1a6b8a", bg: "bg-[#1a6b8a]", text: "text-[#1a6b8a]", border: "border-[#1a6b8a]" },
  "interaccion-social": { label: "Interacción Social", color: "#2d7a3a", bg: "bg-[#2d7a3a]", text: "text-[#2d7a3a]", border: "border-[#2d7a3a]" },
  "desarrollo-profesional": { label: "Desarrollo Profesional", color: "#900033", bg: "bg-[#900033]", text: "text-[#900033]", border: "border-[#900033]" },
  "social": { label: "Eje Social", color: "#7a5c2d", bg: "bg-[#7a5c2d]", text: "text-[#7a5c2d]", border: "border-[#7a5c2d]" }
};

export const actividades: Actividad[] = [
  {
    id: "cinevalle-dia-nino-2026",
    nombre: "Cinevalle: Día del Niño",
    fecha: "11 de abril, 2026",
    eje: "interaccion-social",
    eventSlug: "cinevalle-dia-nino-2026"
  },
  {
    id: "rally-sociedades-2026",
    nombre: "Rally de Sociedades 2026",
    fecha: "27 de marzo, 2026",
    eje: "interaccion-social",
    eventSlug: "rally-de-sociedades-2026"
  },
  {
    id: "taller-cv-ia-2026",
    nombre: "Taller: CV que supera filtros de IA",
    fecha: "24 de marzo, 2026",
    eje: "desarrollo-profesional",
    eventSlug: "taller-curriculum-ia-2026"
  }
];

export const miembros: Miembro[] = [
  {
    nombre: "Javier Mamani Castro",
    participaciones: [
      { actividadId: "rally-sociedades-2026", aporte: "Lideró la coordinación general del equipo, realizó el registro fotográfico oficial del evento y brindó apoyo transversal durante toda la jornada." },
      { actividadId: "taller-cv-ia-2026", aporte: "Participó como asistente en el taller." }
    ]
  },
  {
    nombre: "Marco Salvatierra Copa",
    participaciones: [
      { actividadId: "rally-sociedades-2026", aporte: "Diseñó y ejecutó una de las postas del rally, preparó bocadillos para los asistentes y colaboró activamente en el apoyo general del evento." },
      { actividadId: "taller-cv-ia-2026", aporte: "Participó como asistente en el taller." }
    ]
  },
  {
    nombre: "Adrian Torrico Kopa",
    participaciones: [
      { actividadId: "rally-sociedades-2026", aporte: "Diseñó y ejecutó una posta del rally, brindando apoyo general durante el desarrollo del evento." }
    ]
  },
  {
    nombre: "Samuel Olmos Antezana",
    participaciones: [
      { actividadId: "rally-sociedades-2026", aporte: "Apoyó en la ejecución de una posta y colaboró de forma general durante el evento." }
    ]
  },
  {
    nombre: "Santiago Alain Murillo Oretea",
    participaciones: [
      { actividadId: "rally-sociedades-2026", aporte: "Apoyó en la ejecución de una posta y colaboró de forma general durante el evento." },
      { actividadId: "taller-cv-ia-2026", aporte: "Participó como asistente en el taller." }
    ]
  },
  {
    nombre: "Ario Daniel Ance Puma",
    participaciones: [
      { actividadId: "rally-sociedades-2026", aporte: "Colaboró en el armado y montaje de una posta, brindando apoyo durante el transcurso del evento." }
    ]
  },
  {
    nombre: "Sergio Alejandro Medrano Machicao",
    participaciones: [
      { actividadId: "rally-sociedades-2026", aporte: "Se encargó de la documentación visual del evento y brindó apoyo general durante la jornada." }
    ]
  },
  {
    nombre: "Elton Omar Villarroel Mamani",
    participaciones: [
      { actividadId: "rally-sociedades-2026", aporte: "Ejecutó una de las postas del rally y apoyó activamente durante el evento." }
    ]
  },
  {
    nombre: "Juan Felipe Caballero Flores",
    participaciones: [
      { actividadId: "cinevalle-dia-nino-2026", aporte: "Contribuyó con la entrega de un paquete de golosinas para los niños participantes del evento." }
    ]
  },
  {
    nombre: "Luciana Sofía Coca Terrazas",
    participaciones: [
      { actividadId: "cinevalle-dia-nino-2026", aporte: "Contribuyó con la entrega de un paquete de golosinas para los niños participantes del evento." }
    ]
  },
  {
    nombre: "Alexander Flores Aguayo",
    participaciones: [
      { actividadId: "cinevalle-dia-nino-2026", aporte: "Contribuyó con la entrega de un paquete de golosinas para los niños participantes del evento." }
    ]
  },
  {
    nombre: "Mariel Justiniano Pardo",
    participaciones: [
      { actividadId: "cinevalle-dia-nino-2026", aporte: "Apoyó en la gestión y compra de golosinas para el evento." }
    ]
  },
  {
    nombre: "Kelly Aracely Gutiérrez Guaricoma",
    participaciones: [
      { actividadId: "taller-cv-ia-2026", aporte: "Participó como asistente en el taller." }
    ]
  },
  {
    nombre: "Leonardo Mendoza",
    participaciones: [
      { actividadId: "taller-cv-ia-2026", aporte: "Participó como asistente en el taller." }
    ]
  },
  {
    nombre: "Mesa Directiva SOCIDAIN",
    participaciones: [
      { actividadId: "cinevalle-dia-nino-2026", aporte: "Como sociedad, la mesa directiva adquirió 210 unidades de golosinas para cubrir el aporte mínimo institucional al evento." }
    ]
  }
];
