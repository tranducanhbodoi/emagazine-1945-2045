import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Ship,
  Building2,
  Milestone,
  Cpu,
  Globe2,
  HeartHandshake,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Quote,
  Camera,
  Layers,
  Home,
  CheckCircle2
} from 'lucide-react';
import VietnamMap from './VietnamMap';
import InfrastructureSlider from './InfrastructureSlider';
import PeopleLifeSlider from './PeopleLifeSlider';
import TradeDiplomacySlider from './TradeDiplomacySlider';

// 4 Main Economic Infographic Stats
const ECONOMIC_STATS = [
  {
    value: '8,02%',
    sub: 'Nửa đầu 2026: Đạt 8,18%',
    label: 'Tốc độ tăng trưởng GDP',
    desc: 'Tạo nền tảng vững chắc để hướng tới các mục tiêu tăng trưởng hai con số, duy trì vị thế dẫn đầu khu vực.',
    icon: TrendingUp,
    badge: 'GDP Bứt Phá'
  },
  {
    value: '> 930 tỷ USD',
    sub: 'Xuất siêu 20,03 tỷ USD (10 năm liên tiếp)',
    label: 'Tổng Kim ngạch Xuất Nhập Khẩu',
    desc: 'Sáu tháng đầu năm 2026 đạt 549,69 tỷ USD, tăng 27% so với cùng kỳ. Việt Nam vững vàng trong top 20 toàn cầu.',
    icon: Ship,
    badge: 'Giao Thương Quốc Tế'
  },
  {
    value: '529,6 tỷ USD',
    sub: 'Hơn 45.400 dự án còn hiệu lực',
    label: 'Vốn Đầu tư FDI Đăng Ký',
    desc: 'Chỉ 6 tháng đầu năm 2026 đã thu hút 34,65 tỷ USD (tăng 61%), bùng nổ chuyển dịch vào công nghệ cao và bán dẫn.',
    icon: Building2,
    badge: 'Dòng Vốn Quốc Tế'
  },
  {
    value: '3.345 km',
    sub: '1.711 km đường bộ ven biển',
    label: 'Hạ tầng Cao tốc Hoàn thiện',
    desc: 'Đột phá năng lực vận tải, kết nối các vùng kinh tế trọng điểm, tối ưu hóa không gian phát triển toàn diện.',
    icon: Milestone,
    badge: 'Đột Phá Hạ Tầng'
  }
];

