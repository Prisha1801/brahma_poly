import TopBar from './TopBar';
import InfoBar from './InfoBar';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const FloatingButtons = () => {
  return (
    <>
      <style>{`
        @keyframes shine {
          0% { transform: translateY(-100%) rotate(180deg); }
          100% { transform: translateY(200%) rotate(180deg); }
        }
        .shine-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: -50%;
          width: 200%;
          height: 40%;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transform: translateY(-100%) rotate(180deg);
          animation: shine 2.5s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-2 mr-2">
        <Link
          to="/contact"
          className="shine-btn relative bg-[#1e4d5c] text-white font-semibold text-sm shadow-lg hover:bg-[#163a46] transition-colors flex items-center justify-center overflow-hidden border-2 border-white"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
            borderRadius: '999px',
            width: '38px',
            height: '180px',
            letterSpacing: '0.05em',
          }}
        >
          Enquire Now
        </Link>
        <Link
          to="/admissions/admission-form"
          className="shine-btn relative bg-red-600 text-white font-semibold text-sm shadow-lg hover:bg-red-700 transition-colors flex items-center justify-center overflow-hidden border-2 border-white"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
            borderRadius: '999px',
            width: '38px',
            height: '180px',
            letterSpacing: '0.05em',
          }}
        >
          Admissions 2025-26
        </Link>
      </div>
    </>
  );
};

const Header = () => {
    return (
        <>
            <div className="flex flex-col w-full">
                <TopBar />
                <InfoBar />
            </div>
            <Navbar />
            <FloatingButtons />
        </>
    );
};

export default Header;