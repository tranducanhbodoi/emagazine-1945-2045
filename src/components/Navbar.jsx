import React, { useState, useEffect } from 'react';

const NAV = [
  { id: 'chapter-1', label: 'SỨC MẠNH LÒNG DÂN' },
  { id: 'chapter-2', label: 'BỐN THẬP NIÊN ĐỔI MỚI' },
  { id: 'chapter-3', label: 'VƯƠN MÌNH KỶ NGUYÊN MỚI' },
  { id: 'mini-quiz', label: 'MINI QUIZ' },
];

export default function Navbar() {
  const [active, setActive] = useState('chapter-1');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const all = ['hero', ...NAV.map(n => n.id)];
      const y = window.scrollY + 100;
      for (let i = all.length - 1; i >= 0; i--) {
        const el = document.getElementById(all[i]);
        if (el && el.offsetTop <= y) { setActive(all[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = id => {
    setOpen(false); setActive(id);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 62, behavior: 'smooth' });
  };

  return (
    <nav className="sticky-nav">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-14">

        {/* Brand */}
        <button onClick={() => go('hero')} className="flex items-center gap-2.5 group">
          <span className="w-7 h-7 rounded-full flex items-center justify-center text-[#c9a227] text-sm"
            style={{ background:'#810100', border:'1.5px solid #c9a22750' }}>★</span>
          <span className="text-[#EDEBDD] font-black text-sm tracking-[.2em] uppercase"
            style={{ fontFamily:'Anton,sans-serif' }}>EMAGAZINE</span>
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV.map(n => (
            <button key={n.id} onClick={() => go(n.id)}
              className={`nav-item text-[11px] font-semibold tracking-[.15em] pb-2 transition-colors ${
                active === n.id ? 'text-white' : 'text-neutral-400 hover:text-white'
              } ${active === n.id ? 'active' : ''}`}
              style={{ fontFamily:'DM Sans,sans-serif' }}>
              {active === n.id && <span className="text-[#810100] mr-1.5">■</span>}
              {n.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-neutral-300 p-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden border-t border-red-900/30 bg-[#1B1717]">
          {NAV.map(n => (
            <button key={n.id} onClick={() => go(n.id)}
              className={`w-full text-left px-5 py-3.5 text-xs font-semibold tracking-widest uppercase transition-colors border-b border-neutral-900 ${
                active === n.id ? 'text-[#EDEBDD] bg-[#810100]/30 border-l-2 border-l-[#810100]' : 'text-neutral-400'
              }`}
              style={{ fontFamily:'DM Sans,sans-serif' }}>
              {n.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
