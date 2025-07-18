# 🚚 Logistic - Plataforma de Gestión Logística

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Angular](https://img.shields.io/badge/Angular-19.0.0-dd0031.svg)
![PrimeNG](https://img.shields.io/badge/PrimeNG-19.0.8-6f42c1.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38b2ac.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

<div align="center">
  <img src="src/assets/img/hero-background.jpg" alt="Logistic Platform" width="800"/>
</div>

## 📋 Índice

- [🚀 Descripción](#-descripción)
- [✨ Características](#-características)
- [🛠️ Tecnologías](#️-tecnologías)
- [📦 Estructura del Proyecto](#-estructura-del-proyecto)
- [🔧 Instalación](#-instalación)
- [🚀 Ejecución](#-ejecución)
- [🌐 Internacionalización](#-internacionalización)
- [🔒 Autenticación](#-autenticación)
- [🎨 Personalización](#-personalización)
- [📱 Responsive Design](#-responsive-design)
- [🤝 Contribución](#-contribución)
- [📄 Licencia](#-licencia)

## 🚀 Descripción

**Logistic** es una plataforma moderna para la gestión de operaciones logísticas, diseñada para optimizar la cadena de suministro y mejorar la eficiencia en el transporte de mercancías. La plataforma ofrece una interfaz intuitiva y atractiva, con funcionalidades avanzadas para el seguimiento de envíos, gestión de almacenes y coordinación de servicios de transporte terrestre, marítimo y aéreo.

## ✨ Características

- 🌐 **Landing Page Moderna**: Diseño atractivo con animaciones y componentes interactivos
- 🔐 **Sistema de Autenticación**: Login seguro con JWT y roles de usuario
- 🌙 **Modo Oscuro/Claro**: Soporte para temas claros y oscuros
- 🌍 **Multilenguaje**: Soporte para múltiples idiomas (Inglés/Español)
- 📊 **Dashboard Analítico**: Visualización de datos y métricas clave
- 📱 **Diseño Responsive**: Adaptable a dispositivos móviles y escritorio
- 🧩 **Componentes Modulares**: Arquitectura escalable y mantenible
- 🔄 **Gestión de Estado**: Implementación con NgRx para un flujo de datos predecible

## 🛠️ Tecnologías

El proyecto está construido utilizando las siguientes tecnologías:

- **Frontend**:
  - [Angular 19](https://angular.io/) - Framework de desarrollo
  - [PrimeNG 19](https://primeng.org/) - Biblioteca de componentes UI
  - [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitario
  - [NgRx](https://ngrx.io/) - Gestión de estado
  - [RxJS](https://rxjs.dev/) - Programación reactiva
  - [ngx-translate](https://github.com/ngx-translate/core) - Internacionalización

## 📦 Estructura del Proyecto

```
logistic/
├── src/
│   ├── app/
│   │   ├── core/               # Servicios, guardias, interceptores y modelos
│   │   ├── layout/             # Componentes de layout (sidebar, topbar, etc.)
│   │   ├── pages/              # Páginas de la aplicación
│   │   │   ├── auth/           # Componentes de autenticación
│   │   │   ├── dashboard/      # Dashboard principal
│   │   │   ├── landing/        # Landing page
│   │   │   └── ...
│   │   ├── shared/             # Componentes, directivas y pipes compartidos
│   │   └── store/              # Estado global con NgRx
│   ├── assets/                 # Recursos estáticos (imágenes, iconos, etc.)
│   │   ├── i18n/               # Archivos de traducción
│   │   ├── icons/              # Iconos SVG
│   │   └── img/                # Imágenes
│   └── environments/           # Configuraciones por entorno
└── ...
```

## 🔧 Instalación

Para instalar y configurar el proyecto en tu entorno local, sigue estos pasos:

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/logistic.git

# Navegar al directorio del proyecto
cd logistic

# Instalar dependencias
npm install
```

## 🚀 Ejecución

Para ejecutar el proyecto en modo desarrollo:

```bash
# Iniciar servidor de desarrollo
npm start

# El servidor se iniciará en http://localhost:4200
```

Para compilar el proyecto para producción:

```bash
# Compilar para producción
npm run build

# Los archivos compilados estarán en la carpeta /dist
```

## 🌐 Internacionalización

El proyecto soporta múltiples idiomas mediante la biblioteca ngx-translate:

- 🇺🇸 Inglés (por defecto)
- 🇪🇸 Español

Los archivos de traducción se encuentran en `src/assets/i18n/`.

## 🔒 Autenticación

El sistema de autenticación utiliza JSON Web Tokens (JWT) para gestionar las sesiones de usuario. Para el desarrollo, se incluye un modo de autenticación simulada que puede habilitarse desde la configuración de entorno.

**Credenciales de prueba:**
- Email: test@test
- Contraseña: 123456

## 🎨 Personalización

### Temas y Estilos

El proyecto utiliza Tailwind CSS junto con PrimeNG para los estilos. La personalización principal se puede realizar en:

- `src/assets/layout/` - Estilos del layout principal
- `tailwind.config.js` - Configuración de Tailwind CSS

### Modo Oscuro/Claro

El proyecto soporta cambio entre modo oscuro y claro, implementado mediante clases CSS y variables de Tailwind.

## 📱 Responsive Design

La interfaz está diseñada para adaptarse a diferentes tamaños de pantalla:

- 📱 Móvil (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Escritorio (> 1024px)

## 🚢 Servicios Logísticos

La plataforma ofrece gestión para diferentes tipos de servicios logísticos:

- 🚢 **Transporte Marítimo**: Gestión de envíos por mar
- 🚚 **Transporte Terrestre**: Coordinación de flotas y rutas
- ✈️ **Transporte Aéreo**: Envíos rápidos por vía aérea
- 🏭 **Almacenamiento**: Gestión de inventario y almacenes
- 📦 **Soluciones de Almacenamiento**: Opciones a corto y largo plazo
- 🌐 **Freight Forwarding**: Servicios de agente de carga

## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork del proyecto
2. Crea una rama para tu funcionalidad (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Haz push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

---

<div align="center">
  <p>Desarrollado con ❤️ por el equipo de Logistic</p>
  
  <a href="https://github.com/tu-usuario/logistic">
    <img src="https://img.shields.io/github/stars/tu-usuario/logistic?style=social" alt="GitHub stars">
  </a>
</div>