
import React from 'react';
import { IMAGES } from '../constants';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section - Intro */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-block bg-blue-50 text-[#0069D9] font-bold px-4 py-1 rounded-full mb-6 text-sm">
                Busan·Yangsan·Ulsan ItsCare
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                동남권 전역에<br />
                <span className="text-[#0069D9]">안심의 가치</span>를<br />
                전파합니다.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                이끌림잇츠케어는 부산, 양산, 울산의 쾌적한 비즈니스 환경을 위해 탄생했습니다. 
                동남권 광역 네트워크를 통해 보이지 않는 세균까지 완벽히 차단하여 
                고객님의 건강을 지키는 든든한 위생 파트너가 되겠습니다.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="bg-[#0069D9] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0052a9] transition-all shadow-lg shadow-blue-200">
                  문의하기
                </Link>
                <Link to="/process" className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all">
                  청소 과정 보기
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative z-10 bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 border border-gray-100">
                <img 
                  src="/images/logopolly_1000x1000_nbg.png" 
                  alt="ItsCare Logo" 
                  className="w-full h-auto max-w-[400px] mx-auto object-contain" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "누적 세척 실적", value: "2,000+", suffix: "대 이상", icon: "fa-check-circle" },
              { label: "평균 경력", value: "10", suffix: "년 경력", icon: "fa-award" },
              { label: "동남권 파트너", value: "10+", suffix: "개소", icon: "fa-handshake" },
              { label: "재방문/정기관리", value: "95", suffix: "% 이상", icon: "fa-sync-alt" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 text-[#0069D9] rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl">
                  <i className={`fas ${stat.icon}`}></i>
                </div>
                <div className="text-3xl font-black text-gray-900 mb-2">{stat.value}<span className="text-lg font-bold text-[#4FB3D9] ml-1">{stat.suffix}</span></div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">이끌림잇츠케어의 3대 철학</h2>
             <p className="text-gray-500">부산, 양산, 울산 어디서나 타협하지 않는 정직함을 약속합니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: "인증된 친환경 솔루션", 
                desc: "식품 등급 세척제와 친환경 항균 코팅제를 사용하여 영유아나 반려동물이 있는 환경에서도 완벽히 안전합니다.",
                icon: "fa-leaf",
                color: "text-green-500",
                bgColor: "bg-green-50"
              },
              { 
                title: "완전 분해 정석 공정", 
                desc: "보이는 곳만 닦는 것은 청소가 아닙니다. 모든 부품을 분해하여 보이지 않는 내부 관로의 곰팡이까지 99.9% 제거합니다.",
                icon: "fa-tools",
                color: "text-blue-500",
                bgColor: "bg-blue-50"
              },
              { 
                title: "동남권 광역 밀착 케어", 
                desc: "부산·양산·울산 전 지역 신속 출동 시스템과 사후 보증 정책으로 끝까지 확실하게 책임집니다.",
                icon: "fa-map-marked-alt",
                color: "text-orange-500",
                bgColor: "bg-orange-50"
              }
            ].map((value, idx) => (
              <div key={idx} className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className={`w-16 h-16 ${value.bgColor} ${value.color} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform`}>
                  <i className={`fas ${value.icon}`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region Dedicated Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
           <i className="fas fa-snowflake text-[20rem] translate-x-1/2 -translate-y-1/4"></i>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                  <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
                    부산·양산·울산 사업장,<br />
                    <span className="text-[#4FB3D9]">왜 지역 전문가</span>가<br />필요할까요?
                  </h3>
               </div>
               <div className="md:w-1/2 space-y-6">
                  <p className="text-gray-400 leading-relaxed">
                    동남권은 높은 습도와 바닷바람의 영향으로 기기 부식과 오염이 빠르게 일어납니다. 
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    이끌림잇츠케어는 부산, 양산, 울산의 지역적 특성을 가장 잘 이해하며, 
                    각 도심의 수많은 관리 경험을 바탕으로 최적의 맞춤 세척 솔루션을 제공합니다.
                  </p>
                  <div className="pt-4">
                    <div className="flex items-center gap-3 text-[#4FB3D9] font-bold">
                       <i className="fas fa-check-double"></i>
                       <span>부·양·울 전 지역 어디나 방문 가능</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
           <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0069D9] to-[#4FB3D9] p-12 md:p-16 rounded-[3rem] text-white shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">
                제빙기 에어컨청소 위생이 결과로 보입니다
              </h2>
              <div className="text-lg md:text-xl opacity-95 mb-12 space-y-2 font-medium">
                <p>제빙기: 부담 없이 무료 방문 점검 서비스 진행</p>
                <p>에어컨: 간편 견적 요청으로 상담 가능</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <a href="tel:1577-7672" className="bg-white text-[#0069D9] px-12 py-5 rounded-2xl font-black text-2xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                    <i className="fas fa-phone-alt text-xl"></i>
                    1577-7672
                 </a>
                 <Link to="/contact" className="bg-gray-900 text-white px-12 py-5 rounded-2xl font-black text-2xl shadow-xl hover:bg-black transition-all flex items-center justify-center gap-3">
                    <i className="fas fa-calendar-check text-xl text-[#4FB3D9]"></i>
                    지금 예약하기
                 </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
