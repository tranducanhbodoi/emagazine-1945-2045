const https = require('https');
const fs = require('fs');
const path = require('path');

const candidates = [
  'https://raw.githubusercontent.com/sunng87/vietnam-regions/master/topojson/vietnam.json',
  'https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/vietnam.geojson',
  'https://raw.githubusercontent.com/TungTh/tungth.github.io/master/data/vn-provinces.json',
  'https://raw.githubusercontent.com/giswqs/geospatial-data-catalogs/master/data/countries/vietnam.geojson'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      console.log(url, 'status:', res.statusCode);
      if (res.statusCode === 200) {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            console.log('Parsed successfully from:', url, 'type:', parsed.type, 'features:', parsed.features ? parsed.features.length : Object.keys(parsed.objects || {}));
            resolve({ url, data });
          } catch (e) {
            console.log('Failed to parse JSON from:', url, e.message);
            resolve(null);
          }
        });
      } else {
        resolve(null);
      }
    }).on('error', (e) => {
      console.log('Error fetching:', url, e.message);
      resolve(null);
    });
  });
}

(async () => {
  for (const url of candidates) {
    const res = await checkUrl(url);
    if (res) {
      const outDir = path.join(__dirname, 'public', 'data');
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
      const outFile = path.join(outDir, 'vietnam.json');
      fs.writeFileSync(outFile, res.data);
      console.log('Saved valid map data to', outFile);
      break;
    }
  }
})();
