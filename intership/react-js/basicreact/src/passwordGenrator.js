import React, { useCallback, useState, useEffect, useRef } from "react";

const PasswordGenrator = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharater] = useState(false);
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("black");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordSet = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLNMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (character) str += "~!@#$%^&*()[]{}?|/";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordSet()
  }, [length, number, character, passwordSet])

  return (
    <div className="w-full h-[100vh] bg-black flex flex-col  items-center pt-10"  style={{ background: color }}>
      <div className="w-full max-w-[900px] h-[300px] bg-slate-600 rounded-md">
        <h1 className="text-3xl text-white text-center mt-5 font-bold">
          Password Genrator
        </h1>
        <div className="flex mx-8 mt-8 ">
          <input
            ref={passwordRef}
            value={password}
            readOnly
            className="w-full py-3 px-3 outline-none overflow-hidden rounded-l-2xl text-lg font-bold text-orange-600"
          ></input>
          <button
            onClick={copyPasswordToClipboard}
            className="px-6 text-xl text-white font-bold bg-blue-600 rounded-r-2xl"
          >
            Copy
          </button>
        </div>
        <div className="flex gap-10 items-center mt-5 ms-10">
          <div className="flex items-center">
            <input
              type="range"
              min={0}
              max={100}
              defaultValue={length}
              className="w-[200px] cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            ></input>
            <label className="ps-3 text-xl text-white font-medium ">
              Length ({length})
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={number}
              className="cursor-pointer"
              onChange={() => setNumber((prev) => !prev)}
            ></input>
            <label className="ps-2 text-xl text-white font-medium">
              Number
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={character}
              onChange={() => setCharater((prev) => !prev)}
              className="cursor-pointer"
            ></input>
            <label className="ps-2 text-xl text-white font-medium">
              Character
            </label>
          </div>
        </div>
      </div>
      <div
       
        className="flex items-end h-full justify-center  w-full"
      >
        <div className=" bg-white w-[900px] flex justify-center items-center gap-10 py-4 rounded-full mb-10 text-white ">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="w-[70px] text-center  py-2 bg-red-600 rounded-full "
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="w-[70px] text-center  py-2 bg-green-600 rounded-full "
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="w-[70px] text-center  py-2 bg-blue-600 rounded-full "
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("purple");
            }}
            className="w-[70px] text-center  py-2 bg-purple-600 rounded-full "
          >
            Purple
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="w-[70px] text-center  py-2 bg-black rounded-full "
          >
            Black
          </button>
          <button
            onClick={() => {
              setColor("orange");
            }}
            className="w-[70px] text-center py-2 bg-orange-600 rounded-full"
          >
            Orange
          </button>
          <button
            onClick={() => {
              setColor("gray");
            }}
            className="w-[70px] text-center py-2 bg-gray-600 rounded-full "
          >
            Gray
          </button>
          <button
            onClick={() => {
              setColor("pink");
            }}
            className="w-[70px] text-center  py-2 bg-pink-600 rounded-full "
          >
            Pink
          </button>
        </div>
      </div>    
    </div>
  );
};

export default PasswordGenrator;
