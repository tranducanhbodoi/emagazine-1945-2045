import React from 'react';
import { motion } from 'framer-motion';

const S = { cream:'#EDEBDD', red:'#810100', redDk:'#630000', dark:'#1B1717' };

const stats = [
  { val:'8,02%',   label:'Tăng trưởng GDP 2025',       note:'Nửa đầu 2026 tiếp tục 8,18%' },
  { val:'> 930 tỷ $', label:'Kim ngạch xuất nhập khẩu', note:'Xuất siêu 20,03 tỷ USD' },
  { val:'529,6 tỷ $', label:'Tổng vốn FDI đăng ký',     note:'Hơn 45.400 dự án còn hiệu lực' },
  { val:'3.345 km', label:'Đường cao tốc hoàn thành',   note:'Kết nối trục Bắc–Nam' },
  { val:'34 tỉnh',  label:'Đơn vị hành chính cấp tỉnh', note:'Chính quyền 2 cấp, phân quyền triệt để' },
  { val:'2,95%',   label:'Tỷ lệ hộ nghèo đa chiều',    note:'Bảo hiểm y tế >95,2% dân số' },
  { val:'44/139',  label:'Chỉ số Đổi mới Sáng tạo GII', note:'AI, bán dẫn, dữ liệu lớn' },
  { val:'96 lần',  label:'Tăng quy mô kinh tế',          note:'So với khởi điểm Đổi mới 1986' },
];

export default function Chapter2() {
  return (
    <section id="chuong-2" style={{ background:S.dark }}>

      {/* Chapter band */}
      <div className="chapter-band py-16 md:py-22 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            className="mb-2 text-base sm:text-lg tracking-[.15em] uppercase"
            style={{ fontFamily:'Acme,sans-serif', color:S.red }}>
            Chương II: Bốn thập niên Đổi mới:
          </motion.p>
          <motion.h2
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ delay:.1 }}
            className="text-3xl sm:text-5xl md:text-6xl uppercase leading-tight tracking-tight"
            style={{ fontFamily:'Anton,sans-serif', color:S.cream }}>
            Những chuyển biến sâu sắc và bứt phá toàn diện
          </motion.h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">

        {/* Lead */}
        <motion.p
          initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="drop-cap text-base sm:text-lg mb-16 text-justify"
          style={{ fontFamily:'DM Sans,sans-serif', color:'rgba(237,235,221,.85)', lineHeight:1.85, maxWidth:'56rem', margin:'0 auto 4rem' }}>
          Nếu như trong những năm tháng gian khổ của chiến tranh, sức mạnh lòng dân được hiện thực hóa thành ý chí bảo vệ độc lập, thì trong thời bình, nguồn lực ấy tiếp tục được chuyển hóa thành sức mạnh kinh tế - xã hội vượt trội.
        </motion.p>

        {/* INFOGRAPHIC GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay: i*.06 }}
              className="p-5 group cursor-default"
              style={{
                border:`1px solid rgba(129,1,0,.3)`,
                background:'rgba(237,235,221,.04)',
                transition:'all .25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(129,1,0,.7)'; e.currentTarget.style.background='rgba(129,1,0,.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(129,1,0,.3)'; e.currentTarget.style.background='rgba(237,235,221,.04)'; }}
            >
              <div className="text-2xl sm:text-3xl font-black mb-1 leading-none"
                style={{ fontFamily:'Anton,sans-serif', color:'#d4a944' }}>
                {s.val}
              </div>
              <p className="text-xs font-semibold mb-1.5" style={{ fontFamily:'DM Sans,sans-serif', color:S.cream }}>
                {s.label}
              </p>
              <p className="text-[11px]" style={{ fontFamily:'DM Sans,sans-serif', color:'rgba(237,235,221,.45)' }}>
                {s.note}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Narrative */}
        <div className="max-w-4xl mx-auto space-y-10 mb-20">
          {[
            {
              title:'Tái Cấu Trúc Thể Chế & Phân Cấp Mạnh Mẽ',
              body:'Chủ trương tái cấu trúc đơn vị hành chính cấp tỉnh gọn còn 34 tỉnh, thành phố kết hợp vận hành mô hình chính quyền địa phương 2 cấp là một bước ngoặt thể chế mang tính lịch sử. Mục tiêu cốt lõi là phân cấp phân quyền triệt để, tối ưu bộ máy và tạo xung lực phát triển mới — phản ánh phương châm "địa phương quyết, địa phương làm, địa phương chịu trách nhiệm".',
            },
            {
              title:'An Sinh Xã Hội & Phát Triển Con Người',
              body:'Tỷ lệ hộ nghèo đa chiều đến cuối 2025 giảm sâu xuống còn 2,95%. Độ bao phủ bảo hiểm y tế đạt >95,2% dân số. Miễn học phí mầm non và phổ thông công lập từ năm học 2025-2026 mang lại giá trị nhân văn sâu sắc, mở rộng cơ hội học tập cho thế hệ tương lai.',
            },
            {
              title:'Kỷ Nguyên Khoa Học Công Nghệ',
              body:'Nghị quyết 57-NQ/TW xác định KH&CN, đổi mới sáng tạo và chuyển đổi số là khâu đột phá chiến lược. Chỉ số GII 2025 tăng vọt lên 44/139 nền kinh tế — bằng chứng năng lực cạnh tranh đang chuyển dịch mạnh từ tài nguyên thô sang tri thức và sáng tạo.',
            },
          ].map((card, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay: i*.1 }}
              style={{ borderLeft:`3px solid ${S.red}`, paddingLeft:'1.5rem' }}>
              <h4 className="text-base font-bold mb-3 uppercase tracking-wider"
                style={{ fontFamily:'Anton,sans-serif', color:'#d4a944', letterSpacing:'.06em' }}>
                {card.title}
              </h4>
              <p className="text-sm sm:text-base text-justify leading-relaxed"
                style={{ fontFamily:'DM Sans,sans-serif', color:'rgba(237,235,221,.8)', lineHeight:1.85 }}>
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* World position */}
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { num:'193', unit:'Quốc Gia', desc:'Quan hệ ngoại giao chính thức.' },
            { num:'Top 40', unit:'Kinh Tế Thế Giới', desc:'Quy mô nền kinh tế tăng 96 lần từ 1986.' },
            { num:'Top 20', unit:'Thương Mại', desc:'Nhóm 20 quốc gia hàng đầu về xuất nhập khẩu.' },
          ].map((it, i) => (
            <div key={i} className="text-center p-8" style={{ border:`1px solid rgba(129,1,0,.25)` }}>
              <div className="text-3xl sm:text-4xl font-black mb-1" style={{ fontFamily:'Anton,sans-serif', color:S.red }}>
                {it.num}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ fontFamily:'DM Sans,sans-serif', color:S.cream }}>
                {it.unit}
              </div>
              <p className="text-[11px]" style={{ fontFamily:'DM Sans,sans-serif', color:'rgba(237,235,221,.45)' }}>
                {it.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
