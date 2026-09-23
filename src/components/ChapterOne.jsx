import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  X,
  Quote,
  ChevronRight,
  Info
} from 'lucide-react';

// 5 historical milestones
const TIMELINE_DATA = [
  {
    date: '2/9/1945',
    year: '1945',
    title: 'Tuyên ngôn Độc lập',
    summary: 'Khai sinh nước Việt Nam Dân chủ Cộng hòa - Nhà nước công nông đầu tiên ở Đông Nam Á.',
    detail: 'Tại Quảng trường Ba Đình lịch sử, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập bất hủ, khẳng định quyền tự do, độc lập thiêng liêng của dân tộc Việt Nam trước toàn thế giới. Thắng lợi bắt nguồn từ sức mạnh tổng hợp của toàn dân tộc kiên cường đứng lên giành chính quyền.'
  },
  {
    date: '7/5/1954',
    year: '1954',
    title: 'Chiến thắng Điện Biên Phủ',
    summary: '“Lừng lẫy năm châu, chấn động địa cầu”, làm thất bại hoàn toàn kế hoạch quân sự Nava của Pháp.',
    detail: 'Trải qua 56 ngày đêm khoét núi, ngủ hầm, mưa dầm, cơm vắt, máu trộn bùn non, quân và dân ta đã đập tan tập đoàn cứ điểm Điện Biên Phủ kiên cố nhất Đông Dương của thực dân Pháp. Chiến thắng là đỉnh cao của nghệ thuật chiến tranh nhân dân Việt Nam thời đại Hồ Chí Minh.'
  },
  {
    date: '21/7/1954',
    year: '1954',
    title: 'Hiệp định Genève',
    summary: 'Chấm dứt chiến tranh ở Đông Dương, quốc tế công nhận độc lập, chủ quyền, thống nhất của Việt Nam.',
    detail: 'Hiệp định Genève được ký kết, buộc các nước lớn phải tôn trọng độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam, Lào và Campuchia. Mặc dù đất nước tạm thời bị chia cắt tại vĩ tuyến 17, đây là cơ sở pháp lý quốc tế vững chắc để nhân dân tiếp tục sự nghiệp giải phóng miền Nam.'
  },
  {
    date: '30/4/1975',
    year: '1975',
    title: 'Giải phóng miền Nam',
    summary: 'Chiến dịch Hồ Chí Minh toàn thắng, non sông thu về một mối, đất nước thống nhất.',
    detail: 'Cuộc Tổng tiến công và nổi dậy mùa Xuân 1975 với đỉnh cao là Chiến dịch Hồ Chí Minh lịch sử đã kết thúc vẻ vang 30 năm chiến tranh giải phóng dân tộc. Thắng lợi vĩ đại này mãi mãi đi vào lịch sử dân tộc như một trang vàng chói lọi nhất, biểu tượng rực rỡ của sức mạnh lòng dân toàn quốc.'
  },
  {
    date: 'Năm 1986',
    year: '1986',
    title: 'Đại hội VI của Đảng',
    summary: 'Khởi xướng công cuộc Đổi mới toàn diện đất nước, xoay chuyển vận mệnh kinh tế - xã hội.',
    detail: 'Đại hội đại biểu toàn quốc lần thứ VI của Đảng đã nhìn thẳng vào sự thật, đánh giá đúng sự thật, đề ra đường lối Đổi mới toàn diện, trước hết là đổi mới tư duy kinh tế. Quyết sách lịch sử này đã giải phóng sức sản xuất, đưa đất nước thoát khỏi khủng hoảng và vươn mình mạnh mẽ ra thế giới.'
  }
];

