import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Calendar
} from 'lucide-react';

// Official World Bank Data: Vietnam GDP (current US$ in Billions)
// Indicator: NY.GDP.MKTP.CD (Source: World Bank Open Data)
const GDP_DATA = [
  { year: 1985, value: 14.09, note: 'Giai đoạn tiền Đổi mới' },
  { year: 1986, value: 26.34, note: 'Khởi đầu Đổi mới (1986)' },
  { year: 1987, value: 36.66 },
  { year: 1988, value: 25.42 },
  { year: 1989, value: 6.29, note: 'Khủng hoảng chuyển đổi cơ chế' },
  { year: 1990, value: 6.47 },
  { year: 1991, value: 9.61 },
  { year: 1992, value: 9.87 },
  { year: 1993, value: 13.18 },
  { year: 1994, value: 16.29, note: 'Bỏ cấm vận kinh tế' },
  { year: 1995, value: 20.74, note: 'Gia nhập ASEAN & Bình thường hóa quan hệ Mỹ' },
  { year: 1996, value: 24.66 },
  { year: 1997, value: 26.84 },
  { year: 1998, value: 27.21 },
  { year: 1999, value: 28.68 },
  { year: 2000, value: 31.17, note: 'Vượt mốc 30 tỷ USD' },
  { year: 2001, value: 32.69 },
  { year: 2002, value: 35.06 },
  { year: 2003, value: 39.55 },
  { year: 2004, value: 45.43 },
  { year: 2005, value: 57.63, note: 'Vượt mốc 50 tỷ USD' },
  { year: 2006, value: 66.37 },
  { year: 2007, value: 77.41, note: 'Gia nhập WTO' },
  { year: 2008, value: 99.13 },
  { year: 2009, value: 106.01, note: 'Vượt mốc 100 tỷ USD' },
  { year: 2010, value: 147.20, note: 'Vào nhóm nước thu nhập trung bình' },
  { year: 2011, value: 172.60 },
  { year: 2012, value: 195.59 },
  { year: 2013, value: 213.71, note: 'Vượt mốc 200 tỷ USD' },
  { year: 2014, value: 233.45 },
  { year: 2015, value: 239.26 },
  { year: 2016, value: 257.10 },
  { year: 2017, value: 281.35 },
  { year: 2018, value: 310.11, note: 'Vượt mốc 300 tỷ USD' },
  { year: 2019, value: 334.37 },
  { year: 2020, value: 346.62, note: 'Tăng trưởng dương bền bỉ mùa dịch' },
  { year: 2021, value: 366.47 },
  { year: 2022, value: 413.45, note: 'Vượt mốc 400 tỷ USD' },
  { year: 2023, value: 433.81, note: 'Quy mô kinh tế tăng trưởng 96 lần' },
  { year: 2024, value: 476.32, note: 'Quy mô đạt 476,3 tỷ USD, tốp 35 thế giới' }
];

const MIN_DATA_YEAR = 1985;
const MAX_DATA_YEAR = 2024;

