import sharp from "sharp";
import fs from "fs";
import path from "path";

const sizes = [300, 600, 900];
const inputDir = "public/images/allProducts";
const outputDir = "public/images/optimized";

async function optimizeImages() {
  // Çıktı dizinini oluştur
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Tüm resimleri bul
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file);
      const filename = path.parse(file).name;

      // Her boyut için optimize et
      for (const size of sizes) {
        const outputPath = path.join(outputDir, `${filename}-${size}.webp`);

        await sharp(inputPath)
          .resize(size)
          .webp({ quality: 80 })
          .toFile(outputPath);
      }
    }
  }
}

optimizeImages().catch(console.error);
