import fs from 'fs';
import * as d3Geo from 'd3-geo';

const rawData = JSON.parse(fs.readFileSync('public/data/vietnam.json', 'utf8'));

const scale = 3400;
const projection = d3Geo.geoMercator()
  .center([106.8, 16.1])
  .scale(scale)
  .translate([320, 480]);

const pathGenerator = d3Geo.geoPath().projection(projection);

let minX = 9999, minY = 9999, maxX = -9999, maxY = -9999;
rawData.features.forEach(f => {
  const b = pathGenerator.bounds(f);
  if (b[1][0] < 700) {
    minX = Math.min(minX, b[0][0]);
    minY = Math.min(minY, b[0][1]);
    maxX = Math.max(maxX, b[1][0]);
    maxY = Math.max(maxY, b[1][1]);
  }
});

console.log('Scale:', scale, { minX, minY, maxX, maxY, width: maxX - minX, height: maxY - minY });
