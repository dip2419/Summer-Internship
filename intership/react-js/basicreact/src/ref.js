import React, {  useRef, useState } from "react";

const Ref = () => {
  const [count, setcount] = useState(0);

  const refValue = useRef(0);
  const onClick = () => {
    refValue.current++;
    setcount(refValue.current);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <div className="w-full flex justify-center gap-10 pt-10">
        <input
          type="number"
          className="outline-none border-2 ps-2"
          value={count}
          ref={refValue}
          onChange={(e) => setcount(Number(e.target.value))}
        />
        <input
          type="number"
          value={count}
          className="outline-none border-2 ps-2"
        />
      </div>
      <button
        onClick={onClick}
        className="text-white  py-1 font-bold text-center bg-slate-700 w-full max-w-20"
      >
        Click Me
      </button>
    </div>
  );
};

export default Ref;
