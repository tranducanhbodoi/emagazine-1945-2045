import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  XCircle,
  Puzzle,
  RotateCcw,
  Trophy,
  Award,
  Link as LinkIcon,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

const FONT_ANTON = "'Anton', 'Oswald', 'Be Vietnam Pro', sans-serif";
const FONT_ACME = "'Be Vietnam Pro', 'Plus Jakarta Sans', sans-serif";
const FONT_GOOGLE_SANS = "'Google Sans', 'Plus Jakarta Sans', 'Be Vietnam Pro', sans-serif";

// =============================================================================
// QUIZ DATA
// =============================================================================
const MCQ_QUESTIONS = [
  {
    id: 'q1',
    pageIndex: 1,
    title: 'Câu 1: Công cuộc Đổi mới toàn diện diễn ra vào năm bao nhiêu?',
    options: [
      { id: 'A', text: '1945' },
      { id: 'B', text: '1954' },
      { id: 'C', text: '1986' },
      { id: 'D', text: '2000' },
    ],
    correct: 'C',
    explanation:
      'Đại hội VI của Đảng (tháng 12/1986) đã chính thức khởi xướng đường lối Đổi mới toàn diện đất nước, tạo nên bước ngoặt lịch sử đưa Việt Nam phát triển mạnh mẽ.',
  },
  {
    id: 'q2',
    pageIndex: 2,
    title: 'Câu 2: Theo mục tiêu đến năm 2045, Việt Nam hướng tới trở thành quốc gia như thế nào?',
    options: [
      { id: 'A', text: 'Nước đang phát triển, có công nghiệp hiện đại' },
      { id: 'B', text: 'Nước có thu nhập trung bình cao' },
      { id: 'C', text: 'Nước phát triển, thu nhập cao' },
      { id: 'D', text: 'Quốc gia dẫn đầu về công nghệ trong khu vực' },
    ],
    correct: 'C',
    explanation:
      'Mục tiêu kỷ niệm 100 năm thành lập nước (1945–2045) là đưa Việt Nam trở thành quốc gia phát triển, có thu nhập cao theo định hướng xã hội chủ nghĩa.',
  },
  {
    id: 'q3',
    pageIndex: 3,
    title: 'Câu 3: Trong định hướng phát triển đất nước, nguồn lực được nhấn mạnh bao gồm yếu tố nào?',
    options: [
      { id: 'A', text: 'Tài nguyên thiên nhiên và vốn đầu tư' },
      { id: 'B', text: 'Trí tuệ, trách nhiệm và sức sáng tạo của nhân dân' },
      { id: 'C', text: 'Công nghệ và nguồn vốn quốc tế' },
      { id: 'D', text: 'Cơ sở hạ tầng và mở rộng thị trường' },
    ],
    correct: 'B',
    explanation:
      'Nhân dân luôn là trung tâm, chủ thể và nguồn cội sức mạnh. Trí tuệ, trách nhiệm và sức sáng tạo của nhân dân là nguồn tài nguyên vô giá không bao giờ cạn kiệt.',
  },
  {
    id: 'q4',
    pageIndex: 4,
    title: 'Câu 4: Tầm nhìn đến năm 2130 được đề cập trong bài là gì?',
    options: [
      { id: 'A', text: 'Trở thành nền kinh tế lớn nhất Đông Nam Á' },
      { id: 'B', text: 'Trở thành quốc gia có thu nhập cao' },
      { id: 'C', text: 'Trở thành trung tâm công nghệ của châu Á' },
      { id: 'D', text: 'Trở thành nước XHCN phát triển, có trình độ cao, văn minh, hiện đại, đổi mới và có sức chống chịu' },
    ],
    correct: 'D',
    explanation:
      'Tầm nhìn chiến lược 100 năm tiếp theo (đến năm 2130): Xây dựng Việt Nam trở thành nước XHCN phát triển, có trình độ cao, văn minh, hiện đại, đổi mới và có sức chống chịu.',
  },
];

// Minigame Matching Data
const MATCHING_YEARS = ['1945', '1986', '2030', '2045', '2130'];

const MATCHING_EVENTS = [
  { id: 'A', text: 'Bắt đầu công cuộc Đổi mới' },
  { id: 'B', text: 'Việt Nam trở thành nước phát triển, thu nhập cao' },
  { id: 'C', text: 'Tầm nhìn trở thành quốc gia XHCN phát triển trình độ cao' },
  { id: 'D', text: 'Cách mạng Tháng Tám - thành lập nước' },
  { id: 'E', text: 'Trở thành nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao' },
];

