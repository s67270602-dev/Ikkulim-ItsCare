
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, COLORS } from '../constants';
import Chatbot from './Chatbot';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBgClass = (isHomePage && !isScrolled) 
    ? 'bg-transparent py-6' 
    : 'bg-white shadow-lg py-4 border-b border-gray-100';

  const textColorClass = (isHomePage && !isScrolled) 
    ? 'text-white drop-shadow-sm' 
    : 'text-gray-800';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group shrink-0">
          <div className="w-10 h-10 bg-[#0069D9] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
            <i className="fas fa-snowflake text-xl"></i>
          </div>
          <span className={`text-2xl font-black tracking-tight transition-colors ${textColorClass}`}>
            이끌림<span className="text-[#4FB3D9]">잇츠케어</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            const isContact = link.label === "간편예약";

            if (isContact) {
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="bg-[#10B981] text-white px-5 py-2.5 rounded-xl font-black shadow-lg shadow-emerald-100 hover:bg-emerald-600 hover:-translate-y-0.5 transition-all active:scale-95 flex items-center gap-2"
                >
                  <i className="fas fa-calendar-check text-sm"></i>
                  {link.label}
                </Link>
              );
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[15px] font-bold transition-all hover:text-[#4FB3D9] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#4FB3D9] after:transition-all hover:after:w-full ${
                  isActive 
                    ? 'text-[#0069D9] after:w-full' 
                    : textColorClass
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          
          <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>

          <a 
            href="tel:1577-7672" 
            className="bg-[#0069D9] text-white px-6 py-2.5 rounded-xl font-black hover:bg-[#0052a9] transition-all flex items-center gap-2 shadow-lg shadow-blue-100 active:scale-95"
          >
            <i className="fas fa-phone-alt text-sm"></i>
            1577-7672
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`xl:hidden text-2xl p-2 transition-colors ${textColorClass}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white w-full absolute top-full left-0 shadow-2xl border-t border-gray-100 animate-slide-down">
          <div className="flex flex-col p-6 space-y-4">
            {NAV_LINKS.map((link) => {
              const isContact = link.label === "간편예약";
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-bold py-3 flex justify-between items-center ${
                    isContact ? 'bg-emerald-50 text-emerald-600 px-4 rounded-xl border border-emerald-100' :
                    location.pathname === link.path ? 'text-[#0069D9]' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-3">
                    {isContact && <i className="fas fa-calendar-check text-sm"></i>}
                    {link.label}
                  </span>
                  <i className={`fas fa-chevron-right text-xs ${isContact ? 'text-emerald-400' : 'opacity-30'}`}></i>
                </Link>
              );
            })}
            <div className="pt-4 space-y-3">
              <a href="tel:1577-7672" className="bg-[#0069D9] text-white text-center block w-full py-4 rounded-xl font-black shadow-xl">
                <i className="fas fa-phone-alt mr-2"></i>
                1577-7672 상담연결
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#0069D9] rounded-lg flex items-center justify-center text-white">
                <i className="fas fa-snowflake"></i>
              </div>
              <span className="text-xl font-black text-white tracking-tight">이끌림잇츠케어</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              부산·양산·울산 전 지역 업소용 제빙기 및 에어컨 전문 세척 파트너. 동남권 최고의 분해 청소로 당신의 위생 환경을 혁신합니다.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 text-lg border-b border-gray-800 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-[#4FB3D9] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 text-lg border-b border-gray-800 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 text-xs text-[#4FB3D9]">
                   <i className="fas fa-map-marker-alt"></i>
                </div>
                <span className="text-sm">부산·양산·울산 전 지역 출장 서비스</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 text-xs text-[#4FB3D9]">
                   <i className="fas fa-phone-alt"></i>
                </div>
                <span className="font-black text-white text-lg">1577-7672</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 text-xs text-[#4FB3D9]">
                   <i className="fas fa-clock"></i>
                </div>
                <span className="text-sm">09:00 - 20:00 (연중무휴)</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 text-lg border-b border-gray-800 pb-2 inline-block">Connect</h4>
            <div className="flex space-x-3 mb-6">
              <a href="https://blog.naver.com/itscare77" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#03C75A] transition-all" title="Naver Blog">
                <span className="font-black text-lg">N</span>
              </a>
              <a href="http://pf.kakao.com/_Azgyn/chat" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-yellow-500 transition-all" title="KakaoTalk">
                <i className="fas fa-comment"></i>
              </a>
            </div>
            
            <div className="space-y-3">
              <a 
                href="http://pf.kakao.com/_Azgyn/chat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#FEE500] p-4 rounded-xl border border-transparent hover:border-white transition-all block group active:scale-95"
              >
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-[#3C1E1E] rounded-full flex items-center justify-center text-white shrink-0">
                      <i className="fas fa-comment"></i>
                   </div>
                   <div>
                      <span className="block text-[10px] text-[#3C1E1E] opacity-70 uppercase font-black leading-none mb-1">Kakao Chat</span>
                      <span className="text-sm text-[#3C1E1E] font-black group-hover:underline">카카오톡 문의하기</span>
                   </div>
                 </div>
              </a>

              <a 
                href="https://talk.naver.com/ct/w6zp1ss?frm=qr#nafullscreen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#03C75A] p-4 rounded-xl border border-transparent hover:border-white transition-all block group active:scale-95"
              >
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#03C75A] shrink-0 shadow-sm">
                      <span className="font-black text-lg">N</span>
                   </div>
                   <div className="text-white">
                      <span className="block text-[10px] opacity-80 uppercase font-black leading-none mb-1">Naver TalkTalk</span>
                      <span className="text-sm font-black group-hover:underline">네이버 톡톡 문의하기</span>
                   </div>
                 </div>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-gray-500">
          <p>&copy; 2024 Ikkulim ItsCare. All Rights Reserved. 부산·양산·울산 No.1 위생관리 전문가.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;
