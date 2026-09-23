import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Camera,
  HeartHandshake,
  Sparkles
} from 'lucide-react';

const PEOPLE_LIFE_SLIDES = [
  {
    id: 1,
    title: 'Chiến Dịch Toàn Quốc Xóa Nhà Tạm, Nhà Dột Nát',
    category: 'An Sinh Xã Hội Trọng Điểm',
    desc: 'Thủ tướng Chính phủ trực tiếp tham gia cùng nhân dân đặt những viên đá nền móng đầu tiên, lan tỏa quyết tâm xóa bỏ hoàn toàn nhà tạm, nhà dột nát trên phạm vi cả nước.',
    image: '/images/people-life/life-13.jpg',
    tag: 'Xóa nhà tạm dột nát'
  },
  {
    id: 2,
    title: 'Quân Dân Chung Sức Dựng Mái Ấm Cho Đồng Bào',
    category: 'Đoàn Kết Dân Tộc & Hậu Phương Vững Chắc',
    desc: 'Bộ đội biên phòng và các lực lượng vũ trang ngày đêm sát cánh cùng bà con vùng cao, dựng nên những khung nhà kiên cố, mang lại cuộc sống an cư bền vững.',
    image: '/images/people-life/life-5.webp',
    tag: 'Nghĩa tình quân dân'
  },
  {
    id: 3,
    title: 'Chăm Sóc Y Tế Cho Người Cao Tuổi Vùng Cao',
    category: 'Bảo Hiểm Y Tế Toàn Dân',
    desc: 'Nụ cười rạng rỡ của người cao tuổi vùng dân tộc thiểu số khi được đoàn y bác sĩ tận tâm khám sức khỏe và cấp phát thuốc miễn phí tận bản làng.',
    image: '/images/people-life/life-1.webp',
    tag: 'Y tế cơ sở'
  },
  {
    id: 4,
    title: 'Bảo Hiểm Y Tế Đạt Mốc Hơn 95,2% Dân Số',
    category: 'Mạng Lưới An Sinh Vững Chắc',
    desc: 'Đội ngũ y tế cơ sở thăm khám, đo huyết áp và tư vấn sức khỏe định kỳ cho người dân, bảo đảm mọi người dân đều được chăm sóc y tế toàn diện.',
    image: '/images/people-life/life-4.jpg',
    tag: 'BHYT 95,2%'
  },
  {
    id: 5,
    title: 'Khám Chữa Bệnh Tận Tụy Cho Người Nghèo',
    category: 'Không Để Ai Bị Bỏ Lại Phía Sau',
    desc: 'Ánh mắt ấm áp và sự ân cần của người thầy thuốc đối với các cụ bà dân tộc thiểu số tại các trạm y tế lưu động vùng sâu, vùng xa.',
    image: '/images/people-life/life-6.webp',
    tag: 'Tận tâm chăm sóc'
  },
  {
    id: 6,
    title: 'Miễn Toàn Bộ Học Phí Mầm Non & Phổ Thông Công Lập',
    category: 'Đột Phá Nhân Văn Giáo Dục',
    desc: 'Áp dụng từ năm học 2025-2026, chính sách miễn học phí mở rộng cánh cửa học tập bình đẳng cho hàng triệu học sinh trên khắp mọi miền Tổ quốc.',
    image: '/images/people-life/life-2.jpg',
    tag: 'Miễn học phí từ 2025-2026'
  },
  {
    id: 7,
    title: 'Nụ Cười Trẻ Thơ Trong Ngày Tựu Trường',
    category: 'Đầu Tư Cho Thế Hệ Tương Lai',
    desc: 'Ánh mắt trong trẻo và niềm hân hoan của các em học sinh tiểu học với lá cờ đỏ sao vàng trên má trong ngày hội khai trường rộn rã.',
    image: '/images/people-life/life-3.webp',
    tag: 'Mùa tựu trường'
  },
  {
    id: 8,
    title: 'Thế Hệ Tương Lai Trưởng Thành Dưới Mái Trường Hạnh Phúc',
    category: 'Giáo Dục Toàn Diện & Nhân Văn',
    desc: 'Học sinh phổ thông tươi vui, tự tin trong tà áo đồng phục và khăn quàng đỏ thắm, hướng tới tương lai rộng mở của kỷ nguyên vươn mình.',
    image: '/images/people-life/life-9.jpg',
    tag: 'Thế hệ măng non'
  },
  {
    id: 9,
    title: 'Làng Nghề Truyền Thống Đỏ Rực Sắc Xuân',
    category: 'Sinh Kế & Nông Thôn Mới',
    desc: 'Vẻ đẹp rực rỡ của làng hương truyền thống Quảng Phú Cầu, nơi bản sắc văn hóa hòa cùng đời sống kinh tế ngày càng no ấm, khang trang.',
    image: '/images/people-life/life-10.jpg',
    tag: 'Làng nghề phồn vinh'
  },
  {
    id: 10,
    title: 'Tinh Hoa Ẩm Thực & Nghề Truyền Thống Trăm Năm',
    category: 'Kinh Tế Nông Thôn Vững Bền',
    desc: 'Hàng trăm chum tương Bần phơi nắng vàng óng ả, biểu trưng cho sự cần cù của người lao động và sự gìn giữ tinh hoa ẩm thực dân tộc.',
    image: '/images/people-life/life-12.jpg',
    tag: 'Bản sắc truyền thống'
  },
  {
    id: 11,
    title: 'Đôi Tay Khéo Léo Của Nghệ Nhân Thêu Ren',
    category: 'Nâng Niu Bàn Tay Lao Động',
    desc: 'Sự tỉ mỉ của các nữ nghệ nhân làng nghề thủ công mỹ nghệ, tạo nên những sản phẩm tinh xảo phục vụ du lịch và xuất khẩu quốc tế.',
    image: '/images/people-life/life-8.jpg',
    tag: 'Nghệ nhân khéo léo'
  },
  {
    id: 12,
    title: 'Đào Tạo Kỹ Sư & Công Nhân Tay Nghề Cao',
    category: 'Việc Làm Chất Lượng & Thu Nhập Tăng Cao',
    desc: 'Lực lượng lao động trẻ làm chủ dây chuyền công nghiệp hiện đại, là nguồn lực cốt lõi để nâng cao năng suất và chất lượng tăng trưởng kinh tế.',
    image: '/images/people-life/life-7.jpg',
    tag: 'Lao động chất lượng cao'
  },
  {
    id: 13,
    title: 'Đội Ngũ Kỹ Sư Năng Lượng Xanh Tương Lai',
    category: 'Chuyển Đổi Xanh & Công Việc Mới',
    desc: 'Những kỹ sư trẻ vận hành hệ thống điện mặt trời, tiên phong trên con đường chuyển đổi năng lượng xanh và phát triển bền vững.',
    image: '/images/people-life/life-11.jpg',
    tag: 'Năng lượng xanh'
  }
];

export default function PeopleLifeSlider() {
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
    setCurrentIndex((prev) => (prev + 1) % PEOPLE_LIFE_SLIDES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PEOPLE_LIFE_SLIDES.length) % PEOPLE_LIFE_SLIDES.length);
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

  const currentSlide = PEOPLE_LIFE_SLIDES[currentIndex];

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
            ĐỜI SỐNG NHÂN DÂN & AN SINH XÃ HỘI
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
            {String(currentIndex + 1).padStart(2, '0')} / {String(PEOPLE_LIFE_SLIDES.length).padStart(2, '0')}
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
                e.currentTarget.src = '/image/cover.jpg';
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
          {PEOPLE_LIFE_SLIDES.map((slide, idx) => {
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
                    e.currentTarget.src = '/image/cover.jpg';
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
