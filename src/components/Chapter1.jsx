import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Timeline data ─────────────────────────── */
const TL = [
  {
    year: '1945',
    label: 'Cách mạng Tháng Tám',
    title: 'Tuyên ngôn Độc lập',
    body: 'Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.',
  },
  {
    year: '1954',
    label: 'Điện Biên Phủ',
    title: 'Chiến thắng lừng lẫy năm châu',
    body: 'Ngày 7/5/1954, chiến thắng Điện Biên Phủ chấn động địa cầu, buộc thực dân Pháp ký Hiệp định Genève, kết thúc cuộc kháng chiến 9 năm.',
  },
  {
    year: '1975',
    label: 'Thống nhất non sông',
    title: 'Giải phóng hoàn toàn miền Nam',
    body: 'Ngày 30/4/1975, Chiến dịch Hồ Chí Minh toàn thắng. Đất nước thống nhất sau hàng thập kỷ chia cắt và chiến tranh.',
  },
  {
    year: '1986',
    label: 'Đổi mới toàn diện',
    title: 'Đại hội VI — Khởi đầu kỷ nguyên mới',
    body: 'Đảng khởi xướng công cuộc Đổi mới toàn diện, chuyển đổi mô hình phát triển, đặt nền tảng cho những thành tựu kinh tế - xã hội vượt bậc sau này.',
  },
];

/* ─── Inline styles using brand palette ─────── */
const S = {
  cream:   '#EDEBDD',
  red:     '#810100',
  redDk:   '#630000',
  dark:    '#1B1717',
};

