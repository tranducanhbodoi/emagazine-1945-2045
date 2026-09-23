import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'chuong-1', label: 'Chương I' },
  { id: 'chuong-2', label: 'Chương II' },
  { id: 'chuong-3', label: 'Chương III' },
  { id: 'mini-quiz', label: 'Mini Quiz' },
];

export default function StickyNavbar() {
  const [activeTab, setActiveTab] = useState('chuong-1');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FAF9F5]/95 border-b border-neutral-200/80 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2">
        {/* Left: Brand / Title */}
        <button
          onClick={scrollToTop}
          className="text-left group flex items-center space-x-1.5 sm:space-x-2 focus:outline-none shrink-0"
        >
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#810100] group-hover:scale-125 transition-transform" />
          <span className="font-anton tracking-wider text-xs sm:text-sm md:text-base text-[#1B1717] group-hover:text-[#810100] transition-colors uppercase hidden sm:inline">
            Từ Mùa Thu 1945 Đến Khát Vọng 2045
          </span>
          <span className="font-anton tracking-wider text-xs text-[#810100] uppercase sm:hidden">
            1945 — 2045
          </span>
        </button>

        {/* Right: Navigation Tabs */}
        <nav className="flex items-center space-x-0.5 sm:space-x-3 md:space-x-6 overflow-x-auto no-scrollbar">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-1.5 sm:py-2 px-1.5 sm:px-3 text-[11px] sm:text-sm md:text-base font-semibold tracking-wide transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-[#810100] font-bold'
                    : 'text-neutral-600 hover:text-[#810100]'
                }`}
              >
                <span>{item.label}</span>
                {/* Active indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-1 right-1 sm:left-0 sm:right-0 h-[2.5px] bg-[#810100] rounded-full transition-all duration-300 shadow-sm" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