export default function ChapterOne() {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);

  return (
    <section id="chuong-1" className="bg-[#FAF9F5] text-neutral-800 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =================================================================
            1. TIÊU ĐỀ CHƯƠNG I
           ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9 }}
          className="mb-14 sm:mb-20 text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#810100]/10 border border-[#810100]/20 text-[#810100] text-xs font-bold tracking-widest uppercase mb-4">
            CHƯƠNG I
          </div>

          <h2 className="font-acme text-xl sm:text-3xl md:text-4xl text-[#630000] tracking-wide mb-2 font-normal">
            Sức mạnh lòng dân:
          </h2>

          <h3 className="font-anton text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#810100] tracking-wide uppercase leading-tight font-normal">
            Nguồn lực quyết định mọi thắng lợi lịch sử
          </h3>

          <div className="w-16 sm:w-20 h-1 bg-[#810100] mx-auto mt-4 sm:mt-6 rounded-full" />
        </motion.div>

        {/* =================================================================
            2. VIDEOGRAPHIC SECTION (16:9 responsive, playsinline, rounded-xl)
           ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-20 sm:mb-28 max-w-5xl mx-auto"
        >
          <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-neutral-300/80 bg-neutral-900 group">
            <iframe
              className="w-full h-full border-0"
              src="https://www.youtube.com/embed/vLb72bW_mHU?autoplay=0&rel=0&playsinline=1&modestbranding=1"
              title="Sức mạnh lòng dân - Nguồn lực quyết định mọi thắng lợi lịch sử"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="text-center text-xs sm:text-sm text-neutral-500 mt-3 italic">
            Video tư liệu: Hành trình lịch sử 80 năm dựng nước và giữ nước của dân tộc Việt Nam.
          </p>
        </motion.div>

        {/* =================================================================
            3. ĐOẠN DẪN & INTERACTIVE TIMELINE
           ================================================================= */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed font-normal">
            Hơn tám thập kỷ trải qua kể từ Ngày Độc lập 2/9/1945, Việt Nam đã trải qua một hành trình lịch sử đầy kiêu hãnh. Từ một quốc gia non trẻ phải đối mặt với vô vàn thử thách hiểm nghèo ngay sau khi giành lại quyền tự chủ, Việt Nam hôm nay đã vươn lên thành một nền kinh tế phát triển năng động, hội nhập sâu rộng và khẳng định được thế và lực trên bản đồ quốc tế.
          </p>
        </div>

        {/* Interactive Timeline Box */}
        <div className="mb-24 sm:mb-32 max-w-6xl mx-auto bg-[#EDEBDD]/60 rounded-3xl p-6 sm:p-10 border border-[#810100]/15 shadow-sm">
          <div className="text-center mb-10">
            <h4 className="font-anton text-2xl sm:text-3xl text-[#810100] uppercase tracking-wide">
              Những cột mốc lịch sử chói lọi của dân tộc
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              (Nhấp vào từng mốc thời gian để xem phân tích chi tiết)
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TIMELINE_DATA.map((item, idx) => {
              const isSelected = activeTimelineIdx === idx;
              return (
                <motion.div
                  key={item.date}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setActiveTimelineIdx(idx);
                    setSelectedMilestone(item);
                  }}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative overflow-hidden border ${
                    isSelected
                      ? 'bg-white shadow-xl border-[#810100] ring-2 ring-[#810100]/20'
                      : 'bg-white/80 hover:bg-white shadow-md hover:shadow-xl border-neutral-200/90'
                  }`}
                >
                  {/* Decorative tag */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#810100]/10 text-[#810100] font-anton text-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    <span className="text-xs font-semibold text-neutral-400">#0{idx + 1}</span>
                  </div>

                  <h5 className="font-anton text-lg sm:text-xl text-[#1B1717] group-hover:text-[#810100] transition-colors mb-2 leading-snug">
                    {item.title}
                  </h5>

                  <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[#810100] text-xs font-semibold">
                    <span>Xem nội dung</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Detail Bar */}
          <div className="mt-8 p-6 bg-white rounded-2xl border-l-4 border-[#810100] shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#810100]/10 text-[#810100] flex-shrink-0">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h6 className="font-anton text-lg text-[#810100] uppercase mb-1">
                  {TIMELINE_DATA[activeTimelineIdx].date} — {TIMELINE_DATA[activeTimelineIdx].title}
                </h6>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {TIMELINE_DATA[activeTimelineIdx].detail}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Detail for Timeline Click */}
        <AnimatePresence>
          {selectedMilestone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedMilestone(null)}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#FAF9F5] border border-[#810100]/30 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedMilestone(null)}
                  className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-200 text-neutral-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="inline-block px-3 py-1 rounded-full bg-[#810100] text-[#EDEBDD] font-anton text-sm mb-3">
                  {selectedMilestone.date}
                </div>

                <h4 className="font-anton text-2xl text-[#1B1717] mb-3 leading-tight">
                  {selectedMilestone.title}
                </h4>

                <div className="w-12 h-1 bg-[#810100] mb-4" />

                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-6">
                  {selectedMilestone.detail}
                </p>

                <button
                  onClick={() => setSelectedMilestone(null)}
                  className="w-full py-3 rounded-xl bg-[#810100] hover:bg-[#630000] text-[#EDEBDD] font-semibold text-sm transition-colors shadow-md"
                >
                  Đóng lại
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =================================================================
            3.5. ĐOẠN DẪN NHẬP & BÌNH LUẬN LỊCH SỬ
           ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 max-w-4xl mx-auto space-y-6 text-base sm:text-lg md:text-xl text-neutral-800 leading-relaxed font-normal"
        >
          <p>
            Nhìn lại từng cột mốc chói lọi, từ ngọn lửa Cách mạng Tháng Tám 1945, âm vang Điện Biên Phủ 1954, thống nhất non sông năm 1975 cho tới công cuộc Đổi mới toàn diện 1986, một chân lý vĩnh hằng luôn được khẳng định: <strong className="font-semibold text-[#810100]">Nhân dân chính là gốc rễ, là nguồn đòn bẩy nội sinh quyết định mọi bước chuyển mình của dân tộc.</strong>
          </p>

          <p className="text-neutral-700">
            Bình luận về dòng chảy lịch sử này, PGS.TS Bùi Đình Phong (Học viện Chính trị Quốc gia Hồ Chí Minh) khẳng định rằng dẫu thời gian có thể trôi qua, các giá trị tư tưởng nền tảng mà Chủ tịch Hồ Chí Minh đã đúc kết trong Tuyên ngôn Độc lập, từ khát vọng tự do, quyền dân chủ cho đến chiến lược đại đoàn kết vẫn giữ nguyên giá trị soi đường cho sự nghiệp phát triển đất nước hôm nay.
          </p>
        </motion.div>

        {/* =================================================================
            4. QUOTE 1 (PGS.TS BÙI ĐÌNH PHONG) - 16:9 ratio, cream #EDEBDD
           ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="mb-24 sm:mb-32 max-w-5xl mx-auto rounded-3xl overflow-hidden bg-[#EDEBDD] border border-[#810100]/20 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[360px]">
            {/* Left: Portrait Image */}
            <div className="md:col-span-5 relative bg-neutral-900 overflow-hidden min-h-[280px] md:min-h-full">
              <img
                src="/image/PGS Bùi Đình Phong.jpg"
                alt="PGS.TS Bùi Đình Phong"
                className="w-full h-full object-cover object-center filter contrast-105"
                onError={(e) => {
                  e.currentTarget.src = '/image/pgs.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
              <div className="absolute bottom-3 left-4 md:hidden text-white font-anton text-sm">
                PGS.TS Bùi Đình Phong
              </div>
            </div>

            {/* Right: Quote Block */}
            <div className="md:col-span-7 p-8 sm:p-10 md:p-12 flex flex-col justify-center relative">
              <Quote className="w-12 h-12 text-[#810100]/20 mb-4" />

              <motion.blockquote
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl font-medium text-neutral-800 italic leading-relaxed mb-6"
              >
                “Chúng ta có Tuyên ngôn Độc lập là nhờ Cách mạng tháng Tám, mà có được Cách mạng tháng Tám là nhờ rất nhiều yếu tố, trong đó quan trọng nhất là sức mạnh của trí dân, lòng dân, niềm tin của dân. Có niềm tin của dân là có tất cả”
              </motion.blockquote>

              <div className="pt-4 border-t border-[#810100]/20">
                <p className="font-anton text-lg sm:text-xl text-[#810100] tracking-wide uppercase">
                  PGS.TS Bùi Đình Phong
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 font-medium">
                  Giảng viên cao cấp, Học viện Chính trị quốc gia Hồ Chí Minh
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================================
            5. HIỆU ỨNG SCROLLYTELLING (SPLIT VIEW)
               Left: Scrolling Content
               Right: Sticky Pinned Image with dissolved left edge
           ================================================================= */}
        <div className="mb-24 sm:mb-32 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#810100] uppercase tracking-widest">
              Góc nhìn chuyên sâu
            </span>
            <h4 className="font-anton text-2xl sm:text-4xl text-[#1B1717] uppercase tracking-wide mt-1">
              Bài học lịch sử về cội nguồn sức mạnh dân tộc
            </h4>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
            {/* Left Column: Scrollable Narrative Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 bg-white rounded-3xl border border-neutral-200 shadow-sm hover:border-[#810100]/30 transition-colors"
              >
                <p className="font-semibold text-lg text-[#810100] mb-2.5">
                  Điểm tựa qua hai cuộc trường kỳ kháng chiến
                </p>
                <p>
                  Thực tiễn cách mạng Việt Nam đã chứng minh trọn vẹn triết lý ấy. Thắng lợi của Cách mạng Tháng Tám không đơn thuần là một sự kiện chính trị sang trang lịch sử dân tộc, mà còn là sự kết tinh cao độ của tinh thần yêu nước, khát vọng tự chủ và sức mạnh gắn kết của toàn thể dân tộc. Chính nguồn năng lượng ấy tiếp tục trở thành điểm tựa vững chắc qua hai cuộc trường kỳ kháng chiến, làm nên những mốc son chói lọi như Điện Biên Phủ năm 1954 hay Chiến dịch Hồ Chí Minh lịch sử năm 1975, mở ra kỷ nguyên độc lập, tự do trọn vẹn.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 bg-white rounded-3xl border border-neutral-200 shadow-sm hover:border-[#810100]/30 transition-colors"
              >
                <p className="font-semibold text-lg text-[#810100] mb-2.5">
                  Chìa khóa giải phóng sức dân thời bình
                </p>
                <p>
                  Sức mạnh quật cường của khối đại đoàn kết không chỉ tỏa sáng trong bão lửa chiến tranh mà còn đóng vai trò then chốt trong công cuộc thiết lập và phát triển đất nước thời bình. Đó là lý do vì sao tư tưởng của Chủ tịch Hồ Chí Minh ngay từ những ngày đầu thành lập nước vẫn vẹn nguyên giá trị thời đại. Chỉ một ngày sau khi tuyên bố độc lập, vào ngày 3/9/1945, bên cạnh yêu cầu cấp thiết là diệt "giặc đói" và "giặc dốt", Bác Hồ đã đặc biệt lưu ý việc mở rộng dân chủ và thắt chặt khối đại đoàn kết, coi đó là chìa khóa để giải phóng sức dân cho sự nghiệp xây dựng và bảo vệ Tổ quốc.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 bg-white rounded-3xl border border-neutral-200 shadow-sm hover:border-[#810100]/30 transition-colors"
              >
                <p className="font-semibold text-lg text-[#810100] mb-2.5">
                  Củng cố niềm tin quần chúng nhân dân
                </p>
                <p>
                  Trong bối cảnh đất nước bước vào giai đoạn bứt phá, nhiệm vụ củng cố niềm tin của quần chúng nhân dân vào sự lãnh đạo của Đảng và Nhà nước càng trở nên mang tính sống còn. Đội ngũ cán bộ, đảng viên, đặc biệt là người lãnh đạo cần giữ vững bản lĩnh, nêu cao tinh thần phụng sự và đặt lợi ích quốc gia, dân tộc lên trên hết. Đúng như lời Bác dạy: <strong className="font-semibold text-[#810100]">“một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền”</strong>.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 bg-white rounded-3xl border border-neutral-200 shadow-sm hover:border-[#810100]/30 transition-colors"
              >
                <p className="font-semibold text-lg text-[#810100] mb-2.5">
                  Thước đo bồi đắp qua hành động thực tiễn
                </p>
                <p>
                  Thước đo niềm tin ấy phải được bồi đắp qua hành động thực tiễn, thông qua việc Đảng luôn sâu sát với đời sống nhân dân, tôn trọng và bảo vệ quyền làm chủ của dân, đồng thời siết chặt kỷ cương để xây dựng bộ máy công quyền thực sự liêm chính. Tinh thần "trọng dân" sâu sắc đó từng được Chủ tịch Hồ Chí Minh nhấn mạnh trong bài nói chuyện ngày 8/12/1956 tại Trường Đại học Nhân dân Việt Nam.
                </p>
              </motion.div>

            </div>

            {/* Right Column: Sticky Pinned Image with Edge Dissolve */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-300 bg-[#EDEBDD]">
                <img
                  src="/image/bac-ho.jpg"
                  alt="Bác Hồ đến thăm một lớp học ở khu lao động"
                  className="w-full h-[450px] object-cover object-center mask-dissolve-left filter contrast-[1.05]"
                  onError={(e) => {
                    e.currentTarget.src = '/image/cover.jpg';
                  }}
                />
                {/* Fallback gradient overlay if mask is not supported */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/60 to-transparent pointer-events-none" />

                <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-neutral-200">
                  <p className="font-semibold text-xs text-neutral-800 uppercase tracking-wide">
                    Bác Hồ đến thăm một lớp học ở khu lao động
                  </p>
                  <p className="text-[11px] text-neutral-500 italic mt-0.5">
                    Hình ảnh lịch sử: Bác Hồ luôn sâu sát, gần gũi và trân trọng từng người dân lao động trong suốt cuộc đời hoạt động cách mạng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================================
            6. QUOTE 2 (CHỦ TỊCH HỒ CHÍ MINH)
               Left: Bac Ho Image (image.png)
               Right: Red text in Google Sans / Sans font
           ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="mb-8 max-w-5xl mx-auto rounded-3xl overflow-hidden bg-[#EDEBDD] border-2 border-[#810100]/30 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            {/* Left: Photo */}
            <div className="md:col-span-5 relative h-72 md:h-96 bg-neutral-900 overflow-hidden">
              <img
                src="/image/image.png"
                alt="Chủ tịch Hồ Chí Minh"
                className="w-full h-full object-cover object-top filter contrast-105"
                onError={(e) => {
                  e.currentTarget.src = '/image/bac-ho.jpg';
                }}
              />
              <div className="absolute inset-0 bg-[#810100]/10 mix-blend-color pointer-events-none" />
            </div>

            {/* Right: Quote in vibrant red */}
            <div className="md:col-span-7 p-8 sm:p-10 md:p-12">
              <span className="inline-block px-3 py-1 rounded-full bg-[#810100] text-[#EDEBDD] text-xs font-anton tracking-widest uppercase mb-4">
                Lời dặn của Bác
              </span>

              <blockquote className="font-sans text-xl sm:text-2xl md:text-3xl font-bold text-[#810100] leading-snug tracking-normal mb-6">
                “Trong bầu trời không gì quý bằng nhân dân. Trong thế giới không gì mạnh bằng lực lượng đoàn kết của nhân dân”
              </blockquote>

              <p className="font-anton text-base sm:text-lg text-neutral-800 uppercase tracking-wide">
                — Chủ tịch Hồ Chí Minh
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
