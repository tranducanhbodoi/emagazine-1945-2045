import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const questions = [
  {
    id: 'q1',
    text: 'Câu 1: Công cuộc Đổi mới toàn diện do Đảng khởi xướng vào năm nào?',
    opts: [
      { id: 'A', text: '1945' },
      { id: 'B', text: '1954' },
      { id: 'C', text: '1986' },
      { id: 'D', text: '2000' },
    ],
    correct: 'C',
  },
  {
    id: 'q2',
    text: 'Câu 2: Mục tiêu đến năm 2045, Việt Nam phấn đấu trở thành quốc gia như thế nào?',
    opts: [
      { id: 'A', text: 'Nước đang phát triển có công nghiệp hiện đại' },
      { id: 'B', text: 'Nước có thu nhập trung bình cao' },
      { id: 'C', text: 'Nước phát triển, thu nhập cao' },
      { id: 'D', text: 'Dẫn đầu về công nghệ trong khu vực' },
    ],
    correct: 'C',
  },
  {
    id: 'q3',
    text: 'Câu 3: Trong định hướng phát triển, nguồn lực quan trọng nhất được nhấn mạnh là gì?',
    opts: [
      { id: 'A', text: 'Tài nguyên thiên nhiên và vốn đầu tư nước ngoài' },
      { id: 'B', text: 'Trí tuệ, trách nhiệm và sức sáng tạo của nhân dân' },
      { id: 'C', text: 'Công nghệ nhập khẩu từ các cường quốc' },
      { id: 'D', text: 'Cơ sở hạ tầng và mở rộng thị trường xuất khẩu' },
    ],
    correct: 'B',
  },
  {
    id: 'q4',
    text: 'Câu 4: Tầm nhìn đến năm 2130 theo Nghị quyết TW3 khóa XIV là gì?',
    opts: [
      { id: 'A', text: 'Nền kinh tế lớn nhất Đông Nam Á' },
      { id: 'B', text: 'Quốc gia có thu nhập cao nhất châu Á' },
      { id: 'C', text: 'Trung tâm công nghệ của khu vực' },
      { id: 'D', text: 'Nước XHCN phát triển trình độ cao, văn minh, hiện đại, đổi mới và có sức chống chịu' },
    ],
    correct: 'D',
  },
];

const correctPairs = { 1945: 'D', 1986: 'A', 2030: 'E', 2045: 'B', 2130: 'C' };

const matchingEvents = [
  { id: 'A', text: 'Bắt đầu công cuộc Đổi mới toàn diện' },
  { id: 'B', text: 'Việt Nam trở thành nước phát triển, thu nhập cao' },
  { id: 'C', text: 'Trở thành quốc gia XHCN phát triển trình độ cao' },
  { id: 'D', text: 'Cách mạng Tháng Tám — khai sinh nước Việt Nam' },
  { id: 'E', text: 'Trở thành nước có công nghiệp hiện đại, thu nhập trung bình cao' },
];

