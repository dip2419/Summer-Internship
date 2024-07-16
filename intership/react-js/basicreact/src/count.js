import React, { useEffect, useRef, useState } from "react";

export const Count = () => {
  let [count, setCount] = useState(0);

  let refValue = useRef(0)
 
  useEffect(() =>{
    refValue.current = refValue.current + 1
  })

  function addValue() {
    if (count === 20) {
      return setCount(20);
    } else {
      return setCount(count + 1);
    }
  }
  function removeValue() {
    if (count === 0) {
      return setCount(0);
    } else {
      return setCount(count - 1);
    }
  }

  return (
    <div className="bg-black h-[100vh] text-white">
      <h1 className="text-3xl font-bold text-center py-5">Project One</h1>
      <h3 className="text-center text-xl font-medium">Count {count}</h3>

      <div className="flex justify-center items-center w-full gap-5 mt-5">
        <button
          type="btn"
          onClick={addValue}
          className=" bg-red-700 text-xl w-full max-w-10 rounded pb-1"
        >
          +
        </button>
        <button
          type="btn"
          onClick={removeValue}
          className=" bg-green-700 text-xl w-10 rounded pb-1"
        >
          -
        </button>
      </div>

      <h1 className='text-center pt-5'>Number of count : {refValue.current}</h1>
    </div>
  );
};

export default Count;
