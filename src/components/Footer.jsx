import React from 'react';
import { ArrowUp, Star, ShieldCheck, Heart, ExternalLink } from 'lucide-react';

const FONT_ANTON = "'Anton', 'Oswald', 'Be Vietnam Pro', sans-serif";
const FONT_HEADING = "'Be Vietnam Pro', 'Plus Jakarta Sans', sans-serif";
const FONT_GOOGLE_SANS = "'Google Sans', 'Plus Jakarta Sans', 'Be Vietnam Pro', sans-serif";

export default function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="bg-[#1B1717] text-[#EDEBDD] border-t-4 border-[#810100] relative overflow-hidden"
      style={{ fontFamily: FONT_GOOGLE_SANS }}
    >
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#810100]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#630000]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 relative z-10">
        
        {/* ===================================================================
            TOP BANNER: BRAND BADGE & BACK TO TOP BUTTON (Straight horizontal line)
           =================================================================== */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 mb-10 border-b border-[#EDEBDD]/15">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-[#810100] text-[#EDEBDD] flex items-center justify-center shrink-0 shadow">
              <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-xs font-bold uppercase tracking-[0.2em] text-[#EDEBDD]"
                style={{ fontFamily: FONT_HEADING }}
              >
                CHUYÊN TRANG ĐẶC BIỆT EMAGAZINE
              </span>
              <span className="text-[#EDEBDD]/40 hidden sm:inline">•</span>
              <span className="text-xs text-[#EDEBDD]/70 font-mono">
                1945 — 2045 — 2130
              </span>
            </div>
          </div>

          {/* Symmetrical Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#810100] hover:bg-[#630000] text-[#EDEBDD] text-xs font-bold uppercase tracking-wider transition-all shadow hover:scale-105 cursor-pointer shrink-0"
            style={{ fontFamily: FONT_HEADING }}
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Về đầu trang</span>
          </button>
        </div>

        {/* ===================================================================
            3 BALANCED COLUMNS (Perfect baseline alignment across all columns)
           =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#EDEBDD]/15 items-start">
          
          {/* COLUMN 1: PUBLICATION TITLE & QUOTE (Span 5) */}
          <div className="md:col-span-5 flex flex-col justify-start">
            <h4
              className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 h-6 flex items-center mb-4"
              style={{ fontFamily: FONT_HEADING }}
            >
              VỀ CHUYÊN ĐỀ
            </h4>

            <h3
              className="text-2xl sm:text-3xl text-[#EDEBDD] uppercase tracking-wide leading-tight mb-4"
              style={{ fontFamily: FONT_ANTON }}
            >
              TỪ MÙA THU 1945 ĐẾN KHÁT VỌNG 2045
            </h3>

            {/* Straight Quote Callout with clean left-border */}
            <div className="border-l-4 border-[#810100] pl-4 py-1 my-3 bg-[#EDEBDD]/5 rounded-r-xl">
              <blockquote className="text-sm sm:text-base italic text-[#EDEBDD] leading-relaxed mb-2">
                “Trong bầu trời không gì quý bằng nhân dân. Trong thế giới không gì mạnh bằng lực lượng đoàn kết của nhân dân.”
              </blockquote>
              <p
                className="text-xs font-bold uppercase tracking-wider text-amber-300"
                style={{ fontFamily: FONT_HEADING }}
              >
                — Chủ tịch Hồ Chí Minh
              </p>
            </div>

            <p className="text-xs text-[#EDEBDD]/75 leading-relaxed mt-2 text-justify">
              Chuyên trang Emagazine tái hiện toàn diện chặng đường 100 năm lịch sử vẻ vang của dân tộc, khẳng định vai trò cốt lõi của sức mạnh lòng dân trong công cuộc Đổi mới và hiện thực hóa khát vọng phát triển hùng cường.
            </p>
          </div>

          {/* COLUMN 2: SECTION NAVIGATION (Span 3) */}
          <div className="md:col-span-3 flex flex-col justify-start">
            <h4
              className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 h-6 flex items-center mb-4"
              style={{ fontFamily: FONT_HEADING }}
            >
              MỤC LỤC CHUYÊN ĐỀ
            </h4>

            {/* Clean tabular list with aligned index numerals */}
            <nav aria-label="Mục lục Footer" className="space-y-2.5">
              {[
                { id: 'chuong-1', num: '01', title: 'Chương I: Sức mạnh lòng dân' },
                { id: 'chuong-2', num: '02', title: 'Chương II: Bốn thập niên Đổi mới' },
                { id: 'chuong-3', num: '03', title: 'Chương III: Vươn mình kỷ nguyên mới' },
                { id: 'mini-quiz', num: '04', title: 'Mini Quiz: Thử thách kiến thức' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left flex items-center gap-3 p-2 rounded-xl hover:bg-[#EDEBDD]/10 transition-colors group cursor-pointer"
                >
                  <span
                    className="w-7 h-7 rounded-lg bg-[#810100] text-[#EDEBDD] group-hover:bg-amber-300 group-hover:text-neutral-950 font-mono text-xs font-bold flex items-center justify-center shrink-0 transition-colors"
                  >
                    {item.num}
                  </span>
                  <span className="text-xs sm:text-sm text-[#EDEBDD]/85 group-hover:text-amber-300 transition-colors font-medium">
                    {item.title}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* COLUMN 3: DOCUMENTATION & SOURCES (Span 4) */}
          <div className="md:col-span-4 flex flex-col justify-start">
            <h4
              className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 h-6 flex items-center mb-4"
              style={{ fontFamily: FONT_HEADING }}
            >
              NGUỒN TƯ LIỆU XUẤT BẢN
            </h4>

            {/* Two-column straight tabular grid */}
            <div className="space-y-3.5 text-xs">
              <div className="grid grid-cols-[105px_1fr] items-baseline gap-2 pb-2.5 border-b border-[#EDEBDD]/10">
                <span className="font-bold text-[#EDEBDD] tracking-wide" style={{ fontFamily: FONT_HEADING }}>
                  VĂN KIỆN:
                </span>
                <span className="text-[#EDEBDD]/75 leading-relaxed">
                  Văn kiện Đảng toàn tập, Nghị quyết Trung ương, Học viện Chính trị Quốc gia Hồ Chí Minh.
                </span>
              </div>

              <div className="grid grid-cols-[105px_1fr] items-baseline gap-2 pb-2.5 border-b border-[#EDEBDD]/10">
                <span className="font-bold text-[#EDEBDD] tracking-wide" style={{ fontFamily: FONT_HEADING }}>
                  HÌNH ẢNH:
                </span>
                <span className="text-[#EDEBDD]/75 leading-relaxed">
                  Thông tấn xã Việt Nam (TTXVN), Đài Truyền hình Việt Nam (VTV), Báo Nhân Dân.
                </span>
              </div>

              <div className="grid grid-cols-[105px_1fr] items-baseline gap-2 pb-2.5 border-b border-[#EDEBDD]/10">
                <span className="font-bold text-[#EDEBDD] tracking-wide" style={{ fontFamily: FONT_HEADING }}>
                  XUẤT BẢN:
                </span>
                <span className="text-[#EDEBDD]/75 leading-relaxed">
                  Ban Biên tập Chuyên đề Báo chí Longform eMagazine Tương tác Đa phương tiện.
                </span>
              </div>

              <div className="grid grid-cols-[105px_1fr] items-baseline gap-2">
                <span className="font-bold text-[#EDEBDD] tracking-wide" style={{ fontFamily: FONT_HEADING }}>
                  ĐỊNH DẠNG:
                </span>
                <span className="text-[#EDEBDD]/75 leading-relaxed">
                  Giao diện chuẩn Responsive 16:9, tối ưu hiển thị trên mọi thiết bị.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ===================================================================
            BOTTOM BAR: COPYRIGHT & STANDARDS (Straight horizontal baseline)
           =================================================================== */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EDEBDD]/60">
          <p className="text-center sm:text-left">
            © 2026 Chuyên trang eMagazine Lịch sử &amp; Khát vọng Dân tộc. Giữ toàn quyền bản quyền nội dung.
          </p>

          <div className="flex items-center gap-4 text-[#EDEBDD]/75">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Dữ liệu chính thống</span>
            </span>
            <span className="opacity-40">•</span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#810100] fill-[#810100]" />
              <span>Phục vụ Nhân dân</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
