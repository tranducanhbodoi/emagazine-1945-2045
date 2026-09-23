import React from 'react';
import { motion } from 'framer-motion';
import {
  Quote,
  Sparkles,
  Users,
  CheckCircle2,
  Zap,
  Target,
  Flag
} from 'lucide-react';
import A50Slider from './A50Slider';
import CongressSlider from './CongressSlider';

// Standardized font constants matching user requirements with full Vietnamese support
const FONT_ACME = "'Be Vietnam Pro', 'Plus Jakarta Sans', sans-serif";
const FONT_ANTON = "'Anton', 'Oswald', 'Be Vietnam Pro', sans-serif";
const FONT_GOOGLE_SANS = "'Google Sans', 'Plus Jakarta Sans', 'Be Vietnam Pro', sans-serif";

export default function ChapterThree() {
  return (
    <section id="chuong-3" className="bg-[#EDEBDD] text-[#1B1717] overflow-hidden relative border-t-2 border-[#810100]/20">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#810100]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-[#630000]/5 rounded-full blur-3xl pointer-events-none" />

      {/* =================================================================
          1. TIÊU ĐỀ CHƯƠNG III
         ================================================================= */}
      <div className="pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 text-center max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#810100]/10 border border-[#810100]/30 text-[#810100] text-xs sm:text-sm font-bold tracking-widest uppercase mb-5"
        >
          <Sparkles className="w-4 h-4 text-[#810100]" />
          <span style={{ fontFamily: FONT_GOOGLE_SANS }}>CHƯƠNG III • TẦM NHÌN TRĂM NĂM</span>
        </motion.div>

        {/* Dòng 1: 'Acme', kích thước 2xl/3xl, màu đỏ thẫm/nâu sang trọng (#630000) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-xl sm:text-3xl md:text-4xl text-[#630000] tracking-wide mb-2 sm:mb-3 font-normal"
          style={{ fontFamily: FONT_ACME }}
        >
          Vươn mình trong kỷ nguyên mới:
        </motion.h2>

        {/* Dòng 2: 'Anton', viết hoa, kích thước 4xl đến 6xl, tracking-wide, đậm nét và uy nghiêm */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#810100] tracking-wide uppercase leading-tight font-normal"
          style={{ fontFamily: FONT_ANTON }}
        >
          Mọi thành quả đều hướng về Nhân dân
        </motion.h1>

        {/* Red ornamental bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '96px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1.5 bg-[#810100] mx-auto mt-4 sm:mt-6 rounded-full"
        />

        {/* Sub-intro text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-[#1B1717]/80 max-w-3xl mx-auto italic font-normal text-justify"
          style={{ fontFamily: FONT_GOOGLE_SANS }}
        >
          Nhân dịp kỷ niệm 96 năm Ngày thành lập Đảng (3/2/1930 – 3/2/2026), bài viết “Vững bước dưới cờ Đảng” của Tổng Bí thư, Chủ tịch nước Tô Lâm đã khẳng định kim chỉ nam dẫn lối toàn dân tộc bước vào kỷ nguyên vươn mình hùng cường.
        </motion.p>
      </div>

      {/* =================================================================
          2. HERO QUOTE TỔNG BÍ THƯ TÔ LÂM (CHIỀU NGANG 1920 - TỈ LỆ 16:9)
         ================================================================= */}
      <div className="w-full relative overflow-hidden my-6 sm:my-14 bg-[#1B1717] border-y-4 border-[#810100] shadow-2xl">
        <div className="max-w-[1920px] mx-auto relative min-h-[520px] sm:min-h-[660px] md:min-h-[720px] lg:aspect-[16/9] w-full flex items-center">
          {/* Main Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src="/image/tong-bi-thu-to-lam-1760421524119147116639.jpg"
              alt="Tổng Bí thư, Chủ tịch nước Tô Lâm"
              className="w-full h-full object-cover object-[85%_20%] sm:object-[82%_25%] md:object-[80%_center] filter brightness-[0.85] contrast-[1.08]"
              onError={(e) => {
                e.target.src = '/images/to-lam/to-lam-4.jpg';
              }}
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1717] via-[#1B1717]/85 sm:via-[#1B1717]/55 to-transparent w-full md:w-3/5 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B1717] via-transparent to-black/40 z-10" />
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#810100]/30 rounded-full blur-3xl pointer-events-none z-10" />
          </div>

          {/* Text Container with Framer Motion Slide-in from Left */}
          <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-24 w-full">
            <div className="max-w-xl lg:max-w-[540px] xl:max-w-[580px]">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="bg-[#1B1717]/85 sm:bg-[#1B1717]/80 backdrop-blur-md p-5 sm:p-9 md:p-10 rounded-2xl sm:rounded-3xl border border-[#EDEBDD]/20 shadow-2xl relative"
              >
                {/* Decorative Quote Icon */}
                <div className="absolute -top-4 -left-2 sm:-top-5 sm:-left-5 w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#810100] border-2 border-[#EDEBDD]/40 flex items-center justify-center shadow-lg text-[#EDEBDD]">
                  <Quote className="w-4 h-4 sm:w-6 sm:h-6 fill-current" />
                </div>

                {/* Subtitle tag */}
                <div className="flex items-center gap-2 mb-3 sm:mb-4 pt-1">
                  <span className="w-2 h-2 rounded-full bg-[#810100] animate-ping" />
                  <span
                    className="text-[11px] sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[#EDEBDD] uppercase"
                    style={{ fontFamily: FONT_GOOGLE_SANS }}
                  >
                    BÀI HỌC SÂU SẮC • Ý NGHĨA ĐẶC BIỆT QUAN TRỌNG
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote
                  className="text-base sm:text-2xl md:text-3xl font-medium text-[#EDEBDD] leading-relaxed sm:leading-snug md:leading-relaxed mb-4 sm:mb-6 italic text-justify"
                  style={{ 
                    fontFamily: FONT_GOOGLE_SANS,
                    textAlign: 'justify',
                    textJustify: 'inter-word'
                  }}
                >
                  “Bài học sâu sắc, có ý nghĩa đặc biệt quan trọng, đó là sự nghiệp cách mạng là của Nhân dân, do Nhân dân, vì Nhân dân. Nhân dân vừa là người làm nên những thắng lợi lịch sử, vừa là nguồn sức mạnh vô tận để Đảng tồn tại và phát triển”.
                </blockquote>

                {/* Divider */}
                <div className="w-20 h-0.5 bg-gradient-to-r from-[#810100] to-transparent mb-5" />

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h3
                      className="text-xl sm:text-2xl md:text-3xl text-[#EDEBDD] uppercase tracking-wide font-normal drop-shadow"
                      style={{ fontFamily: FONT_ANTON }}
                    >
                      Tổng Bí thư, Chủ tịch nước Tô Lâm
                    </h3>
                    <p
                      className="text-xs sm:text-sm text-[#EDEBDD]/70 font-light mt-0.5"
                      style={{ fontFamily: FONT_GOOGLE_SANS }}
                    >
                      Bài viết <span className="text-[#EDEBDD] font-medium">“Vững bước dưới cờ Đảng”</span> nhân dịp kỷ niệm 96 năm Ngày thành lập Đảng (3/2/1930 – 3/2/2026)
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Flow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">

        {/* =================================================================
            3. ĐOẠN DẪN QUOTE 3 & TYPOGRAPHY BÁO CHÍ
           ================================================================= */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/80 p-8 sm:p-12 rounded-3xl border-l-8 border-[#810100] border-y border-r border-[#810100]/20 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className="px-3 py-1 rounded bg-[#810100] text-[#EDEBDD] text-xs font-bold uppercase tracking-widest"
                style={{ fontFamily: FONT_ANTON }}
              >
                NGUỒN NĂNG LƯỢNG BỨT PHÁ
              </span>
            </div>

            <p
              className="text-xl sm:text-2xl md:text-3xl font-medium text-[#1B1717] leading-relaxed italic"
              style={{ fontFamily: FONT_GOOGLE_SANS }}
            >
              “Trong bối cảnh hiện nay, sức mạnh toàn dân không chỉ là lá chắn bảo vệ các thành quả cách mạng mà còn phải được chuyển hóa thành nguồn năng lượng bứt phá, đưa quốc gia phát triển nhanh, bền vững và tự chủ.”
            </p>
          </motion.div>
        </div>

        {/* =================================================================
            4. PHOTO STORY 1: PHOTO ALBUM SỰ KIỆN A50 - A80 (VTV)
           ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 sm:mb-28"
        >
          <A50Slider />
        </motion.div>

        {/* =================================================================
            5. HAI MỐC LỊCH SỬ 100 NĂM & NGUỒN LỰC CON NGƯỜI LÀM TRUNG TÂM
           ================================================================= */}
        <div className="mb-20 sm:mb-28">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span
              className="text-xs sm:text-sm font-bold text-[#810100] uppercase tracking-[0.2em] block mb-3.5 sm:mb-4"
              style={{ fontFamily: FONT_ACME }}
            >
              CHIẾN LƯỢC PHÁT TRIỂN DÂN TỘC
            </span>
            <h3
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1B1717] uppercase tracking-tight mt-3 sm:mt-4 leading-tight"
              style={{ fontFamily: FONT_ANTON }}
            >
              Hai Mốc Son Lịch Sử 100 Năm
            </h3>
            <div className="w-16 h-1.5 bg-[#810100] mx-auto mt-5 rounded-full" />
          </div>

          {/* Narrative lead text */}
          <div className="max-w-4xl mx-auto mb-12">
            <p
              className="text-lg sm:text-xl text-[#1B1717] leading-relaxed font-normal text-justify"
              style={{ fontFamily: FONT_GOOGLE_SANS }}
            >
              Đất nước đang hướng tới hai mốc lịch sử 100 năm: <strong className="text-[#810100] font-semibold">Năm 2030 (kỷ niệm 100 năm thành lập Đảng)</strong> trở thành nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao; và đến <strong className="text-[#810100] font-semibold">năm 2045 (kỷ niệm 100 năm thành lập nước)</strong> trở thành quốc gia phát triển, thu nhập cao. Để đạt được mục tiêu tăng trưởng hai con số, mô hình phát triển không thể tiếp tục dựa vào việc mở rộng đầu tư hay khai thác tài nguyên thô, mà phải chuyển dịch mạnh mẽ sang lấy nguồn lực con người làm trung tâm.
            </p>
          </div>

          {/* 2 Centennial Milestone Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Cột mốc 2030 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border-t-8 border-[#810100] border-x border-b border-[#810100]/20 hover:shadow-2xl transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#810100]/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-125" />
              
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-5xl sm:text-6xl font-black text-[#810100] tracking-wide"
                  style={{ fontFamily: FONT_ANTON, letterSpacing: '0.08em' }}
                >
                  2030
                </span>
                <span
                  className="px-3 py-1.5 rounded-full bg-[#810100]/10 text-[#810100] text-xs font-bold uppercase tracking-wider border border-[#810100]/25"
                  style={{ fontFamily: FONT_GOOGLE_SANS }}
                >
                  100 Năm Thành Lập Đảng
                </span>
              </div>

              <h4
                className="text-xl sm:text-2xl font-bold text-[#1B1717] mb-3"
                style={{ fontFamily: FONT_GOOGLE_SANS }}
              >
                Nước Đang Phát Triển Có Công Nghiệp Hiện Đại
              </h4>

              <p
                className="text-[#1B1717]/80 leading-relaxed text-sm sm:text-base mb-6"
                style={{ fontFamily: FONT_GOOGLE_SANS }}
              >
                Đạt mức <strong>thu nhập trung bình cao</strong>. Tái cấu trúc nền kinh tế theo hướng kinh tế số, công nghệ cao, kinh tế xanh và kinh tế tuần hoàn, lấy đổi mới sáng tạo làm động lực bứt phá chủ yếu.
              </p>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#810100] bg-[#EDEBDD]/60 p-3 rounded-xl border border-[#810100]/20">
                <CheckCircle2 className="w-4 h-4 text-[#810100] flex-shrink-0" />
                <span style={{ fontFamily: FONT_GOOGLE_SANS }}>
                  Nền tảng chuyển dịch mô hình phát triển dựa trên tri thức
                </span>
              </div>
            </motion.div>

            {/* Cột mốc 2045 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border-t-8 border-[#630000] border-x border-b border-[#630000]/25 ring-2 ring-[#810100]/20 hover:shadow-2xl transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#630000]/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-125" />
              
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-5xl sm:text-6xl font-black text-[#630000] tracking-wide"
                  style={{ fontFamily: FONT_ANTON, letterSpacing: '0.08em' }}
                >
                  2045
                </span>
                <span
                  className="px-3 py-1.5 rounded-full bg-[#630000]/10 text-[#630000] text-xs font-bold uppercase tracking-wider border border-[#630000]/25"
                  style={{ fontFamily: FONT_GOOGLE_SANS }}
                >
                  100 Năm Nước Độc Lập
                </span>
              </div>

              <h4
                className="text-xl sm:text-2xl font-bold text-[#1B1717] mb-3"
                style={{ fontFamily: FONT_GOOGLE_SANS }}
              >
                Quốc Gia Phát Triển, Thu Nhập Cao
              </h4>

              <p
                className="text-[#1B1717]/80 leading-relaxed text-sm sm:text-base mb-6"
                style={{ fontFamily: FONT_GOOGLE_SANS }}
              >
                Trở thành nước <strong>phát triển, thu nhập cao</strong> theo định hướng XHCN. Khẳng định vững chắc vị thế quốc gia hùng cường, văn minh, hạnh phúc trên trường quốc tế.
              </p>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#630000] bg-[#EDEBDD]/60 p-3 rounded-xl border border-[#630000]/20">
                <Sparkles className="w-4 h-4 text-[#810100] flex-shrink-0" />
                <span style={{ fontFamily: FONT_GOOGLE_SANS }}>
                  Hiện thực hóa trọn vẹn khát vọng vươn mình của dân tộc
                </span>
              </div>
            </motion.div>
          </div>

          {/* Luận điểm tư tưởng Hồ Chí Minh & TS. Chu Đức Tính */}
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white/80 rounded-2xl p-6 sm:p-8 border border-[#810100]/20 shadow-md"
            >
              <h4
                className="text-lg sm:text-xl font-bold text-[#810100] mb-3 flex items-center gap-2"
                style={{ fontFamily: FONT_GOOGLE_SANS }}
              >
                <Users className="w-5 h-5 text-[#810100]" />
                <span>Con Người Vừa Là Mục Tiêu, Vừa Là Động Lực Của Sự Phát Triển</span>
              </h4>
              <p
                className="text-base sm:text-lg text-[#1B1717] leading-relaxed text-justify mb-4"
                style={{ fontFamily: FONT_GOOGLE_SANS }}
              >
                Theo TS. Chu Đức Tính, nguyên Giám đốc Bảo tàng Hồ Chí Minh, đây chính là lúc cần vận dụng tư tưởng Hồ Chí Minh về con người: <em>Con người vừa là mục tiêu, vừa là động lực của sự phát triển.</em>
              </p>
              <p
                className="text-base sm:text-lg text-[#1B1717] leading-relaxed text-justify italic font-medium"
                style={{ fontFamily: FONT_GOOGLE_SANS }}
              >
                “Nguồn lực” của một quốc gia không chỉ nằm ở vốn, tài nguyên, cơ sở hạ tầng hay công nghệ, mà quan trọng hơn là khả năng phát huy trí tuệ, trách nhiệm và sức sáng tạo của con người. Nếu không khơi dậy được những tiềm năng ấy, các nguồn lực vật chất dù lớn đến đâu cũng khó tạo thành động lực phát triển bền vững. Bởi vậy, phát huy sức mạnh con người phải trở thành trọng tâm của “cuộc cách mạng thời bình”, trong đó mỗi người dân đều là một chủ thể đóng góp vào sự phát triển của đất nước.
              </p>
            </motion.div>
          </div>
        </div>

        {/* =================================================================
            6. ANIMATED BOX TEXT (TRÍCH DẪN TS. CHU ĐỨC TÍNH - QUOTE 4)
         ================================================================= */}
        <div className="max-w-4xl mx-auto mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            animate={{ y: [0, -4, 0] }}
            className="relative bg-gradient-to-r from-[#1B1717] via-[#630000] to-[#1B1717] text-[#EDEBDD] p-8 sm:p-12 rounded-3xl border-2 border-[#810100] shadow-2xl overflow-hidden"
            style={{
              boxShadow: '0 25px 50px -12px rgba(129, 1, 0, 0.35)'
            }}
          >
            {/* Background glowing orbs */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#810100]/30 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#630000]/40 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <span
                  className="text-[#EDEBDD] font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2"
                  style={{ fontFamily: FONT_ANTON }}
                >
                  <span className="w-6 h-0.5 bg-[#810100] inline-block" />
                  KHƠI DẬY NỘI LỰC MỌI TẦNG LỚP
                </span>
                <span
                  className="text-[11px] font-mono text-[#EDEBDD]/80 border border-[#EDEBDD]/30 px-2.5 py-0.5 rounded-full"
                  style={{ fontFamily: FONT_GOOGLE_SANS }}
                >
                  TS. CHU ĐỨC TÍNH
                </span>
              </div>

              {/* Quote text */}
              <blockquote
                className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed sm:leading-relaxed text-[#EDEBDD] italic mb-6"
                style={{ fontFamily: FONT_GOOGLE_SANS }}
              >
                “Đội ngũ cán bộ phải dám nghĩ, dám làm, dám chịu trách nhiệm vì lợi ích chung. Cộng đồng doanh nhân cần mạnh dạn đổi mới, tiên phong đầu tư để tạo ra những giá trị mới. Thế hệ trẻ nuôi dưỡng khát vọng, dám thử sức, dám cống hiến và đi đầu trong những lĩnh vực mới.”
              </blockquote>

              {/* Author signature */}
              <div className="border-t border-[#EDEBDD]/20 pt-4 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4
                    className="text-lg sm:text-xl font-normal text-[#EDEBDD] tracking-wide"
                    style={{ fontFamily: FONT_ANTON }}
                  >
                    TS. CHU ĐỨC TÍNH
                  </h4>
                  <p
                    className="text-xs sm:text-sm text-[#EDEBDD]/70 font-light"
                    style={{ fontFamily: FONT_GOOGLE_SANS }}
                  >
                    Nguyên Giám đốc Bảo tàng Hồ Chí Minh
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#EDEBDD] text-xs">
                  <Zap className="w-4 h-4 text-[#810100] animate-pulse" />
                  <span style={{ fontFamily: FONT_GOOGLE_SANS }}>Tinh thần hành động & cống hiến</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =================================================================
            7. ĐOẠN KẾT: NHÀ NƯỚC KIẾN TẠO, BÀI HỌC NỘI LỰC & TẦM NHÌN ĐẾN NĂM 2130
           ================================================================= */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Phân tích thể chế */}
            <p
              className="text-lg sm:text-xl text-[#1B1717] leading-relaxed text-justify"
              style={{ fontFamily: FONT_GOOGLE_SANS }}
            >
              Ở chiều ngược lại, Nhà nước giữ vai trò <strong>kiến tạo phát triển</strong>, tạo điều kiện tối đa cho các lực lượng xã hội bứt phá thông qua việc cởi trói thể chế. TS. Chu Đức Tính cho rằng thể chế phải thực sự trở thành <em>“đòn bẩy”</em> mở đường cho người dân và doanh nghiệp tự do sáng tạo. Khi rào cản thể chế được tháo gỡ, doanh nghiệp yên tâm đầu tư dài hạn, sức mạnh của từng cá nhân sẽ hợp lực thành sức mạnh tổng hợp của cả nền kinh tế.
            </p>

            {/* Bài học xương máu */}
            <div className="p-6 sm:p-8 bg-white rounded-2xl border-l-4 border-[#810100] shadow-md border-r border-y border-[#810100]/15">
              <p
                className="text-lg sm:text-xl text-[#1B1717] leading-relaxed text-justify font-medium"
                style={{ fontFamily: FONT_GOOGLE_SANS }}
              >
                Bài học xương máu từ lịch sử cho thấy, một dân tộc muốn vươn lên hùng cường bắt buộc phải dựa vào chính <strong>nội lực của mình</strong>. Dẫu tranh thủ tối đa sự hợp tác quốc tế, nhân tố quyết định thắng lợi vẫn là nội lực dân tộc, được kết tinh từ lòng yêu nước, ý chí tự cường, nguồn nhân lực chất lượng cao và tiềm lực cơ sở vật chất vững chắc.
              </p>
            </div>

            {/* Tầm nhìn đến 2130 */}
            <div className="p-8 sm:p-10 bg-[#810100] text-[#EDEBDD] rounded-3xl shadow-xl relative overflow-hidden border border-[#630000]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#630000]/40 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <span
                  className="px-3 py-1 rounded bg-[#EDEBDD] text-[#810100] text-xs font-black uppercase tracking-widest inline-block mb-3"
                  style={{ fontFamily: FONT_ANTON }}
                >
                  TẦM NHÌN XUYÊN THẾ KỶ ĐẾN NĂM 2130
                </span>

                <h4
                  className="text-2xl sm:text-3xl md:text-4xl text-[#EDEBDD] leading-tight mb-4 font-normal"
                  style={{ fontFamily: FONT_ANTON }}
                >
                  <span className="inline-block">QUỐC GIA XHCN PHÁT TRIỂN TRÌNH ĐỘ CAO,</span>{' '}
                  <span className="inline-block">VĂN MINH & HIỆN ĐẠI</span>
                </h4>

                <p
                  className="text-base sm:text-lg text-[#EDEBDD]/90 leading-relaxed text-justify"
                  style={{ fontFamily: FONT_GOOGLE_SANS }}
                >
                  Đó chính là nền tảng để Việt Nam hiện thực hóa thành công các mục tiêu 100 năm, và xa hơn là tầm nhìn đến năm 2130: trở thành quốc gia XHCN phát triển trình độ cao, văn minh, hiện đại, có năng lực sáng tạo và sức sống trường tồn theo tinh thần Nghị quyết Hội nghị Trung ương 3, khóa XIV.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =================================================================
            8. PHOTO STORY CUỐI: ĐẠI HỘI XIV
           ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-16 sm:my-24"
        >
          <CongressSlider />
        </motion.div>

      </div>
    </section>
  );
}
