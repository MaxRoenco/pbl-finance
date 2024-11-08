import React from 'react'
import { preferences } from '../../constants'

const Preferences = (props) => {
  const [isLight, setIsLight] = React.useState(false);
  return (
<section 
      className={`bg-light-primary bg-light-secondary ${isLight ? "bg-light-primary" : "bg-light-secondary"} w-full h-full p-10 flex flex-col gap-5 flex-wrap`} 
      id='preferences'
    >
        <img src="logoBlack.svg" alt="logo" className=' w-[250px] object-contain' />
        <h2 className="text-black text-[56px] ">Choose your preferences</h2>
        <div className="w-full flex flex-row flex-wrap gap-10">
        { preferences.map(({title, items}) => (
            <ul className="text-black" key={title} >
                <h3 className='text-[32px] text-black-500 ' >{title}</h3>
                <div className="bg-[#C9C9C9] p-4 w-[300px] rounded-2xl ">
                {items.map((item) => (
                    <li className="" key={item}>{item}</li>
                )
                )}
                </div>
            </ul>
        ))}
        </div>
    </section>
  )
}

export default Preferences