export default function WorldBankGDPChart() {
  const [yearRange, setYearRange] = useState({ start: 1985, end: 2024 });
  const [showLabels, setShowLabels] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const sliderRef = useRef(null);
  const draggingHandleRef = useRef(null);

  // SVG Chart Dimensions
  const svgWidth = 840;
  const svgHeight = 360;
  const padding = { top: 25, right: 35, bottom: 35, left: 55 };

  const chartWidth = svgWidth - padding.left - padding.right;
  const chartHeight = svgHeight - padding.top - padding.bottom;

  // Filter Data based on selected year range
  const filteredData = useMemo(() => {
    return GDP_DATA.filter((d) => d.year >= yearRange.start && d.year <= yearRange.end);
  }, [yearRange]);

  // Compute dynamic max value & clean Y-Ticks matching original World Bank scale
  const { maxGDP, yTicks } = useMemo(() => {
    const maxVal = Math.max(...filteredData.map((d) => d.value), 50);
    if (maxVal > 300) {
      return { maxGDP: 550, yTicks: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550] };
    }
    if (maxVal > 150) {
      return { maxGDP: 350, yTicks: [0, 50, 100, 150, 200, 250, 300, 350] };
    }
    if (maxVal > 80) {
      return { maxGDP: 150, yTicks: [0, 25, 50, 75, 100, 125, 150] };
    }
    return { maxGDP: 80, yTicks: [0, 20, 40, 60, 80] };
  }, [filteredData]);

  // Compute coordinate points
  const points = useMemo(() => {
    const span = Math.max(1, yearRange.end - yearRange.start);
    return filteredData.map((d) => {
      const x = padding.left + ((d.year - yearRange.start) / span) * chartWidth;
      const y = padding.top + chartHeight - (d.value / maxGDP) * chartHeight;
      return { ...d, x, y };
    });
  }, [filteredData, yearRange, chartWidth, chartHeight, maxGDP, padding.left, padding.top]);

  // Construct SVG Path Line
  const linePath = useMemo(() => {
    return points.reduce((path, pt, idx) => {
      return idx === 0 ? `M ${pt.x},${pt.y}` : `${path} L ${pt.x},${pt.y}`;
    }, '');
  }, [points]);

  // Dynamic X-axis year ticks (matches original World Bank step calculation)
  const xTicks = useMemo(() => {
    const span = yearRange.end - yearRange.start;
    let step = 5;
    if (span < 12) step = 1;
    else if (span < 24) step = 2;
    else step = 5;

    const ticks = [];
    const firstTick = Math.ceil(yearRange.start / step) * step;
    for (let yr = firstTick; yr <= yearRange.end; yr += step) {
      ticks.push(yr);
    }
    // Always include endYear if not already close
    if (ticks[ticks.length - 1] !== yearRange.end && yearRange.end - ticks[ticks.length - 1] > 1) {
      ticks.push(yearRange.end);
    }
    return ticks;
  }, [yearRange]);

  // Mouse move on SVG canvas for continuous tracking
  const handleSvgMouseMove = (e) => {
    const svgRect = e.currentTarget.getBoundingClientRect();
    if (!svgRect.width) return;
    const clientX = e.clientX - svgRect.left;
    const svgX = (clientX / svgRect.width) * svgWidth;

    if (svgX < padding.left - 15 || svgX > padding.left + chartWidth + 15) return;

    let closest = points[0];
    let minDiff = Math.abs(points[0].x - svgX);
    for (let i = 1; i < points.length; i++) {
      const diff = Math.abs(points[i].x - svgX);
      if (diff < minDiff) {
        minDiff = diff;
        closest = points[i];
      }
    }
    setHoveredPoint(closest);
  };

  // Dual Range Slider Window-level Smooth Drag Logic
  const startDrag = (type, startEvent) => {
    startEvent.preventDefault();
    startEvent.stopPropagation();
    const startX = startEvent.clientX;
    const initialRange = { ...yearRange };

    const onPointerMove = (e) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const targetYear = Math.round(MIN_DATA_YEAR + ratio * (MAX_DATA_YEAR - MIN_DATA_YEAR));

      if (type === 'start') {
        setYearRange((prev) => ({
          ...prev,
          start: Math.max(MIN_DATA_YEAR, Math.min(targetYear, prev.end - 1))
        }));
      } else if (type === 'end') {
        setYearRange((prev) => ({
          ...prev,
          end: Math.min(MAX_DATA_YEAR, Math.max(targetYear, prev.start + 1))
        }));
      } else if (type === 'bar') {
        const deltaYears = Math.round(((e.clientX - startX) / rect.width) * (MAX_DATA_YEAR - MIN_DATA_YEAR));
        const span = initialRange.end - initialRange.start;
        let newStart = initialRange.start + deltaYears;
        let newEnd = initialRange.end + deltaYears;

        if (newStart < MIN_DATA_YEAR) {
          newStart = MIN_DATA_YEAR;
          newEnd = MIN_DATA_YEAR + span;
        }
        if (newEnd > MAX_DATA_YEAR) {
          newEnd = MAX_DATA_YEAR;
          newStart = MAX_DATA_YEAR - span;
        }
        setYearRange({ start: newStart, end: newEnd });
      }
    };

    const onPointerUp = () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  };

  // Click directly on the track to move the nearest handle
  const handleTrackClick = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const clickedYear = Math.round(MIN_DATA_YEAR + ratio * (MAX_DATA_YEAR - MIN_DATA_YEAR));

    const distToStart = Math.abs(clickedYear - yearRange.start);
    const distToEnd = Math.abs(clickedYear - yearRange.end);

    if (distToStart < distToEnd) {
      setYearRange((prev) => ({ ...prev, start: Math.min(clickedYear, prev.end - 1) }));
    } else {
      setYearRange((prev) => ({ ...prev, end: Math.max(clickedYear, prev.start + 1) }));
    }
  };

  // Click on a specific year mark chip
  const handleYearTickClick = (year) => {
    const distToStart = Math.abs(year - yearRange.start);
    const distToEnd = Math.abs(year - yearRange.end);
    if (distToStart < distToEnd) {
      setYearRange((prev) => ({ ...prev, start: Math.min(year, prev.end - 1) }));
    } else {
      setYearRange((prev) => ({ ...prev, end: Math.max(year, prev.start + 1) }));
    }
  };

  const startPercent = ((yearRange.start - MIN_DATA_YEAR) / (MAX_DATA_YEAR - MIN_DATA_YEAR)) * 100;
  const endPercent = ((yearRange.end - MIN_DATA_YEAR) / (MAX_DATA_YEAR - MIN_DATA_YEAR)) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#810100]/20 shadow-xl relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#810100]/5 rounded-bl-full pointer-events-none" />

      {/* Header & Mode Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-5 border-b border-neutral-200/80">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-[#810100] text-[#EDEBDD] text-xs font-anton tracking-wider uppercase flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              World Bank Open Data
            </span>
            <span className="text-xs text-neutral-500 font-semibold">
              Mã chỉ số: NY.GDP.MKTP.CD
            </span>
          </div>

          <h4 className="font-anton text-2xl sm:text-3xl text-[#1B1717] uppercase tracking-wide leading-tight">
            Quy Mô GDP Việt Nam (1985 — 2024): Tăng Trưởng 96 Lần
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl leading-relaxed">
            Minh chứng định lượng từ Ngân hàng Thế giới — hỗ trợ thanh trượt tùy chỉnh khoảng năm trực quan như trên cổng dữ liệu gốc.
          </p>
        </div>
      </div>

      {/* Main Interactive Chart Area */}
      <div>
        {/* Chart Wrapper Container */}
          <div className="relative bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden">
            
            {/* Top Toolbar: Subtitle & LABEL Checkbox (like Original World Bank Widget) */}
            <div className="flex items-center justify-between px-5 pt-3.5 pb-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E53E3E]" />
                <span className="font-semibold text-neutral-700">GDP Hiện Hành (Tỷ USD)</span>
              </div>

              {/* Original World Bank Style LABEL checkbox */}
              <label className="inline-flex items-center gap-1.5 cursor-pointer select-none text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors">
                <input
                  type="checkbox"
                  checked={showLabels}
                  onChange={(e) => setShowLabels(e.target.checked)}
                  className="w-3.5 h-3.5 rounded border-neutral-300 text-[#0096D6] focus:ring-[#0096D6] cursor-pointer"
                />
                <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase">LABEL</span>
              </label>
            </div>

            {/* Responsive SVG Canvas */}
            <div className="w-full overflow-x-auto px-2">
              <svg
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                className="w-full h-auto min-w-[620px] select-none cursor-crosshair"
                style={{ overflow: 'visible' }}
                onMouseMove={handleSvgMouseMove}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                {/* Horizontal Gridlines & Y-Axis Labels */}
                {yTicks.map((tick) => {
                  const y = padding.top + chartHeight - (tick / maxGDP) * chartHeight;
                  return (
                    <g key={tick} pointerEvents="none">
                      <line
                        x1={padding.left}
                        y1={y}
                        x2={padding.left + chartWidth}
                        y2={y}
                        stroke="#E2E8F0"
                        strokeDasharray={tick === 0 ? undefined : '4 4'}
                        strokeWidth={tick === 0 ? 1.2 : 0.8}
                      />
                      <text
                        x={padding.left - 12}
                        y={y + 4}
                        textAnchor="end"
                        fontSize="11"
                        fill="#94A3B8"
                        fontFamily="'Be Vietnam Pro', sans-serif"
                      >
                        {tick}
                      </text>
                    </g>
                  );
                })}

                {/* X-Axis Year Labels */}
                {xTicks.map((year) => {
                  const span = Math.max(1, yearRange.end - yearRange.start);
                  const x = padding.left + ((year - yearRange.start) / span) * chartWidth;
                  const y = padding.top + chartHeight;
                  return (
                    <g key={year} pointerEvents="none">
                      <line x1={x} y1={y} x2={x} y2={y + 5} stroke="#CBD5E1" strokeWidth="1" />
                      <text
                        x={x}
                        y={y + 18}
                        textAnchor="middle"
                        fontSize="11"
                        fill="#64748B"
                        fontFamily="'Be Vietnam Pro', sans-serif"
                      >
                        {year}
                      </text>
                    </g>
                  );
                })}

                {/* Main Curve Line (Coral Red as in World Bank Screenshot 2) */}
                <path
                  d={linePath}
                  fill="none"
                  stroke="#E53E3E"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pointerEvents="none"
                />

                {/* Data Points (Dots on the curve) */}
                {points.map((pt) => (
                  <circle
                    key={pt.year}
                    cx={pt.x}
                    cy={pt.y}
                    r={hoveredPoint?.year === pt.year ? 5 : 2.5}
                    fill={hoveredPoint?.year === pt.year ? '#FFFFFF' : '#E53E3E'}
                    stroke="#E53E3E"
                    strokeWidth={hoveredPoint?.year === pt.year ? 2.5 : 1}
                    pointerEvents="none"
                  />
                ))}

                {/* Optional LABEL mode values */}
                {showLabels &&
                  points.map((pt, idx) => {
                    const shouldShow = points.length < 15 || idx % Math.ceil(points.length / 12) === 0;
                    if (!shouldShow) return null;
                    return (
                      <text
                        key={`label-${pt.year}`}
                        x={pt.x}
                        y={pt.y - 7}
                        textAnchor="middle"
                        fontSize="9.5"
                        fill="#64748B"
                        fontWeight="600"
                        fontFamily="'Be Vietnam Pro', sans-serif"
                        pointerEvents="none"
                      >
                        {pt.value}
                      </text>
                    );
                  })}

                {/* Dark Hover Tooltip exactly matching World Bank Screenshot 2 */}
                {hoveredPoint && (
                  <g pointerEvents="none">
                    {/* Vertical guideline */}
                    <line
                      x1={hoveredPoint.x}
                      y1={padding.top}
                      x2={hoveredPoint.x}
                      y2={padding.top + chartHeight}
                      stroke="#CBD5E1"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />

                    {/* Tooltip Box with pointer arrow */}
                    <g
                      transform={`translate(${Math.max(
                        padding.left + 65,
                        Math.min(padding.left + chartWidth - 65, hoveredPoint.x)
                      )}, ${Math.max(padding.top + 45, hoveredPoint.y - 12)})`}
                    >
                      {/* Box Background */}
                      <rect
                        x="-62"
                        y="-44"
                        width="124"
                        height="40"
                        rx="5"
                        fill="#2D3748"
                        filter="drop-shadow(0 4px 6px rgba(0,0,0,0.25))"
                      />
                      {/* Triangle pointer */}
                      <polygon points="-6,-4 6,-4 0,3" fill="#2D3748" />

                      {/* Text 1: Viet Nam (Year) */}
                      <text
                        x="0"
                        y="-28"
                        textAnchor="middle"
                        fontSize="10"
                        fill="#CBD5E0"
                        fontFamily="'Be Vietnam Pro', sans-serif"
                      >
                        Việt Nam ({hoveredPoint.year})
                      </text>
                      {/* Text 2: Value Billion */}
                      <text
                        x="0"
                        y="-12"
                        textAnchor="middle"
                        fontSize="13"
                        fontWeight="bold"
                        fill="#FFFFFF"
                        fontFamily="'Be Vietnam Pro', sans-serif"
                      >
                        {hoveredPoint.value} Billion
                      </text>
                    </g>
                  </g>
                )}
              </svg>
            </div>

            {/* =================================================================
                ORIGINAL WORLD BANK TIME RANGE SLIDER FOOTER (1985 - 2024)
               ================================================================= */}
            <div className="border-t border-neutral-200 bg-[#F8F9FA] flex flex-col sm:flex-row sm:items-center">
              {/* Left Box: Active Range Display + Clickable Reset */}
              <div className="px-6 py-3.5 border-b sm:border-b-0 sm:border-r border-neutral-200 shrink-0 flex items-center justify-between sm:justify-start gap-3 bg-white/70">
                <span className="font-bold text-base sm:text-lg text-neutral-800 font-sans tracking-tight">
                  {yearRange.start} - {yearRange.end}
                </span>

                {(yearRange.start !== 1985 || yearRange.end !== 2024) && (
                  <button
                    onClick={() => setYearRange({ start: 1985, end: 2024 })}
                    className="text-[11px] font-semibold text-[#0096D6] hover:text-[#0077b6] underline cursor-pointer"
                    title="Xem trọn vẹn toàn bộ giai đoạn"
                  >
                    Xem tất cả
                  </button>
                )}
              </div>

              {/* Right Box: Dual Range Track & Draggable/Clickable Handles */}
              <div className="flex-1 px-6 sm:px-8 py-4 flex flex-col justify-center gap-1.5">
                <div
                  ref={sliderRef}
                  onClick={handleTrackClick}
                  className="relative w-full h-7 flex items-center select-none cursor-pointer"
                >
                  {/* Background Track (Clickable) */}
                  <div className="absolute w-full h-2 bg-[#E2E8F0] hover:bg-[#CBD5E1] rounded-full transition-colors" />

                  {/* Active Highlighted Track (Draggable & Clickable) */}
                  <div
                    onPointerDown={(e) => startDrag('bar', e)}
                    className="absolute h-2 bg-[#58A5F0] hover:bg-[#3B82F6] rounded-full cursor-grab active:cursor-grabbing transition-colors"
                    style={{
                      left: `${startPercent}%`,
                      width: `${Math.max(1, endPercent - startPercent)}%`
                    }}
                    title="Kéo thanh này để di chuyển khoảng năm"
                  />

                  {/* Left Draggable Handle with Grip Lines (|||) */}
                  <div
                    onPointerDown={(e) => startDrag('start', e)}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full bg-white border-2 border-neutral-300 shadow-md flex items-center justify-center cursor-ew-resize hover:scale-110 active:scale-95 z-20 touch-none"
                    style={{
                      left: `${startPercent}%`,
                      transform: 'translateX(-50%)'
                    }}
                    title={`Mốc bắt đầu: ${yearRange.start} (Kéo hoặc nhấp)`}
                  >
                    <div className="flex gap-[2px] items-center justify-center pointer-events-none">
                      <div className="w-[1.5px] h-2.5 bg-neutral-400" />
                      <div className="w-[1.5px] h-2.5 bg-neutral-400" />
                      <div className="w-[1.5px] h-2.5 bg-neutral-400" />
                    </div>
                  </div>

                  {/* Right Draggable Handle with Grip Lines (|||) */}
                  <div
                    onPointerDown={(e) => startDrag('end', e)}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full bg-white border-2 border-neutral-300 shadow-md flex items-center justify-center cursor-ew-resize hover:scale-110 active:scale-95 z-20 touch-none"
                    style={{
                      left: `${endPercent}%`,
                      transform: 'translateX(-50%)'
                    }}
                    title={`Mốc kết thúc: ${yearRange.end} (Kéo hoặc nhấp)`}
                  >
                    <div className="flex gap-[2px] items-center justify-center pointer-events-none">
                      <div className="w-[1.5px] h-2.5 bg-neutral-400" />
                      <div className="w-[1.5px] h-2.5 bg-neutral-400" />
                      <div className="w-[1.5px] h-2.5 bg-neutral-400" />
                    </div>
                  </div>
                </div>

                {/* Clickable Quick Year Markers along the slider */}
                <div className="flex justify-between items-center px-1 text-[10px] text-neutral-400 select-none">
                  {[1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2024].map((yr) => (
                    <button
                      key={yr}
                      onClick={() => handleYearTickClick(yr)}
                      className={`hover:text-[#0096D6] hover:font-bold transition-all py-0.5 px-1 rounded cursor-pointer ${
                        yearRange.start === yr || yearRange.end === yr
                          ? 'text-[#0096D6] font-bold'
                          : ''
                      }`}
                      title={`Nhấp để chọn mốc năm ${yr}`}
                    >
                      {yr}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-neutral-500 text-center mt-3">
            Nguồn dữ liệu: <strong>Ngân hàng Thế giới (World Bank Data)</strong> • Mã chỉ số: NY.GDP.MKTP.CD • Kéo 2 nút tròn để phóng to khoảng năm mong muốn.
          </p>

          {/* 5 Key Milestone Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-6">
            <div
              onClick={() => setYearRange({ start: 1985, end: 1995 })}
              className={`p-3.5 rounded-2xl cursor-pointer transition-all duration-200 ${
                yearRange.start === 1985 && yearRange.end === 1995
                  ? 'bg-white border-2 border-[#810100] shadow-md ring-2 ring-[#810100]/20'
                  : 'bg-[#EDEBDD]/60 hover:bg-[#EDEBDD] border border-[#810100]/20'
              }`}
            >
              <span className="text-[10.5px] font-semibold text-neutral-500 block uppercase">1985 — 1995</span>
              <span className="font-anton text-lg sm:text-xl text-[#810100] block my-0.5">14 — 20 Tỷ USD</span>
              <p className="text-[10.5px] text-neutral-600 leading-tight">Khởi đầu Đổi mới & Bình thường hóa quan hệ</p>
            </div>

            <div
              onClick={() => setYearRange({ start: 1995, end: 2005 })}
              className={`p-3.5 rounded-2xl cursor-pointer transition-all duration-200 ${
                yearRange.start === 1995 && yearRange.end === 2005
                  ? 'bg-white border-2 border-[#810100] shadow-md ring-2 ring-[#810100]/20'
                  : 'bg-[#EDEBDD]/60 hover:bg-[#EDEBDD] border border-[#810100]/20'
              }`}
            >
              <span className="text-[10.5px] font-semibold text-neutral-500 block uppercase">1995 — 2005</span>
              <span className="font-anton text-lg sm:text-xl text-[#810100] block my-0.5">20 — 57 Tỷ USD</span>
              <p className="text-[10.5px] text-neutral-600 leading-tight">Hội nhập kinh tế khu vực, vượt mốc 50B</p>
            </div>

            <div
              onClick={() => setYearRange({ start: 2005, end: 2015 })}
              className={`p-3.5 rounded-2xl cursor-pointer transition-all duration-200 ${
                yearRange.start === 2005 && yearRange.end === 2015
                  ? 'bg-white border-2 border-amber-500 shadow-md ring-2 ring-amber-400/30'
                  : 'bg-amber-50/80 hover:bg-amber-100/70 border border-amber-300/80'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10.5px] font-bold text-amber-900 block uppercase">2005 — 2015</span>
                <span className="px-1.5 py-0.2 rounded bg-amber-200 text-amber-900 text-[9px] font-bold">WTO</span>
              </div>
              <span className="font-anton text-lg sm:text-xl text-amber-900 block my-0.5">57 — 239 Tỷ USD</span>
              <p className="text-[10.5px] text-amber-800 leading-tight">Gia nhập WTO, vào nhóm thu nhập trung bình</p>
            </div>

            <div
              onClick={() => setYearRange({ start: 2015, end: 2024 })}
              className={`p-3.5 rounded-2xl cursor-pointer transition-all duration-200 ${
                yearRange.start === 2015 && yearRange.end === 2024
                  ? 'bg-white border-2 border-[#810100] shadow-md ring-2 ring-[#810100]/20'
                  : 'bg-[#EDEBDD]/60 hover:bg-[#EDEBDD] border border-[#810100]/20'
              }`}
            >
              <span className="text-[10.5px] font-semibold text-neutral-500 block uppercase">2015 — 2024</span>
              <span className="font-anton text-lg sm:text-xl text-[#810100] block my-0.5">239 — 476 Tỷ USD</span>
              <p className="text-[10.5px] text-neutral-600 leading-tight">Bứt phá quy mô, tiến vào tốp 40 thế giới</p>
            </div>

            <div
              onClick={() => setYearRange({ start: 1985, end: 2024 })}
              className={`col-span-2 sm:col-span-1 p-3.5 rounded-2xl cursor-pointer transition-all duration-200 ${
                yearRange.start === 1985 && yearRange.end === 2024
                  ? 'bg-[#630000] text-white shadow-lg ring-2 ring-amber-400'
                  : 'bg-[#810100] hover:bg-[#6e0100] text-white shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10.5px] font-bold text-amber-200 uppercase">Toàn cảnh 40 năm</span>
                <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[9px] font-bold">1985 - 2024</span>
              </div>
              <span className="font-anton text-lg sm:text-xl text-[#FFD700] block my-0.5">Tăng ~96 Lần</span>
              <p className="text-[10.5px] text-neutral-200 leading-tight">Bấm để xem trọn vẹn toàn bộ tiến trình</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
