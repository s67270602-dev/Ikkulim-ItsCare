
import React from 'react';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/홈화면.jpg"
            alt="홈화면"
            className="w-full h-full object-cover transform scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-5 relative z-10 py-20 md:py-0">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#0069D9] text-white text-[11px] md:text-sm font-black px-4 py-1.5 rounded-full mb-6 shadow-xl animate-fade-in">
              <i className="fas fa-certificate text-yellow-400"></i>
              <span>부·양·울 No.1 위생 관리 전문가</span>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl md:text-4xl font-black text-[#4FB3D9] mb-3 tracking-tight drop-shadow-md break-keep">
                업소용 제빙기 청소 · 에어컨 청소 전문
              </h2>
              <h1 className="text-3xl md:text-7xl font-black mb-6 leading-[1.2] tracking-tighter drop-shadow-lg break-keep">
                부산·양산·울산의 공기와<br />
                <span className="text-white underline underline-offset-8 decoration-[#0069D9]">깨끗한 얼음</span>, 우리가 책임집니다.
              </h1>
            </div>

            <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-3 no-scrollbar -mx-5 px-5">
              {["가정 홈케어", "카페 · 식당", "기업체", "공공기관"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shrink-0">
                  <span className="w-1.5 h-1.5 bg-[#4FB3D9] rounded-full"></span>
                  <span className="text-[13px] md:text-lg font-bold">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-col sm:flex-row">
              <Link to="/contact" className="bg-[#0069D9] px-10 py-5 rounded-2xl font-black text-lg text-center transition-all hover:bg-[#0052a9] shadow-2xl active:scale-95 flex items-center justify-center gap-3">
                <i className="fas fa-calendar-check"></i>
                무료 견적 신청하기
              </Link>
              <Link to="/services" className="bg-white/20 px-10 py-5 rounded-2xl font-black text-lg text-center backdrop-blur-md transition-all border border-white/30 flex items-center justify-center gap-3 active:scale-95">
                서비스 요금 확인
                <i className="fas fa-chevron-right text-sm"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-32 bg-[#0069D9] text-white">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
              <div className="relative group overflow-hidden rounded-3xl aspect-[4/3] sm:aspect-square">
                <img
                  src="/images/화면 캡처 2025-02-24 121821.jpg"
                  alt="제빙기 세척"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <span className="font-black text-lg">제빙기 전문 세척</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-3xl aspect-[4/3] sm:aspect-square">
                <img
                  src="/images/화면 캡처 2025-02-16 001820.jpg"
                  alt="에어컨 세척"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <span className="font-black text-lg">에어컨 분해 세척</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <h3 className="text-2xl md:text-5xl font-black mb-10 leading-tight break-keep">
                부산·양산·울산을 잇는<br />차별화된 위생 솔루션
              </h3>
              <div className="space-y-6 md:space-y-8">
                {[
                  { icon: "fa-shield-virus", title: "완전 분해 살균 세척", desc: "기기 내부 깊숙한 곳의 보이지 않는 세균과 곰팡이를 99.9% 제거합니다." },
                  { icon: "fa-leaf", title: "친환경 인증 약품", desc: "식품 등급 및 친환경 인증을 받은 인체 무해 세정제만을 사용합니다." },
                  { icon: "fa-headset", title: "동남권 전 지역 안심 사후관리", desc: "부산, 양산, 울산 어디서나 신속한 AS를 약속드립니다." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 md:gap-5">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                      <i className={`fas ${item.icon} text-lg md:text-2xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-[#4FB3D9] mb-1">{item.title}</h4>
                      <p className="text-blue-100 opacity-80 text-sm md:text-base leading-relaxed break-keep">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
