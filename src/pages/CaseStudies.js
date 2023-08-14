import React from 'react';
import nanjingjulong from "../images/Logos/njjulong.png";

const CaseStudies = () => {
  const cases = [
    {
      name: "HYS Medical",
      logo: "https://0.rc.xiniu.com/g2/M00/26/0B/CgAGe1yiKk2APz-DAABkDlb44O0747.png", // Replace with actual URL of logo
      content: "协助HYS Medical公司在Saltillo找到厂房及合适的当地行政顾问公司，目前厂房已找到，机器已到位，预计2023年8月底试产。",
      link: "http://www.hysmedical.com/"
    },
    {
      name: "Sino Glass",
      logo: "https://en.sinoglass.com/wp-content/uploads/2020/07/logo.png", // Replace with actual URL of logo
      content: "协助Sino Glass考察墨西哥工业厂房、用地，并核算墨西哥当地的生产成本，发展当地供应商链。",
      link: "https://en.sinoglass.com/"
    },
    {
      name: "南京聚龙",
      logo: nanjingjulong, // Replace with actual URL of logo
      content: "协助南京聚龙考察墨西哥工业厂房、工业用地。",
      link: "http://www.njjulong.cn/upload/201706/1496811111.png"
    }
  ];

  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-4xl font-bold text-white">经典案例分享</h1>
      {cases.map((study, index) => (
        <div key={index} className="p-4 max-w-2xl w-full bg-white shadow-md rounded-lg flex items-start space-x-4">
          <img src={study.logo} alt={study.name} className="w-32 h-32 object-contain rounded-full"/>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{study.name}</h2>
            <p className="text-gray-700">{study.content}</p>
            <a href={study.link} className="text-blue-500 mt-4 block">Visit Website</a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CaseStudies;
