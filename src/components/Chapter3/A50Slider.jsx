import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
  Camera,
  X
} from 'lucide-react';

const FONT_ANTON = "'Anton', 'Oswald', 'Be Vietnam Pro', sans-serif";
const FONT_GOOGLE_SANS = "'Google Sans', 'Plus Jakarta Sans', 'Be Vietnam Pro', sans-serif";

const A50_SLIDES = [
  {
    id: 1,
    title: 'Cái Bắt Tay Thắm Tình Quân Dân',
    category: 'Khoảnh Khắc Xúc Động • VTV',
    desc: 'Nụ cười rạng rỡ của nữ chiến sĩ Cảnh sát Giao thông và cái đập tay nồng ấm với người dân hai bên đường diễu binh — biểu tượng son sắt cho sự gắn bó máu thịt giữa lực lượng vũ trang và Nhân dân.',
    image: '/images/a50-a80/a50-1.jpg',
    tag: 'Tình quân dân'
  },
  {
    id: 2,
    title: 'Khối Cờ Giải Phóng Tiến Bước Oai Hùng',
    category: 'Kỷ Niệm 50 Năm Thống Nhất Non Sông',
    desc: 'Lá cờ Mặt trận Dân tộc Giải phóng miền Nam tung bay kiêu hãnh trong vòng tay chào đón của đồng bào cả nước, gợi nhắc ngày vui thống nhất trọn vẹn non sông 30/4/1975.',
    image: '/images/a50-a80/a50-2.jpg',
    tag: 'Non sông liền một dải'
  },
  {
    id: 3,
    title: 'Đêm Tổng Duyệt Lực Lượng Vũ Trang',
    category: 'Kỷ Luật Thép & Khí Thế Sục Sôi',
    desc: 'Từng hàng quân bồng súng rầm rập bước đều trong ánh đèn đêm của đại lộ, minh chứng cho sức mạnh chính quy, tinh nhuệ và kỷ luật tuyệt đối của Quân đội Nhân dân Việt Nam.',
    image: '/images/a50-a80/a50-3.jpg',
    tag: 'Chính quy, tinh nhuệ'
  },
  {
    id: 4,
    title: 'Rực Rỡ Ánh Mắt Tuổi Trẻ Dưới Cờ Đỏ Sao Vàng',
    category: 'Khát Vọng Kỷ Nguyên Mới',
    desc: 'Những gương mặt trẻ rạng ngời niềm tự hào dân tộc, tay giương cao cờ đỏ sao vàng, khẳng định thế hệ trẻ hôm nay sẵn sàng gánh vác sứ mệnh đưa Việt Nam vươn mình ra thế giới.',
    image: '/images/a50-a80/a50-4.jpg',
    tag: 'Khát vọng thanh niên'
  },
  {
    id: 5,
    title: 'Trái Tim Gửi Trọn Tình Yêu Tổ Quốc',
    category: 'Ngày Hội Non Sông A50 - A80',
    desc: 'Khoảnh khắc xúc động khi các thiếu nữ tạo hình trái tim hướng về đoàn diễu binh, lan tỏa năng lượng tích cực và lòng yêu nước thiêng liêng đến triệu triệu trái tim đồng bào.',
    image: '/images/a50-a80/a50-5.jpg',
    tag: 'Triệu trái tim hướng về'
  },
  {
    id: 6,
    title: 'Tôi Yêu Việt Nam — Lòng Dân Là Gốc',
    category: 'Đại Đoàn Kết Toàn Dân',
    desc: 'Mọi thế hệ, từ người già đến lớp trẻ, cùng mang trên mình sắc đỏ Tổ quốc, hòa chung nhịp đập tự hào dân tộc, thể hiện sức mạnh nội sinh vô địch làm nên mọi kỳ tích.',
    image: '/images/a50-a80/a50-6.jpg',
    tag: 'Đại đoàn kết'
  },
  {
    id: 7,
    title: 'Biển Người Hân Hoan Chào Mừng Kỷ Nguyên Mới',
    category: 'Đại Lễ A50 - A80 Toàn Quốc',
    desc: 'Biển người và rực rỡ cờ hoa thắp sáng những tuyến phố trung tâm, hội tụ niềm tin vững chắc của Nhân dân vào con đường phát triển phồn vinh và hùng cường của đất nước.',
    image: '/images/a50-a80/a50-7.jpg',
    tag: 'Hào khí dân tộc'
  }
];

