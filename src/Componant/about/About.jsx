import React from "react";
import Qus_ans from "./Qus_ans";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className=" container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h2>discretion</h2>
                <p>
                  Hello, I am Web Developer..... I have great skills in Web
                  Development (HTML, CSS, JavaScript, React, Bootstrap 5, Sass
                  and WordPress). I can Create E-Commerce Website, Business
                  Website, Blog ,News , Personal website, landing Page etc. More
                  over Logo(2D, 3D), Business Card Design, Video editing ,
                  Template Design, Banner Design. It will surely be very
                  beneficial for every one. I always do my work try perfectly.
                  You will surely get better experience after working with me.
                </p>
                <a
                  target="_blank"
                  href="#https://drive.google.com/file/d/1IelHHjRYmPVhAsDnVGMu7XU49-CRyt4z/view?usp=sharing"
                >
                  <button>cd downlode</button>
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-5 pt-5 skil-qus">
            <div className="col-md-6">
              <div className="slill_section">
                <h1>skill</h1>
                <div className="html skill">
                  <h3>html</h3>
                  <div className="skill_bg">
                    <div className="skill_html"></div>
                  </div>
                </div>
                <div className="css skill">
                  <h3>css</h3>
                  <div className="skill_bg">
                    <div className="skill_css"></div>
                  </div>
                </div>
                <div className="js skill">
                  <h3>js</h3>
                  <div className="skill_bg">
                    <div className="skill_js"></div>
                  </div>
                </div>
                <div className="react skill">
                  <h3>react</h3>
                  <div className="skill_bg">
                    <div className="skill_react"></div>
                  </div>
                </div>
                <div className="wordpress skill">
                  <h3>wordpress</h3>
                  <div className="skill_bg">
                    <div className="skill_wordpress"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-5">
              <div className="qus_ans">
                <h1>sum qus ans</h1>
                <Qus_ans />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
