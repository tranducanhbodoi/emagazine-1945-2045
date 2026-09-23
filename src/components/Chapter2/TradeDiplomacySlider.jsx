import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Camera,
  Globe2,
  Handshake,
  Sparkles
} from 'lucide-react';

const DIPLOMACY_SLIDES = [
  {
    id: 1,
    title: 'Hội Chợ Thương Mại Quốc Tế Vietnam Expo',
    category: 'Xúc Tiến Thương Mại & Giao Thương Toàn Cầu',
    desc: 'Cầu nối giao thương quan trọng mở ra cơ hội hợp tác đa phương, thu hút các đoàn đại biểu thương mại và doanh nghiệp quốc tế hàng đầu tới Việt Nam.',
    image: '/images/diplomacy/diplomacy-8.jpg',
    tag: 'Vietnam Expo'
  },
  {
    id: 2,
    title: 'Diễn Đàn Quốc Gia Phát Triển Kinh Tế Số & Xã Hội Số',
    category: 'Chiến Lược Tăng Trưởng Hai Con Số',
    desc: 'Thủ tướng Chính phủ chủ trì diễn đàn quốc gia, khẳng định khát vọng phát triển kinh tế số toàn diện, tạo xung lực đưa GDP bứt phá trong kỷ nguyên mới.',
    image: '/images/diplomacy/diplomacy-3.jpg',
    tag: 'Kinh tế số quốc gia'
  },
  {
    id: 3,
    title: 'Diễn Đàn Kinh Tế Thế Giới Về Khu Vực Mê Kông (WEF)',
    category: 'Vị Thế Ngoại Giao Đa Phương',
    desc: 'Việt Nam chủ trì thành công hội nghị quốc tế uy tín, khẳng định vai trò cầu nối chiến lược và vị thế dẫn dắt trong hợp tác kinh tế khu vực.',
    image: '/images/diplomacy/diplomacy-2.webp',
    tag: 'Hội nghị WEF'
  },
  {
    id: 4,
    title: 'Hội Nghị Bộ Trưởng Ngoại Giao ASEAN & Các Đối Tác',
    category: 'Trụ Cột Ngoại Giao Khu Vực',
    desc: 'Việt Nam đóng góp chủ động, trách nhiệm cùng các quốc gia ASEAN xây dựng khu vực hòa bình, thịnh vượng và tăng cường quan hệ với các đối tác lớn.',
    image: '/images/diplomacy/diplomacy-4.jpg',
    tag: 'Ngoại giao ASEAN'
  },
  {
    id: 5,
    title: 'Nửa Thế Kỷ Quan Hệ Đối Tác Chiến Lược Việt Nam - Pháp',
    category: 'Hợp Tác Toàn Diện Song Phương',
    desc: 'Kỷ niệm 50 năm thiết lập quan hệ ngoại giao, mở ra tầm cao mới trong hợp tác kinh tế, văn hóa, khoa học công nghệ và đầu tư bền vững.',
    image: '/images/diplomacy/diplomacy-5.webp',
    tag: 'Đối tác chiến lược'
  },
  {
    id: 6,
    title: 'Toàn Cảnh Ngoại Giao Hòa Bình & Phát Triển Bền Vững',
    category: 'Mạng Lưới 193 Quốc Gia Thành Viên LHQ',
    desc: 'Những dấu mốc ngoại giao hòa quyện giữa tinh thần độc lập tự chủ và hội nhập sâu rộng, kiến tạo môi trường hòa bình để phát triển đất nước.',
    image: '/images/diplomacy/diplomacy-6.webp',
    tag: '193 quốc gia LHQ'
  },
  {
    id: 7,
    title: 'Diễn Đàn Công Nghệ Số & Hành Trình Vươn Tầm Tỷ Đô',
    category: 'Đổi Mới Sáng Tạo Quốc Tế',
    desc: 'Doanh nghiệp công nghệ Việt Nam khẳng định vị thế trong chuỗi giá trị toàn cầu, vươn mình tiếp cận các thị trường công nghệ số thế giới.',
    image: '/images/diplomacy/diplomacy-1.jpg',
    tag: 'Công nghệ số tỷ USD'
  },
  {
    id: 8,
    title: 'Triển Lãm Công Nghiệp & Chuyển Đổi Tương Lai Xanh',
    category: 'Hội Tụ Chuỗi Cung Ứng Quốc Tế',
    desc: 'Thu hút sự hiện diện của các thương hiệu hàng đầu thế giới, đón đầu làn sóng đầu tư vào năng lượng xanh, xe điện và công nghiệp công nghệ cao.',
    image: '/images/diplomacy/diplomacy-9.jpg',
    tag: 'Tương lai xanh'
  },
  {
    id: 9,
    title: 'Ngày Hội Ngoại Giao & Thế Hệ Ngoại Giao Tương Lai',
    category: 'Nguồn Lực Hội Nhập Toàn Cầu',
    desc: 'Đào tạo và phát triển đội ngũ cán bộ ngoại giao trẻ bản lĩnh, tinh nhuệ, sẵn sàng đảm đương trọng trách nâng tầm vị thế quốc gia trên trường quốc tế.',
    image: '/images/diplomacy/diplomacy-7.jpg',
    tag: 'Ngoại giao thời đại mới'
  }
];

