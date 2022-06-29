import React, { useState } from "react";
import QusData from "./QusData";
import "../../css/index.css";
import "../../css/Responsive.css";
import My_Acodian from "./My_Acodian";

const Qus_ans = () => {
  const [qusValu, setValue] = useState(QusData);

  return (
    <>
      <div className="qus_section">
        {qusValu.map((curElem) => {
          return <My_Acodian key={curElem.id} {...curElem} />;
        })}
      </div>
    </>
  );
};

export default Qus_ans;
