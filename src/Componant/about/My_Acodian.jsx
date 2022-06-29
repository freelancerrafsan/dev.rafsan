import React, { useState } from "react";

const My_Acodian = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="qus">
        <h2 onClick={() => setShow(!show)}> {show ? "-" : "+"}</h2>
        <h3>{props.qus}</h3>
      </div>
      <div className="ans">{show && <p>{props.ans}</p>}</div>
    </>
  );
};

export default My_Acodian;