export default function ChapterTwo() {
  return (
    <section id="chuong-2" className="bg-[#FAF9F5] text-neutral-800 py-16 sm:py-24 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =================================================================
            1. TIÊU ĐỀ CHƯƠNG II & ĐOẠN DẪN ĐẦU CHƯƠNG
           ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9 }}
          className="mb-14 sm:mb-20 text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#810100]/10 border border-[#810100]/20 text-[#810100] text-xs font-bold tracking-widest uppercase mb-4">
            CHƯƠNG II • KỶ NGUYÊN BỨT PHÁ
          </div>

          <h2 className="font-acme text-xl sm:text-3xl md:text-4xl text-[#630000] tracking-wide mb-2 font-normal">
            Bốn thập niên Đổi mới
          </h2>

          <h3 className="font-anton text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#810100] tracking-wide uppercase leading-tight font-normal">
            Những chuyển biến sâu sắc và bứt phá toàn diện
          </h3>

          <div className="w-16 sm:w-24 h-1.5 bg-[#810100] mx-auto mt-4 sm:mt-6 rounded-full" />

          {/* Lead introductory paragraph */}
          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-neutral-700 leading-relaxed font-normal max-w-3xl mx-auto italic">
            “Nếu như trong những năm tháng gian khổ của chiến tranh, sức mạnh lòng dân được hiện thực hóa thành ý chí bảo vệ độc lập, thì trong thời bình, nguồn lực ấy tiếp tục được chuyển hóa thành sức mạnh kinh tế - xã hội.”
          </p>
        </motion.div>

        {/* =================================================================
            2. INFOGRAPHIC DASHBOARD (BỐN THẬP KỶ ĐỔI MỚI 1986–2026)
           ================================================================= */}
        <div className="mb-24 sm:mb-32 max-w-6xl mx-auto">
          
          {/* Section Header with INFOGRAPHIC Tag */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#810100] text-[#EDEBDD] text-xs font-anton tracking-widest uppercase">
              <Layers className="w-3.5 h-3.5" />
              INFOGRAPHIC
            </span>
            <h4 className="font-anton text-2xl sm:text-3xl md:text-4xl text-[#1B1717] uppercase tracking-wide mt-3">
              Những Bước Tiến Ngoạn Mục Của Nền Kinh Tế Năng Động
            </h4>
          </div>

          {/* Narrative context paragraphs before cards */}
          <div className="space-y-4 mb-10 max-w-4xl mx-auto text-base sm:text-lg text-neutral-700 leading-relaxed">
            <p>
              Hành trình bốn thập kỷ Đổi mới (1986-2026) đã tạo nên những bước tiến ngoạn mục. Vào năm 2025, tốc độ tăng trưởng GDP đạt <strong>8,02%</strong>; đà tăng này tiếp tục được duy trì ở mức <strong>8,18%</strong> trong nửa đầu năm 2026, tạo nền tảng vững chắc để hướng tới các mục tiêu tăng trưởng hai con số. Quy mô giao thương quốc tế bứt phá mạnh mẽ khi tổng kim ngạch xuất nhập khẩu năm 2025 cán mốc hơn <strong>930 tỷ USD</strong>, mang lại giá trị xuất siêu <strong>20,03 tỷ USD</strong> và ghi dấu chuỗi 10 năm liên tiếp xuất siêu. Sáu tháng đầu năm 2026, kim ngạch xuất, nhập khẩu đạt <strong>549,69 tỷ USD</strong>, tăng 27% so với cùng kỳ.
            </p>
            <p>
              Những dữ liệu kinh tế ấn tượng này phản ánh bức tranh toàn cảnh về một nền kinh tế năng động và tích cực hội nhập. Việt Nam đã trở thành điểm đến ưu tiên của dòng vốn đầu tư quốc tế. Đến cuối năm 2025, cả nước có hơn <strong>45.400 dự án FDI</strong> còn hiệu lực với tổng vốn đăng ký xấp xỉ <strong>529,6 tỷ USD</strong>. Chỉ trong nửa đầu năm 2026, dòng vốn FDI đăng ký mới đã đạt <strong>34,65 tỷ USD</strong>, tăng 61%. Đáng chú ý, cơ cấu dòng vốn đầu tư ngày càng hướng tới chất lượng cao, tập trung vào công nghệ tiên tiến, đổi mới sáng tạo và tăng cường liên kết với các doanh nghiệp nội địa.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ECONOMIC_STATS.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#810100]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#810100]/10 text-[#810100] flex items-center justify-center group-hover:bg-[#810100] group-hover:text-white transition-colors duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#FAF9F5] border border-neutral-200 text-[11px] font-semibold text-neutral-600">
                        {stat.badge}
                      </span>
                    </div>

                    <div className="font-anton text-3xl sm:text-4xl text-[#810100] tracking-wide mb-1">
                      {stat.value}
                    </div>

                    <div className="text-xs font-bold text-[#630000] mb-2">
                      {stat.sub}
                    </div>

                    <h5 className="font-anton text-base sm:text-lg text-neutral-900 mb-2">
                      {stat.label}
                    </h5>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-[#810100] font-semibold">
                    <span>Số liệu thống kê</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Infrastructure narrative text */}
          <div className="mt-10 p-6 sm:p-8 bg-[#EDEBDD]/60 rounded-3xl border border-[#810100]/15">
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Song song với đà bứt phá kinh tế, bức tranh hạ tầng quốc gia cũng ghi nhận những bước chuyển mình căn bản. Đến cuối năm 2025, cả nước đã hoàn thiện và đưa vào vận hành <strong>3.345 km cao tốc</strong> cùng <strong>1.711 km đường bộ ven biển</strong>. Các dự án hạ tầng giao thông trọng điểm như hệ thống đường bộ, cầu lớn, cảng biển và sân bay không chỉ mở rộng năng lực vận tải mà còn tăng cường tính kết nối vùng, tối ưu hóa không gian phát triển và mở ra nhiều cơ hội kinh doanh cho cộng đồng doanh nghiệp và người dân.
            </p>
          </div>
        </div>

        {/* =================================================================
            3. PHOTO STORY 1: BỘ SƯU TẬP HẠ TẦNG CHIẾN LƯỢC (SLIDER TỰ ĐỘNG & KÉO TAY)
           ================================================================= */}
        <div className="mb-24 sm:mb-32">
          <InfrastructureSlider />
        </div>

        {/* =================================================================
            4. TÁI CẤU TRÚC 34 ĐƠN VỊ HÀNH CHÍNH & AN SINH XÃ HỘI (BẢN ĐỒ TƯƠNG TÁC)
           ================================================================= */}
        <div className="mb-24 sm:mb-32 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#810100] uppercase tracking-widest">
              Đột phá thể chế & Hành chính
            </span>
            <h4 className="font-anton text-3xl sm:text-4xl md:text-5xl text-[#1B1717] uppercase tracking-wide mt-1">
              Tái Cấu Trúc Bộ Máy Gọn Nhẹ: 34 Tỉnh, Thành Phố Vận Hành 2 Cấp
            </h4>
            <p className="text-sm sm:text-base text-neutral-600 max-w-3xl mx-auto mt-2">
              Khơi thông điểm nghẽn, tạo xung lực kiến tạo phát triển với tinh thần “địa phương quyết, địa phương làm, địa phương chịu trách nhiệm”.
            </p>
          </div>

          {/* 2-Column Scrollytelling Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
            
            {/* Left Column: Narrative Content & Welfare Cards */}
            <div className="lg:col-span-5 space-y-6 text-base text-neutral-700 leading-relaxed">
              
              {/* Card 1: Bước ngoặt thể chế mang tính lịch sử */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 sm:p-7 bg-white rounded-3xl border border-neutral-200 shadow-md hover:border-[#810100]/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-[#810100]/10 text-[#810100]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h5 className="font-anton text-lg text-[#810100] uppercase">
                    Bước ngoặt thể chế mang tính lịch sử
                  </h5>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Đặc biệt, chủ trương tái cấu trúc đơn vị hành chính cấp tỉnh gọn còn <strong>34 tỉnh, thành phố</strong> kết hợp vận hành mô hình chính quyền địa phương 2 cấp là một bước ngoặt thể chế mang tính lịch sử. Mục tiêu cốt lõi của cải cách này là phân cấp phân quyền triệt để, tối ưu bộ máy và tạo xung lực phát triển mới cho các vùng kinh tế.
                </p>
              </motion.div>

              {/* Card 2: Phương châm quản trị đất nước */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 sm:p-7 bg-white rounded-3xl border border-neutral-200 shadow-md hover:border-[#810100]/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-[#810100]/10 text-[#810100]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h5 className="font-anton text-lg text-[#810100] uppercase">
                    “Địa phương quyết, địa phương làm”
                  </h5>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Điều này phản ánh rõ nét phương châm đổi mới quản trị đất nước mà Đảng đã đề ra: <em>“địa phương quyết, địa phương làm, địa phương chịu trách nhiệm”</em>, gắn phân quyền với công tác kiểm tra, giám sát và cá thể hóa trách nhiệm rõ ràng.
                </p>
              </motion.div>

              {/* Card 3: Thước đo an sinh xã hội & Đời sống người dân */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 sm:p-7 bg-white rounded-3xl border border-neutral-200 shadow-md hover:border-[#810100]/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-[#810100]/10 text-[#810100]">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h5 className="font-anton text-lg text-[#810100] uppercase">
                    Đời sống người dân là thước đo sau cùng
                  </h5>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  Tuy nhiên, giá trị cốt lõi của mọi chính sách phát triển vẫn phải lấy đời sống người dân làm thước đo sau cùng. Mạng lưới an sinh xã hội ngày càng được củng cố vững chắc:
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF9F5] border border-neutral-200/80">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#810100]" />
                      <span className="text-xs font-semibold text-neutral-700">Tỷ lệ nghèo đa chiều</span>
                    </div>
                    <span className="font-anton text-base text-[#810100]">Giảm sâu còn 2,95%</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF9F5] border border-neutral-200/80">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#810100]" />
                      <span className="text-xs font-semibold text-neutral-700">Bảo hiểm y tế</span>
                    </div>
                    <span className="font-anton text-base text-[#810100]">Chạm mốc 95,2%</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF9F5] border border-neutral-200/80">
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4 text-[#810100]" />
                      <span className="text-xs font-semibold text-neutral-700">Chiến dịch toàn quốc</span>
                    </div>
                    <span className="font-anton text-xs sm:text-sm text-[#810100] text-right">Xóa nhà tạm, nhà dột nát</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF9F5] border border-neutral-200/80">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#810100]" />
                      <span className="text-xs font-semibold text-neutral-700">Học phí công lập (từ 2025-2026)</span>
                    </div>
                    <span className="font-anton text-xs sm:text-sm text-[#810100] text-right">Miễn phí cho mầm non & phổ thông</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Giá trị nhân văn sâu sắc */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 sm:p-7 bg-[#EDEBDD] rounded-3xl border border-[#810100]/20 shadow-md"
              >
                <div className="flex items-center gap-2 text-[#810100] mb-2 font-anton text-sm uppercase">
                  <GraduationCap className="w-4 h-4" />
                  Giá trị nhân văn mở rộng cơ hội học tập
                </div>
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed italic">
                  Chính sách miễn học phí cho trẻ em mầm non và học sinh phổ thông công lập áp dụng từ năm học 2025-2026 đã mang lại giá trị nhân văn sâu sắc, mở rộng cơ hội học tập cho thế hệ tương lai, khẳng định bản chất tốt đẹp của chế độ.
                </p>
              </motion.div>
            </div>

            {/* Right Column: Sticky Interactive Vietnam Map */}
            <div className="lg:col-span-7 lg:sticky lg:top-24">
              <VietnamMap />
            </div>

          </div>
        </div>

        {/* =================================================================
            5. PHOTO STORY 2: ĐỜI SỐNG NHÂN DÂN & AN SINH XÃ HỘI (SLIDER TỰ ĐỘNG & KÉO TAY)
           ================================================================= */}
        <div className="mb-24 sm:mb-32">
          <PeopleLifeSlider />
        </div>

        {/* =================================================================
            6. KHOA HỌC CÔNG NGHỆ, ĐỔI MỚI SÁNG TẠO & VỊ THẾ QUỐC TẾ
           ================================================================= */}
        <div className="mb-24 sm:mb-32 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#810100] uppercase tracking-widest">
              Động lực kỷ nguyên mới
            </span>
            <h4 className="font-anton text-3xl sm:text-4xl md:text-5xl text-[#1B1717] uppercase tracking-wide mt-1">
              Đột Phá Khoa Học Công Nghệ & Nâng Tầm Vị Thế Quốc Gia
            </h4>
          </div>

          {/* Narrative Paragraph on Science & Technology */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-neutral-200 shadow-md mb-8">
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Những cột mốc trên cho thấy quả ngọt tăng trưởng đang trực tiếp cải thiện chất lượng sống của người dân, tạo đà để đất nước bước vào kỷ nguyên phát triển lấy khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số làm động lực trung tâm. <strong>Nghị quyết 57-NQ/TW của Bộ Chính trị</strong> đã xác định đây là khâu đột phá chiến lược hàng đầu. Việt Nam đang từng bước làm chủ hệ sinh thái công nghệ mới, tập trung vào các lĩnh vực then chốt như trí tuệ nhân tạo, công nghệ bán dẫn, dữ liệu lớn và công nghệ sinh học. Việc Chỉ số đổi mới sáng tạo toàn cầu năm 2025 của Việt Nam tăng vọt lên vị trí <strong>44/139 nền kinh tế</strong> là bằng chứng cho thấy năng lực cạnh tranh quốc gia đang chuyển dịch mạnh mẽ từ tài nguyên thô sang tri thức và năng lực sáng tạo của con người.
            </p>
          </div>

          {/* Bento Grid: Tech Metrics & Economic Scale */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-8">
            
            {/* Box 1: Resolution 57 Highlight */}
            <motion.div
              whileHover={{ y: -4 }}
              className="md:col-span-7 bg-[#1B1717] text-[#EDEBDD] rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6">
                  <Cpu className="w-3.5 h-3.5 text-red-400" />
                  Nghị quyết 57-NQ/TW của Bộ Chính trị
                </div>

                <h5 className="font-anton text-2xl sm:text-3xl text-white uppercase mb-4 leading-snug">
                  Làm chủ AI, Công nghệ Bán dẫn và Kinh tế Tri thức
                </h5>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal mb-6">
                  Tập trung mũi nhọn vào trí tuệ nhân tạo, công nghệ bán dẫn, dữ liệu lớn và công nghệ sinh học. Đẩy mạnh liên kết giữa các viện trường, doanh nghiệp nội địa với dòng vốn đầu tư quốc tế chất lượng cao.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-400 block">Chỉ số Đổi mới sáng tạo (GII) 2025</span>
                  <span className="font-anton text-2xl text-red-400">Vị trí 44 / 139</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-neutral-400 block">Động lực trung tâm</span>
                  <span className="font-anton text-xl text-amber-300">Công nghệ & Đổi mới</span>
                </div>
              </div>
            </motion.div>

            {/* Box 2: Quy mô nền kinh tế & Hội nhập ngoại giao */}
            <motion.div
              whileHover={{ y: -4 }}
              className="md:col-span-5 bg-[#EDEBDD] rounded-3xl p-8 sm:p-10 border-2 border-[#810100]/25 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#810100] text-[#EDEBDD] text-xs font-anton tracking-wider uppercase mb-4">
                  <Globe2 className="w-3.5 h-3.5" />
                  Quy mô & Vị thế Ngoại giao
                </div>

                <h5 className="font-anton text-2xl text-[#810100] uppercase mb-4 leading-snug">
                  Tăng Trưởng 96 Lần So Với Năm 1986
                </h5>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-3">
                  So với thời điểm bắt đầu Đổi mới năm 1986, quy mô nền kinh tế đến năm 2023 đã tăng trưởng tới <strong>96 lần</strong>. Việt Nam chính thức đứng trong tốp 40 nền kinh tế lớn nhất thế giới và top 20 quốc gia hàng đầu về quy mô thương mại và thu hút đầu tư quốc tế.
                </p>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-6">
                  Về vị thế ngoại giao, Việt Nam đã thiết lập quan hệ chính thức với <strong>193 quốc gia thành viên Liên hợp quốc</strong>, tham gia <strong>hơn 70 tổ chức và diễn đàn quốc tế</strong>, đồng thời đóng góp ngày càng chủ động vào các thể chế đa phương.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-[#810100]/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-700">Quan hệ chính thức</span>
                  <span className="font-anton text-base text-[#810100]">193 quốc gia LHQ</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-700">Tổ chức & diễn đàn quốc tế</span>
                  <span className="font-anton text-base text-[#810100]">Hơn 70 tổ chức</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* =================================================================
            7. PHOTO STORY 3: SỰ KIỆN THƯƠNG MẠI & NGOẠI GIAO (SLIDER TỰ ĐỘNG & KÉO TAY)
           ================================================================= */}
        <div className="mb-24 sm:mb-32">
          <TradeDiplomacySlider />
        </div>

        {/* =================================================================
            8. TỔNG KẾT & TRÍCH DẪN TỔNG BÍ THƯ, CHỦ TỊCH NƯỚC TÔ LÂM
           ================================================================= */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#EDEBDD] rounded-3xl p-8 sm:p-12 md:p-14 border-2 border-[#810100]/25 shadow-2xl relative overflow-hidden">
            
            {/* Background seal effect */}
            <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-[#810100]/5 pointer-events-none" />

            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Concluding Narrative Paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-neutral-800 leading-relaxed font-normal">
                Lịch sử đã chứng minh, dưới sự lãnh đạo đúng đắn của Đảng, khi khơi dậy được tinh thần tự lực, tự cường, niềm tự hào dân tộc và kết hợp sức mạnh nội sinh với xu thế thời đại, Việt Nam hoàn toàn có thể chinh phục mọi kỳ tích mới. Hiện nay, khi lòng dân hòa quyện cùng ý Đảng trong mục tiêu kiến tạo một Việt Nam phồn vinh, đúng như Tổng Bí thư, Chủ tịch nước Tô Lâm khẳng định:
              </p>

              {/* Grand Quote Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[#810100] text-[#EDEBDD] rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl relative border border-red-500/20 overflow-hidden"
              >
                <Quote className="w-14 h-14 text-[#EDEBDD]/20 mb-4" />

                <blockquote className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold leading-snug tracking-normal mb-8 text-[#FAF9F5]">
                  “Đây là thời điểm “hội tụ” tổng hòa các lợi thế, sức mạnh để đưa đất nước bước vào kỷ nguyên mới, kỷ nguyên vươn mình của dân tộc.”
                </blockquote>

                <div className="pt-6 border-t border-[#EDEBDD]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <p className="font-anton text-xl sm:text-2xl text-[#FAF9F5] tracking-wider uppercase">
                      Tổng Bí thư, Chủ tịch nước Tô Lâm
                    </p>
                    <p className="text-xs sm:text-sm text-[#EDEBDD]/80 font-medium">
                      Thông điệp bước vào Kỷ nguyên mới — Kỷ nguyên vươn mình của dân tộc
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
