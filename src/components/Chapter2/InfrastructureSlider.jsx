import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
  Camera,
  Layers,
  Sparkles
} from 'lucide-react';

const INFRASTRUCTURE_SLIDES = [
  {
    id: 1,
    title: 'Cảng Hàng Không Quốc Tế Long Thành',
    category: 'Đại Dự Án Trọng Điểm Quốc Gia',
    desc: 'Biểu tượng mới của khát vọng vươn tầm, siêu dự án sân bay quốc tế quy mô hàng đầu khu vực hướng tới công suất 100 triệu lượt khách/năm.',
    image: '/images/infrastructure/infra-3.jpg',
    tag: 'Hàng không chiến lược'
  },
  {
    id: 2,
    title: 'Cụm Cảng Nước Sâu Đón Siêu Tàu Mẹ',
    category: 'Hạ Tầng Hàng Hải Toàn Cầu',
    desc: 'Hệ thống cảng nước sâu hiện đại với giàn cẩu trọng tải lớn, kết nối trực tiếp hàng hóa Việt Nam với các châu lục không qua trung chuyển.',
    image: '/images/infrastructure/infra-4.jpg',
    tag: 'Cảng biển nước sâu'
  },
  {
    id: 3,
    title: 'Luồng Hàng Hải Giao Thương Quốc Tế',
    category: 'Kinh Tế Biển Bứt Phá',
    desc: 'Tàu container quốc tế tấp nập vào ra trên các tuyến luồng hàng hải huyết mạch, ghi dấu mốc kim ngạch xuất nhập khẩu vượt 930 tỷ USD.',
    image: '/images/infrastructure/infra-1.webp',
    tag: 'Xuất nhập khẩu'
  },
  {
    id: 4,
    title: 'Cảng Biển Vận Hành 24/7 Không Ngủ',
    category: 'Chuỗi Cung Ứng Xuyên Suốt',
    desc: 'Ánh đèn rực sáng thâu đêm tại các bến cảng container, bảo đảm dòng chảy hàng hóa và nguyên vật liệu không ngừng nghỉ cho nền kinh tế.',
    image: '/images/infrastructure/infra-2.jpg',
    tag: 'Logistics 24/7'
  },
  {
    id: 5,
    title: 'Cảng Hàng Không Quốc Tế Nội Bài',
    category: 'Cửa Ngõ Bầu Trời Miền Bắc',
    desc: 'Nhà ga quốc tế hiện đại được nâng cấp, mở rộng công suất khai thác, đón hàng chục triệu lượt khách quốc tế và giao thương ngoại giao.',
    image: '/images/infrastructure/infra-5.jpg',
    tag: 'Hàng không quốc tế'
  },
  {
    id: 6,
    title: 'Cảng Hàng Không Quốc Tế Tân Sơn Nhất',
    category: 'Cửa Ngõ Hàng Không Trọng Yếu Phía Nam',
    desc: 'Đẩy nhanh tiến độ khánh thành nhà ga T3 và hiện đại hóa sân đỗ, giải tỏa điểm nghẽn hạ tầng và nâng tầm năng lực vận chuyển hàng không.',
    image: '/images/infrastructure/infra-14.jpg',
    tag: 'Cảng hàng không T3'
  },
  {
    id: 7,
    title: 'Mạng Lưới Cao Tốc Trên Cao & Đường Vành Đai',
    category: 'Đột Phá 3.345 KM Cao Tốc',
    desc: 'Các tuyến cao tốc trên cao đa tầng hiện đại xuyên suốt chiều dài đất nước, xóa nhòa khoảng cách địa lý và mở rộng không gian phát triển mới.',
    image: '/images/infrastructure/infra-7.jpg',
    tag: 'Hạ tầng cao tốc'
  },
  {
    id: 8,
    title: 'Nút Giao Hoa Thị Đa Tầng Huyết Mạch',
    category: 'Kết Nối Liên Vùng Thông Suốt',
    desc: 'Các nút giao cao tốc hiện đại liên kết nhịp nhàng giữa các trục kinh tế trọng điểm, tối ưu hóa thời gian lưu thông hàng hóa và hành khách.',
    image: '/images/infrastructure/infra-13.jpg',
    tag: 'Nút giao hiện đại'
  },
  {
    id: 9,
    title: 'Đại Lộ Đô Thị & Hầm Chui Hiện Đại',
    category: 'Giao Thông Đô Thị Thông Minh',
    desc: 'Sự kết hợp giữa hầm chui, cầu vượt và đại lộ nhiều làn xe giúp giải tỏa áp lực giao thông tại các đô thị đặc biệt, nâng cao năng suất xã hội.',
    image: '/images/infrastructure/infra-15.jpg',
    tag: 'Đại lộ đô thị'
  },
  {
    id: 10,
    title: '1.711 KM Tuyến Đường Bộ Ven Biển',
    category: 'Trục Hướng Biển Chiến Lược',
    desc: 'Những cung đường bộ ven biển và cầu vượt biển khang trang kết nối toàn diện các vùng duyên hải, tạo hành lang phát triển kinh tế biển vững chắc.',
    image: '/images/infrastructure/infra-16.jpg',
    tag: 'Đường bộ ven biển'
  },
  {
    id: 11,
    title: 'Những Nhịp Cầu Thế Kỷ Nối Liền Bờ Vui',
    category: 'Chinh Phục Sông Lớn & Cửa Biển',
    desc: 'Hệ thống cầu dây văng hiện đại vươn mình qua các dòng sông lớn, biến những vùng đất cách trở thành trung tâm giao thương sôi động.',
    image: '/images/infrastructure/infra-17.avif',
    tag: 'Cầu dây văng'
  },
  {
    id: 12,
    title: 'Dòng Chảy Ánh Sáng Hạ Tầng Về Đêm',
    category: 'Nhịp Đập Nền Kinh Tế Năng Động',
    desc: 'Hạ tầng giao thông thông minh vận hành bền bỉ ngày và đêm, dẫn lối cho dòng người và phương tiện lưu thông an toàn, tiện lợi.',
    image: '/images/infrastructure/infra-6.jpg',
    tag: 'Nhịp sống đô thị'
  },
  {
    id: 13,
    title: 'Toàn Cảnh Bán Đảo Đô Thị & Dòng Sông Sài Gòn',
    category: 'Không Gian Phát Triển Mới',
    desc: 'Quy hoạch hai bên bờ sông hiện đại với các cây cầu kết nối các khu đô thị mới, kiến tạo diện mạo trung tâm tài chính quốc tế tương lai.',
    image: '/images/infrastructure/infra-9.jpg',
    tag: 'Đô thị ven sông'
  },
  {
    id: 14,
    title: 'Skyline Hiện Đại & Đột Phá Kiến Trúc',
    category: 'Tầm Vóc Quốc Gia Sau 40 Năm Đổi Mới',
    desc: 'Quần thể cao ốc hiện đại vươn tầm cao mới, minh chứng cho sức vươn mạnh mẽ và tầm nhìn quy hoạch đô thị văn minh, bền vững.',
    image: '/images/infrastructure/infra-10.jpg',
    tag: 'Vươn tầm cao mới'
  },
  {
    id: 15,
    title: 'Đại Lộ Ven Sông & Trụ Cột Tài Chính',
    category: 'Trung Tâm Tài Chính Khu Vực',
    desc: 'Trục đại lộ khang trang ven sông cùng các tháp tài chính biểu tượng hội tụ dòng vốn FDI và công nghệ quốc tế vào Việt Nam.',
    image: '/images/infrastructure/infra-11.jpg',
    tag: 'Trung tâm tài chính'
  },
  {
    id: 16,
    title: 'Đô Thị Dân Cư Đồng Bộ & Đáng Sống',
    category: 'Hạ Tầng Xã Hội & Nhà Ở',
    desc: 'Hệ thống nhà ở, hạ tầng dịch vụ công cộng và giao thông nội khu được quy hoạch bài bản, phục vụ đời sống phồn vinh của nhân dân.',
    image: '/images/infrastructure/infra-8.jpg',
    tag: 'Hạ tầng an cư'
  },
  {
    id: 17,
    title: 'Đô Thị Sinh Thái Xanh & Bền Vững',
    category: 'Phát Triển Xanh & Cân Bằng Sinh Thái',
    desc: 'Hòa quyện giữa công viên hồ nước và hạ tầng cao ốc hiện đại, hướng tới mục tiêu phát triển bền vững và Net Zero tương lai.',
    image: '/images/infrastructure/infra-12.jpg',
    tag: 'Đô thị xanh'
  }
];

export default function InfrastructureSlider() {
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

  // Scroll active thumbnail inside the horizontal strip ONLY (never scrolls window)
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
    setCurrentIndex((prev) => (prev + 1) % INFRASTRUCTURE_SLIDES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + INFRASTRUCTURE_SLIDES.length) % INFRASTRUCTURE_SLIDES.length);
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

  const currentSlide = INFRASTRUCTURE_SLIDES[currentIndex];

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
            BỘ SƯU TẬP HẠ TẦNG CHIẾN LƯỢC
          </span>
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
            Kéo sang trái/phải hoặc dùng phím điều hướng
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
                <span>Tự động: Đang bật</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-neutral-500" />
                <span>Tự động: Tạm dừng</span>
              </>
            )}
          </button>

          <span className="px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-anton tracking-widest">
            {String(currentIndex + 1).padStart(2, '0')} / {String(INFRASTRUCTURE_SLIDES.length).padStart(2, '0')}
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
                e.currentTarget.src = '/image/infrastructure.jpg';
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
          {INFRASTRUCTURE_SLIDES.map((slide, idx) => {
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
                    e.currentTarget.src = '/image/infrastructure.jpg';
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
