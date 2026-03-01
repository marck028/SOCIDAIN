# 🎓 SOCIDAIN — Sitio Web Oficial

**Sociedad Científica de Ciencia de Datos e Inteligencia de Negocios**  
Universidad Privada del Valle — Cochabamba, Bolivia

---

## ✨ Descripción

Este es el sitio web oficial de **SOCIDAIN**, desarrollado por Marco Salvatierra. Es una plataforma moderna para la comunidad científica de Univalle, construida con tecnologías de vanguardia enfocadas en rendimiento y facilidad de mantenimiento.

## 🚀 Tecnologías

| Tecnología | Uso |
|---|---|
| [Astro v5](https://astro.build/) | Framework principal (SSG) |
| [TailwindCSS v3](https://tailwindcss.com/) | Estilos y diseño responsivo |
| [date-fns](https://date-fns.org/) | Formateo de fechas |
| Markdown / MDX | Gestión de contenido |

## 📁 Estructura del Proyecto

```
SOCIDAIN/
├── public/
│   └── uploads/         # Imágenes (comunidad, directiva, eventos, logos)
├── src/
│   ├── assets/styles/   # CSS global
│   ├── components/      # Componentes reutilizables (Header, Footer, etc.)
│   ├── content/         # Contenido en Markdown
│   │   ├── blog/        # Publicaciones de trabajos
│   │   ├── events/      # Eventos pasados y futuros
│   │   ├── ministries/  # Proyectos de la sociedad
│   │   └── staff/       # Directiva y miembros
│   ├── layouts/         # Layouts base (BaseLayout, PostLayout)
│   ├── pages/           # Rutas del sitio
│   └── utils/           # Utilidades (formateo de fechas)
├── content.config.ts    # Definición de colecciones de contenido
├── astro.config.mjs     # Configuración de Astro
└── tailwind.config.mjs  # Configuración de TailwindCSS
```

## ⚙️ Instalación y Desarrollo

```bash
# 1. Clonar el repositorio
git clone https://github.com/marck028/SOCIDAIN.git
cd SOCIDAIN

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## 🛠️ Comandos Disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera el sitio estático para producción |
| `npm run preview` | Previsualiza el build de producción |

## 📝 Agregar Contenido

### Nuevo miembro de directiva
Crear un archivo `.md` en `src/content/staff/`:
```yaml
---
name: "Nombre Completo"
title: "Cargo en SOCIDAIN"
image: "/uploads/directiva/foto.png"
order: 1
---
```

### Nuevo evento
Crear un archivo `.md` en `src/content/events/`:
```yaml
---
title: "Nombre del Evento"
date: 2025-04-01
location: "Campus Univalle"
image: "/uploads/events/foto.webp"
summary: "Descripción breve del evento."
---
```

### Nueva publicación en el Blog
Crear un archivo `.md` en `src/content/blog/`:
```yaml
---
title: "Título del Trabajo"
pubDate: 2025-03-01
description: "Descripción corta."
author: "Nombre del Autor"
image:
  url: "/uploads/directiva/foto.png"
  alt: "Foto del autor"
tags: ["Data Science", "Machine Learning"]
---
```

## 👥 Equipo de Desarrollo

- **Marco Salvatierra** — Autor y desarrollador principal

## 📄 Licencia

© 2025 SOCIDAIN — Universidad Privada del Valle. Todos los derechos reservados.
