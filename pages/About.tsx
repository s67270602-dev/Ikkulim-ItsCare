
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block bg-blue-50 text-[#0069D9] font-bold px-4 py-1 rounded-full mb-6 text-[12px]">
                Busan·Yangsan·Ulsan ItsCare
              </div>
              <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-6 leading-tight break-keep">
                동남권 전역에<br />
                <span className="text-[#0069D9]">안심의 가치</span>를 전파합니다.
              </h1>
              <p className="text-sm md:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 break-keep">
                이끌림잇츠케어는 부산, 양산, 울산의 쾌적한 비즈니스 환경을 위해 탄생했습니다. 
                전문적인 기술과 정직한 마음으로 보이지 않는 세균까지 완벽히 차단합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link to="/contact" className="bg-[#0069D9] text-white px-8 py-4 rounded-xl font-bold shadow-lg active:scale-95">
                  문의하기
                </Link>
                <Link to="/process" className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-bold active:scale-95">
                  과정 보기
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full max-w-[400px]">
              <div className="relative z-10 bg-white rounded-[2.5rem] shadow-2xl p-6 md:p-10 border border-gray-100">
                <img 
                  src="/images/logopolly_1000x1000_nbg.png" 
                  alt="ItsCare Logo" 
                  className="w-full h-auto object-contain" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "누적 실적", value: "2,000", suffix: "+", icon: "fa-check-circle" },
              { label: "평균 경력", value: "10", suffix: "년", icon: "fa-award" },
              { label: "지역 파트너", value: "10", suffix: "곳", icon: "fa-handshake" },
              { label: "재방문율", value: "95", suffix: "%", icon: "fa-sync-alt" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl text-center shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-blue-50 text-[#0069D9] rounded-xl flex items-center justify-center mx-auto mb-3 text-sm md:text-xl">
                  <i className={`fas ${stat.icon}`}></i>
                </div>
                <div className="text-xl md:text-3xl font-black text-gray-900">{stat.value}<span className="text-sm font-bold text-[#4FB3D9]">{stat.suffix}</span></div>
                <div className="text-[10px] md:text-sm font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* (Philosophy section omitted for brevity but following same pattern) */}
    </div>
  );
};

export default About;
