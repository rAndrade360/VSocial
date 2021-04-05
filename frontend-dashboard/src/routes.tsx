import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Container, Col, Row} from 'react-bootstrap';
import SideBar from './components/SideBar'
import Home from "./pages/Home";
import Whatsapp from "./pages/Whatsapp";
import Facebook from "./pages/Facebook";
import Analytics from "./pages/Analytics";


export default function App() {
  return (
    <Router>
        <Switch>
        <Route path="/" exact>
          <Container fluid>
            <Row>
              <Col sm={2}>
                <SideBar />
              </Col>
              <Col sm={10}>
                <Home />
              </Col>
            </Row>
            </Container>
          </Route>
          <Route path="/integration/whatsapp">
          <Container fluid>
            <Row>
              <Col sm={2}>
                <SideBar />
              </Col>
              <Col sm={10}>
                <Whatsapp />
              </Col>
            </Row>
            </Container>
          </Route>
          <Route path="/integration/facebook">
          <Container fluid>
            <Row>
              <Col sm={2}>
                <SideBar />
              </Col>
              <Col sm={10}>
                <Facebook />
              </Col>
            </Row>
            </Container>
          </Route>

          <Route path="/integration/analytics">
          <Container fluid>
            <Row>
              <Col sm={2}>
                <SideBar />
              </Col>
              <Col sm={10}>
                <Analytics />
              </Col>
            </Row>
            </Container>
          </Route>
         
        </Switch>
      {/* </div> */}
    </Router>
  );
}