export default function TradeDiplomacySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const thumbnailScrollRef = useRef(null);

  // Observe if slider is currently in viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-play timer (only runs when active, not hovered, and in viewport)
  useEffect(() => {
    if (!isPlaying || isHovered || !isInView) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, isPlaying, isHovered, isInView]);

  // Scroll active thumbnail inside horizontal container ONLY (never scrolls window)
  useEffect(() => {
    if (thumbnailScrollRef.current) {
      const container = thumbnailScrollRef.current;
      const activeThumb = container.children[currentIndex];
      if (activeThumb) {
        const targetLeft = activeThumb.offsetLeft - (container.clientWidth / 2) + (activeThumb.clientWidth / 2);
        container.scrollTo({
          left: Math.max(0, targetLeft),
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % DIPLOMACY_SLIDES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + DIPLOMACY_SLIDES.length) % DIPLOMACY_SLIDES.length);
  };

  const handleSlideSelect = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Framer Motion slide variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const currentSlide = DIPLOMACY_SLIDES[currentIndex];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto my-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Header Label */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#810100] text-[#EDEBDD] text-xs font-anton tracking-widest uppercase shadow">
            <Camera className="w-3.5 h-3.5" />
            SỰ KIỆN THƯƠNG MẠI & NGOẠI GIAO
          </span>
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide hidden sm:inline">
            Kéo sang trái/phải hoặc dùng nút điều hướng
          </span>
        </div>

        {/* Controls: Play/Pause & Counter */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Tạm dừng tự động chạy' : 'Tiếp tục tự động chạy'}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:text-[#810100] hover:border-[#810100] text-xs font-semibold transition-colors shadow-sm"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3 text-[#810100]" />
                <span>Tự động: Bật</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-neutral-500" />
                <span>Tự động: Tắt</span>
              </>
            )}
          </button>

          <span className="px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-anton tracking-widest">
            {String(currentIndex + 1).padStart(2, '0')} / {String(DIPLOMACY_SLIDES.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Main Showcase Frame */}
      <div
        className="relative rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-200/80 shadow-2xl h-[420px] sm:h-[500px] md:h-[560px] select-none cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) {
                handleNext();
              } else if (info.offset.x > 60) {
                handlePrev();
              }
            }}
            className="absolute inset-0 w-full h-full flex flex-col justify-end"
          >
            {/* Background Image */}
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="absolute inset-0 w-full h-full object-cover object-center filter contrast-105 pointer-events-none"
              onError={(e) => {
                e.currentTarget.src = '/image/technology.jpg';
              }}
            />

            {/* Gradient Overlays for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 pointer-events-none" />

            {/* Top Left Badge */}
            <div className="absolute top-5 left-5 sm:top-7 sm:left-7 pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#FAF9F5] text-xs font-anton tracking-wider uppercase">
                {currentSlide.tag}
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10 max-w-4xl text-white pointer-events-none">
              <span className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-widest block mb-1">
                {currentSlide.category}
              </span>

              <h4 className="font-anton text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-wide leading-tight mb-2 sm:mb-3">
                {currentSlide.title}
              </h4>

              <p className="text-xs sm:text-sm md:text-base text-neutral-200 leading-relaxed font-normal max-w-3xl">
                {currentSlide.desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Ảnh trước"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#810100] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Ảnh kế tiếp"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#810100] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Progress Bar (shows autoplay progress) */}
        {isPlaying && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-20 overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 4, ease: 'linear' }}
              className="h-full bg-[#810100]"
            />
          </div>
        )}
      </div>

      {/* Interactive Horizontal Thumbnail Strip (Draggable / Clickable) */}
      <div className="mt-4 relative">
        <div
          ref={thumbnailScrollRef}
          className="flex items-center gap-3 overflow-x-auto py-2 px-1 scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-transparent snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {DIPLOMACY_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => handleSlideSelect(idx)}
                className={`flex-shrink-0 group relative rounded-2xl overflow-hidden transition-all duration-300 snap-center text-left ${
                  isActive
                    ? 'ring-2 ring-[#810100] ring-offset-2 ring-offset-[#FAF9F5] scale-105 shadow-md'
                    : 'opacity-60 hover:opacity-100'
                }`}
                style={{ width: '140px', height: '80px' }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/image/technology.jpg';
                  }}
                />
                <div className={`absolute inset-0 transition-colors ${isActive ? 'bg-[#810100]/25' : 'bg-black/30 group-hover:bg-transparent'}`} />

                <div className="absolute bottom-1.5 left-2 right-2 truncate">
                  <span className="text-[10px] font-anton text-white uppercase drop-shadow truncate block">
                    {slide.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