export default function Chapter1() {
  const [tl, setTl] = useState(3); // default: 1986

  return (
    <section id="chapter-1" style={{ background: S.cream }}>

      {/* ── CHAPTER BAND ── */}
      <div className="chapter-band py-16 md:py-22 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            className="mb-2 text-base sm:text-lg tracking-[.15em] uppercase"
            style={{ fontFamily:'Acme,sans-serif', color:S.red }}>
            Chương I: Sức mạnh lòng dân:
          </motion.p>
          <motion.h2
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ delay:.1 }}
            className="text-3xl sm:text-5xl md:text-6xl uppercase leading-tight tracking-tight"
            style={{ fontFamily:'Anton,sans-serif', color:S.cream }}>
            Nguồn lực quyết định mọi thắng lợi lịch sử
          </motion.h2>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">

        {/* VIDEO */}
        <motion.div
          initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="mb-16">
          <div className="video-wrap shadow-xl" style={{ border:`1px solid rgba(129,1,0,.15)` }}>
            <iframe
              src="https://www.youtube.com/embed/vLb72bW_mHU?rel=0"
              title="Hành trình lịch sử Việt Nam"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen />
          </div>
        </motion.div>

        {/* LEAD PARAGRAPH */}
        <motion.p
          initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="drop-cap text-base sm:text-lg text-justify mb-16"
          style={{ fontFamily:'DM Sans,sans-serif', color:S.dark, lineHeight:1.85 }}>
          Hơn tám thập kỷ trải qua kể từ Ngày Độc lập 2/9/1945, Việt Nam đã trải qua một hành trình lịch sử đầy kiêu hãnh. Từ một quốc gia non trẻ phải đối mặt với vô vàn thử thách hiểm nghèo ngay sau khi giành lại quyền tự chủ, Việt Nam hôm nay đã vươn lên thành một nền kinh tế phát triển năng động, hội nhập sâu rộng và khẳng định được thế và lực trên bản đồ quốc tế.
        </motion.p>

        {/* ── TIMELINE ── */}
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="mb-16">

          {/* Horizontal rail */}
          <div className="relative flex items-center justify-between mb-6 px-2">
            {/* line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px"
              style={{ background:'rgba(129,1,0,.3)' }} />

            {TL.map((item, i) => (
              <button key={i} onClick={() => setTl(i)}
                className="relative flex flex-col items-center gap-3 group"
                style={{ zIndex:1 }}>
                <div className={`tl-dot ${tl === i ? 'active' : ''}`} />
                <div className="text-center">
                  <span className="block text-xl sm:text-2xl font-black leading-none"
                    style={{ fontFamily:'Anton,sans-serif', color: tl===i ? S.red : S.dark }}>
                    {item.year}
                  </span>
                  <span className="block text-[10px] sm:text-xs mt-1 max-w-[90px] leading-snug"
                    style={{ fontFamily:'DM Sans,sans-serif', color: tl===i ? S.red : 'rgba(27,23,23,.55)' }}>
                    {item.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Active card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tl}
              initial={{ opacity:0, y:10 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0 }}
              transition={{ duration:.35 }}
              className="p-6 sm:p-8"
              style={{
                borderLeft:`3px solid ${S.red}`,
                background:'rgba(129,1,0,.04)',
              }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color:S.red, fontFamily:'DM Sans,sans-serif' }}>
                {TL[tl].year} — {TL[tl].label}
              </p>
              <h4 className="text-lg sm:text-xl font-bold mb-2" style={{ fontFamily:'Anton,sans-serif', color:S.dark }}>
                {TL[tl].title}
              </h4>
              <p className="text-sm sm:text-base leading-relaxed" style={{ fontFamily:'DM Sans,sans-serif', color:S.dark }}>
                {TL[tl].body}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* BODY PARAGRAPHS */}
        {[
          'Nhìn lại từng cột mốc chói lọi, từ ngọn lửa Cách mạng Tháng Tám 1945, âm vang Điện Biên Phủ 1954, thống nhất non sông năm 1975 cho tới công cuộc Đổi mới toàn diện 1986, một chân lý vĩnh hằng luôn được khẳng định: Nhân dân chính là gốc rễ, là nguồn đòn bẩy nội sinh quyết định mọi bước chuyển mình của dân tộc.',
          'Bình luận về dòng chảy lịch sử này, PGS.TS Bùi Đình Phong (Học viện Chính trị Quốc gia Hồ Chí Minh) khẳng định rằng dẫu thời gian có thể trôi qua, các giá trị tư tưởng nền tảng mà Chủ tịch Hồ Chí Minh đã đúc kết trong Tuyên ngôn Độc lập — từ khát vọng tự do, quyền dân chủ cho đến chiến lược đại đoàn kết — vẫn giữ nguyên giá trị soi đường cho sự nghiệp phát triển đất nước hôm nay.',
        ].map((txt, i) => (
          <motion.p key={i}
            initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ delay: i * .1 }}
            className="text-base sm:text-lg text-justify mb-8 last:mb-16"
            style={{ fontFamily:'DM Sans,sans-serif', color:S.dark, lineHeight:1.85 }}>
            {txt}
          </motion.p>
        ))}

      </div>

      {/* ── QUOTE 1: PGS IMAGE LEFT / QUOTE RIGHT (full-bleed 16:9-ish) ── */}
      <motion.div
        initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
        className="w-full flex flex-col md:flex-row overflow-hidden"
        style={{ minHeight:'420px' }}>

        {/* Left: image */}
        <div className="md:w-1/2 relative overflow-hidden" style={{ minHeight:'360px' }}>
          <img src="/images/pgs.jpg" alt="PGS.TS Bùi Đình Phong"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ transition:'transform .7s ease' }}
            onMouseEnter={e => e.currentTarget.style.transform='scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
          />
          {/* Bottom caption overlay */}
          <div className="absolute bottom-0 inset-x-0 px-8 py-5"
            style={{ background:'linear-gradient(transparent,rgba(27,23,23,.85))' }}>
            <p className="text-base font-black uppercase tracking-wider"
              style={{ fontFamily:'Anton,sans-serif', color:S.cream }}>
              PGS.TS Bùi Đình Phong
            </p>
            <p className="text-xs mt-0.5" style={{ fontFamily:'DM Sans,sans-serif', color:'rgba(237,235,221,.7)' }}>
              Học viện Chính trị Quốc gia Hồ Chí Minh
            </p>
          </div>
        </div>

        {/* Right: quote */}
        <motion.div
          initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
          transition={{ delay:.2 }}
          className="md:w-1/2 flex flex-col justify-center px-8 sm:px-14 py-14"
          style={{ background:S.red }}>
          {/* Opening mark */}
          <div className="text-7xl leading-none mb-4 font-black"
            style={{ fontFamily:'Georgia,serif', color:'rgba(237,235,221,.25)', lineHeight:.8 }}>"</div>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold italic leading-snug mb-8"
            style={{ fontFamily:'DM Sans,sans-serif', color:S.cream }}>
            Chúng ta có Tuyên ngôn Độc lập là nhờ Cách mạng tháng Tám, mà có được Cách mạng tháng Tám là nhờ rất nhiều yếu tố, trong đó quan trọng nhất là sức mạnh của trí dân, lòng dân, niềm tin của dân. Có niềm tin của dân là có tất cả.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-px" style={{ background:'rgba(237,235,221,.5)' }} />
            <p className="text-sm font-black uppercase tracking-widest"
              style={{ fontFamily:'Anton,sans-serif', color:S.cream }}>
              PGS.TS Bùi Đình Phong
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* ── STICKY SPLIT: TEXT LEFT, IMAGE RIGHT ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Scrolling text */}
          <div className="w-full lg:w-[55%] space-y-8">
            {[
              {
                head: null,
                body: 'Thực tiễn cách mạng Việt Nam đã chứng minh trọn vẹn triết lý ấy. Thắng lợi của Cách mạng Tháng Tám không đơn thuần là một sự kiện chính trị sang trang lịch sử dân tộc, mà còn là sự kết tinh cao độ của tinh thần yêu nước, khát vọng tự chủ và sức mạnh gắn kết của toàn thể dân tộc.',
              },
              {
                head: null,
                body: 'Sức mạnh quật cường của khối đại đoàn kết không chỉ tỏa sáng trong bão lửa chiến tranh mà còn đóng vai trò then chốt trong công cuộc thiết lập và phát triển đất nước thời bình. Đó là lý do vì sao tư tưởng Hồ Chí Minh vẫn vẹn nguyên giá trị thời đại.',
              },
              {
                head: null,
                body: 'Trong bối cảnh đất nước bước vào giai đoạn bứt phá, nhiệm vụ củng cố niềm tin của quần chúng nhân dân vào sự lãnh đạo của Đảng và Nhà nước càng trở nên mang tính sống còn. Đội ngũ cán bộ, đảng viên cần giữ vững bản lĩnh, nêu cao tinh thần phụng sự và đặt lợi ích quốc gia lên trên hết.',
              },
              {
                head: null,
                body: 'Thước đo niềm tin ấy phải được bồi đắp qua hành động thực tiễn — tôn trọng và bảo vệ quyền làm chủ của dân. Tinh thần "trọng dân" được Chủ tịch Hồ Chí Minh nhấn mạnh: "Trong bầu trời không gì quý bằng nhân dân. Trong thế giới không gì mạnh bằng lực lượng đoàn kết của nhân dân."',
              },
            ].map((p, i) => (
              <motion.p key={i}
                initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ delay: i * .08 }}
                className="text-base sm:text-lg text-justify"
                style={{ fontFamily:'DM Sans,sans-serif', color:S.dark, lineHeight:1.85 }}>
                {p.body}
              </motion.p>
            ))}

            {/* Quote 2 — end of chapter 1 section */}
            <motion.blockquote
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              className="mt-10 p-8 sm:p-10"
              style={{
                background: S.redDk,
                borderLeft:`5px solid #c9a227`,
              }}>
              <p className="text-base sm:text-lg font-medium italic leading-relaxed"
                style={{ fontFamily:'DM Sans,sans-serif', color:S.cream }}>
                Có thể khẳng định, các định hướng mang tính bước ngoặt tại Đại hội XIV của Đảng — từ việc kiên định quan điểm "dân là gốc", củng cố vai trò lãnh đạo của Đảng đến việc coi công tác cán bộ là "gốc của mọi công việc" — chính là bước kế thừa và nâng tầm tư tưởng Hồ Chí Minh trong giai đoạn mới. Đây sẽ là bệ phóng quan trọng nhằm khơi dậy niềm tin, quy tụ sức mạnh đoàn kết toàn dân để biến khát vọng vươn mình thành những thành tựu thực tế.
              </p>
            </motion.blockquote>
          </div>

          {/* Sticky image — bac-den-tham with left dissolve */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity:0, scale:.97 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }}
              className="relative overflow-hidden group"
              style={{ borderRadius:'2px', aspectRatio:'3/4' }}>
              <img
                src="/images/bac-den-tham-mot-lop-hoc-o-khu-lao-dong-15972012726341241350002.jpg"
                alt="Bác Hồ thăm lớp học khu lao động"
                className="dissolve-left w-full h-full object-cover"
                style={{ transition:'transform .7s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform='scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
              />
              {/* Bottom overlay */}
              <div className="absolute bottom-0 inset-x-0 px-6 py-5"
                style={{ background:'linear-gradient(transparent,rgba(27,23,23,.8))' }}>
                <p className="text-xs font-semibold italic" style={{ fontFamily:'DM Sans,sans-serif', color:'rgba(237,235,221,.8)' }}>
                  Bác Hồ đến thăm một lớp học ở khu lao động
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
