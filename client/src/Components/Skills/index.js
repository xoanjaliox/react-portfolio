import React from "react";
import "./style.css";
import { Col, Row, Container } from "../../Components/Grid";


const Skills = () => {
    return (
      <>
      <div className="skills-area">
        <div className="container white-box">
          <Col size="md-12" className="section-title">Skills</Col>

          <Row className="des-dev">
            <Col size="md-6" className="design">
              <h4>Designer</h4>
              <Row className="iconsr1">
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
              </Row>
              <Row className="iconsr2">
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
              </Row>
              
            </Col>
            <Col size="md-6" className="dev">
              <h4>Developer</h4>
              <Row className="iconsr1">
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
              </Row>
              <Row className="iconsr2">
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
                <img className="img-responsive" src={"assets/images/photoshopicon.png"} />
              </Row>
            </Col>
          </Row>


        </div>
      </div>
    </>
    
    );
  }

export default Skills;