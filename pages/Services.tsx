
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const pricing = [
    {
      type: "업소용 제빙기",
      items: [
        { name: "50kg 이하 (소형)", price: "100,000원" },
        { name: "50kg (호시자키 / 라셀르)", price: "120,000원" },
        { name: "150kg 미만 (중형)", price: "150,000원" },
        { name: "150kg 이상 (대형)", price: "200,000원" }
      ],
      color: "bg-blue-50"
    },
    {
      type: "에어컨 (상업용/가정용)",
      items: [
        { name: "벽걸이형", price: "70,000원" },
        { name: "스탠드형 에어컨 (일반)", price: "120,000원" },
        { name: "시스템 (1WAY)", price: "100,000원" },
        { name: "시스템 (4way)", price: "140,000원" },
        { name: "업소용 스탠드 에어컨", price: "별도문의" }
      ],
      color: "bg-cyan-50"
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-black mb-4">투명한 정찰제 서비스</h1>
            <p className="text-gray-500 text-sm md:text-base">부산·양산·울산 전 지역 정직한 가격으로 위생을 약속합니다.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
            {pricing.map((cat, idx) => (
              <div key={idx} className={`${cat.color} rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm`}>
                <h3 className="text-xl md:text-2xl font-black mb-6 text-gray-900 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-[#0069D9] rounded-full"></div>
                  {cat.type}
                </h3>
                <div className="space-y-3">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white p-4 md:p-5 rounded-2xl shadow-sm">
                      <span className="font-bold text-gray-700 text-sm md:text-base mb-1 sm:mb-0">{item.name}</span>
                      <span className="text-[#0069D9] font-black text-lg md:text-xl">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-[#F0F7FF] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-sm mb-12 border border-blue-100">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#2563EB] rounded-2xl flex items-center justify-center text-white text-2xl md:text-3xl shadow-lg shrink-0">
              <i className="fas fa-hand-holding-usd"></i>
            </div>
            <div className="text-center md:text-left">
              <h5 className="text-[#2563EB] font-black text-xl md:text-2xl mb-2">정직한 요금 시스템</h5>
              <p className="text-gray-800 text-sm md:text-xl font-bold leading-relaxed break-keep">
                작업 전 <span className="text-[#2563EB]">최종 금액을 안내</span>드린 뒤 진행하며, 
                고객 동의 없는 <span className="text-[#2563EB]">추가 청구는 절대 없습니다.</span>
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 text-white text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="text-lg md:text-2xl font-bold mb-1">대량 주문 & 정기 관리 패키지</h4>
                <p className="text-gray-400 text-sm break-keep">부산, 양산, 울산 프랜차이즈 및 공공기관 5대 이상 작업 시 특별 할인을 적용합니다.</p>
              </div>
              <Link to="/contact" className="bg-[#4FB3D9] text-white px-8 py-4 rounded-xl font-bold transition-all w-full md:w-auto text-center active:scale-95">
                대량 문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
