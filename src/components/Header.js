import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from '../App';
import translations from '../pages/translations';

const Header = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useContext(LanguageContext);
  const switchLanguage = () => {
    setLanguage(prevLang => prevLang === 'cn' ? 'en' : 'cn');
  };
  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="bg-transparent w-full p-4 fixed inset-x-0 top-0 z-20"> 
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white cursor-pointer" onClick={handleLogoClick}>
          MyLogo
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white">
                {translations[language].header.home}
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white">
                {translations[language].header.about}
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white">
                {translations[language].header.services}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white">
                {translations[language].header.contact}
              </Link>
            </li>
            <li className="text-white cursor-pointer" onClick={switchLanguage}>
              {translations[language].header.switchLanguage} (current: {language === 'cn' ? 'Chinese' : 'English'})
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
