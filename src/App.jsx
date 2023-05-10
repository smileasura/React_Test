import { useState, memo, useCallback} from "react";
// import { ColoredMessage } from "./components/ColoredMessage";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
  console.log("APP Rendering");

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    //alert();
    setNum(num + 1);  
  };

  const onClickReset = useCallback(() => {
    setNum(0);
  },[]);

  // return (
  // <>
  //     <h1 style={{color:"red"}}>안녕하세요!</h1>
  //     {/* <ColoredMessage color="blue" message="잘 지내시죠?"/> */}
  //     <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
  //     <ColoredMessage color="pink">잘 지냅니다!</ColoredMessage>
  //     <button onClick={onClickButton}>버튼</button>
  //     <p>{num}</p>
  // </>
  // );
  return (
    <>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});