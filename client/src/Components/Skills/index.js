import React from "react";
import "./style.css";
import { Col, Row, Container } from "../../Components/Grid";


const Skills = () => {
    return (
      <>
        <div className="skills-area">
          <div className="white-box"><Container fluid>

            <Row>
              <h3 className="section-title">Skills</h3>
            </Row>

            <div className="des-dev"><Row>
              <div className="design"><Col size="md-6">
                <h4>Designer</h4>
                <div className="iconsr1"><Row>
                  <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                  <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                  <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                  <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                </Row></div>

                <div className="iconsr2"><Row>
                  <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                  <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                </Row></div>
              
              </Col></div>

              <div className="dev"><Col size="md-6">
                <h4>Developer</h4>
                <div className="iconsr1"><Row>
                  <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                  <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                </Row></div>

                <div className="iconsr2"><Row>
                  <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                  <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                </Row></div>
              
              </Col></div>
            
            </Row></div>

          </Container></div>
        </div>

      </>
    );
  }

export default Skills;