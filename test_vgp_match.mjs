import fs from 'fs';

const PROVINCES_34 = [
  // 11 Giữ nguyên
  { id: 1, name: "TP. Hà Nội", shortName: "Hà Nội", type: "Thành phố (Giữ nguyên)", isMerged: false, area: "3.359,82", population: "8.587.141", oldNames: ["Hà Nội"] },
  { id: 2, name: "TP. Huế", shortName: "Huế", type: "Thành phố (Giữ nguyên)", isMerged: false, area: "4.947,11", population: "1.160.200", oldNames: ["Thừa Thiên Huế"] },
  { id: 3, name: "Lai Châu", shortName: "Lai Châu", type: "Tỉnh (Giữ nguyên)", isMerged: false, area: "9.068,79", population: "489.200", oldNames: ["Lai Châu"] },
  { id: 4, name: "Quảng Ninh", shortName: "Quảng Ninh", type: "Tỉnh (Giữ nguyên)", isMerged: false, area: "6.207,93", population: "1.384.400", oldNames: ["Quảng Ninh"] },
  { id: 5, name: "Thanh Hóa", shortName: "Thanh Hóa", type: "Tỉnh (Giữ nguyên)", isMerged: false, area: "11.114,71", population: "3.752.000", oldNames: ["Thanh Hóa"] },
  { id: 6, name: "Nghệ An", shortName: "Nghệ An", type: "Tỉnh (Giữ nguyên)", isMerged: false, area: "16.490,25", population: "3.449.600", oldNames: ["Nghệ An"] },
  { id: 7, name: "Điện Biên", shortName: "Điện Biên", type: "Tỉnh (Giữ nguyên)", isMerged: false, area: "9.539,93", population: "650.000", oldNames: ["Điện Biên"] },
  { id: 8, name: "Sơn La", shortName: "Sơn La", type: "Tỉnh (Giữ nguyên)", isMerged: false, area: "14.123,49", population: "1.300.000", oldNames: ["Sơn La"] },
  { id: 9, name: "Lạng Sơn", shortName: "Lạng Sơn", type: "Tỉnh (Giữ nguyên)", isMerged: false, area: "8.310,18", population: "802.100", oldNames: ["Lạng Sơn"] },
  { id: 10, name: "Hà Tĩnh", shortName: "Hà Tĩnh", type: "Tỉnh (Giữ nguyên)", isMerged: false, area: "5.994,45", population: "1.324.000", oldNames: ["Hà Tĩnh"] },
  { id: 11, name: "Cao Bằng", shortName: "Cao Bằng", type: "Tỉnh (Giữ nguyên)", isMerged: false, area: "6.700,26", population: "543.000", oldNames: ["Cao Bằng"] },

  // 23 Sáp nhập mới
  { id: 12, name: "Tuyên Quang (Tuyên Quang + Hà Giang)", shortName: "Tuyên Quang", type: "Tỉnh sáp nhập mới", isMerged: true, area: "13.793,50", population: "1.765.270", oldNames: ["Tuyên Quang", "Hà Giang"] },
  { id: 13, name: "Lào Cai (Lào Cai + Yên Bái)", shortName: "Lào Cai", type: "Tỉnh sáp nhập mới", isMerged: true, area: "13.256,92", population: "1.778.785", oldNames: ["Lào Cai", "Yên Bái"] },
  { id: 14, name: "Thái Nguyên (Thái Nguyên + Bắc Kạn)", shortName: "Thái Nguyên", type: "Tỉnh sáp nhập mới", isMerged: true, area: "8.375,21", population: "1.709.489", oldNames: ["Thái Nguyên", "Bắc Kạn"] },
  { id: 15, name: "Phú Thọ (Phú Thọ + Vĩnh Phúc + Hòa Bình)", shortName: "Phú Thọ", type: "Tỉnh sáp nhập mới", isMerged: true, area: "9.361,38", population: "4.022.638", oldNames: ["Phú Thọ", "Vĩnh Phúc", "Hòa Bình"] },
  { id: 16, name: "Bắc Ninh (Bắc Ninh + Bắc Giang)", shortName: "Bắc Ninh", type: "Tỉnh sáp nhập mới", isMerged: true, area: "4.718,60", population: "3.619.433", oldNames: ["Bắc Ninh", "Bắc Giang"] },
  { id: 17, name: "Hưng Yên (Hưng Yên + Thái Bình)", shortName: "Hưng Yên", type: "Tỉnh sáp nhập mới", isMerged: true, area: "2.514,81", population: "3.567.943", oldNames: ["Hưng Yên", "Thái Bình"] },
  { id: 18, name: "TP. Hải Phòng (TP. Hải Phòng + Hải Dương)", shortName: "TP. Hải Phòng", type: "Thành phố sáp nhập mới", isMerged: true, area: "3.194,72", population: "4.664.124", oldNames: ["Hải Phòng", "Hải Dương"] },
  { id: 19, name: "Ninh Bình (Ninh Bình + Nam Định + Hà Nam)", shortName: "Ninh Bình", type: "Tỉnh sáp nhập mới", isMerged: true, area: "3.942,62", population: "4.412.264", oldNames: ["Ninh Bình", "Nam Định", "Hà Nam"] },
  { id: 20, name: "Quảng Trị (Quảng Bình + Quảng Trị)", shortName: "Quảng Trị", type: "Tỉnh sáp nhập mới", isMerged: true, area: "12.700,00", population: "1.870.845", oldNames: ["Quảng Bình", "Quảng Trị"] },
  { id: 21, name: "TP. Đà Nẵng (TP. Đà Nẵng + Quảng Nam)", shortName: "TP. Đà Nẵng", type: "Thành phố sáp nhập mới", isMerged: true, area: "11.859,59", population: "3.065.628", oldNames: ["Đà Nẵng", "Quảng Nam"] },
  { id: 22, name: "Quảng Ngãi (Quảng Ngãi + Kon Tum)", shortName: "Quảng Ngãi", type: "Tỉnh sáp nhập mới", isMerged: true, area: "14.832,55", population: "2.161.755", oldNames: ["Quảng Ngãi", "Kon Tum"] },
  { id: 23, name: "Gia Lai (Gia Lai + Bình Định)", shortName: "Gia Lai", type: "Tỉnh sáp nhập mới", isMerged: true, area: "21.576,53", population: "3.583.693", oldNames: ["Gia Lai", "Bình Định"] },
  { id: 24, name: "Khánh Hòa (Khánh Hòa + Ninh Thuận)", shortName: "Khánh Hòa", type: "Tỉnh sáp nhập mới", isMerged: true, area: "8.555,86", population: "2.243.554", oldNames: ["Khánh Hòa", "Ninh Thuận"] },
  { id: 25, name: "Lâm Đồng (Lâm Đồng + Bình Thuận + Đắk Nông)", shortName: "Lâm Đồng", type: "Tỉnh sáp nhập mới", isMerged: true, area: "24.233,07", population: "3.872.999", oldNames: ["Lâm Đồng", "Bình Thuận", "Đắk Nông"] },
  { id: 26, name: "Đắk Lắk (Đắk Lắk + Phú Yên)", shortName: "Đắk Lắk", type: "Tỉnh sáp nhập mới", isMerged: true, area: "18.096,40", population: "3.346.851", oldNames: ["Đắk Lắk", "Phú Yên"] },
  { id: 27, name: "TP. Hồ Chí Minh (TP.HCM + Bình Dương + Bà Rịa Vũng Tàu)", shortName: "TP. Hồ Chí Minh", type: "Thành phố sáp nhập mới", isMerged: true, area: "6.772,59", population: "14.002.598", oldNames: ["Hồ Chí Minh", "Bình Dương", "Bà Rịa - Vũng Tàu", "Bà Rịa Vũng Tàu"] },
  { id: 28, name: "Đồng Nai (Đồng Nai + Bình Phước)", shortName: "Đồng Nai", type: "Tỉnh sáp nhập mới", isMerged: true, area: "12.737,18", population: "4.491.408", oldNames: ["Đồng Nai", "Bình Phước"] },
  { id: 29, name: "Tây Ninh (Tây Ninh + Long An)", shortName: "Tây Ninh", type: "Tỉnh sáp nhập mới", isMerged: true, area: "8.536,44", population: "3.254.170", oldNames: ["Tây Ninh", "Long An"] },
  { id: 30, name: "TP. Cần Thơ (TP. Cần Thơ + Sóc Trăng + Hậu Giang)", shortName: "TP. Cần Thơ", type: "Thành phố sáp nhập mới", isMerged: true, area: "6.360,83", population: "4.199.824", oldNames: ["Cần Thơ", "Sóc Trăng", "Hậu Giang"] },
  { id: 31, name: "Vĩnh Long (Vĩnh Long + Bến Tre + Trà Vinh)", shortName: "Vĩnh Long", type: "Tỉnh sáp nhập mới", isMerged: true, area: "6.296,20", population: "4.257.581", oldNames: ["Vĩnh Long", "Bến Tre", "Trà Vinh"] },
  { id: 32, name: "Đồng Tháp (Đồng Tháp + Tiền Giang)", shortName: "Đồng Tháp", type: "Tỉnh sáp nhập mới", isMerged: true, area: "5.938,64", population: "4.370.046", oldNames: ["Đồng Tháp", "Tiền Giang"] },
  { id: 33, name: "Cà Mau (Cà Mau + Bạc Liêu)", shortName: "Cà Mau", type: "Tỉnh sáp nhập mới", isMerged: true, area: "7.942,39", population: "2.606.672", oldNames: ["Cà Mau", "Bạc Liêu"] },
  { id: 34, name: "An Giang (An Giang + Kiên Giang)", shortName: "An Giang", type: "Tỉnh sáp nhập mới", isMerged: true, area: "9.888,91", population: "4.952.238", oldNames: ["An Giang", "Kiên Giang"] }
];

const rawData = JSON.parse(fs.readFileSync('public/data/vietnam.json', 'utf8'));

const unmatched = [];
rawData.features.forEach(f => {
  const name = f.properties.Ten;
  const cleanName = name.replace('Tỉnh ', '').replace('Thành phố ', '');
  const found = PROVINCES_34.find(p => p.oldNames.some(o => cleanName.includes(o) || o.includes(cleanName)));
  if (!found) {
    unmatched.push(name);
  }
});

console.log('Total 34 units:', PROVINCES_34.length);
console.log('Unmatched provinces:', unmatched);
