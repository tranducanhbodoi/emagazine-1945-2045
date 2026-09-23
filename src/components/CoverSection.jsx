import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function CoverSection() {
  const scrollToChapterOne = () => {
    const el = document.getElementById('chuong-1');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#1B1717]">
      {/* Background Image with Deep Historical Overlay - Positioned to keep Bác Hồ clearly on the left */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image/cover.jpg"
          alt="Từ Mùa Thu 1945 Đến Khát Vọng 2045"
          className="w-full h-full object-cover object-[0%_center] sm:object-left filter brightness-[0.95] contrast-[1.05] scale-105 transform animate-pulse duration-[8000ms]"
          onError={(e) => {
            // Fallback if needed
            e.currentTarget.src = '/image/cover.png';
          }}
        />
        {/* Soft historical gradient overlay so Bác Hồ and Declaration of Independence are clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1717]/80 via-[#1B1717]/25 to-black/25 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#630000]/10 mix-blend-color-burn" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#1B1717]/80" />
      </div>

      {/* Main Content Container - Positioned to the right side on md+ screens so Bác Hồ is completely clear */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col items-center md:items-end justify-center min-h-screen">
        
        {/* Animated Box with Translucent Glassmorphism - Sits cleanly on the right half */}
        <div className="w-full max-w-lg md:max-w-[540px] lg:max-w-[580px] xl:max-w-[620px] md:mr-2 lg:mr-4 xl:mr-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-full rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-md bg-gradient-to-t from-[#810100]/65 via-[#810100]/45 to-[#630000]/30 border border-red-500/30 shadow-2xl shadow-black/50 overflow-hidden text-center"
          >
            {/* Subtle inner highlight glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F7F4EB] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 sm:mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#EDEBDD]" />
              Emagazine Đặc Biệt
            </motion.div>

            {/* Big Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-anton text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-[#F7F4EB] tracking-wide uppercase leading-[1.1] mb-4 sm:mb-6 drop-shadow-md"
            >
              TỪ MÙA THU 1945 <br />
              <span className="text-[#EDEBDD] drop-shadow-[0_2px_12px_rgba(237,235,221,0.3)]">
                ĐẾN KHÁT VỌNG 2045
              </span>
            </motion.h1>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="w-20 sm:w-24 h-[2px] bg-[#EDEBDD]/60 mx-auto mb-4 sm:mb-6"
            />

            {/* Quote: Centered only */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="font-acme text-lg sm:text-2xl md:text-[26px] text-[#EDEBDD] italic tracking-wide mb-5 sm:mb-6 font-light drop-shadow text-center w-full block"
            >
              “Trong bầu trời không có gì quý bằng nhân dân”
            </motion.p>

            {/* Sapo Lead Paragraph: Straight flush lines with justified alignment */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-sm sm:text-base md:text-[16px] text-[#F7F4EB]/90 leading-relaxed font-normal max-w-xl mx-auto text-justify"
              style={{ textAlign: 'justify', textJustify: 'inter-word' }}
            >
              Nối dài tinh thần quật cường từ những mốc son lịch sử, sức mạnh lòng dân vẫn luôn là nền tảng vững chắc cho sự phát triển của quốc gia. Đây chính là chiếc chìa khóa chiến lược để hiện thực hóa khát vọng đưa Việt Nam trở thành nước phát triển vào năm 2045.
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll down button indicator - Centered at the bottom */}
        <div className="w-full flex justify-center mt-6 sm:mt-10">
          <motion.button
            onClick={scrollToChapterOne}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{
              opacity: { delay: 1.4, duration: 0.6 },
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }}
            className="text-[#F7F4EB]/80 hover:text-white flex flex-col items-center gap-1 group focus:outline-none cursor-pointer"
          >
            <span className="text-xs uppercase tracking-widest font-medium">Bắt đầu khám phá</span>
            <ChevronDown className="w-5 h-5 text-[#EDEBDD] group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