const CORRECT_PAIRS = {
  1945: 'D',
  1986: 'A',
  2030: 'E',
  2045: 'B',
  2130: 'C',
};

const PAIR_COLORS = {
  1945: { bg: 'bg-amber-100', border: 'border-amber-500', text: 'text-amber-900', badge: 'bg-amber-700' },
  1986: { bg: 'bg-rose-100', border: 'border-rose-500', text: 'text-rose-900', badge: 'bg-rose-700' },
  2030: { bg: 'bg-blue-100', border: 'border-blue-500', text: 'text-blue-900', badge: 'bg-blue-700' },
  2045: { bg: 'bg-emerald-100', border: 'border-emerald-500', text: 'text-emerald-900', badge: 'bg-emerald-700' },
  2130: { bg: 'bg-purple-100', border: 'border-purple-500', text: 'text-purple-900', badge: 'bg-purple-700' },
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export default function QuizSection() {
  // Page state: 0=Intro, 1=Q1, 2=Q2, 3=Q3, 4=Q4, 5=Q5 Matching
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1); // 1 = next, -1 = prev

  // MCQ state: { q1: 'C', q2: null, ... }
  const [mcqAnswers, setMcqAnswers] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
  });

  // Matching game state
  const [selectedYear, setSelectedYear] = useState(null);
  const [pairs, setPairs] = useState({
    1945: null,
    1986: null,
    2030: null,
    2045: null,
    2130: null,
  });
  const [matchingResult, setMatchingResult] = useState(null);

  // Navigation handlers
  const goToPage = (target) => {
    if (target < 0 || target > 5) return;
    setSlideDirection(target > currentPage ? 1 : -1);
    setCurrentPage(target);
  };

  const handleNext = () => {
    if (currentPage < 5) {
      goToPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  };

  // MCQ answer selection
  const handleSelectMCQ = (qId, optionId) => {
    // Only allow selecting once per question or allow changing
    setMcqAnswers((prev) => ({
      ...prev,
      [qId]: optionId,
    }));
  };

  // Matching game interaction
  const handleYearClick = (year) => {
    // If clicking the already selected year, deselect
    if (selectedYear === year) {
      setSelectedYear(null);
    } else {
      setSelectedYear(year);
    }
  };

  const handleEventClick = (eventId) => {
    if (!selectedYear) {
      // If clicking an event that was already paired, user might want to disconnect
      const existingYear = Object.keys(pairs).find((y) => pairs[y] === eventId);
      if (existingYear) {
        setPairs((prev) => ({ ...prev, [existingYear]: null }));
        setMatchingResult(null);
      }
      return;
    }

    // Connect selectedYear with eventId
    // If this event was paired with another year, remove previous link
    const updated = { ...pairs };
    Object.keys(updated).forEach((y) => {
      if (updated[y] === eventId) updated[y] = null;
    });
    updated[selectedYear] = eventId;

    setPairs(updated);
    setSelectedYear(null);
    setMatchingResult(null);
  };

  const handleUnpair = (year, e) => {
    e.stopPropagation();
    setPairs((prev) => ({ ...prev, [year]: null }));
    setMatchingResult(null);
  };

  const handleCheckMatching = () => {
    let score = 0;
    const wrong = [];
    Object.keys(CORRECT_PAIRS).forEach((year) => {
      if (pairs[year] === CORRECT_PAIRS[year]) {
        score += 1;
      } else {
        wrong.push(year);
      }
    });

    const isPerfect = score === 5;
    setMatchingResult({
      score,
      isPerfect,
      wrongYears: wrong,
    });

    if (isPerfect) {
      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#810100', '#D4AF37', '#EDEBDD', '#10B981', '#F59E0B'],
      });
    }
  };

  const handleResetWrongPairs = () => {
    if (!matchingResult) return;
    const updated = { ...pairs };
    matchingResult.wrongYears.forEach((y) => {
      updated[y] = null;
    });
    setPairs(updated);
    setMatchingResult(null);
    setSelectedYear(null);
  };

  const handleResetAllQuiz = () => {
    setCurrentPage(0);
    setSlideDirection(-1);
    setMcqAnswers({ q1: null, q2: null, q3: null, q4: null });
    setPairs({ 1945: null, 1986: null, 2030: null, 2045: null, 2130: null });
    setSelectedYear(null);
    setMatchingResult(null);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
    exit: (direction) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.35, ease: 'easeIn' },
    }),
  };

  // Check how many pairs are filled
  const pairedCount = Object.values(pairs).filter(Boolean).length;

  return (
    <section
      id="mini-quiz"
      className="py-20 md:py-32 relative overflow-hidden bg-[#EDEBDD] border-t border-[#810100]/20"
      style={{ fontFamily: FONT_GOOGLE_SANS }}
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#810100]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#630000]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ===================================================================
            SECTION HEADER
           =================================================================== */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#810100] text-[#EDEBDD] text-xs font-bold uppercase tracking-widest shadow mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span style={{ fontFamily: FONT_ANTON }}>GÓC TƯƠNG TÁC ĐỘC GIẢ</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#810100] tracking-tight uppercase"
            style={{ fontFamily: FONT_ANTON }}
          >
            MINI QUIZ LỊCH SỬ
          </h2>
          <p
            className="text-xl sm:text-2xl text-[#1B1717] mt-2 font-normal text-center !text-center mx-auto"
            style={{ fontFamily: FONT_ACME, textAlign: 'center' }}
          >
            Hành trình Đổi mới của Việt Nam từ 1945 đến 2045 &amp; Tầm nhìn 2130
          </p>
        </div>

        {/* ===================================================================
            MAIN QUIZ CARD WRAPPER
           =================================================================== */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-[#810100]/20 shadow-2xl overflow-hidden flex flex-col min-h-[580px]">
          {/* Top Progress Bar */}
          <div className="w-full h-2 bg-[#EDEBDD]/80 relative overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#810100] to-[#630000]"
              initial={false}
              animate={{ width: `${(currentPage / 5) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Subheader Pagination Indicator Bar */}
          <div className="px-6 sm:px-10 py-4 bg-[#F9F8F3] border-b border-neutral-200/80 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-bold text-[#810100]">
                {currentPage === 0
                  ? 'BƯỚC KHỞI ĐỘNG'
                  : currentPage <= 4
                  ? `CÂU HỎI TRẮC NGHIỆM ${currentPage}/4`
                  : 'MINIGAME NỐI MẢNH GHÉP'}
              </span>
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3, 4, 5].map((step) => {
                const isActive = currentPage === step;
                return (
                  <button
                    key={step}
                    onClick={() => goToPage(step)}
                    aria-label={`Chuyển đến trang ${step === 0 ? 'Bắt đầu' : step}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-8 bg-[#810100] shadow-sm'
                        : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                  />
                );
              })}
            </div>

            <div className="text-xs text-neutral-500 font-mono">
              Trang {currentPage + 1}/6
            </div>
          </div>

          {/* Card Body with AnimatePresence */}
          <div className="flex-1 p-6 sm:p-10 md:p-12 flex flex-col justify-center relative">
            <AnimatePresence mode="wait" custom={slideDirection}>
              {/* =============================================================
                  PAGE 0: WELCOME SCREEN
                 ============================================================= */}
              {currentPage === 0 && (
                <motion.div
                  key="page-0"
                  custom={slideDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex-1 flex flex-col items-center justify-center text-center py-6"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#810100] text-[#EDEBDD] flex items-center justify-center shadow-xl mb-6 transform -rotate-3 hover:rotate-0 transition-transform">
                    <Trophy className="w-10 h-10 text-amber-300" />
                  </div>

                  <h3
                    className="text-4xl sm:text-5xl font-normal text-[#810100] tracking-wide mb-3"
                    style={{ fontFamily: FONT_ANTON }}
                  >
                    MINI QUIZ
                  </h3>

                  <h4
                    className="text-2xl sm:text-3xl text-[#1B1717] mb-4"
                    style={{ fontFamily: FONT_ACME }}
                  >
                    Hành trình Đổi mới của Việt Nam từ 1945 đến 2030
                  </h4>

                  <p className="text-lg sm:text-xl text-neutral-700 italic max-w-xl mb-8 leading-relaxed">
                    “Bạn đã sẵn sàng thử thách kiến thức của mình chưa?”
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg w-full mb-10 text-left">
                    <div className="p-4 rounded-2xl bg-[#EDEBDD]/60 border border-[#810100]/20 flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-[#810100] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-sm text-[#1B1717]">4 Câu hỏi Trắc nghiệm</p>
                        <p className="text-xs text-neutral-600">Kiểm tra kiến thức cốt lõi qua các cột mốc then chốt.</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#EDEBDD]/60 border border-[#810100]/20 flex items-start gap-3">
                      <Puzzle className="w-5 h-5 text-[#810100] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-sm text-[#1B1717]">Minigame Ghép mảnh</p>
                        <p className="text-xs text-neutral-600">Nối 5 mốc thời gian với sự kiện và tầm nhìn phát triển.</p>
                      </div>
                    </div>
                  </div>

                  {/* Pulsing CTA Button */}
                  <motion.button
                    onClick={() => goToPage(1)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    animate={{
                      boxShadow: [
                        '0 4px 14px 0 rgba(129, 1, 0, 0.3)',
                        '0 6px 20px 0 rgba(129, 1, 0, 0.5)',
                        '0 4px 14px 0 rgba(129, 1, 0, 0.3)',
                      ],
                    }}
                    transition={{
                      boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-[#810100] hover:bg-[#630000] text-[#EDEBDD] font-bold text-lg uppercase tracking-wider shadow-xl transition-colors cursor-pointer"
                    style={{ fontFamily: FONT_ANTON }}
                  >
                    <span>Bắt đầu ngay</span>
                    <Sparkles className="w-5 h-5 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
                  </motion.button>
                </motion.div>
              )}

              {/* =============================================================
                  PAGES 1 to 4: MCQ QUESTIONS
                 ============================================================= */}
              {currentPage >= 1 && currentPage <= 4 && (
                (() => {
                  const q = MCQ_QUESTIONS[currentPage - 1];
                  const chosen = mcqAnswers[q.id];
                  const hasAnswered = !!chosen;
                  const isCorrect = chosen === q.correct;

                  return (
                    <motion.div
                      key={`page-${currentPage}`}
                      custom={slideDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="flex-1 flex flex-col justify-between"
                    >
                      <div>
                        {/* Question Title */}
                        <div className="mb-6 sm:mb-8">
                          <span
                            className="inline-block px-3 py-1 rounded bg-[#810100]/10 text-[#810100] text-xs font-bold uppercase tracking-wider mb-2"
                            style={{ fontFamily: FONT_ANTON }}
                          >
                            CÂU HỎI {currentPage} TRÊN 4
                          </span>
                          <h3
                            className="text-2xl sm:text-3xl font-medium text-[#1B1717] leading-snug"
                            style={{ fontFamily: FONT_GOOGLE_SANS }}
                          >
                            {q.title}
                          </h3>
                        </div>

                        {/* Options Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                          {q.options.map((opt) => {
                            const isThisSelected = chosen === opt.id;
                            const isThisCorrect = opt.id === q.correct;

                            let cardStyle =
                              'bg-white border-neutral-300 text-neutral-800 hover:border-[#810100]/60 hover:bg-[#FAF9F5]';
                            let badgeStyle = 'bg-neutral-100 text-neutral-700 border-neutral-300';
                            let shakeProps = {};

                            if (hasAnswered) {
                              if (isThisSelected) {
                                if (isCorrect) {
                                  // Correct choice
                                  cardStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400 shadow-md';
                                  badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
                                } else {
                                  // Wrong choice with shake animation
                                  cardStyle = 'bg-red-50 border-red-500 text-red-950 ring-2 ring-red-400 shadow-md';
                                  badgeStyle = 'bg-red-600 text-white border-red-600';
                                  shakeProps = {
                                    animate: { x: [-6, 6, -5, 5, -2, 2, 0] },
                                    transition: { duration: 0.4 },
                                  };
                                }
                              } else if (isThisCorrect) {
                                // Highlight the correct answer if user chose wrongly
                                cardStyle = 'bg-emerald-50/70 border-emerald-500 text-emerald-900 border-dashed';
                                badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
                              } else {
                                cardStyle = 'opacity-50 border-neutral-200 text-neutral-400 bg-neutral-50';
                                badgeStyle = 'bg-neutral-100 text-neutral-400 border-neutral-200';
                              }
                            }

                            return (
                              <motion.button
                                key={opt.id}
                                onClick={() => handleSelectMCQ(q.id, opt.id)}
                                {...shakeProps}
                                whileHover={!hasAnswered ? { scale: 1.015 } : {}}
                                whileTap={!hasAnswered ? { scale: 0.985 } : {}}
                                className={`text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 cursor-pointer ${cardStyle}`}
                              >
                                <div className="flex items-center gap-3.5">
                                  <span
                                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 border ${badgeStyle}`}
                                    style={{ fontFamily: FONT_ANTON }}
                                  >
                                    {opt.id}
                                  </span>
                                  <span className="text-base sm:text-lg font-medium leading-snug">
                                    {opt.text}
                                  </span>
                                </div>

                                {hasAnswered && isThisSelected && (
                                  <span className="shrink-0">
                                    {isCorrect ? (
                                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                                    ) : (
                                      <XCircle className="w-6 h-6 text-red-600" />
                                    )}
                                  </span>
                                )}

                                {hasAnswered && !isThisSelected && isThisCorrect && (
                                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-md shrink-0">
                                    Đáp án đúng
                                  </span>
                                )}
                              </motion.button>
                            );
                          })}
                        </div>

                        {/* Explanation Box */}
                        {hasAnswered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className={`p-4 sm:p-5 rounded-2xl border ${
                              isCorrect
                                ? 'bg-emerald-50/80 border-emerald-300 text-emerald-900'
                                : 'bg-amber-50/80 border-amber-300 text-amber-950'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              {isCorrect ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                              ) : (
                                <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                              )}
                              <div>
                                <p className="font-bold text-sm mb-1">
                                  {isCorrect
                                    ? 'Chính xác! Bạn đã chọn đúng.'
                                    : `Chưa chính xác. Đáp án đúng là: ${q.correct}`}
                                </p>
                                <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                                  {q.explanation}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Advance Prompt */}
                      {hasAnswered && (
                        <div className="mt-6 flex justify-end">
                          <button
                            onClick={handleNext}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#810100] hover:bg-[#630000] text-[#EDEBDD] text-sm font-bold uppercase tracking-wider transition-all shadow cursor-pointer"
                            style={{ fontFamily: FONT_ANTON }}
                          >
                            <span>{currentPage === 4 ? 'Sang Minigame Ghép nối' : 'Câu tiếp theo'}</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </motion.div>
                  );
                })()
              )}

              {/* =============================================================
                  PAGE 5: QUESTION 5 (PUZZLE MATCHING MINIGAME)
                 ============================================================= */}
              {currentPage === 5 && (
                <motion.div
                  key="page-5"
                  custom={slideDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Header of Question 5 */}
                    <div className="mb-6 text-center sm:text-left">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#810100]/10 text-[#810100] text-xs font-bold uppercase tracking-widest mb-2">
                        <Puzzle className="w-3.5 h-3.5" />
                        <span style={{ fontFamily: FONT_ANTON }}>CÂU 5 • TRÒ CHƠI GHÉP NỐI</span>
                      </div>
                      <h3
                        className="text-2xl sm:text-3xl font-normal text-[#810100] uppercase tracking-wide"
                        style={{ fontFamily: FONT_ANTON }}
                      >
                        GHÉP NHỮNG MẢNH GHÉP CỦA HÀNH TRÌNH 1945–2045
                      </h3>
                      <p
                        className="text-base sm:text-lg text-neutral-700 mt-1 italic"
                        style={{ fontFamily: FONT_ACME }}
                      >
                        “Hãy nối những cột mốc lịch sử sau đây với mốc thời gian tương ứng”
                      </p>
                      <p className="text-xs text-neutral-500 mt-1">
                        Hướng dẫn: Click chọn 1 mốc năm bên trái, sau đó click chọn sự kiện tương ứng bên phải để ghép nối.
                      </p>
                    </div>

                    {/* Puzzle Columns Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-6">
                      {/* Left Column: Years */}
                      <div className="md:col-span-4 space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono">
                            CỘT MỐC NĂM
                          </span>
                          <span className="text-xs text-neutral-400 font-mono">
                            {pairedCount}/5 đã chọn
                          </span>
                        </div>

                        {MATCHING_YEARS.map((year) => {
                          const pairedEventId = pairs[year];
                          const isSelected = selectedYear === year;
                          const colorTheme = PAIR_COLORS[year];

                          return (
                            <div
                              key={year}
                              onClick={() => handleYearClick(year)}
                              className={`relative p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between shadow-sm select-none ${
                                isSelected
                                  ? 'bg-[#810100] text-[#EDEBDD] border-[#810100] ring-4 ring-[#810100]/20 scale-102 shadow-lg'
                                  : pairedEventId
                                  ? `${colorTheme.bg} ${colorTheme.border} ${colorTheme.text} font-bold`
                                  : 'bg-white border-neutral-300 text-neutral-800 hover:border-[#810100]/50 hover:bg-[#FAF9F5]'
                              }`}
                            >
                              {/* Left puzzle interlocking visual tab */}
                              <div className="flex items-center gap-3">
                                <span
                                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                                    isSelected
                                      ? 'bg-amber-400 text-neutral-950'
                                      : pairedEventId
                                      ? `${colorTheme.badge} text-white`
                                      : 'bg-neutral-100 text-neutral-500'
                                  }`}
                                >
                                  #
                                </span>
                                <span
                                  className="text-2xl font-bold tracking-tight"
                                  style={{ fontFamily: FONT_ANTON }}
                                >
                                  {year}
                                </span>
                              </div>

                              {/* Right connection badge */}
                              {pairedEventId ? (
                                <div className="flex items-center gap-1.5">
                                  <span
                                    className={`px-2.5 py-1 rounded-lg text-xs font-bold font-mono text-white ${colorTheme.badge} flex items-center gap-1 shadow-sm`}
                                  >
                                    <LinkIcon className="w-3 h-3" />
                                    <span>{pairedEventId}</span>
                                  </span>
                                  <button
                                    onClick={(e) => handleUnpair(year, e)}
                                    title="Hủy nối mốc này"
                                    className="w-5 h-5 rounded-full hover:bg-black/10 flex items-center justify-center text-xs opacity-70 hover:opacity-100 transition-opacity"
                                  >
                                    ✕
                                  </button>
                                </div>
                              ) : (
                                <span className="text-xs text-neutral-400 italic font-mono">
                                  {isSelected ? 'Đang chọn...' : 'Chưa nối'}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Right Column: Events */}
                      <div className="md:col-span-8 space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono">
                            MỤC TIÊU / SỰ KIỆN LỊCH SỬ
                          </span>
                          <span className="text-xs text-neutral-400 italic">
                            Click để ghép với mốc đang chọn
                          </span>
                        </div>

                        {MATCHING_EVENTS.map((event) => {
                          const connectedYear = Object.keys(pairs).find((y) => pairs[y] === event.id);
                          const colorTheme = connectedYear ? PAIR_COLORS[connectedYear] : null;

                          return (
                            <div
                              key={event.id}
                              onClick={() => handleEventClick(event.id)}
                              className={`relative p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 shadow-sm select-none ${
                                connectedYear
                                  ? `${colorTheme.bg} ${colorTheme.border} ${colorTheme.text} font-medium`
                                  : selectedYear
                                  ? 'bg-white border-neutral-300 text-neutral-800 hover:border-[#810100] hover:bg-amber-50/60 hover:scale-[1.01]'
                                  : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-400'
                              }`}
                            >
                              <div className="flex items-start gap-3 flex-1">
                                <span
                                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                                    connectedYear
                                      ? `${colorTheme.badge} text-white`
                                      : 'bg-neutral-100 text-neutral-600 border border-neutral-300'
                                  }`}
                                  style={{ fontFamily: FONT_ANTON }}
                                >
                                  {event.id}
                                </span>
                                <span className="text-sm sm:text-base leading-snug">
                                  {event.text}
                                </span>
                              </div>

                              {connectedYear && (
                                <span
                                  className={`px-3 py-1 rounded-lg text-xs font-bold font-mono text-white ${colorTheme.badge} shrink-0 shadow-sm flex items-center gap-1`}
                                >
                                  <span>{connectedYear}</span>
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Action: Check Results Button */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <button
                        onClick={handleCheckMatching}
                        disabled={pairedCount === 0}
                        className={`px-8 py-3.5 rounded-2xl text-base font-bold uppercase tracking-wider shadow-lg transition-all flex items-center gap-2 cursor-pointer ${
                          pairedCount === 5
                            ? 'bg-[#810100] hover:bg-[#630000] text-[#EDEBDD] hover:scale-105'
                            : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                        }`}
                        style={{ fontFamily: FONT_ANTON }}
                      >
                        <Award className="w-5 h-5 text-amber-300" />
                        <span>Kiểm tra kết quả</span>
                      </button>

                      {pairedCount > 0 && (
                        <button
                          onClick={() => {
                            setPairs({ 1945: null, 1986: null, 2030: null, 2045: null, 2130: null });
                            setSelectedYear(null);
                            setMatchingResult(null);
                          }}
                          className="px-4 py-2 text-xs text-neutral-500 hover:text-neutral-800 underline transition-colors cursor-pointer"
                        >
                          Xóa hết các cặp nối
                        </button>
                      )}
                    </div>

                    {/* Result Alerts */}
                    {matchingResult && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mt-6 p-5 rounded-2xl border ${
                          matchingResult.isPerfect
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-950 shadow-md'
                            : 'bg-amber-50 border-amber-500 text-amber-950 shadow-md'
                        }`}
                      >
                        {matchingResult.isPerfect ? (
                          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-lg">
                              <Trophy className="w-8 h-8 text-amber-200" />
                            </div>
                            <div>
                              <h4
                                className="text-xl sm:text-2xl font-bold text-emerald-900 uppercase"
                                style={{ fontFamily: FONT_ANTON }}
                              >
                                5/5 — Chính xác tuyệt đối!
                              </h4>
                              <p className="text-sm sm:text-base text-emerald-800 mt-1">
                                Chúc mừng bạn đã nắm vững toàn bộ các mốc son lịch sử và tầm nhìn phát triển của dân tộc.
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-start justify-between flex-wrap gap-4">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                                <RotateCcw className="w-5 h-5" />
                              </div>
                              <div>
                                <h4
                                  className="text-lg font-bold text-amber-900 uppercase"
                                  style={{ fontFamily: FONT_ANTON }}
                                >
                                  {matchingResult.score}/5 — Gần đúng rồi!
                                </h4>
                                <p className="text-sm text-amber-900 mt-1 leading-relaxed">
                                  Hãy thử nhìn lại các mốc:{' '}
                                  <strong className="underline text-red-700">
                                    {matchingResult.wrongYears.join(', ')}
                                  </strong>
                                  .
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={handleResetWrongPairs}
                              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold uppercase tracking-wider shadow transition-colors flex items-center gap-1.5 cursor-pointer ml-auto"
                              style={{ fontFamily: FONT_ANTON }}
                            >
                              <RotateCcw className="w-3.5 h-3.5" />
                              <span>Thử lại các mốc chưa đúng</span>
                            </button>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* Complete Banner at bottom */}
                  <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between flex-wrap gap-3">
                    <span className="text-xs text-neutral-500 italic">
                      Hoàn thành bài Quiz để củng cố toàn bộ bức tranh lịch sử 1945–2045.
                    </span>
                    <button
                      onClick={handleResetAllQuiz}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[#810100] hover:underline cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Làm lại từ đầu</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ===================================================================
              BOTTOM PAGINATION FOOTER
             =================================================================== */}
          <div className="px-6 sm:px-10 py-4 bg-[#F9F8F3] border-t border-neutral-200/80 flex items-center justify-between">
            {/* Prev button */}
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                currentPage === 0
                  ? 'opacity-30 cursor-not-allowed text-neutral-400'
                  : 'bg-white hover:bg-neutral-100 text-[#1B1717] border border-neutral-300 shadow-sm'
              }`}
              style={{ fontFamily: FONT_ANTON }}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Quay lại</span>
            </button>

            {/* Middle Step Dots */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {[0, 1, 2, 3, 4, 5].map((step) => {
                const isActive = currentPage === step;
                return (
                  <button
                    key={step}
                    onClick={() => goToPage(step)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#810100] text-[#EDEBDD] shadow-md scale-110'
                        : 'bg-neutral-200 hover:bg-neutral-300 text-neutral-700'
                    }`}
                    style={{ fontFamily: FONT_ANTON }}
                  >
                    {step === 0 ? '★' : step}
                  </button>
                );
              })}
            </div>

            {/* Next button */}
            <button
              onClick={handleNext}
              disabled={currentPage === 5}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                currentPage === 5
                  ? 'opacity-30 cursor-not-allowed text-neutral-400'
                  : 'bg-[#810100] hover:bg-[#630000] text-[#EDEBDD] shadow-sm'
              }`}
              style={{ fontFamily: FONT_ANTON }}
            >
              <span>{currentPage === 0 ? 'Bắt đầu' : 'Tiếp theo'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
