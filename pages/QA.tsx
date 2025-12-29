
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: '제빙기' | '에어컨' | '공통';
}

const QA: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      category: '제빙기',
      question: "제빙기 청소는 얼마나 자주 해야 하나요?",
      answer: "일반적으로 카페, 맥주전문점, 관공서, 회사 등에서 사용하는 제빙기는\n3개월에 한 번 정기 세척을 권장합니다.\n이는 기본적인 위생 관리와 기기 상태 유지를 위한 최소한의 관리 주기입니다.\n\n다만 얼음 사용량이 많은 매장이나 수질 상태가 일정하지 않은 환경에서는\n오염이 비교적 빠르게 진행될 수 있어\n1개월 주기의 정기 관리가 위생 유지와 기기 수명 연장에\n가장 효과적인 방법이 될 수 있습니다."
    },
    {
      category: '에어컨',
      question: "에어컨 청소 후 냄새가 완전히 사라지나요?",
      answer: "네, 이끌림잇츠케어는 단순 필터 청소가 아닌 냉각핀(에바)과 송풍팬을 완전히 분해하여 고압 세척하기 때문에 냄새의 근본 원인인 곰팡이와 세균을 제거합니다. 세척 후 친환경 피톤치드 연무 서비스로 쾌적한 공기를 만들어 드립니다."
    },
    {
      category: '공통',
      question: "작업 시간은 얼마나 소요되나요?",
      answer: "제빙기 1대당 약 1시간~1시간 30분, 에어컨(스탠드/시스템 4Way 기준) 1대당 약 1시간 30분~2시간 정도 소요됩니다. 오염도나 기종에 따라 약간의 차이가 있을 수 있으며, 여러 대를 동시에 신청하실 경우 팀 단위로 투입되어 효율적으로 작업합니다."
    },
    {
      category: '공통',
      question: "현장에서 추가 비용을 요구하는 경우가 있나요?",
      answer: "이끌림잇츠케어는 정찰제를 원칙으로 합니다. 예약 상담 시 안내드린 금액이 최종 금액이며, 현장에서 고객 동의 없는 추가 비용 청구는 절대 없습니다. 단, 기기 고장으로 인한 부품 교체가 필요한 특수한 상황일 경우 반드시 미리 안내드리고 협의합니다."
    },
    {
      category: '제빙기',
      question: "청소할 때 영업을 중단해야 하나요?",
      answer: "기기를 분해하여 물을 사용하는 작업 특성상 제빙기 사용은\n일시적으로 중단되지만, 주방 전체 영업에는 큰 지장이 없도록\n동선을 최소화해 작업을 진행합니다.\n보통 오픈 전이나 브레이크 타임을 활용해 많이 신청하십니다.\n\n카페의 경우에는 영업 종료 후 기존에 남아 있던 얼음은 모두 폐기한 뒤\n제빙기 청소를 진행하며, 세척이 완료된 제빙기가 밤새 깨끗한 얼음을\n다시 만들어 다음 날 영업 시 위생적인 얼음을 사용할 수 있도록\n관리하고 있습니다."
    },
    {
      category: '제빙기',
      question: "제빙기 A/S는 보장되나요?",
      answer: "네, 제빙기 청소 작업 완료 후\n작업일 기준 7일 이내 무상 A/S를 제공해 드립니다.\n다만 수질 문제로 인한 재오염, 제품 노후 또는 부품 고장,\n사용 중 발생한 외부 오염이나 충격,\n청소 범위를 벗어난 내부·외부 부위는 무상 A/S 대상에서 제외됩니다.\n저희는 부산·양산·울산 지역 업체로서 책임감을 가지고\n신속한 사후 관리를 약속드립니다."
    },
    {
      category: '에어컨',
      question: "에어컨 A/S는 보장되나요?",
      answer: "네, 에어컨 청소 작업 완료 후\n작업일 기준 7일 이내 무상 A/S를 제공하고 있습니다.\n다만 실외기 및 냉매 관련 문제, 제품 노후나 부품 고장,\n사용 중 발생한 외부 충격 또는 오염,\n청소 범위를 벗어난 부분은 무상 A/S 대상에서 제외됩니다.\n부산·양산·울산 어디서든 불편 사항이 있으시면 언제든지 문의해 주세요."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-[#0069D9] font-black tracking-widest uppercase text-sm mb-4 block">FAQ</span>
            <h1 className="text-4xl font-black mb-6">자주 묻는 질문</h1>
            <p className="text-gray-500 italic">궁금하신 점들을 모아 정리했습니다. 더 궁금한 내용은 언제든 문의주세요.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  activeIndex === idx ? 'border-blue-500 shadow-lg ring-1 ring-blue-500/20' : 'border-gray-100 shadow-sm'
                }`}
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-4"
                >
                  <div className="flex gap-4 items-start">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase shrink-0 mt-1 ${
                      faq.category === '제빙기' ? 'bg-blue-100 text-blue-600' : 
                      faq.category === '에어컨' ? 'bg-cyan-100 text-cyan-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {faq.category}
                    </span>
                    <span className="font-bold text-gray-900 text-lg md:text-xl break-keep">
                      {faq.question}
                    </span>
                  </div>
                  <i className={`fas fa-chevron-down text-gray-300 transition-transform duration-300 ${activeIndex === idx ? 'rotate-180 text-blue-500' : ''}`}></i>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  activeIndex === idx ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}>
                  <div className="px-6 md:px-8 pb-8 pt-0 text-gray-600 leading-relaxed text-base md:text-lg border-t border-gray-50 mt-[-1px]">
                    <div className="bg-blue-50/50 p-6 rounded-2xl whitespace-pre-line text-gray-700">
                       {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gray-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                <i className="fas fa-question-circle text-[10rem]"></i>
             </div>
             <h3 className="text-2xl md:text-3xl font-black mb-6 relative z-10">아직 해결되지 않은 질문이 있으신가요?</h3>
             <p className="text-gray-400 mb-10 relative z-10">부산·양산·울산 전문가가 직접 친절하게 상담해 드립니다.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <a href="tel:1577-7672" className="bg-[#0069D9] text-white px-10 py-4 rounded-xl font-black text-lg shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3">
                   <i className="fas fa-phone-alt"></i>
                   1577-7672
                </a>
                <Link to="/contact" className="bg-white text-gray-900 px-10 py-4 rounded-xl font-black text-lg shadow-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-3">
                   <i className="fas fa-calendar-check text-blue-500"></i>
                   지금 견적 문의하기
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QA;
