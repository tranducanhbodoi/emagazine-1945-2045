const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'images');
const destPublicImage = path.join(__dirname, 'public', 'image');
const destPublicImages = path.join(__dirname, 'public', 'images');

[destPublicImage, destPublicImages].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const files = fs.readdirSync(srcDir);
console.log('Files in images:', files);

files.forEach(file => {
  const fullPath = path.join(srcDir, file);
  if (file.toLowerCase().includes('cover')) {
    fs.copyFileSync(fullPath, path.join(destPublicImage, 'cover.jpg'));
    fs.copyFileSync(fullPath, path.join(destPublicImage, 'cover.png'));
    fs.copyFileSync(fullPath, path.join(destPublicImages, 'cover.jpg'));
    fs.copyFileSync(fullPath, path.join(destPublicImages, 'cover.png'));
    console.log('Copied cover to both jpg and png');
  }
  if (file.toLowerCase().includes('pgs')) {
    fs.copyFileSync(fullPath, path.join(destPublicImage, 'PGS Bùi Đình Phong.jpg'));
    fs.copyFileSync(fullPath, path.join(destPublicImage, 'pgs.jpg'));
    fs.copyFileSync(fullPath, path.join(destPublicImages, 'PGS Bùi Đình Phong.jpg'));
    fs.copyFileSync(fullPath, path.join(destPublicImages, 'pgs.jpg'));
    console.log('Copied pgs');
  }
  if (file.toLowerCase().includes('bac') || file.toLowerCase().includes('lop-hoc')) {
    fs.copyFileSync(fullPath, path.join(destPublicImage, 'bac-ho.jpg'));
    fs.copyFileSync(fullPath, path.join(destPublicImages, 'bac-ho.jpg'));
    console.log('Copied bac-ho');
  }
});

console.log('Public image contents:', fs.readdirSync(destPublicImage));
