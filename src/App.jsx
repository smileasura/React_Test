import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const onClickButton = () => {
      alert();  
    };

    return (
    <>
        <h1 style={{color:"red"}}>안녕하세요!</h1>
        {/* <ColoredMessage color="blue" message="잘 지내시죠?"/> */}
        <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
        <ColoredMessage color="pink">잘 지냅니다!</ColoredMessage>
        <button onClick={onClickButton}>버튼</button>
    </>
    );
};