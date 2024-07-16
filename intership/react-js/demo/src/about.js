import React, { useState } from "react";


const About = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="text-3xl font-medium text-center w-full h-full flex flex-col justify-center items-center">
      <button onClick={() => setOpen(!open)} >About</button>
      {open && <div className='w-full h-full bg-transparent/50 text-white cursor-pointer text-end fixed top-0 bottom-0 flex justify-center items-center z-10'>
          <div className="w-full max-w-[400px] h-[400px] bg-black z-20 pe-5 shadow-2xl rounded pt-1" >
             <button onClick={()=>setOpen(false)}>x</button>
              <h1 className="text-center">Child</h1>
            </div>
        
        </div>}
    </div>
  );
};

export default About;

// >x