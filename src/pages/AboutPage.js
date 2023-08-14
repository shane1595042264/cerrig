import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12">
      <div className="bg-blue-100 bg-opacity-70 p-8 rounded-lg shadow-md w-4/5 md:w-1/2">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center font-poppins">关于Cerrig</h1>
        <p className="text-lg font-nunito mb-4 text-blue-800">
          Cerrig是一家为中国公司在墨西哥投资建厂提供专业咨询服务的实战咨询公司。凭借在制造业二十多年的国际商务、跨国项目管理经验；墨西哥建厂及工厂管理多年的实战经验，及对中墨两国市场的深入了解，我们成功地为客户提供了一条畅通无阻的过渡通道。
        </p>
        <p className="text-lg font-nunito mb-4 text-blue-800">
          我们的专家团队提供全面的支持，包括投资前的可行性分析、投资初期中国团队如何适应当地法规和文化差异、如何建立自己的墨西哥当地团队、供应链分析和发展等等。我们为自己对卓越的承诺和成功的记录感到自豪。
        </p>
        <p className="text-lg font-nunito text-blue-800">
          与Cerrig合作，让您的业务在繁荣的墨西哥市场上腾飞。
        </p>
      </div>
    </div>
  )
}

export default AboutPage;
