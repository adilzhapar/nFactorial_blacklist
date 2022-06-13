// import cat from './img/cat.jpeg'
import "./App.css";
import {useState} from "react";
import Dalida from './dalida';

function App() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  }

  const decreaseCounter = () => {
    setCounter(counter - 1);
  }

  const resetCounter = () => {
    setCounter(0);
  }
  const helloWorld = <h1>Hello, World!</h1>;
  const helloWorldString = 'Hello, World!';
  const math = 2 + 2;

  const user = {
    firstName: 'Joe',
    lastName: 'Biden',
  };

  const getUserName = ({firstName, lastName}) => {
    return `Current president of US is ${firstName} ${lastName}`;
  }

  const divStyle = {
    backgroundColor: "green",
    color: "white",
  };

  return (
    <div>
      {/* {helloWorld}
      <h1 style={{
        color: 'red',
        fontSize: '30px',
      }}
      >{helloWorldString}</h1>
      <div style={divStyle}>{math}</div>
      <div>{getUserName(user)}</div> */}
      {/* <img src={cat} /> */}
    
      {/* <div className="hello-world"></div> */}

      <Dalida/>

      <div className="counter-wrapper">
        <div className="counter">{counter}</div>
        <div className="actions">
          <button className="increase" onClick={increaseCounter}>increase</button>
          <button className="decrease" onClick={decreaseCounter}>decrease</button>
        </div>
        <div className="reset">
          <button onClick={resetCounter}>Reset</button>
        </div>
      </div>
    </div>


  );


}

export default App;