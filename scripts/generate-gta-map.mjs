import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, "../public/images/gta-map.png");

const zoom = 10;
const bounds = {
  minLon: -79.72,
  maxLon: -79.05,
  minLat: 43.55,
  maxLat: 43.88,
};

function lon2tile(lon, z) {
  return Math.floor(((lon + 180) / 360) * 2 ** z);
}

function lat2tile(lat, z) {
  const rad = (lat * Math.PI) / 180;
  return Math.floor(
    ((1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2) * 2 ** z,
  );
}

async function fetchTile(z, x, y) {
  const url = `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
  const res = await fetch(url, {
    headers: {
      "User-Agent": "NapshineWebsite/1.0 (contact@napshine.ca)",
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

const xMin = lon2tile(bounds.minLon, zoom);
const xMax = lon2tile(bounds.maxLon, zoom);
const yMin = lat2tile(bounds.maxLat, zoom);
const yMax = lat2tile(bounds.minLat, zoom);
const tileSize = 256;
const width = (xMax - xMin + 1) * tileSize;
const height = (yMax - yMin + 1) * tileSize;

const composites = [];

for (let y = yMin; y <= yMax; y++) {
  for (let x = xMin; x <= xMax; x++) {
    const tile = await fetchTile(zoom, x, y);
    composites.push({
      input: tile,
      left: (x - xMin) * tileSize,
      top: (y - yMin) * tileSize,
    });
    await new Promise((resolve) => setTimeout(resolve, 120));
  }
}

await mkdir(path.dirname(outputPath), { recursive: true });

await sharp({
  create: {
    width,
    height,
    channels: 4,
    background: { r: 242, g: 239, b: 233, alpha: 1 },
  },
})
  .composite(composites)
  .resize(1200, null, { withoutEnlargement: true })
  .png({ quality: 90 })
  .toFile(outputPath);

console.log(`Saved ${outputPath} (${width}x${height} stitched, resized to 1200px wide)`);
