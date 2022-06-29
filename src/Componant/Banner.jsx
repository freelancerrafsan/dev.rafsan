import React from "react";
import bannerRight from "../images/bannerRight.png";

const Banner = () => {
  return (
    <>
      <section className="banner" id="Home">
        <div className=" container">
          <div className="row align-items-center">
            <div className="contert col-md-6 order-2 order-md-1 mt-5">
              <h1>welcome to</h1>
              <h2>
                i am <span style={{ color: "#0DA8FD" }}>web developer</span>
              </h2>
              <a href="#contact">
                <button>contact</button>
              </a>
            </div>
            <div className=" col-md-6 order-md-2 order-1">
              <img className=" img-fluid" src={bannerRight} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
