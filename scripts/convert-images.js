import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = './public/images';
const outputDir = './public/images/webp';

// Crear directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Lista de imágenes a convertir
const images = [
  'fondoprincipal.png',
  'logodblanco.png',
  'logod.png',
  'imgphone.png',
  'fondomain.jpg',
  'fondoprincipal2.png'
];

async function convertToWebP() {
  console.log('🔄 Convirtiendo imágenes a WebP...');
  
  for (const image of images) {
    const inputPath = path.join(inputDir, image);
    const outputPath = path.join(outputDir, image.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
    
    if (fs.existsSync(inputPath)) {
      try {
        await sharp(inputPath)
          .webp({ quality: 85, effort: 6 })
          .toFile(outputPath);
        
        console.log(`✅ Convertido: ${image} → ${path.basename(outputPath)}`);
      } catch (error) {
        console.error(`❌ Error convirtiendo ${image}:`, error.message);
      }
    } else {
      console.warn(`⚠️  Archivo no encontrado: ${image}`);
    }
  }
  
  console.log('🎉 Conversión completada!');
}

convertToWebP().catch(console.error);
