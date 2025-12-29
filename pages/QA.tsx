
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QA: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: '제빙기',
      question: "제빙기 청소 주기는 어떻게 되나요?",
      answer: "일반적으로 3개월 주기의 정기 세척을 권장합니다. 카페나 식당처럼 사용량이 많은 곳은 1-2개월 주기로 관리하는 것이 위생과 기기 수명 연장에 가장 좋습니다."
    },
    {
      category: '에어컨',
      question: "에어컨 청소 후 냄새가 제거되나요?",
      answer: "네, 냉각핀과 송풍팬을 완전히 분해하여 고압 살균 세척하기 때문에 냄새의 근원인 곰팡이와 세균을 완벽히 제거합니다."
    },
    {
      category: '공통',
      question: "작업 시간은 얼마나 걸리나요?",
      answer: "기종에 따라 다르지만 보통 대당 1시간에서 2시간 사이 소요됩니다. 현장 상황에 따라 팀 단위 투입으로 시간을 단축할 수 있습니다."
    },
    {
      category: '공통',
      question: "AS 보장은 어떻게 되나요?",
      answer: "부산, 양산, 울산 전 지역 작업일 기준 7일 이내 무상 AS를 보장합니다. 책임감 있는 사후 관리를 약속드립니다."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-5 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-[#0069D9] font-black text-xs md:text-sm mb-2 block uppercase tracking-widest">FAQ</span>
            <h1 className="text-3xl md:text-5xl font-black mb-4">자주 묻는 질문</h1>
            <p className="text-gray-500 text-sm md:text-base italic break-keep">궁금하신 점들을 모아 정리했습니다. 더 상세한 상담은 1577-7672로 전화주세요.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border transition-all ${
                  activeIndex === idx ? 'border-blue-500 shadow-md' : 'border-gray-100 shadow-sm'
                }`}
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full text-left p-5 md:p-7 flex justify-between items-center gap-3"
                >
                  <div className="flex flex-col gap-2 items-start">
                    <span className="px-2 py-0.5 rounded-md text-[9px] font-black uppercase bg-blue-50 text-[#0069D9]">
                      {faq.category}
                    </span>
                    <span className="font-bold text-gray-900 text-base md:text-xl break-keep">
                      {faq.question}
                    </span>
                  </div>
                  <i className={`fas fa-chevron-down text-gray-300 transition-transform ${activeIndex === idx ? 'rotate-180 text-blue-500' : ''}`}></i>
                </button>
                
                {activeIndex === idx && (
                  <div className="px-5 md:px-7 pb-6 text-gray-600 text-sm md:text-lg leading-relaxed border-t border-gray-50 pt-4">
                    <div className="bg-blue-50/50 p-4 rounded-xl text-gray-700 break-keep">
                       {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-900 rounded-3xl p-8 md:p-16 text-center text-white">
             <h3 className="text-xl md:text-3xl font-black mb-4">더 궁금한 점이 있으신가요?</h3>
             <p className="text-gray-400 text-sm md:text-base mb-8 break-keep">부산·양산·울산 전문가가 직접 친절하게 상담해 드립니다.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a href="tel:1577-7672" className="bg-[#0069D9] text-white px-10 py-4 rounded-xl font-black shadow-xl active:scale-95">
                   1577-7672
                </a>
                <Link to="/contact" className="bg-white text-gray-900 px-10 py-4 rounded-xl font-black shadow-xl active:scale-95">
                   견적 문의하기
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QA;
