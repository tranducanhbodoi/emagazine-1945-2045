import fs from 'fs';
import * as d3Geo from 'd3-geo';

const rawData = JSON.parse(fs.readFileSync('public/data/vietnam.json', 'utf8'));

const scale = 3400;
const projection = d3Geo.geoMercator()
  .center([106.8, 16.1])
  .scale(scale)
  .translate([320, 480]);

const pathGenerator = d3Geo.geoPath().projection(projection);

const dn = rawData.features.find(f => f.properties.Ten.includes('Đà Nẵng'));
const kh = rawData.features.find(f => f.properties.Ten.includes('Khánh Hòa'));

console.log('Danang centroid:', pathGenerator.centroid(dn));
console.log('Khanh Hoa centroid:', pathGenerator.centroid(kh));
