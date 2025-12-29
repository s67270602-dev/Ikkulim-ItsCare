
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#F8FAFC]">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block bg-blue-50 text-[#0069D9] font-black px-4 py-1 rounded-full mb-4 text-sm tracking-widest uppercase">
              Quick & Easy Consultation
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">간편 견적 & 예약 신청</h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto break-keep">
              가장 편하신 방법으로 문의주세요. 부산·양산·울산 지역 전문가가 <br className="hidden md:block" /> 
              실시간으로 확인하여 상세한 견적과 일정을 안내해 드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Right: Digital Channels (Mobile Order 1, Desktop Order 2) */}
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              {/* KakaoTalk Card */}
              <a 
                href="http://pf.kakao.com/_Azgyn/chat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#FEE500] p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-yellow-900/5 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-black/5 rounded-full blur-2xl"></div>
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-2xl font-black text-[#3C1E1E] mb-2">카카오톡 빠른 상담</h3>
                    <p className="text-[#3C1E1E]/60 font-bold break-keep">사진과 함께 문의주시면 더욱 정확한 견적이 가능합니다.</p>
                  </div>
                  <div className="w-14 h-14 bg-[#3C1E1E] rounded-2xl flex items-center justify-center text-[#FEE500] text-2xl shadow-lg">
                    <i className="fas fa-comment"></i>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#3C1E1E] font-black text-lg">채팅으로 문의하기</span>
                  <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center text-[#3C1E1E] group-hover:translate-x-2 transition-transform">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </a>

              {/* Naver TalkTalk Card */}
              <a 
                href="https://talk.naver.com/ct/w6zp1ss?frm=qr#nafullscreen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#03C75A] p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-green-900/5 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="flex justify-between items-start mb-10 text-white">
                  <div>
                    <h3 className="text-2xl font-black mb-2">네이버 톡톡 문의</h3>
                    <p className="opacity-80 font-bold break-keep">별도의 가입 없이 네이버 아이디로 간편하게 상담하세요.</p>
                  </div>
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#03C75A] text-2xl shadow-lg">
                    <span className="font-black">N</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-white">
                  <span className="font-black text-lg">네이버 톡톡 연결하기</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </a>
            </div>

            {/* Left: Phone Consultation (Mobile Order 2, Desktop Order 1) */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-gray-100 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <i className="fas fa-phone-alt text-8xl text-blue-900"></i>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-2 h-6 bg-[#0069D9] rounded-full"></span>
                    전화 상담 (유선/문자)
                  </h3>
                  <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                      <div>
                        <span className="text-xs font-black text-blue-400 uppercase tracking-tighter block mb-1">Representative Call</span>
                        <span className="text-gray-500 text-sm font-bold">대표번호</span>
                      </div>
                      <a href="tel:1577-7672" className="text-3xl md:text-4xl font-black text-[#0069D9] hover:underline transition-all decoration-2 underline-offset-4">
                        1577-7672
                      </a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <div>
                        <span className="text-xs font-black text-gray-400 uppercase tracking-tighter block mb-1">Direct Mobile</span>
                        <span className="text-gray-500 text-sm font-bold">현장직통/문자상담</span>
                      </div>
                      <a href="tel:010-7711-8950" className="text-2xl md:text-3xl font-black text-gray-800 hover:text-[#0069D9] transition-colors">
                        010-7711-8950
                      </a>
                    </div>
                  </div>
                  <div className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[#0069D9]">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-bold mb-1 uppercase tracking-wider">Business Hours</p>
                      <p className="text-gray-700 font-black">평일/주말 09:00 - 20:00 (연중무휴)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Area Badge */}
          <div className="mt-16 bg-white p-6 rounded-3xl border border-dashed border-gray-200 text-center">
            <p className="text-gray-500 font-bold flex flex-wrap items-center justify-center gap-4">
              <span className="flex items-center gap-1 text-[#0069D9]">
                <i className="fas fa-check-circle"></i> 부산 전 지역
              </span>
              <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
              <span className="flex items-center gap-1 text-[#0069D9]">
                <i className="fas fa-check-circle"></i> 양산 전 지역
              </span>
              <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
              <span className="flex items-center gap-1 text-[#0069D9]">
                <i className="fas fa-check-circle"></i> 울산 전 지역
              </span>
              <span className="ml-2 font-black text-gray-800">업소용제빙기 무료방문점검 진행중</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
