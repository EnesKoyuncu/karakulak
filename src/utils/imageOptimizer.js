import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [300, 600, 900];
const inputDir = path.join(__dirname, "../../public/images/allProducts");
const outputDir = path.join(__dirname, "../../public/images/optimized");

async function optimizeImages() {
  console.log("Resim optimizasyonu başlıyor...");
  console.log("Input directory:", inputDir);
  console.log("Output directory:", outputDir);

  // Çıktı dizinini oluştur
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    // Tüm resimleri bul
    const files = fs.readdirSync(inputDir);
    console.log(`${files.length} dosya bulundu.`);

    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
        const inputPath = path.join(inputDir, file);
        const filename = path.parse(file).name;

        console.log(`İşleniyor: ${file}`);

        // Her boyut için optimize et
        for (const size of sizes) {
          const outputPath = path.join(outputDir, `${filename}-${size}.webp`);

          try {
            await sharp(inputPath)
              .resize(size, null, {
                withoutEnlargement: true,
                fit: "inside",
              })
              .webp({ quality: 80 })
              .toFile(outputPath);

            console.log(`Oluşturuldu: ${filename}-${size}.webp`);
          } catch (error) {
            console.error(
              `Hata: ${file} dosyası işlenirken hata oluştu:`,
              error
            );
          }
        }
      }
    }
    console.log("Resim optimizasyonu tamamlandı!");
  } catch (error) {
    console.error("Genel hata:", error);
  }
}

optimizeImages().catch(console.error);
