import Image from "./Image";
import { useState, useEffect } from "react";
import BookSearchAPI from "./BookSearchAPI.tsx";
import ControlledForm from "./ControlledForm.tsx";
import ToggleTheme from "./ToggleTheme.tsx";

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
      <ControlledForm />
      <main className="h-screen w-full bg-amber-200 flex justify-center items-center gap-6">
        <Image src="/Schedule.png" width="25%" height="50%" />
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl">{num}</h1>
          <button className="bg-white p-2 rounded" onClick={clickedBtn}>
            Click
          </button>
          <h1 className="text-3xl">{counter}</h1>
        </div>
      </main>

        <ToggleTheme />

      <div className="flex flex-row">
        <BookSearchAPI />
      </div>
    </>
  );
}

export default App;
