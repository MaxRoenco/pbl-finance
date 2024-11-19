import React, { useContext } from 'react';
import { preferences } from '../../constants';
import { authContext } from '../../hooks/Context';

const Preferences = (props) => {
  const { lightMode, setLightMode } = useContext(authContext);
  return (
    <section 
      className={`${lightMode ? "bg-light-primary text-black-100" : "bg-dark-primary"} relative w-full h-full p-10 flex flex-col gap-5 flex-wrap`} 
      id='preferences'
    >
      {/* Background Image */}
      <div className="top-0 left-0 absolute w-full h-full">
        <img src="./gradients.png" alt="backGradient" className=' w-full h-full object-cover' />
        
      </div>
      
      <img src="./4.png" alt="4" className="absolute right-0 top-0 w-[200px] sm:w-[350px] " />
      <img src="./2.png" alt="2" className="absolute left-0 bottom-0 " />
      <img src="./Vector.png" alt="2" className="absolute left-0 bottom-0 " />
      
      {/* Blurred White Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 backdrop-blur-lg -z-30"></div> */}

      {/* Content */}
      <div className=" w-full h-full z-10 font-grotesk font-semibold">
        <img src={`${lightMode ? "logoBlack.svg" : "application_brand.png"}`} alt="logo" className={` w-[250px] object-contain`}  />
        <h2 className=" text-[56px]">Choose your preferences</h2>
        
        <div className="w-full flex flex-row flex-wrap gap-10">
          {preferences.map(({ title, items }) => (
            <ul className="" key={title}>
              <h3 className='text-[32px] text-black-500'>{title}</h3>
              <div className={` ${lightMode ? "bg-light-secondary" : "bg-dark-secondary"} p-4 w-[300px] rounded-2xl flex flex-col gap-2`}>
                {items.map((item) => (
                  <li className="flex items-center gap-2" key={item}>
                    <input 
                      id="link-checkbox" 
                      type="checkbox" 
                      value="" 
                      className="w-5 h-5 accent-slate-500 bg-gray-300 border-gray-300 rounded-2xl focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600" 
                    />
                    <span className='text-[#616161]' >{item}</span>
                  </li>
                ))}
              </div>
            </ul>
          ))}
        </div>
          <p className={`${lightMode ? "text-black" : "text-white"} mt-5 ml-3`}>You can always change this later.</p>
      </div>
    </section>
  );
};

export default Preferences;
