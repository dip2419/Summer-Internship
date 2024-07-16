import React, { useState } from "react";


export const Count = () => {
  let [count, setCount] = useState(0);

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
    <>
      <h3 className='border'>Count {count}</h3>
      <button type="btn" onClick={addValue} className='bg-gray-800'>
        Add
      </button>
      <button type="btn" onClick={removeValue}>
        Remove
      </button>
    </>
  );
};

export default Count;
