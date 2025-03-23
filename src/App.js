import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function decreaseHandler() {
    if (count>0)
      setCount(count-1);
  }

  function increaseHandler() {
    setCount(count+1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-centerjustify-center items-center bg-[#334151] flex-col gap-10">
      <div className="text-[#0398d4] font-bold text-2xl">Increment and Decrement</div>
      <div className="bg-[white] flex flex-row justify-center gap-10 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl font-bold">
          -
        </button>

        <div className="flex justify-center items-center w-20 text-5xl font-bold">
          {count}
        </div>

        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl font-bold">
          +
        </button>
      </div>

      <button onClick={resetHandler} className="bg-[#0398d4] py-3 px-5 rounded-sm text-lg text-[#344151]">Reset</button>
    </div>
  );
}

export default App;
