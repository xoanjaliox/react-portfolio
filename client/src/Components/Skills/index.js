import React from "react";
import "./style.css";


const Skills = () => {
    return (
      <>
      <div className="skills-area">
        <div className="container white-box">
          <div className="col-md-12 section-title">Skills</div>

          <div className="row des-dev">
            <div className="col-md-6 design">
              <h4>Designer</h4>
              <div className="row iconsr1">
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
              </div>
              <div className="row iconsr2">
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
              </div>
              
            </div>
            <div className="col-md-6 dev">
              <h4>Developer</h4>
              <div className="row iconsr1">
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
              </div>
              <div className="row iconsr2">
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
    
    );
  }

export default Skills;