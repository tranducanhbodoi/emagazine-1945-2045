import React, { useState, useMemo } from 'react';
import {
  Compass,
  Shield,
  Layers,
  MapPin,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Search,
  CheckCircle2,
  Building,
  Users,
  Maximize2
} from 'lucide-react';
import mapData from '../../data/vietnam-map-paths.json';

export const PROVINCES_34 = mapData.units;

export default function VietnamMap() {
  const [hoveredUnitId, setHoveredUnitId] = useState(null);
  const [selectedUnitId, setSelectedUnitId] = useState(1); // Default to TP. Hà Nội (id: 1)
  const [activeGroupFilter, setActiveGroupFilter] = useState('all'); // 'all' | 'intact' | 'merged'
  const [searchQuery, setSearchQuery] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, show: false, text: '', subText: '', type: '' });

  // Map of unit data by numeric ID (1 to 34)
  const unitsMap = useMemo(() => {
    const m = {};
    PROVINCES_34.forEach(u => {
      m[u.id] = u;
    });
    return m;
  }, []);

  // Display unit: strictly fallback to selectedUnitId if hovered is null
  const currentUnit = useMemo(() => {
    if (hoveredUnitId && unitsMap[hoveredUnitId]) {
      return unitsMap[hoveredUnitId];
    }
    return unitsMap[selectedUnitId] || PROVINCES_34[0];
  }, [hoveredUnitId, selectedUnitId, unitsMap]);

  // Group filter tabs
  const groupFilters = [
    { id: 'all', label: 'Tất cả (34)' },
    { id: 'intact', label: '11 Giữ nguyên' },
    { id: 'merged', label: '23 Sáp nhập mới' },
  ];

  // Filtered 34 units by group and search query
  const filteredUnits = useMemo(() => {
    return PROVINCES_34.filter(u => {
      const matchGroup = 
        activeGroupFilter === 'all' || 
        (activeGroupFilter === 'intact' && !u.isMerged) ||
        (activeGroupFilter === 'merged' && u.isMerged);

      const query = searchQuery.trim().toLowerCase();
      const matchSearch = !query || 
        u.name.toLowerCase().includes(query) ||
        (u.shortName && u.shortName.toLowerCase().includes(query)) ||
        u.oldNames.some(p => p.toLowerCase().includes(query));

      return matchGroup && matchSearch;
    });
  }, [activeGroupFilter, searchQuery]);

  // Handle zoom controls
  const handleZoomIn = () => setZoomLevel(z => Math.min(z + 0.35, 2.8));
  const handleZoomOut = () => setZoomLevel(z => Math.max(z - 0.35, 0.9));
  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Handle mouse move on SVG for floating tooltip
  const handleMouseMove = (e, province) => {
    const rect = e.currentTarget.closest('svg').getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const unit = unitsMap[province.unitId] || {};
    setTooltipPos({
      x,
      y,
      show: true,
      text: unit.shortName || province.name,
      subText: province.name,
      type: unit.type || ''
    });
    setHoveredUnitId(province.unitId);
  };

  const handleMouseLeave = () => {
    setTooltipPos(prev => ({ ...prev, show: false }));
    setHoveredUnitId(null);
  };

  return (
    <div className="w-full bg-[#EDEBDD] rounded-3xl p-4 sm:p-6 lg:p-7 border border-[#810100]/20 shadow-2xl relative select-none">
      
      {/* Header bar of Map Component */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-[#810100]/15 gap-3 mb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#810100] text-[#EDEBDD] text-xs font-anton tracking-wider uppercase mb-1">
            <Compass className="w-3.5 h-3.5" />
            Bản Đồ 34 Đơn Vị Hành Chính (Theo Chuẩn VGP Chính Phủ)
          </div>
          <p className="text-xs text-neutral-600">
            28 Tỉnh & 6 Thành phố trực thuộc Trung ương — 11 đơn vị giữ nguyên, 23 đơn vị hình thành mới
          </p>
        </div>

        {/* Sovereignty Badge */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/90 border border-[#810100]/25 text-[#810100] text-xs font-bold shadow-sm">
          <Shield className="w-4 h-4 text-[#810100]" />
          <span>Hoàng Sa & Trường Sa là của Việt Nam</span>
        </div>
      </div>

      {/* Group Filter Tabs (Tất cả / 11 Giữ nguyên / 23 Sáp nhập) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2.5 mb-4 scrollbar-none">
        <span className="text-xs font-semibold text-neutral-500 flex items-center gap-1 shrink-0 mr-1">
          <Layers className="w-3.5 h-3.5 text-[#810100]" /> Phân nhóm:
        </span>
        {groupFilters.map((gf) => (
          <button
            key={gf.id}
            onClick={() => setActiveGroupFilter(gf.id)}
            className={`px-3 py-1 rounded-lg text-xs font-medium shrink-0 transition-all ${
              activeGroupFilter === gf.id
                ? 'bg-[#810100] text-[#EDEBDD] font-bold shadow-sm'
                : 'bg-white/80 text-neutral-700 hover:bg-white hover:text-[#810100]'
            }`}
          >
            {gf.label}
          </button>
        ))}
      </div>

      {/* Main Grid: SVG Map on Left, Detail Panel on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* SVG Map Container - Fixed Height */}
        <div className="lg:col-span-7 relative bg-[#FAF9F5] rounded-2xl p-2 sm:p-4 border border-neutral-300/80 shadow-inner flex flex-col justify-between overflow-hidden h-[740px] lg:h-[820px]">
          
          {/* Zoom & View Controls Overlay */}
          <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5 bg-white/90 p-1.5 rounded-xl border border-neutral-200/90 shadow-md backdrop-blur-sm">
            <button
              onClick={handleZoomIn}
              title="Phóng to"
              className="p-1.5 rounded-lg hover:bg-neutral-100 text-neutral-700 hover:text-[#810100] transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              title="Thu nhỏ"
              className="p-1.5 rounded-lg hover:bg-neutral-100 text-neutral-700 hover:text-[#810100] transition-colors"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              title="Đặt lại góc nhìn"
              className="p-1.5 rounded-lg hover:bg-neutral-100 text-neutral-700 hover:text-[#810100] transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <span className="text-[10px] text-center font-bold text-neutral-500 pt-1 border-t border-neutral-200">
              {Math.round(zoomLevel * 100)}%
            </span>
          </div>

          {/* Compass Rose Watermark */}
          <div className="absolute top-3 right-3 pointer-events-none opacity-25">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#810100" strokeWidth="1.5" strokeDasharray="3 3" />
              <polygon points="50,10 56,44 50,40 44,44" fill="#810100" />
              <polygon points="50,90 56,56 50,60 44,56" fill="#630000" />
              <polygon points="10,50 44,44 40,50 44,56" fill="#630000" />
              <polygon points="90,50 56,44 60,50 56,56" fill="#810100" />
              <text x="50" y="8" fill="#810100" fontSize="8" fontWeight="bold" textAnchor="middle">BẮC</text>
            </svg>
          </div>

          {/* East Sea Watermark */}
          <div className="absolute top-[48%] right-[4%] pointer-events-none select-none text-right">
            <p className="font-anton tracking-[0.25em] text-sm text-[#810100]/25 uppercase font-bold">
              BIỂN ĐÔNG
            </p>
            <p className="text-[9px] text-[#810100]/20 tracking-wider">
              (EAST VIETNAM SEA)
            </p>
          </div>

          {/* Interactive SVG Viewport */}
          <div className="w-full h-full flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing">
            <svg
              viewBox="0 0 740 980"
              className="w-full h-full max-h-[760px] drop-shadow-md select-none transition-transform duration-200 ease-out"
              style={{
                transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`,
                transformOrigin: 'center center'
              }}
              onMouseLeave={handleMouseLeave}
            >
              <defs>
                <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Maritime coordinate grid */}
              <g stroke="#810100" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.16">
                <line x1="20" y1="180" x2="720" y2="180" />
                <line x1="20" y1="460" x2="720" y2="460" />
                <line x1="20" y1="740" x2="720" y2="740" />
                <line x1="280" y1="20" x2="280" y2="960" />
                <line x1="520" y1="20" x2="520" y2="960" />
              </g>

              {/* Provinces SVG Paths (Accurate GeoJSON data, Scale 3400) */}
              <g>
                {mapData.provinces.map((prov) => {
                  const isSelected = selectedUnitId === prov.unitId;
                  const isHovered = hoveredUnitId === prov.unitId;
                  const isHighlight = isSelected || isHovered;

                  return (
                    <path
                      key={prov.id}
                      d={prov.path}
                      fill={isHighlight ? '#DC2626' : '#8B1D1D'}
                      stroke={isHighlight ? '#FFD700' : '#EDEBDD'}
                      strokeWidth={isHighlight ? 1.6 : 0.8}
                      filter={isHighlight ? 'url(#mapGlow)' : undefined}
                      className="transition-colors duration-150 cursor-pointer hover:opacity-95"
                      onMouseMove={(e) => handleMouseMove(e, prov)}
                      onClick={() => setSelectedUnitId(prov.unitId)}
                    />
                  );
                })}
              </g>

              {/* =========================================================
                  QUẦN ĐẢO HOÀNG SA (Thuộc TP. Đà Nẵng, id: 21)
                 ========================================================= */}
              <g
                className="cursor-pointer group"
                onClick={() => setSelectedUnitId(21)}
                onMouseEnter={() => setHoveredUnitId(21)}
                onMouseLeave={() => setHoveredUnitId(null)}
              >
                {/* Boundary box */}
                <rect
                  x="540"
                  y="370"
                  width="180"
                  height="76"
                  rx="12"
                  fill={hoveredUnitId === 21 || selectedUnitId === 21 ? '#DC2626' : '#8B1D1D'}
                  stroke={hoveredUnitId === 21 || selectedUnitId === 21 ? '#FFD700' : '#EDEBDD'}
                  strokeWidth={hoveredUnitId === 21 || selectedUnitId === 21 ? 2.5 : 1.2}
                  className="transition-all duration-300 shadow-lg"
                />
                {/* Star flag icon */}
                <circle cx="568" cy="398" r="10" fill="#FFD700" />
                <polygon points="568,391 570,396 576,397 571,400 573,405 568,402 563,405 565,400 560,397 566,396" fill="#810100" />

                {/* Title */}
                <text x="586" y="398" fill="#EDEBDD" fontSize="12" fontWeight="bold" fontFamily="Anton, sans-serif" letterSpacing="0.8">
                  QUẦN ĐẢO HOÀNG SA
                </text>
                <text x="586" y="415" fill="#EDEBDD" fontSize="9.5" opacity="0.95">
                  (Thuộc TP. Đà Nẵng)
                </text>
                <text x="586" y="432" fill="#FFD700" fontSize="8.5" fontWeight="bold">
                  16°30'B - 112°00'Đ
                </text>

                {/* Archipelago Islands Representation */}
                <g fill="#FFD700" stroke="#810100" strokeWidth="0.5">
                  <circle cx="510" cy="385" r="4" />
                  <circle cx="522" cy="400" r="3.5" />
                  <circle cx="512" cy="415" r="3" />
                  <circle cx="526" cy="428" r="3.5" />
                </g>
                <line x1="526" y1="410" x2="540" y2="410" stroke="#FFD700" strokeWidth="1" strokeDasharray="2 2" />
              </g>

              {/* =========================================================
                  QUẦN ĐẢO TRƯỜNG SA (Thuộc Tỉnh Khánh Hòa, id: 24)
                 ========================================================= */}
              <g
                className="cursor-pointer group"
                onClick={() => setSelectedUnitId(24)}
                onMouseEnter={() => setHoveredUnitId(24)}
                onMouseLeave={() => setHoveredUnitId(null)}
              >
                {/* Boundary box */}
                <rect
                  x="535"
                  y="770"
                  width="188"
                  height="80"
                  rx="12"
                  fill={hoveredUnitId === 24 || selectedUnitId === 24 ? '#DC2626' : '#8B1D1D'}
                  stroke={hoveredUnitId === 24 || selectedUnitId === 24 ? '#FFD700' : '#EDEBDD'}
                  strokeWidth={hoveredUnitId === 24 || selectedUnitId === 24 ? 2.5 : 1.2}
                  className="transition-all duration-300 shadow-lg"
                />
                {/* Star flag icon */}
                <circle cx="563" cy="800" r="10" fill="#FFD700" />
                <polygon points="563,793 565,798 571,799 566,802 568,807 563,804 558,807 560,802 555,799 561,798" fill="#810100" />

                {/* Title */}
                <text x="581" y="800" fill="#EDEBDD" fontSize="12" fontWeight="bold" fontFamily="Anton, sans-serif" letterSpacing="0.8">
                  QUẦN ĐẢO TRƯỜNG SA
                </text>
                <text x="581" y="817" fill="#EDEBDD" fontSize="9.5" opacity="0.95">
                  (Thuộc Tỉnh Khánh Hòa)
                </text>
                <text x="581" y="834" fill="#FFD700" fontSize="8.5" fontWeight="bold">
                  10°00'B - 114°00'Đ
                </text>

                {/* Archipelago Reefs and Islands */}
                <g fill="#FFD700" stroke="#810100" strokeWidth="0.5">
                  <circle cx="505" cy="780" r="3.5" />
                  <circle cx="518" cy="795" r="3.2" />
                  <circle cx="502" cy="815" r="3" />
                  <circle cx="522" cy="830" r="3.8" />
                  <circle cx="512" cy="850" r="3" />
                </g>
                <line x1="522" y1="815" x2="535" y2="815" stroke="#FFD700" strokeWidth="1" strokeDasharray="2 2" />
              </g>

              {/* Island Labels: Đảo Phú Quốc, Côn Đảo */}
              <g fill="#810100" fontSize="10" fontFamily="Anton, sans-serif" fontWeight="bold">
                <text x="180" y="895" textAnchor="middle">Đ. PHÚ QUỐC</text>
                <text x="350" y="945" textAnchor="middle">CÔN ĐẢO</text>
              </g>

            </svg>
          </div>

          {/* Floating Tooltip following mouse */}
          {tooltipPos.show && (
            <div
              className="absolute pointer-events-none z-30 px-3.5 py-2 rounded-xl bg-[#1B1717]/95 text-white text-xs shadow-2xl border border-red-500/50 backdrop-blur-sm -translate-x-1/2 -translate-y-full mb-3"
              style={{
                left: `${tooltipPos.x}px`,
                top: `${tooltipPos.y - 10}px`
              }}
            >
              <div className="flex items-center gap-1.5 font-bold text-[#FFD700] text-sm">
                <MapPin className="w-3.5 h-3.5" />
                {tooltipPos.text}
              </div>
              <div className="text-[11px] text-neutral-300">
                {tooltipPos.subText !== tooltipPos.text && `${tooltipPos.subText} • `}
                {tooltipPos.type}
              </div>
            </div>
          )}

          {/* Bottom helper footnote */}
          <div className="text-[11px] text-neutral-500 text-center pt-2 border-t border-neutral-200/70">
            Dùng nút phóng to hoặc nhấp chọn tỉnh/thành phố để xem chi tiết
          </div>
        </div>

        {/* Right Column: Exactly Locked Constant Height to PREVENT ANY JITTER */}
        <div className="lg:col-span-5 flex flex-col justify-between h-[740px] lg:h-[820px] space-y-4">
          
          {/* =========================================================
              BOX 1: Card Chi Tiết Đơn Vị Được Chọn
              Height is locked to exactly h-[290px] so hovering NEVER shifts layout!
             ========================================================= */}
          <div className="bg-white rounded-3xl p-5 border border-neutral-200/90 shadow-xl relative overflow-hidden h-[290px] shrink-0 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#810100]/5 rounded-bl-full pointer-events-none" />

            <div>
              {/* Badge & ID */}
              <div className="flex items-center justify-between mb-1.5">
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                  currentUnit.isMerged 
                    ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                    : 'bg-[#810100]/10 text-[#810100]'
                }`}>
                  {currentUnit.type}
                </span>
                <span className="text-[11px] text-neutral-400 font-semibold">Mã số: #{currentUnit.id < 10 ? `0${currentUnit.id}` : currentUnit.id}</span>
              </div>

              {/* Title: 1 line short title + 1 line subtitle (NEVER WRAPS OR GROWS) */}
              <div className="mb-2">
                <h5 className="font-anton text-2xl text-[#810100] uppercase leading-none truncate" title={currentUnit.name}>
                  {currentUnit.shortName || currentUnit.name}
                </h5>
                <p className="text-[11px] text-neutral-500 font-medium truncate mt-1">
                  {currentUnit.isMerged 
                    ? `Sáp nhập: ${currentUnit.oldNames.join(' + ')}` 
                    : 'Đơn vị hành chính cấp tỉnh giữ nguyên'}
                </p>
              </div>

              {/* Area and Population Metrics (Constant single row) */}
              <div className="grid grid-cols-2 gap-2.5 mb-2 text-xs">
                <div className="p-2 rounded-xl bg-[#FAF9F5] border border-neutral-200/80">
                  <span className="text-neutral-500 flex items-center gap-1 mb-0.5 text-[10.5px]">
                    <Maximize2 className="w-3 h-3 text-[#810100]" /> Diện tích
                  </span>
                  <span className="font-anton text-sm sm:text-base text-[#1B1717]">{currentUnit.area} km²</span>
                </div>

                <div className="p-2 rounded-xl bg-[#FAF9F5] border border-neutral-200/80">
                  <span className="text-neutral-500 flex items-center gap-1 mb-0.5 text-[10.5px]">
                    <Users className="w-3 h-3 text-[#810100]" /> Dân số
                  </span>
                  <span className="font-anton text-sm sm:text-base text-[#1B1717]">{currentUnit.population} người</span>
                </div>
              </div>
            </div>

            {/* Bottom info section with fixed row heights and truncation */}
            <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-neutral-200/80 space-y-1 text-[11px]">
              <div className="flex items-center justify-between">
                <span className="text-neutral-500 shrink-0">Mô hình:</span>
                <span className="font-bold text-neutral-800">Chính quyền địa phương 2 cấp</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500 shrink-0">Cấu thành:</span>
                <span className="font-semibold text-[#810100] truncate max-w-[190px]" title={currentUnit.oldNames.join(', ')}>
                  {currentUnit.oldNames.join(', ')}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500 shrink-0">Trạng thái:</span>
                <span className={`font-bold ${currentUnit.isMerged ? 'text-amber-700' : 'text-green-700'}`}>
                  {currentUnit.isMerged ? 'Sau sắp xếp' : 'Giữ nguyên'}
                </span>
              </div>
            </div>
          </div>

          {/* =========================================================
              BOX 2: Bảng Tra Cứu Đầy Đủ 34 Đơn Vị Hành Chính
              Height is locked to exactly h-[480px] lg:h-[510px] with overscroll-contain
             ========================================================= */}
          <div className="bg-[#FAF9F5] rounded-3xl p-5 border border-neutral-200 shadow-md flex-1 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Header with 34/34 Badge */}
              <div className="flex items-center justify-between mb-2">
                <p className="font-anton text-sm text-[#1B1717] uppercase tracking-wide flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-[#810100]" />
                  Danh mục 34 Đơn vị VGP
                </p>
                <span className="px-2.5 py-0.5 rounded-full bg-[#810100] text-white text-[11px] font-bold">
                  {filteredUnits.length} / 34
                </span>
              </div>

              {/* Quick Search Input */}
              <div className="relative mb-2">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm nhanh tỉnh/thành phố..."
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white border border-neutral-200 text-xs focus:outline-none focus:ring-1 focus:ring-[#810100]"
                />
              </div>

              {/* 2-Column Scrollable Grid with overscroll-contain */}
              <div 
                className="grid grid-cols-2 gap-1.5 h-[340px] sm:h-[370px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[#810100] scrollbar-track-neutral-200"
                style={{ overscrollBehavior: 'contain' }}
              >
                {filteredUnits.map((u) => {
                  const isActive = currentUnit.id === u.id;
                  return (
                    <button
                      key={u.id}
                      onMouseEnter={() => setHoveredUnitId(u.id)}
                      onMouseLeave={() => setHoveredUnitId(null)}
                      onClick={() => setSelectedUnitId(u.id)}
                      className={`text-left px-2.5 py-2 rounded-xl text-xs font-medium transition-colors duration-75 flex items-center justify-between gap-1 border ${
                        isActive
                          ? 'bg-[#810100] text-white font-bold border-[#810100] shadow-sm'
                          : 'bg-white hover:bg-neutral-100 text-neutral-700 border-neutral-200/80 hover:border-[#810100]/30'
                      }`}
                    >
                      <span className="truncate">
                        <span className="opacity-60 text-[10px] mr-1">#{u.id}</span>
                        {u.shortName || u.name}
                      </span>
                      {isActive && <CheckCircle2 className="w-3 h-3 text-[#FFD700] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Micro instruction */}
            <p className="text-[11px] text-neutral-400 italic text-center pt-2 border-t border-neutral-200/60">
              Nhấp hoặc di chuột để xem chi tiết
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
