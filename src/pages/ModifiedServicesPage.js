import React, { useState, useEffect, useContext } from 'react';
import { Link, Element, Container } from 'react-scroll';
import img1 from '../images/0322- For Use/groupo.JPEG';
import Header from '../components/Header';
import park from "../images/0322- For Use/park.MP4";
import teamBackground from "../images/character/group1.JPEG";
import { useNavigate } from 'react-router-dom';
import nanjingjulong from "../images/Logos/njjulong.png";
import { LanguageContext } from '../App';
import translations from './translations';

const ServicesPage = () => {
  const { language } = useContext(LanguageContext);

  const navigate = useNavigate();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <div >
      <Header />
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 p-4 z-50">
        <Link to="services" smooth duration={500} className="animate-gradient-x bg-gradient-linear from-yellow-400 via-red-500 to-pink-500 p-2 rounded-lg text-white cursor-pointer">
          服务
        </Link>
        <Link to="caseStudy" smooth duration={500} className="animate-gradient-x bg-gradient-linear from-yellow-400 via-red-500 to-pink-500 p-2 rounded-lg text-white cursor-pointer">
          案例研究
        </Link>
        <Link to="team" smooth duration={500} className="animate-gradient-x bg-gradient-linear from-yellow-400 via-red-500 to-pink-500 p-2 rounded-lg text-white cursor-pointer">
          团队
        </Link>
        <Link to="contact" smooth duration={500} className="animate-gradient-x bg-gradient-linear from-yellow-400 via-red-500 to-pink-500 p-2 rounded-lg text-white cursor-pointer">
          联系方式
        </Link>

      </div>
      
      <Element name="services" className="element snap-start ">
        <div className="section  h-screen flex flex-col justify-center items-center text-white" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '60px' }}>
          <h1 className="text-4xl font-bold">我们的服务</h1>
          <p className="mt-4 text-lg">
            我们提供一流的咨询服务，帮助您应对在墨西哥设立运营的复杂性。
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
  <div className="animate-gradient-x bg-gradient-linear from-black-400 via-red-500 to-pink-500 p-4 rounded-lg text-white">
    <h3 className="text-xl font-bold">法规合规性</h3>
    <p>导航墨西哥的法规环境，确保您的运营符合所有的地方、州和联邦规定。</p>
  </div>
  <div className="animate-gradient-x bg-gradient-linear from-black-400 via-red-500 to-pink-500 p-4 rounded-lg text-white">
    <h3 className="text-xl font-bold">现场定位服务</h3>
    <p>根据您的工厂需求、供应链要求和劳动力可用性，识别和确保最佳的现场位置。</p>
  </div>
  <div className="animate-gradient-x bg-gradient-linear from-black-400 via-red-500 to-pink-500 p-4 rounded-lg text-white">
    <h3 className="text-xl font-bold">供应链集成</h3>
    <p>简化您的工厂到现有供应链的集成，确保材料的高效采购和产品的分发。</p>
  </div>
  <div className="animate-gradient-x bg-gradient-linear from-black-400 via-red-500 to-pink-500 p-4 rounded-lg text-white">
    <h3 className="text-xl font-bold">劳动力培训和发展</h3>
    <p>实施培训计划，为当地劳动力配备必要的技能，并为劳动力的保留和增长制定策略。</p>
  </div>
</div>

        </div>
      
</Element>

<Element name="feasibilityAnalysis" className="element snap-start">
  <div className="section h-screen flex flex-col justify-center items-center text-white">
    <h2 className="text-2xl font-bold mb-4">一、投资墨西哥的可行性分析</h2>
    <div className="animate-gradient-x bg-gradient-linear from-black-400 via-red-500 to-pink-500 p-4 rounded-lg text-white">
      <p>• 厂房选址</p>
      <p>• 墨西哥制造的实际综合成本分析，包括税收、人工、水电、原料、物流等成本</p>
      <p>• 供应链的分析</p>
      <p>• 了解当地庇护服务公司的服务内容、如何选择</p>
    </div>
  </div>
</Element>

<Element name="softLanding" className="element snap-start">
  <div className="section h-screen flex flex-col justify-center items-center text-white">
    <h2 className="text-2xl font-bold mb-4">二、帮助客户软着陆</h2>
    <div className="animate-gradient-x bg-gradient-linear from-black-400 via-red-500 to-pink-500 p-4 rounded-lg text-white">
      <p>• 帮助投资者了解墨西哥当地法律法规及跟中墨两国的文化差异，让中国团队尽快适应并融入当地团队</p>
      <p>• 如何建立并培训当地团队</p>
      <p>• 培训国际管理团队</p>
    </div>
  </div>
</Element>
</Element>

      <Element name="caseStudy" className="element snap-start">
        <div className="section scroll-behavior[smooth] h-screen relative">
          <div className="relative w-full h-full">
            <video
              autoPlay
              loop
              muted
              src="/park.MP4" // Replace with your video file path
              className="absolute z-10 w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20">
            <h2 className="text-2xl font-bold">精选案例研究</h2>
            <p className="mt-4 text-lg">
              这是我们如何帮助客户在墨西哥成功建立业务的案例。
            </p>
            <button className="mt-8 px-8 py-4 bg-white bg-opacity-50 text-blue-700 text-2xl rounded-lg transition duration-500 ease-in-out hover:bg-opacity-100" onClick={() => navigate('/case_studies')}>
              了解更多
            </button>
          </div>
        </div>
      </Element>

      <Element name="team" className="element snap-start">
        <div className="section h-screen flex flex-col justify-center items-center text-white" style={{ backgroundImage: `url(${teamBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h2 className="text-2xl font-bold">我们的团队</h2>
          {/* Add your testimonials here */}
        </div>
      </Element>

      <Element name="contact" className="element snap-start">
        <div className="section h-screen flex flex-col justify-center items-center text-white">
          <h2 className="text-2xl font-bold">联系我们</h2>
          <p className="mt-4 text-lg">
            您是否准备重新思考和转变您的业务？今天就联系我们。
          </p>
          <button className="mt-8 px-8 py-4 bg-white bg-opacity-50 text-blue-700 text-2xl rounded-lg transition duration-500 ease-in-out hover:bg-opacity-100" onClick={() => navigate('/contact')}>
            联系我们
          </button>
        </div>
      </Element>
    </div>
  );
};

export default ServicesPage;
