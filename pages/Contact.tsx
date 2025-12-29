
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '제빙기 청소',
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-black mb-6">간편 견적 & 예약 신청</h1>
            <p className="text-gray-500">정보를 입력해주시면 확인 후 부산·양산·울산 담당자가 신속히 연락드립니다.</p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-[#0069D9] p-12 text-white">
              <h3 className="text-2xl font-bold mb-8">고객센터</h3>
              <div className="space-y-6">
                <div>
                  <span className="block text-blue-200 text-sm uppercase mb-1">Direct Call</span>
                  <a href="tel:1577-7672" className="text-xl font-bold hover:underline">1577-7672</a>
                </div>
                <div>
                  <span className="block text-blue-200 text-sm uppercase mb-1">Service Area</span>
                  <p className="text-lg font-bold">부산·양산·울산 전 지역</p>
                </div>
                <div>
                  <span className="block text-blue-200 text-sm uppercase mb-1">KakaoTalk</span>
                  <a href="http://pf.kakao.com/_Azgyn/chat" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:underline block mb-1">카카오톡 문의하기</a>
                </div>
                <div>
                  <span className="block text-blue-200 text-sm uppercase mb-1">Naver TalkTalk</span>
                  <a href="https://talk.naver.com/ct/w6zp1ss?frm=qr#nafullscreen" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:underline block mb-1">네이버 톡톡 문의하기</a>
                </div>
              </div>
              <div className="mt-12">
                 <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Trust" className="w-24 opacity-30 mx-auto" />
              </div>
            </div>

            <div className="md:w-2/3 p-8 md:p-12">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                   <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6">
                      <i className="fas fa-check"></i>
                   </div>
                   <h2 className="text-3xl font-bold mb-4">신청이 완료되었습니다!</h2>
                   <p className="text-gray-500">부산·양산·울산 담당자가 빠르게 연락드리겠습니다.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">성함/상호명</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0069D9] outline-none transition-all"
                        placeholder="예: 홍길동 (카페명)"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">연락처</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0069D9] outline-none transition-all"
                        placeholder="010-0000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">서비스 선택</label>
                    <select 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0069D9] outline-none transition-all"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                    >
                      <option>제빙기 청소</option>
                      <option>에어컨 청소 (벽걸이/스탠드)</option>
                      <option>시스템 에어컨 (천장형)</option>
                      <option>제빙기+에어컨 패키지</option>
                      <option>정기 관리 문의</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">지역/위치 (부산, 양산, 울산 중 선택)</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0069D9] outline-none transition-all"
                      placeholder="예: 부산 해운대구, 양산 물금읍, 울산 남구 등"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">문의 상세 내용</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0069D9] outline-none transition-all resize-none"
                      placeholder="문의하실 내용을 자유롭게 작성해주세요."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-[#0069D9] text-white font-black py-4 rounded-xl shadow-lg hover:bg-[#0052a9] transition-all transform hover:-translate-y-1"
                  >
                    견적 신청하기
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    * 부산·양산·울산 전 지역 출장비 무료 상담 진행 중입니다.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
