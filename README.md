# 🌲 Generador de códigos QR artísticos en 3D (Magic Tree QR)

> Generador de códigos QR artísticos en 3D de vóxeles de alto rendimiento basado en **WebGPU** y **React**.Convierte cualquier URL, texto o contenido en un árbol mágico 3D de las cuatro estaciones que crece y se balancea. Es compatible con el reconocimiento real mediante escaneo de códigos QR, el reconocimiento y análisis de capturas de pantalla de códigos QR y una experiencia audiovisual inmersiva de las cuatro estaciones.

🌐 **Experiencia en línea**:[ https://tree.ppweilai.online/](https://tree.ppweilai.online/)

---

## ✨ Características principales

- 🌲 **Renderizado de vóxeles ultrarrápido con WebGPU**: basado en WebGPU nativo y el pipeline de sombreado WGSL, calcula en tiempo real, en milisegundos, árboles de vóxeles tridimensionales, ramas fractales, miles de hojas y un sistema físico de perturbación por la brisa.
- 🌸 **Temas visuales completos para las cuatro estaciones**:
   - **🌸 Primavera (Spring)**: Un mar de flores de cerezo rosas que cubren el cielo, acompañado de pétalos de cerezo que caen suavemente y del susurro de la brisa;
   - **🍃 Verano (Summer)**: Copas de árboles de un verde intenso y exuberante, acompañadas de destellos de luz entre los árboles y 10 mariposas danzantes;
   - **🍁 Otoño:** Hojas doradas y rojas que tiñen los bosques, con reflejos del suelo húmedo y ondulaciones de la lluvia otoñal continua;
   - **❄️ Invierno:** elegantes pinos cubiertos de nieve, escarcha cristalina y ciruelos rojos de acebo, acompañados de una intensa nevada que gira y cae por todo el cielo.
- 📷 **Reconocimiento y generación de códigos QR versátiles**:
   - **Introducción de texto/URL**: admite la generación de códigos QR a partir de texto de cualquier longitud, caracteres UTF-8 y URL;
   - **Reconocimiento de imágenes cargadas**: con el motor frontend puro jsQR integrado, basta con hacer clic en el ícono de la cámara para seleccionar una imagen de código QR y obtener su análisis en cuestión de segundos;
   - **Pegar captura de pantalla (Ctrl+V)**: no es necesario guardar el archivo; después de hacer una captura de pantalla en cualquier aplicación o en el sistema, simplemente presione `Ctrl+V` en la página para generarla con un solo clic;
   - **Compatibilidad con arrastrar y soltar**: arrastre el archivo de imagen del código QR para analizarlo directamente.
- 🎯 **Cambio fluido entre las vistas 3D y 2D**:
   - Al hacer clic en el árbol 3D, se realiza una transición suave a la vista 2D directamente encima. El alto contraste garantiza **una tasa de reconocimiento del 100 % al escanear el código QR**;
   - Vuelva a hacer clic para regresar sin problemas a la vista de visualización inmersiva en 3D.
- 🎨 **Amplia paleta de colores**: admite la combinación de colores predeterminada y colores de temas personalizados como púrpura lavanda, rojo coral, amarillo dorado, azul cielo, blanco nieve, etc.
- 🎵 **Sonidos ambientales de las cuatro estaciones**: ruido blanco integrado específico para la primavera, el verano, el otoño y el invierno, así como música de fondo inmersiva.

---

## 🛠️ Stack tecnológico

- **Herramienta de compilación**:[Vite](https://vitejs.dev/)
- **Framework frontend**:[ React 19](https://react.dev/)
- **Renderizado gráfico**:[ WebGPU](https://www.w3.org/TR/webgpu/)/[WGSL Shaders](https://www.w3.org/TR/WGSL/)
- **Codificación y decodificación de códigos QR**:`qrcode` / `jsqr`
- **Plataforma de implementación**: Cloudflare Pages / Workers

---

## 🚀 Desarrollo y ejecución locales

### 1. Clonar el proyecto
```bash
git clone https://github.com/xscanzm/magic-tree-qr.git
cd magic-tree-qr
```

### 2. Instalar las dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abra el navegador y visite `http://localhost:3000` para probarlo.

### 4. Empaquetado de producción
```bash
npm run build
```
Los resultados de la compilación se enviarán al directorio `dist/`.

---

## 📜 Reconocimientos y agradecimientos

- Reconocimiento:[ icqr](https://icqr.com)
- Proyecto original y reestructuración de invierno: [xscanzm](https://github.com/xscanzm). Adaptación al español: [infinityxgame](https://github.com/infinityxgame).

---

## 📄 Licencia de código abierto

Este proyecto es de código abierto bajo la [Licencia MIT](LICENSE).
