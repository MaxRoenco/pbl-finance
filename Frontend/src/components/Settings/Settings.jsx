import React, { useState, useRef, useEffect, useContext } from 'react';

import { settings } from '../../constants';
import { authContext } from '../../hooks/Context';

const Settings = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [lineStyle, setLineStyle] = useState({ width: '0px', left: '0px' });
  const categoryRefs = useRef([]);
  const {lightMode, setLightMode} = useContext(authContext);

  useEffect(() => {
    if (categoryRefs.current[activeCategory]) {
      const { offsetLeft, offsetWidth } =
        categoryRefs.current[activeCategory];
      setLineStyle({ width: `${offsetWidth}px`, left: `${offsetLeft}px` });
    }
  }, [activeCategory]);

  return (
    <section className="w-full h-full p-4">
      <h1 className={` ${lightMode ? "text-black" : ""} pb-3 text-[32px] font-grotesk font-bold`}>Settings</h1>
      <div className={`w-full h-full ${lightMode ? "bg-light-secondary text-black" : "bg-dark-secondary" }  rounded-2xl p-10 relative`}>
        {/* Category List */}
        <ul className="flex flex-wrap w-full font-grotesk text-[20px] font-bold justify-evenly mb-4 relative">
          {settings.map((setting, index) => (
            <li
              key={index}
              ref={(el) => (categoryRefs.current[index] = el)}
              className={`cursor-pointer `}
              onClick={() => setActiveCategory(index)}
            >
              {setting.title}
            </li>
          ))}
        </ul>

        {/* Moving Line */}
        <div className={` flex justify-center w-full`}>
          <div className={`relative h-1 border-b ${lightMode ? "border-black" : "border-white"} rounded w-[100%]`}>
            <div
              className={`absolute border-t-4 h-2 ${lightMode ? "border-black" : "border-white"} rounded transition-position duration-300`}
              style={lineStyle}
            />
            </div>
          </div>

        {/* Settings Content */}
        <div
          className={`w-full mt-10 text-center py-5 ${
            lightMode ? 'text-black' : 'text-white'
          }`}
        >
            <h2 className="text-[24px] font-bold">
              {settings[activeCategory].title}
            </h2>
            <p className={`mt-4 text-[18px] ${
            lightMode ? 'text-black' : 'text-white'
          }`}>
              {settings[activeCategory].desc || 'No description available.'}
            </p>
            {settings[activeCategory].title === "Appearance" && (
              <div className="mt-8">
                <label className={`text-[16px] font-bold`}>Light Mode:</label>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="lightMode"
                    value={lightMode}
                    checked={lightMode}
                    onChange={() => setLightMode(!lightMode)}
                  />
                  <span className={`text-[14px] ${lightMode? 'text-black' : 'text-white'}`}>On</span>
                  <input
                    type="radio"
                    name="lightMode"
                    value={!lightMode}
                    checked={!lightMode}
                    onChange={() => setLightMode(!lightMode)}
                  />
                  <span className={`text-[14px] ${lightMode? 'text-black' : 'text-white'}`}>Off</span>
                </div>
              </div>
            )}
        </div>
          
        </div>
    </section>
  );
};

export default Settings;
