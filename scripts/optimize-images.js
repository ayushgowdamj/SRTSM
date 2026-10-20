import fs from "fs";
import path from "path";
import sharp from "sharp";

const srcDir = path.resolve("src/assets");
const outDir = path.resolve("public/assets-optimized");

// Images to convert to WebP + AVIF with responsive widths
const images = [
  "traditional-silk-reeling-hero.png", // LCP hero
  "srtsm-reeling-line.jpg",
  "srtsm-factory-exterior.jpg",
  "srtsm-production-floor.jpg",
  "srtsm-silk-bales.jpg",
  "srtsm-silk-hanks.jpg",
  "srtsm-logo.png",
  "finished-silk-reels.jpg",
  "raw-silk-lustre.jpg",
  "srtsm_auto_reeling_line.jpg",
  "srtsm_multi_end_reeling.jpg",
  "srtsm_silk_reels_warehouse.jpg",
  "srtsm_silk_bales_stack.jpg",
];

async function convert() {
  fs.mkdirSync(outDir, { recursive: true });
  for (const name of images) {
    const inPath = path.join(srcDir, name);
    if (!fs.existsSync(inPath)) continue;
    const base = path.parse(name).name;

    // Hero gets full responsive widths; others get width 1200 max
    const widths = base === "traditional-silk-reeling-hero"
      ? [320, 640, 960, 1200]
      : [1200];

    for (const width of widths) {
      const jpegBuffer = await sharp(inPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toBuffer();
      fs.writeFileSync(path.join(outDir, `${base}-${width}w.webp`), jpegBuffer);

      const avifBuffer = await sharp(inPath)
        .resize({ width, withoutEnlargement: true })
        .avif({ quality: 65 })
        .toBuffer();
      fs.writeFileSync(path.join(outDir, `${base}-${width}w.avif`), avifBuffer);
    }
    // Keep original fallback as PNG/JPEG
    fs.copyFileSync(inPath, path.join(outDir, name));
  }
  console.log(`Converted ${images.length} images to WebP + AVIF in ${outDir}`);
}

convert().catch((e) => {
  console.error(e);
  process.exit(1);
});
