import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';

const inputPath = 'C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\309fefae-de73-43dd-b691-09fcb982e953\\.user_uploaded\\media_1791232222128.png';
const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.createReadStream(inputPath)
  .pipe(new PNG({ filterType: 4 }))
  .on('parsed', function() {
    let minX = this.width, maxX = 0, minY = this.height, maxY = 0;
    
    // First pass: identify white background and make it transparent with smooth edge anti-aliasing
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let idx = (this.width * y + x) << 2;
        let r = this.data[idx];
        let g = this.data[idx + 1];
        let b = this.data[idx + 2];
        
        // Check if pixel is near white
        // White or near white threshold
        const brightness = (r + g + b) / 3;
        const colorDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
        
        if (r > 240 && g > 240 && b > 240 && colorDiff < 15) {
          this.data[idx + 3] = 0; // Completely transparent
        } else if (r > 215 && g > 215 && b > 215 && colorDiff < 18) {
          // Soft blend edge
          const factor = (255 - brightness) / 40;
          this.data[idx + 3] = Math.max(0, Math.min(255, Math.floor(factor * 255)));
        } else {
          // Non transparent pixel
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    // Save full transparent version
    const outputPath = path.join(publicDir, 'murari-logo.png');
    this.pack().pipe(fs.createWriteStream(outputPath)).on('finish', () => {
      console.log('Successfully saved transparent logo to:', outputPath);
      console.log(`Bounding box: x(${minX}-${maxX}), y(${minY}-${maxY})`);

      // Now create a cropped tight version for crisp header display
      const padding = 15;
      const cropMinX = Math.max(0, minX - padding);
      const cropMaxX = Math.min(this.width - 1, maxX + padding);
      const cropMinY = Math.max(0, minY - padding);
      const cropMaxY = Math.min(this.height - 1, maxY + padding);
      const cropW = cropMaxX - cropMinX + 1;
      const cropH = cropMaxY - cropMinY + 1;

      const croppedPng = new PNG({ width: cropW, height: cropH });
      for (let cy = 0; cy < cropH; cy++) {
        for (let cx = 0; cx < cropW; cx++) {
          const srcIdx = (this.width * (cropMinY + cy) + (cropMinX + cx)) << 2;
          const dstIdx = (cropW * cy + cx) << 2;
          croppedPng.data[dstIdx] = this.data[srcIdx];
          croppedPng.data[dstIdx + 1] = this.data[srcIdx + 1];
          croppedPng.data[dstIdx + 2] = this.data[srcIdx + 2];
          croppedPng.data[dstIdx + 3] = this.data[srcIdx + 3];
        }
      }

      const croppedPath = path.join(publicDir, 'murari-logo-clean.png');
      croppedPng.pack().pipe(fs.createWriteStream(croppedPath)).on('finish', () => {
        console.log('Successfully saved clean cropped logo to:', croppedPath);
      });
    });
  });
