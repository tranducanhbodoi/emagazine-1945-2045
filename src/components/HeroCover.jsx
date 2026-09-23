import React from 'react';
import { motion } from 'framer-motion';

export default function HeroCover() {
  return (
    <header id="hero" className="relative w-full min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden"
      style={{ background: '#1B1717' }}>

      {/* BG Image */}
      <div className="absolute inset-0">
        <img src="/images/Ảnh cover 1.png" alt=""
          className="w-full h-full object-cover object-center opacity-20 scale-105"
          style={{ filter:'blur(1px)' }} />
        <div className="absolute inset-0"
          style={{ background:'linear-gradient(180deg,rgba(27,23,23,.4) 0%,rgba(99,0,0,.45) 50%,rgba(27,23,23,.85) 100%)' }} />
      </div>

      {/* Star watermark */}
      <div className="absolute right-[-3%] top-[6%] opacity-[.07] pointer-events-none select-none"
        style={{ color:'#810100' }}>
        <svg width="480" height="480" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12">

        {/* Badge pill */}
        <motion.div
          initial={{ opacity:0, y:-12 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:.7, delay:.2 }}
          className="mb-5"
        >
          <span className="inline-block text-[#EDEBDD] text-xs font-semibold tracking-[.2em] uppercase px-3 py-1"
            style={{
              fontFamily:'DM Sans,sans-serif',
              background:'#810100',
              borderLeft:'3px solid #c9a227'
            }}>
            Emagazine đặc biệt
          </span>
        </motion.div>

        {/* Main hero box */}
        <motion.div
          initial={{ opacity:0, y:32 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1, delay:.4, ease:[.16,1,.3,1] }}
          className="hero-box px-8 py-10 sm:px-14 sm:py-14 max-w-3xl relative overflow-hidden"
          style={{ borderRadius:'2px' }}
        >
          <div className="absolute -top-20 -right-10 w-48 h-48 rounded-full pointer-events-none"
            style={{ background:'rgba(201,162,39,.08)', filter:'blur(32px)' }} />

          {/* Title */}
          <motion.h1
            initial={{ opacity:0, y:16 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:.9, delay:.7 }}
            className="text-4xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tight mb-5"
            style={{ fontFamily:'Anton,sans-serif', color:'#EDEBDD' }}
          >
            TỪ MÙA THU 1945
            <br/>
            <span style={{ color:'#d4694c', textShadow:'0 2px 18px rgba(210,70,30,.5)' }}>
              ĐẾN KHÁT VỌNG 2045
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX:0 }}
            animate={{ scaleX:1 }}
            transition={{ duration:.7, delay:.9 }}
            className="w-20 h-px origin-left mb-5"
            style={{ background:'#c9a227' }} />

          {/* Sub quote */}
          <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration:.9, delay:1.05 }}
            className="text-xl sm:text-2xl italic mb-0 leading-snug"
            style={{ fontFamily: "'Be Vietnam Pro', 'Plus Jakarta Sans', sans-serif", color: '#EDEBDD', opacity: 0.9 }}
          >
            "Trong bầu trời không gì quý bằng nhân dân"
          </motion.p>
        </motion.div>

        {/* Scroll cue */}
        <motion.button
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:1.4 }}
          onClick={() => document.getElementById('chapter-1')?.scrollIntoView({ behavior:'smooth' })}
          className="mt-10 flex items-center gap-2 bounce"
          style={{ color:'rgba(237,235,221,.5)', fontFamily:'DM Sans,sans-serif', fontSize:'11px', letterSpacing:'.2em', textTransform:'uppercase', border:'none', background:'none', cursor:'pointer' }}
        >
          Cuộn xuống
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
          </svg>
        </motion.button>
      </div>
    </header>
  );
}