export default function MiniQuiz() {
  const [page, setPage] = useState(0); // 0=intro, 1-4=MCQ, 5=matching, 6=result
  const [answers, setAnswers] = useState({});
  const [pairs, setPairs] = useState({ 1945: null, 1986: null, 2030: null, 2045: null, 2130: null });
  const [selectedYear, setSelectedYear] = useState(null);
  const [matchResult, setMatchResult] = useState(null);

  const answer = (qid, opt) => {
    setAnswers(prev => ({ ...prev, [qid]: opt }));
  };

  const handleYearClick = (year) => setSelectedYear(year);

  const handleEventClick = (evId) => {
    if (!selectedYear) return;
    setPairs(prev => ({ ...prev, [selectedYear]: evId }));
    setSelectedYear(null);
  };

  const checkMatching = () => {
    let score = 0;
    Object.keys(correctPairs).forEach(y => {
      if (pairs[y] === correctPairs[y]) score++;
    });
    const isFull = score === 5;
    setMatchResult({ score, isFull });
    if (isFull) confetti({ particleCount: 150, spread: 80, origin: { y: 0.55 } });
  };

  const mcqScore = questions.reduce((n, q) => n + (answers[q.id] === q.correct ? 1 : 0), 0);
  const totalScore = mcqScore + (matchResult?.isFull ? 1 : 0);

  const reset = () => {
    setPage(0);
    setAnswers({});
    setPairs({ 1945: null, 1986: null, 2030: null, 2045: null, 2130: null });
    setSelectedYear(null);
    setMatchResult(null);
  };

  return (
    <section id="mini-quiz" className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-radial from-red-950/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 bg-red-900/80 text-amber-300 border border-red-600/50 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4"
            style={{ fontFamily: 'Anton,sans-serif' }}>
            ✦ MINI QUIZ TƯƠNG TÁC
          </span>
          <h2 className="text-3xl sm:text-5xl text-amber-100 uppercase tracking-tight"
            style={{ fontFamily: 'Anton,sans-serif' }}>
            Thử Thách Kiến Thức Lịch Sử
          </h2>
        </div>

        {/* Quiz Card */}
        <div className="bg-neutral-900 border-2 border-red-900/40 rounded-3xl shadow-2xl overflow-hidden">

          {/* Progress bar */}
          {page > 0 && page < 6 && (
            <div className="w-full h-1 bg-neutral-800">
              <div
                className="h-full bg-red-700 transition-all duration-500"
                style={{ width: `${(page / 5) * 100}%` }}
              ></div>
            </div>
          )}

          <div className="p-6 sm:p-10 min-h-[440px] flex flex-col">
            <AnimatePresence mode="wait">

              {/* Intro */}
              {page === 0 && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col items-center justify-center text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full border-2 border-amber-500/60 bg-red-950/50 flex items-center justify-center text-amber-300 text-4xl mb-6 shadow-xl">
                    ?
                  </div>
                  <h3 className="font-bold text-2xl sm:text-3xl text-amber-100 mb-3"
                    style={{ fontFamily: 'Playfair Display,serif' }}>
                    Bạn đã sẵn sàng?
                  </h3>
                  <p className="text-neutral-400 text-sm max-w-md mb-8 leading-relaxed"
                    style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
                    4 câu hỏi trắc nghiệm + 1 trò chơi ghép mốc lịch sử. Kiểm tra kiến thức của bạn về hành trình Đổi mới 1945–2045!
                  </p>
                  <button
                    onClick={() => setPage(1)}
                    className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-amber-100 font-bold text-base px-10 py-3.5 rounded-2xl shadow-xl transition-all hover:scale-105 border border-amber-500/30 uppercase tracking-wider"
                    style={{ fontFamily: 'Anton,sans-serif' }}
                  >
                    Bắt Đầu Ngay 🚀
                  </button>
                </motion.div>
              )}

              {/* MCQ pages 1-4 */}
              {page >= 1 && page <= 4 && (
                <motion.div
                  key={`q${page}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold text-red-400 uppercase tracking-widest"
                      style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
                      Câu {page} / 4
                    </span>
                    <span className="text-xs text-neutral-500">Chọn 1 đáp án đúng</span>
                  </div>

                  <p className="font-bold text-lg sm:text-xl text-amber-50 mb-7 leading-snug"
                    style={{ fontFamily: 'Playfair Display,serif' }}>
                    {questions[page - 1].text}
                  </p>

                  <div className="space-y-3 flex-1">
                    {questions[page - 1].opts.map(opt => {
                      const chosen = answers[questions[page - 1].id];
                      const isSelected = chosen === opt.id;
                      const isCorrect = opt.id === questions[page - 1].correct;
                      const revealed = !!chosen;

                      let bg = 'bg-neutral-800 border-neutral-700 text-neutral-200 hover:border-red-600/50';
                      if (isSelected) bg = isCorrect
                        ? 'bg-emerald-950 border-emerald-500 text-emerald-100'
                        : 'bg-red-950 border-red-500 text-red-100';
                      else if (revealed && isCorrect) bg = 'bg-emerald-950/40 border-emerald-600/50 text-emerald-200';

                      return (
                        <button
                          key={opt.id}
                          onClick={() => !chosen && answer(questions[page - 1].id, opt.id)}
                          disabled={!!chosen}
                          className={`quiz-option-btn w-full text-left px-4 py-4 rounded-xl border transition-all flex items-center justify-between ${bg}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm shrink-0 ${isSelected ? 'bg-amber-400 text-neutral-950' : 'bg-neutral-900 text-neutral-400'}`}
                              style={{ fontFamily: 'Anton,sans-serif' }}>
                              {opt.id}
                            </span>
                            <span className="text-sm sm:text-base" style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
                              {opt.text}
                            </span>
                          </div>
                          {revealed && isSelected && (
                            <span className="text-lg ml-2 shrink-0">{isCorrect ? '✓' : '✗'}</span>
                          )}
                          {revealed && !isSelected && isCorrect && (
                            <span className="text-emerald-400 text-lg ml-2 shrink-0">✓</span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {answers[questions[page - 1].id] && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 p-3 rounded-xl text-xs font-bold ${
                        answers[questions[page - 1].id] === questions[page - 1].correct
                          ? 'bg-emerald-900/40 text-emerald-300 border border-emerald-700/40'
                          : 'bg-red-900/40 text-red-300 border border-red-700/40'
                      }`}
                      style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}
                    >
                      {answers[questions[page - 1].id] === questions[page - 1].correct
                        ? '✓ Chính xác! Bạn đã chọn đúng.'
                        : `✗ Chưa đúng. Đáp án đúng là: ${questions[page - 1].correct}`}
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Matching game page 5 */}
              {page === 5 && (
                <motion.div
                  key="matching"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="mb-5">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1"
                      style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
                      Câu 5 — Trò chơi ghép cặp
                    </span>
                    <h3 className="font-bold text-xl sm:text-2xl text-amber-100 uppercase"
                      style={{ fontFamily: 'Anton,sans-serif' }}>
                      Ghép mảnh ghép hành trình 1945–2130
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1" style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
                      Nhấp chọn mốc năm → nhấp chọn sự kiện tương ứng
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                    {/* Left: Years */}
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider text-center mb-2"
                        style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
                        Mốc năm
                      </p>
                      {Object.keys(correctPairs).map(year => {
                        const matched = pairs[year];
                        const isSel = selectedYear == year;
                        return (
                          <button
                            key={year}
                            onClick={() => handleYearClick(year)}
                            className={`w-full p-3 rounded-xl font-black text-xl flex items-center justify-between transition-all border ${
                              isSel
                                ? 'bg-amber-500 text-neutral-950 border-amber-300 ring-2 ring-amber-400 scale-102'
                                : matched
                                  ? 'bg-red-950 border-red-700 text-amber-200'
                                  : 'bg-neutral-800 border-neutral-700 text-neutral-200 hover:border-red-500'
                            }`}
                            style={{ fontFamily: 'Anton,sans-serif' }}
                          >
                            <span>{year}</span>
                            <span className="text-xs font-bold opacity-70" style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
                              {matched ? `→ ${matched}` : '→ ?'}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Right: Events */}
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider text-center mb-2"
                        style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
                        Sự kiện
                      </p>
                      {matchingEvents.map(ev => {
                        const usedBy = Object.keys(pairs).find(y => pairs[y] === ev.id);
                        return (
                          <button
                            key={ev.id}
                            onClick={() => handleEventClick(ev.id)}
                            className={`w-full p-3 rounded-xl text-left text-xs sm:text-sm flex items-start gap-2 transition-all border ${
                              usedBy
                                ? 'bg-red-950/80 border-red-600 text-amber-100 font-semibold'
                                : 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:border-amber-500'
                            }`}
                            style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}
                          >
                            <span className="font-black text-amber-400 shrink-0" style={{ fontFamily: 'Anton,sans-serif' }}>
                              {ev.id}.
                            </span>
                            <span className="leading-snug">{ev.text}</span>
                            {usedBy && (
                              <span className="ml-auto shrink-0 bg-amber-400 text-neutral-950 font-black text-[10px] px-2 py-0.5 rounded"
                                style={{ fontFamily: 'Anton,sans-serif' }}>
                                {usedBy}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-5 text-center">
                    <button
                      onClick={checkMatching}
                      className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-black px-8 py-2.5 rounded-xl uppercase tracking-widest text-sm transition-all shadow-lg"
                      style={{ fontFamily: 'Anton,sans-serif' }}
                    >
                      Kiểm Tra Kết Quả Nối
                    </button>
                  </div>

                  {matchResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 p-4 rounded-xl text-center font-bold text-sm border ${
                        matchResult.isFull
                          ? 'bg-emerald-950/80 text-emerald-200 border-emerald-500'
                          : 'bg-amber-950/80 text-amber-200 border-amber-500'
                      }`}
                      style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}
                    >
                      {matchResult.isFull
                        ? `🎉 5/5 — Chính xác! Bạn đã ghép đúng toàn bộ!`
                        : `👍 ${matchResult.score}/5 — Gần đúng rồi! Xem lại các mốc 2030 và 2045.`}
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Result */}
              {page === 6 && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1 flex flex-col items-center justify-center text-center py-8"
                >
                  <div className="text-6xl mb-5 animate-bounce">🏆</div>
                  <h3 className="font-black text-3xl sm:text-4xl text-amber-100 uppercase tracking-wide mb-2"
                    style={{ fontFamily: 'Anton,sans-serif' }}>
                    Chúc Mừng!
                  </h3>
                  <p className="text-neutral-400 text-sm mb-7" style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
                    Cảm ơn bạn đã tham gia Mini Quiz khám phá hành trình 1945–2045!
                  </p>
                  <div className="bg-neutral-800 border border-amber-500/30 p-6 rounded-2xl mb-7 w-40">
                    <span className="text-xs text-neutral-400 uppercase tracking-wider block mb-1"
                      style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
                      Điểm số
                    </span>
                    <span className="font-black text-5xl text-amber-300" style={{ fontFamily: 'Anton,sans-serif' }}>
                      {totalScore}/5
                    </span>
                  </div>
                  <p className="text-amber-200 text-sm font-semibold mb-8" style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
                    {totalScore === 5
                      ? '🌟 Tuyệt vời! Bạn hiểu rõ lịch sử & tầm nhìn dân tộc!'
                      : '👍 Rất tốt! Tiếp tục khám phá thêm nhé.'}
                  </p>
                  <button
                    onClick={reset}
                    className="bg-neutral-800 hover:bg-neutral-700 text-amber-200 font-semibold text-sm px-7 py-3 rounded-xl border border-neutral-700 transition-all inline-flex items-center gap-2"
                    style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}
                  >
                    ↺ Làm Lại Quiz
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Navigation Footer */}
          <div className="px-6 sm:px-10 py-4 border-t border-neutral-800 flex items-center justify-between bg-neutral-950/60">
            {/* Prev */}
            <button
              disabled={page === 0}
              onClick={() => setPage(p => Math.max(0, p - 1))}
              className={`flex items-center gap-1 text-xs font-bold uppercase px-4 py-2 rounded-lg transition-all ${
                page === 0
                  ? 'opacity-30 cursor-not-allowed text-neutral-600'
                  : 'text-amber-300 hover:bg-neutral-800'
              }`}
              style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}
            >
              ← Trước
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map(n => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`rounded-full transition-all ${
                    page === n
                      ? 'w-8 h-8 bg-red-700 text-white ring-2 ring-amber-400 text-xs font-black'
                      : 'w-6 h-6 bg-neutral-800 text-neutral-500 text-xs hover:bg-neutral-700'
                  }`}
                  style={{ fontFamily: 'Anton,sans-serif' }}
                >
                  {n}
                </button>
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => {
                if (page === 0) setPage(1);
                else if (page < 5) setPage(p => p + 1);
                else if (page === 5) setPage(6);
                else reset();
              }}
              className="flex items-center gap-1 text-xs font-bold uppercase px-4 py-2 rounded-lg bg-red-800 hover:bg-red-700 text-amber-100 transition-all"
              style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}
            >
              {page === 5 ? 'Kết quả' : page === 6 ? 'Làm lại' : 'Sau →'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
