import Image from "./Image";
import { useState } from "react";

function App() {
  const [num, setNum] = useState<number>(10);

  const clickedBtn = () => {
    setNum(num - 1);

    console.log("button clicked");
    console.log(num);
  };

  return (
    <>
      <Image src="/Schedule.png" width="50%" height="50%" />
      <h1>{num}</h1>
      <button onClick={clickedBtn}>Click</button>
    
    </>
  );
}

export default App;
