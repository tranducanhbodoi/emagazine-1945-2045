import React from 'react';
import StickyNavbar from './components/StickyNavbar';
import CoverSection from './components/CoverSection';
import ChapterOne from './components/ChapterOne';
import ChapterTwo from './components/Chapter2/ChapterTwo';
import ChapterThree from './components/Chapter3/ChapterThree';
import QuizSection from './components/MiniQuiz/QuizSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#EDEBDD] text-[#1B1717] font-sans selection:bg-[#810100] selection:text-[#EDEBDD]">
      {/* Sticky Top Navigation Bar */}
      <StickyNavbar />

      {/* Main Content Flow */}
      <main>
        {/* Cover Section */}
        <CoverSection />

        {/* Chapter 1: Sức mạnh lòng dân */}
        <ChapterOne />

        {/* Chapter 2: Bốn thập niên Đổi mới */}
        <ChapterTwo />

        {/* Chapter 3: Vươn mình kỷ nguyên mới */}
        <ChapterThree />

        {/* Mini Quiz Interactive */}
        <QuizSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
