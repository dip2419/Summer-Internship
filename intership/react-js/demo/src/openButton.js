import React, { useState } from "react";

const OpenButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="text-xl font-medium bg-red-600 px-2 py-1 rounded-md"
      >
        Open
      </button>
      {open && (
        <div className="w-full h-screen bg-transparent/50 fixed inset-0 ">
          <div
            className={`h-full w-full max-w-[340px] bg-white absolute right-0 top-0 bottom-0 transition-transform -translate-x-0 ease-in-out delay-500 ${
              open ? "mr-0" : "-mr-[100%]"
            }`}
          >
            <button
              onClick={() => setOpen(false)}
              className="text-3xl text-black ps-5"
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenButton;