export default function A50Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const thumbScrollRef = useRef(null);
  const rootRef = useRef(null);

  // Monitor visibility to avoid playing and jumping when off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (rootRef.current) {
      observer.observe(rootRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Safe thumbnail alignment without window jumping
  useEffect(() => {
    if (!thumbScrollRef.current) return;
    const container = thumbScrollRef.current;
    const activeThumb = container.querySelector(`[data-index="${currentIndex}"]`);
    if (activeThumb) {
      const targetLeft =
        activeThumb.offsetLeft - container.clientWidth / 2 + activeThumb.clientWidth / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  // Autoplay loop gated by visibility
  useEffect(() => {
    if (!isPlaying || !isInView) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % A50_SLIDES.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying, isInView]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + A50_SLIDES.length) % A50_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % A50_SLIDES.length);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    setIsPlaying(false);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + A50_SLIDES.length) % A50_SLIDES.length);
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % A50_SLIDES.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  // Touch and drag support
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX - endX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
  };

  const activeSlide = A50_SLIDES[currentIndex];

  return (
    <div ref={rootRef} className="w-full my-12 sm:my-16">
      {/* Header bar of the photo story */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-6 border-b border-[#810100]/20 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="p-1 rounded-md bg-[#810100] text-[#EDEBDD]">
              <Camera className="w-4 h-4" />
            </span>
            <span
              className="text-xs font-bold uppercase tracking-widest text-[#810100]"
              style={{ fontFamily: FONT_GOOGLE_SANS }}
            >
              Tư liệu VTV & Truyền thông Quốc gia
            </span>
          </div>
          <h3
            className="text-2xl sm:text-3xl font-normal text-[#1B1717]"
            style={{ fontFamily: FONT_ANTON }}
          >
            HÀO KHÍ SỰ KIỆN A50 - A80: SỨC MẠNH TỰ HÀO DÂN TỘC
          </h3>
        </div>

        {/* Counter and controls */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-full bg-[#1B1717] text-[#EDEBDD] text-xs font-mono font-bold tracking-wider shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#810100] animate-pulse" />
            <span>
              {String(currentIndex + 1).padStart(2, '0')} / {String(A50_SLIDES.length).padStart(2, '0')}
            </span>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Tạm dừng trình chiếu' : 'Tiếp tục trình chiếu'}
            className="p-2 rounded-full bg-white border border-[#EDEBDD]/60 hover:border-[#810100] text-[#1B1717] hover:text-[#810100] shadow-sm transition-all"
            title={isPlaying ? 'Tạm dừng' : 'Tự động chạy'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              aria-label="Ảnh trước"
              className="p-2 rounded-full bg-white border border-[#EDEBDD]/60 hover:bg-[#810100] hover:text-[#EDEBDD] hover:border-[#810100] text-[#1B1717] shadow-sm transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Ảnh tiếp theo"
              className="p-2 rounded-full bg-white border border-[#EDEBDD]/60 hover:bg-[#810100] hover:text-[#EDEBDD] hover:border-[#810100] text-[#1B1717] shadow-sm transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Feature Display Card (16:9 Aspect Ratio) */}
      <div
        className="relative bg-[#1B1717] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-[#810100]/30 select-none group cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
      >
        <div className="relative aspect-video w-full overflow-hidden bg-[#1B1717]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1717]/95 via-[#1B1717]/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B1717]/70 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Quick zoom button */}
          <button
            onClick={() => openLightbox(currentIndex)}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#1B1717]/70 text-[#EDEBDD] hover:bg-[#810100] backdrop-blur-md transition-all shadow-lg flex items-center gap-1.5 text-xs font-medium"
            title="Xem toàn màn hình"
          >
            <Maximize2 className="w-4 h-4" />
            <span className="hidden sm:inline" style={{ fontFamily: FONT_GOOGLE_SANS }}>Phóng to</span>
          </button>

          {/* Tag badge */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <span
              className="px-3 py-1 rounded-full bg-[#810100]/95 text-[#EDEBDD] text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md border border-[#EDEBDD]/20"
              style={{ fontFamily: FONT_GOOGLE_SANS }}
            >
              {activeSlide.tag}
            </span>
          </div>

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-10 z-20 text-[#EDEBDD] max-w-4xl">
            <span
              className="text-[#EDEBDD]/80 text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-1"
              style={{ fontFamily: FONT_GOOGLE_SANS }}
            >
              {activeSlide.category}
            </span>
            <h4
              className="text-2xl sm:text-3xl md:text-4xl text-[#EDEBDD] leading-tight mb-2 sm:mb-3 font-normal drop-shadow-md"
              style={{ fontFamily: FONT_ANTON }}
            >
              {activeSlide.title}
            </h4>
            <p
              className="text-xs sm:text-sm md:text-base text-[#EDEBDD]/90 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none max-w-3xl drop-shadow"
              style={{ fontFamily: FONT_GOOGLE_SANS }}
            >
              {activeSlide.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Thumbnails rail with safe smooth container scroll */}
      <div
        ref={thumbScrollRef}
        className="flex items-center gap-3 overflow-x-auto py-4 mt-3 px-1 no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {A50_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.id}
              data-index={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsPlaying(false);
              }}
              className={`relative flex-shrink-0 w-28 sm:w-36 md:w-44 aspect-video rounded-xl overflow-hidden transition-all duration-300 group border-2 ${
                isActive
                  ? 'border-[#810100] ring-4 ring-[#810100]/25 scale-105 shadow-xl'
                  : 'border-transparent opacity-65 hover:opacity-100 hover:scale-100'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1717]/80 via-[#1B1717]/20 to-transparent" />
              <div className="absolute bottom-1.5 left-2 right-2 text-left">
                <span className="text-[10px] text-[#EDEBDD] font-mono font-bold block leading-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p
                  className="text-[11px] text-[#EDEBDD] font-medium truncate leading-tight mt-0.5"
                  style={{ fontFamily: FONT_GOOGLE_SANS }}
                >
                  {slide.title}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1B1717]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between text-[#EDEBDD] border-b border-[#EDEBDD]/15 pb-3">
              <div className="flex items-center gap-3">
                <span
                  className="px-3 py-1 rounded bg-[#810100] text-[#EDEBDD] text-xs font-bold uppercase tracking-wider"
                  style={{ fontFamily: FONT_GOOGLE_SANS }}
                >
                  {A50_SLIDES[lightboxIndex].tag}
                </span>
                <span className="text-sm font-mono text-[#EDEBDD]/70">
                  {lightboxIndex + 1} / {A50_SLIDES.length}
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#EDEBDD] transition-all"
                title="Đóng (Esc)"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image (16:9 Display) */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <img
                src={A50_SLIDES[lightboxIndex].image}
                alt={A50_SLIDES[lightboxIndex].title}
                className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
              />

              {/* Navigation Arrows */}
              <button
                onClick={() =>
                  setLightboxIndex(
                    (prev) => (prev - 1 + A50_SLIDES.length) % A50_SLIDES.length
                  )
                }
                className="absolute left-2 sm:left-6 p-3 rounded-full bg-[#1B1717]/70 hover:bg-[#810100] text-[#EDEBDD] transition-all shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setLightboxIndex((prev) => (prev + 1) % A50_SLIDES.length)
                }
                className="absolute right-2 sm:right-6 p-3 rounded-full bg-[#1B1717]/70 hover:bg-[#810100] text-[#EDEBDD] transition-all shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption */}
            <div className="text-center max-w-3xl mx-auto text-[#EDEBDD]">
              <h4
                className="text-xl sm:text-2xl text-[#EDEBDD] font-normal mb-1"
                style={{ fontFamily: FONT_ANTON }}
              >
                {A50_SLIDES[lightboxIndex].title}
              </h4>
              <p
                className="text-sm text-[#EDEBDD]/80"
                style={{ fontFamily: FONT_GOOGLE_SANS }}
              >
                {A50_SLIDES[lightboxIndex].desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
