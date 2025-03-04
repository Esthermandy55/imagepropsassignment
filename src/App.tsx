import Image from "./Image";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState<number>(10000);

  useEffect(() => {
    setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);
  }, [counter]);

  const [num, setNum] = useState<number>(10);

  const clickedBtn = () => {
    setNum(num - 1);

    console.log("button clicked");
    console.log(num);
  };

  return (
    <>
      <main className="h-screen w-full bg-amber-200 flex flex-col justify-center items-center">
        <Image src="/Schedule.png" width="50%" height="50%" />
        <h1>{num}</h1>
        <button className="bg-white" onClick={clickedBtn}>
          Click
        </button>
        <h1 className="text-3xl">{counter}</h1>
      </main>
    </>
  );
}

export default App;
