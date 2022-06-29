import React from "react";

const Survise = () => {
  return (
    <>
      <section id="survise" className=" mt-5 pt-5">
      <h1>survise</h1>
        <div className="survise">
          <div className=" container-fluid">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="cards">
                  <ion-icon name="code-working-outline"></ion-icon>
                  <h2>web developmant</h2>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="cards">
                  <ion-icon name="color-wand-outline"></ion-icon>
                  <h2>graphic design</h2>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="cards">
                  <ion-icon name="logo-wordpress"></ion-icon>
                  <h2>wordpress</h2>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="cards">
                  <ion-icon name="bug-outline"></ion-icon>
                  <h2>bug fixh</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Survise;
