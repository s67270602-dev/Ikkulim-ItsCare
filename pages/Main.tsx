
import React from 'react';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/홈화면.jpg"
            alt="홈화면"
            className="w-full h-full object-cover transform scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#0069D9] text-white text-[13px] md:text-sm font-black px-4 py-1.5 rounded-full mb-8 shadow-xl animate-fade-in">
              <i className="fas fa-certificate text-yellow-400"></i>
              <span>부산·양산·울산 No.1 위생 관리 전문가</span>
            </div>
            
            <div className="mb-6">
              <h2 className="text-2xl md:text-4xl font-black text-[#4FB3D9] mb-2 tracking-tight drop-shadow-md">
                업소용 제빙기 청소 · 에어컨 청소 전문
              </h2>
              <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[1.15] tracking-tighter drop-shadow-lg">
                부산·양산·울산의 공기와<br />
                <span className="text-white">깨끗한 얼음</span>, 우리가 책임집니다.
              </h1>
            </div>

            <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2 no-scrollbar">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shrink-0">
                <span className="w-1.5 h-1.5 bg-[#4FB3D9] rounded-full"></span>
                <span className="text-sm md:text-lg font-bold">가정 홈케어</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shrink-0">
                <span className="w-1.5 h-1.5 bg-[#4FB3D9] rounded-full"></span>
                <span className="text-sm md:text-lg font-bold">카페 · 식당</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shrink-0">
                <span className="w-1.5 h-1.5 bg-[#4FB3D9] rounded-full"></span>
                <span className="text-sm md:text-lg font-bold">기업체(회사)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shrink-0">
                <span className="w-1.5 h-1.5 bg-[#4FB3D9] rounded-full"></span>
                <span className="text-sm md:text-lg font-bold">공공기관</span>
              </div>
            </div>

            <div className="flex gap-4 flex-col sm:flex-row">
              <Link to="/contact" className="bg-[#0069D9] px-10 py-5 rounded-2xl font-black text-lg text-center transition-all hover:bg-[#0052a9] shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3">
                <i className="fas fa-calendar-check"></i>
                무료 견적 신청하기
              </Link>
              <Link to="/services" className="bg-white/20 px-10 py-5 rounded-2xl font-black text-lg text-center backdrop-blur-md transition-all hover:bg-white/30 border border-white/30 flex items-center justify-center gap-3">
                서비스 요금 확인
                <i className="fas fa-chevron-right text-sm"></i>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
          <span className="text-[10px] font-bold tracking-widest uppercase">Scroll Down</span>
          <i className="fas fa-chevron-down text-sm"></i>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-[#0069D9] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative group overflow-hidden rounded-3xl">
                <img
                  src="/images/화면 캡처 2025-02-24 121821.jpg"
                  alt="제빙기 3단계 안심케어"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="font-bold">업소용 제빙기 전문 세척</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-3xl">
                <img
                  src="/images/화면 캡처 2025-02-16 001820.jpg"
                  alt="에어컨 완전분해 고압세척"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="font-bold">에어컨 완전 분해 고압 세척</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                부산·양산·울산을 잇는<br />차별화된 위생 솔루션
              </h3>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                    <i className="fas fa-shield-virus text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#4FB3D9] mb-1">완전 분해 살균 세척</h4>
                    <p className="text-blue-100 opacity-80">기기 내부 깊숙한 곳의 보이지 않는 세균과 곰팡이를 99.9% 제거합니다.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                    <i className="fas fa-leaf text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#4FB3D9] mb-1">친환경 인증 약품</h4>
                    <p className="text-blue-100 opacity-80">식품 등급 및 친환경 인증을 받은 인체 무해 세정제만을 사용합니다.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                    <i className="fas fa-headset text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#4FB3D9] mb-1">동남권 전 지역 안심 사후관리</h4>
                    <p className="text-blue-100 opacity-80">작업 후에도 신속한 대응으로 부산, 양산, 울산 어디서나 안심을 드립니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
