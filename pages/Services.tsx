
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
        { name: "스마트 스탠드 에어컨", price: "140,000원" },
        { name: "스마트 대형 스탠드 에어컨", price: "160,000원" },
        { name: "2in1 에어컨 (일반)", price: "160,000원" },
        { name: "2in1 스마트 대형 에어컨", price: "180,000원" },
        { name: "시스템 (1WAY)", price: "100,000원" },
        { name: "시스템 (4way)", price: "140,000원" },
        { name: "업소용 스탠드 에어컨", price: "별도문의" }
      ],
      color: "bg-cyan-50"
    }
  ];

  return (
    <div className="pt-24">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-black mb-6">투명한 정찰제 서비스</h1>
            <p className="text-gray-500">부산·양산·울산 전 지역 정직한 가격으로 위생을 약속합니다.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start">
            {pricing.map((cat, idx) => (
              <div key={idx} className={`${cat.color} rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm h-full`}>
                <h3 className="text-2xl font-black mb-8 text-gray-900 flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#0069D9] rounded-full"></div>
                  {cat.type}
                </h3>
                <div className="space-y-4">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-bold text-gray-700">{item.name}</span>
                      <span className="text-[#0069D9] font-black text-xl">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-[#F0F7FF] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm mb-12 border border-blue-100">
            <div className="w-24 h-24 bg-[#2563EB] rounded-[2rem] flex items-center justify-center text-white text-4xl shadow-lg shrink-0">
              <i className="fas fa-hand-holding-usd"></i>
            </div>
            <div className="text-center md:text-left">
              <h5 className="text-[#2563EB] font-black text-2xl md:text-3xl mb-3">정직한 요금 시스템, 안심하세요!</h5>
              <p className="text-gray-800 text-lg md:text-2xl font-bold leading-tight break-keep">
                작업 전 <span className="text-[#2563EB]">최종 금액을 안내</span>드린 뒤 진행하며, <br className="hidden md:block" />
                고객 동의 없는 <span className="text-[#2563EB]">추가 청구는 절대 없습니다.</span>
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-[2rem] p-10 text-white mb-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold mb-2">동남권 대량 주문 & 정기 관리 패키지</h4>
                <p className="text-gray-400">부산, 양산, 울산 프랜차이즈 및 공공기관 5대 이상 작업 시 특별 할인을 적용해드립니다.</p>
              </div>
              <Link to="/contact" className="bg-[#4FB3D9] hover:bg-[#3ea0c6] text-white px-8 py-4 rounded-xl font-bold transition-all flex-shrink-0">
                대량 주문 견적 문의
              </Link>
            </div>
          </div>

          <div className="mt-16 text-center text-sm text-gray-400 leading-relaxed">
            * 위 금액은 대략적인 기준이며, 기종의 노후도나 작업 환경에 따라 변동될 수 있습니다.<br />
            * 부산·양산·울산 전 지역 기본 출장비는 무료입니다.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
