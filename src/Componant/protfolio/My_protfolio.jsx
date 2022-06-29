import React from "react";


const My_protfolio = (props) => {
  return (
    <>
      <div className="col-10 col-sm-8 col-md-6 col-lg-3 m-auto ">
        <div className="cardBG">
          <img className=" img-fluid" src={props.imageBG} alt="" />
          <div className="cardBtn">
            <a target="_blank" href={props.Ibtn}>
              <ion-icon name="eye-outline"></ion-icon>
            </a>
            <a target="_blank" href={props.codeDown}>
              <ion-icon name="code-download-outline"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default My_protfolio;
