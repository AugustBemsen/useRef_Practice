import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const App = () => {
  //  Set up state

  const [myName, setMyName] = useState("");

  //  Set up Ref

  // const { current } = useRef("");

  const preName = useRef("");
  const oldName = useRef("");
  useEffect(() => {
    preName.current = myName;
  }, [myName]);

  const getInput = (e) => setMyName(e.target.value);

  return (
    <div className="App">
      <input value={myName} onChange={getInput} />
      <p>{`My name is ${myName} , and it used to be ${preName.current}`}</p>
    </div>
  );
};

export default App;
