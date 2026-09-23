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
      {/* Background Image with Deep Historical Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image/cover.jpg"
          alt="Từ Mùa Thu 1945 Đến Khát Vọng 2045"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] scale-105 transform animate-pulse duration-[8000ms]"
          onError={(e) => {
            // Fallback if needed
            e.currentTarget.src = '/image/cover.png';
          }}
        />
        {/* Elegant historical gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1717] via-[#1B1717]/60 to-[#1B1717]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#630000]/25 mix-blend-color-burn" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1B1717]" />
      </div>

      {/* Main Content Box - Center Aligned */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center flex flex-col items-center">
        {/* Animated Box with Gradient and Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full rounded-2xl p-6 sm:p-12 md:p-16 backdrop-blur-md bg-gradient-to-t from-[#810100]/90 via-[#810100]/70 to-[#630000]/50 border border-red-500/20 shadow-2xl shadow-black/60 overflow-hidden"
        >
          {/* Subtle inner highlight glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/20 rounded-full blur-3xl pointer-events-none" />

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
            className="font-anton text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F7F4EB] tracking-wide uppercase leading-[1.08] mb-4 sm:mb-6 drop-shadow-md"
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

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="font-acme text-lg sm:text-2xl md:text-3xl text-[#EDEBDD] italic tracking-wide mb-6 sm:mb-8 font-light drop-shadow"
          >
            “Trong bầu trời không gì quý bằng nhân dân”
          </motion.p>

          {/* Sapo Lead Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-[#F7F4EB]/90 leading-relaxed font-normal max-w-2xl mx-auto text-justify"
          >
            Nối dài tinh thần quật cường từ những mốc son lịch sử, sức mạnh lòng dân vẫn luôn là nền tảng vững chắc cho sự phát triển của quốc gia. Đây chính là chiếc chìa khóa chiến lược để hiện thực hóa khát vọng đưa Việt Nam trở thành nước phát triển vào năm 2045.
          </motion.p>
        </motion.div>

        {/* Scroll down button indicator */}
        <motion.button
          onClick={scrollToChapterOne}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.4, duration: 0.6 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
          className="mt-12 text-[#F7F4EB]/80 hover:text-white flex flex-col items-center gap-1 group focus:outline-none"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Bắt đầu khám phá</span>
          <ChevronDown className="w-5 h-5 text-[#EDEBDD] group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}
