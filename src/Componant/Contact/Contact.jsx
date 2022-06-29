import React from "react";
import From from "./From";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className=" container">
          <div className="row">
            <div className="col-md-6">
              <h1>contact</h1>
              <div className="location">
                <ion-icon name="location-outline"></ion-icon>
                <p>
                  dhaka,bangladadh <br /> mirpur ,Rupnogor 1216
                </p>
              </div>
              <div className="time">
                <ion-icon name="stopwatch-outline"></ion-icon>
                <p>24 hours survise</p>
              </div>
              <div className="phone">
                <ion-icon name="call-outline"></ion-icon>
                <p>013*******</p>
              </div>
              <div className="email">
                <ion-icon name="mail-outline"></ion-icon>
                <p>jahidislamrafsan@gmail.com</p>
              </div>

              <div className="icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-whatsapp"></i>
                <i className="fab fa-github"></i>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className=" text-danger text-capitalize">massage</h2>
              <From />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
