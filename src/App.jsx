// import { useState, memo, useCallback} from "react";
// // import { ColoredMessage } from "./components/ColoredMessage";
// import { Child1 } from "./components/Child1";
// import { Child4 } from "./components/Child4";

// export const App = memo(() => {
//   console.log("APP Rendering");

//   const [num, setNum] = useState(0);

//   const onClickButton = () => {
//     //alert();
//     setNum(num + 1);  
//   };

//   const onClickReset = useCallback(() => {
//     setNum(0);
//   },[]);

//   // return (
//   // <>
//   //     <h1 style={{color:"red"}}>안녕하세요!</h1>
//   //     {/* <ColoredMessage color="blue" message="잘 지내시죠?"/> */}
//   //     <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
//   //     <ColoredMessage color="pink">잘 지냅니다!</ColoredMessage>
//   //     <button onClick={onClickButton}>버튼</button>
//   //     <p>{num}</p>
//   // </>
//   // );
//   return (
//     <>
//       <button onClick={onClickButton}>버튼</button>
//       <p>{num}</p>
//       <Child1 onClickReset={onClickReset} />
//       <Child4 />
//     </>
//   );
// });

import { useContext } from "react";
import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export const App = () => {
  const {isAdmin, setIsAmin} = useContext(AdminFlagContext);
  const onClickSwitch = () => setIsAmin(!isAdmin);
  return (
    <div>
      {isAdmin ? <span>관리자입니다</span> : <span>관리자가 아닙니다</span>}
      <button onClick={onClickSwitch}>전환</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};