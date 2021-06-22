/* eslint-disable no-unused-vars */
import "./Events.css";
import Event from "./Event";
import Inquizitive from "./icons/inquizitive.png";
import NCC from "./icons/NCC.png";
import RC from "./icons/RC.png";
import NTH from "./icons/nth-logo.png";
import { Container, Row, Col } from "react-bootstrap";

const Events = () => {
  const nccBasicInfo =
    "NCC is a platform where you can not only sharpen your problem solving ability but also showcase your programming skills.";
  const nthBasicInfo =
    "NTH is an online hunt played worldwide. Follow the trails of clues and piece them together to get to the puzzle.";

  const rc = {
    info: "Integer type questions which involve complex mathematical problems which are not easy to solve without coding. A 28-minute game for a person or a team of two people. Teams or players are allowed to use any IDE or software after the game has started. You will have 3 lifelines (description will be provided in the game itself). You will have two attempts to answer a particular question. In the first attempt, the marking scheme will be +4 0. In the second attempt, the marking scheme will be changed to +2  -1.",
  };

  return (
    <div className="body-ContactUs events">
      <Container fluid>
        {/* <div className='heading-aboutUs display-3 mb-5 text-center'>Events</div> */}
        <Row>
          <Col lg={3} md={6} sm={12}>
            <Event
              info={nccBasicInfo}
              icon={RC}
              eventname="Reverse Coding"
              id="1"
            />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Event
              info={nccBasicInfo}
              icon={NCC}
              eventname="National Coding Contest"
              id="2"
            />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Event
              info={nthBasicInfo}
              icon={Inquizitive}
              eventname="Inquizitive"
              id="4"
            />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Event id={3} info={nccBasicInfo} icon={NTH} eventname="NTH" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Events;