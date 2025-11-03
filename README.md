# 🌟 Portfolio Personal

Portfolio web para mostrar proyectos, habilidades y experiencia profesional. Desarrollado con **HTML**, **CSS**, **TypeScript** y **Vite**.

## 📌 Índice

- [Sobre el proyecto](#sobre-el-proyecto)  
- [Características](#características)  
- [Demo](#demo)  
- [Tecnologías](#tecnologías)  
- [Estructura del proyecto](#estructura-del-proyecto)  
- [Instalación](#instalación)  
- [Scripts](#scripts)  
- [Despliegue](#despliegue)  
- [Personalización](#personalización)  
- [Roadmap](#roadmap)  
- [Contribución](#contribución)  
- [Licencia](#licencia)  
- [Contacto](#contacto)

## 👩‍💻 Sobre el proyecto

Este portfolio está diseñado para actuar como una carta de presentación digital. Incluye secciones de presentación personal, proyectos, habilidades técnicas y formas de contacto. Es totalmente responsive y está optimizado para un rendimiento rápido.

## ✨ Características

- Diseño responsive (adaptado a móvil, tablet y escritorio)  
- Construido con TypeScript y Vite  
- Código limpio y fácil de escalar  
- Estructura modular  
- Modo oscuro opcional  
- Listo para desplegar en GitHub Pages, Vercel o Netlify

## 🌍 Demo

**URL del sitio:** (añadir cuando esté desplegado)  
**Capturas de pantalla:** (opcional)

## 🛠 Tecnologías

| Tecnología   | Uso |
|--------------|-----|
| HTML5        | Estructura del sitio |
| CSS3         | Estilos y diseño |
| TypeScript   | Lógica y tipado |
| Vite         | Dev server y build |

## 📁 Estructura del proyecto

```
Portfolio/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ styles/
│  └─ main.ts
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ README.md
```

## ⚙️ Instalación

Requisitos: Node.js 18+ y npm

```bash
git clone https://github.com/lili1224/Portfolio.git
cd Portfolio
npm install
npm run dev
```

## 📜 Scripts

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Genera build de producción
npm run preview  # Previsualiza el build
```

## 🚀 Despliegue

### GitHub Pages

1. En `vite.config.ts`:

```ts
export default defineConfig({
  base: '/Portfolio/'
})
```

2. Ejecuta:

```bash
npm run build
```

3. Sube la carpeta `dist/` a la rama `gh-pages`.

### Otras plataformas

| Plataforma | Configuración |
|------------|----------------|
| Vercel     | Conecta el repo → build automático |
| Netlify    | Build: `npm run build`, Output: `dist/` |

## 🎨 Personalización

- Cambiar nombre, descripción y roles  
- Editar proyectos en `/src/data/` si existe  
- Modificar estilos en `/src/styles/`  
- Añadir redes sociales, CV, imágenes propias

## 🗺 Roadmap

- [ ] Modo oscuro adaptativo  
- [ ] Multi-idioma (ES/EN)  
- [ ] Animaciones con IntersectionObserver  
- [ ] Blog o sección de artículos  
- [ ] Formulario de contacto funcional

## 🤝 Contribución

```bash
git checkout -b feature/nueva-funcionalidad
git commit -m "feat: nueva funcionalidad"
git push origin feature/nueva-funcionalidad
```

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.

## 📬 Contacto

**Autor:** (Lucía Quesada Moreno)  
**Email:** (luciaqm2003@gmail.com)  
**GitHub:** https://github.com/lili1224  
**LinkedIn:** (www.linkedin.com/in/lucía-quesada-moreno-17b0a818b)
