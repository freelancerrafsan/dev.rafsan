import React, { useState } from "react";
import ProtfolioData from "./ProtfolioData";
import My_protfolio from "./My_protfolio";

const Protfolio = () => {
  const [Pdata, setData] = useState(ProtfolioData);
  return (
    <>
      <section className="protfolio" id="protfolio">
        <div className=" container">
          <h1>protfolio</h1>
          <div className="row">
            {Pdata.map((Event) => {
              return <My_protfolio key={Event.id} {...Event} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Protfolio;
