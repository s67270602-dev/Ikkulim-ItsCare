
import React from 'react';
import { IMAGES } from '../constants';

const Process: React.FC = () => {
  const iceSteps = [
    { title: "부품 분해 및 탈거", desc: "얼음 저장고, 물탱크, 펌프 등 모든 핵심 부품을 안전하게 탈거합니다." },
    { title: "물때 및 곰팡이 제거", desc: "전용 살균 세척제를 사용하여 부품에 고착된 오염물을 완전히 박멸합니다." },
    { title: "고압 살균 및 헹굼", desc: "고온 스팀 또는 고압 세척기로 보이지 않는 내부 관로까지 깨균합니다." },
    { title: "조립 및 정상 가동 확인", desc: "원상태로 조립 후 살균 얼음 생성 여부와 센서 작동을 테스트합니다." }
  ];

  const acSteps = [
    { title: "상태 점검 및 가동", desc: "냉방 성능과 이상 소음 등을 사전에 파악하여 맞춤 청소를 준비합니다." },
    { title: "전용 커버 보양", desc: "가전제품 및 주변 가구가 오염되지 않도록 꼼꼼한 비닐 보양을 실시합니다." },
    { title: "열교환기 고압 세척", desc: "냉각핀 깊숙이 박힌 먼지와 곰팡이를 핀 전용 세제로 녹여냅니다." },
    { title: "UV 살균 및 피톤치드", desc: "세척 후 항균 처리와 피톤치드 연무로 쾌적한 향과 항균력을 더합니다." }
  ];

  return (
    <div className="pt-24">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">투명하게 공개하는 청소 공정</h1>
            <p className="text-gray-500 max-w-2xl mx-auto">말뿐인 청소가 아닙니다. 고객님이 직접 확인하실 수 없는 내부 깊숙한 곳까지 정석대로 관리합니다.</p>
          </div>

          <div className="space-y-32">
            {/* Ice Maker Process */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-1 bg-[#0069D9]"></div>
                <h2 className="text-3xl font-black text-gray-900">제빙기 3단계 안심 케어</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="grid grid-cols-1 gap-6">
                  {iceSteps.map((step, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start">
                      <span className="text-4xl font-black text-blue-100">{idx + 1}</span>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative group">
                  <div className="overflow-hidden rounded-3xl shadow-2xl bg-white p-2">
                    <img 
                      src="/images/화면 캡처 2025-02-24 121821.jpg" 
                      alt="Ice Maker Process Detail" 
                      className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* AC Process */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-1 bg-[#4FB3D9]"></div>
                <h2 className="text-3xl font-black text-gray-900">에어컨 완전 분해 고압 세척</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 overflow-hidden rounded-3xl shadow-2xl bg-white p-2">
                  <img 
                    src="/images/화면 캡처 2025-02-16 003109.jpg"
                    alt="AC Process Detail" 
                    className="w-full rounded-2xl hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 order-1 md:order-2">
                  {acSteps.map((step, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start">
                      <span className="text-4xl font-black text-blue-100">{idx + 1}</span>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
