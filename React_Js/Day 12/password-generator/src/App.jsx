import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*_-+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = str.charAt(Math.floor(Math.random() * str.length + 1));

      pass += char;
    }

    setPassword(pass);
  }, [length, numberAllow, charAllow]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    passwordGenerator();
  }, [length, charAllow, numberAllow, passwordGenerator]);

  return (
    <div className="w-full max-w-md bg-gray-700 shadow-md rounded-lg px-5 py-8 my-8 font-mono">
      <h1 className="text-white text-center mb-5 text-3xl font-bold">
        Password Generator
      </h1>
      <div className="flex shadow rounded-sm overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          className="outline-none w-full py-1 px-3 bg-white font-bold text-black"
          ref={passwordRef}
        />
        <button
          onClick={copyPassword}
          className="bg-blue-800 text-white font-bold px-4 py-1.5 shrink-0 cursor-pointer"
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2 text-orange-600 font-bold justify-evenly my-5">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            max={100}
            min={6}
            value={length}
            id="lenInput"
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="cursor-pointer" htmlFor="lenInput">
            Length : {length}
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            className="cursor-pointer"
            defaultChecked={numberAllow}
            id="numberInput"
            onChange={() => setNumberAllow((numberAllow) => !numberAllow)}
          />
          <label className="cursor-pointer" htmlFor="numberInput">
            Numbers
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            className="cursor-pointer"
            defaultChecked={charAllow}
            id="charInput"
            onChange={() => setCharAllow((charAllow) => !charAllow)}
          />
          <label className="cursor-pointer" htmlFor="charInput">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
