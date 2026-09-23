import React from 'react';
import { motion } from 'framer-motion';

const inView = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75 } } };

const milestones = [
  {
    year: '2030',
    color: '#B91C1C',
    badge: '100 Năm Thành Lập Đảng',
    title: 'Nước đang phát triển có công nghiệp hiện đại',
    desc: 'Đạt thu nhập trung bình cao; tạo nền tảng vững chắc để chuyển sang mô hình phát triển dựa trên tri thức và công nghệ.',
    scale: false,
  },
  {
    year: '2045',
    color: '#D4AF37',
    badge: '100 Năm Nước Độc Lập',
    title: 'Nước phát triển, thu nhập cao',
    desc: 'Trở thành quốc gia hùng cường, thịnh vượng, hiện thực hóa trọn vẹn khát vọng vươn mình của dân tộc Việt Nam.',
    scale: true,
  },
  {
    year: '2130',
    color: '#9CA3AF',
    badge: 'Tầm Nhìn Dài Hạn',
    title: 'Quốc gia XHCN phát triển trình độ cao',
    desc: 'Văn minh, hiện đại, có năng lực sáng tạo và sức sống trường tồn theo Nghị quyết Hội nghị Trung ương 3, khóa XIV.',
    scale: false,
  },
];

export default function Chapter3() {
  return (
    <section id="chuong-3" className="bg-[#EDEBDD] text-neutral-900 overflow-hidden">

      {/* Chapter Header Band */}
      <div className="bg-neutral-950 py-16 md:py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 to-transparent pointer-events-none"></div>
        <motion.p
          variants={inView} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-red-500 text-lg sm:text-xl uppercase tracking-[0.18em] font-bold mb-2"
          style={{ fontFamily: 'Acme,sans-serif' }}
        >
          Chương III: Vươn mình kỷ nguyên mới
        </motion.p>
        <motion.h2
          variants={inView} initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-amber-100 text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight max-w-4xl mx-auto leading-tight"
          style={{ fontFamily: 'Anton,sans-serif' }}
        >
          Mọi thành quả đều hướng về Nhân dân
        </motion.h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Lead Quote from Tổng Bí thư Tô Lâm */}
        <motion.div
          variants={inView} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-20 max-w-4xl mx-auto bg-amber-100/70 p-8 sm:p-12 rounded-3xl border border-amber-900/20 shadow-xl"
        >
          <span className="bg-red-800 text-white font-bold text-[11px] px-3 py-1 rounded tracking-widest uppercase mb-3 inline-block"
            style={{ fontFamily: 'Anton,sans-serif' }}>
            TƯ TƯỞNG CỐT LÕI
          </span>
          <p className="text-xl sm:text-2xl font-bold text-neutral-900 leading-snug mb-5 italic"
            style={{ fontFamily: 'Playfair Display,serif' }}>
            "Bài học sâu sắc, có ý nghĩa đặc biệt quan trọng, đó là sự nghiệp cách mạng là của Nhân dân, do Nhân dân, vì Nhân dân. Nhân dân vừa là người làm nên những thắng lợi lịch sử, vừa là nguồn sức mạnh vô tận để Đảng tồn tại và phát triển."
          </p>
          <p className="text-sm text-neutral-500 italic" style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
            — Tổng Bí thư, Chủ tịch nước Tô Lâm, bài viết "Vững bước dưới cờ Đảng" (3/2/2026)
          </p>
        </motion.div>

        {/* QUOTE 3 BOX (dark) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-24 max-w-4xl mx-auto bg-neutral-950 text-amber-100 p-8 sm:p-12 rounded-3xl border-2 border-red-700/60 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/15 rounded-full blur-3xl pointer-events-none"></div>
          <span className="text-red-400 font-bold text-xs uppercase tracking-widest block mb-3"
            style={{ fontFamily: 'Anton,sans-serif' }}>
            THẾ VÀ LỰC MỚI
          </span>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-amber-50 italic"
            style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
            "Trong bối cảnh hiện nay, sức mạnh toàn dân không chỉ là lá chắn bảo vệ các thành quả cách mạng mà còn phải được chuyển hóa thành nguồn năng lượng bứt phá, đưa quốc gia phát triển nhanh, bền vững và tự chủ."
          </p>
        </motion.div>

        {/* 100-YEAR MILESTONES */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold text-red-800 uppercase tracking-[0.2em] block mb-1"
              style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
              TẦM NHÌN TRĂM NĂM
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-neutral-950"
              style={{ fontFamily: 'Playfair Display,serif' }}>
              Hai Mốc Son Lịch Sử 100 Năm & Tầm Nhìn 2130
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`bg-white rounded-2xl p-8 shadow-xl transition-transform hover:-translate-y-1 ${m.scale ? 'ring-2 ring-amber-400 shadow-amber-200/40 shadow-2xl' : ''}`}
                style={{ borderTop: `4px solid ${m.color}` }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <span className="font-black text-4xl" style={{ fontFamily: 'Anton,sans-serif', color: m.color }}>
                    {m.year}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: `${m.color}18`, color: m.color, fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
                    {m.badge}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-neutral-950 mb-3" style={{ fontFamily: 'Playfair Display,serif' }}>
                  {m.title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TS Chu Duc Tinh + Quote 4 */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          <div className="bg-amber-50/80 p-8 sm:p-10 rounded-2xl border border-amber-900/15 shadow-lg">
            <h4 className="font-bold text-xl text-red-900 mb-3" style={{ fontFamily: 'Playfair Display,serif' }}>
              TS. Chu Đức Tính: Con Người Là Mục Tiêu & Động Lực
            </h4>
            <p className="text-base text-neutral-800 leading-relaxed mb-4" style={{ fontFamily: 'Merriweather,serif' }}>
              Theo TS. Chu Đức Tính, nguyên Giám đốc Bảo tàng Hồ Chí Minh, đây chính là lúc cần vận dụng tư tưởng Hồ Chí Minh về con người: Con người vừa là mục tiêu, vừa là động lực của sự phát triển.
            </p>
            <p className="text-base text-neutral-900 font-medium italic leading-relaxed" style={{ fontFamily: 'Merriweather,serif' }}>
              "Nguồn lực" của một quốc gia không chỉ nằm ở vốn, tài nguyên, cơ sở hạ tầng hay công nghệ, mà quan trọng hơn là khả năng phát huy trí tuệ, trách nhiệm và sức sáng tạo của con người. Nếu không khơi dậy được những tiềm năng ấy, các nguồn lực vật chất dù lớn đến đâu cũng khó tạo thành động lực phát triển bền vững.
            </p>
          </div>

          {/* QUOTE 4 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-900 text-amber-100 p-8 sm:p-10 rounded-2xl border-l-8 border-amber-400 shadow-2xl"
          >
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-3 flex items-center gap-2"
              style={{ fontFamily: 'Anton,sans-serif' }}>
              <span className="w-5 h-0.5 bg-amber-400 inline-block"></span>
              PHÁT HUY NỘI LỰC TOÀN DÂN
            </span>
            <p className="text-base sm:text-lg font-semibold leading-relaxed italic text-amber-50"
              style={{ fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
              "Đội ngũ cán bộ phải dám nghĩ, dám làm, dám chịu trách nhiệm vì lợi ích chung. Cộng đồng doanh nhân cần mạnh dạn đổi mới, tiên phong đầu tư để tạo ra những giá trị mới. Thế hệ trẻ nuôi dưỡng khát vọng, dám thử sức, dám cống hiến và đi đầu trong những lĩnh vực mới."
            </p>
          </motion.div>

          {/* Closing paragraph */}
          <p className="text-base sm:text-lg text-neutral-950 font-bold border-l-4 border-red-800 pl-5 py-1 leading-relaxed"
            style={{ fontFamily: 'Merriweather,serif' }}>
            Bài học xương máu từ lịch sử cho thấy, một dân tộc muốn vươn lên hùng cường bắt buộc phải dựa vào chính nội lực của mình. Dẫu tranh thủ tối đa sự hợp tác quốc tế, nhân tố quyết định thắng lợi vẫn là nội lực dân tộc — kết tinh từ lòng yêu nước, ý chí tự cường, nguồn nhân lực chất lượng cao và tiềm lực cơ sở vật chất vững chắc.
          </p>
        </div>

      </div>
    </section>
  );
}
