import { Col, Container, Row } from "reactstrap";
import "./App.css";
import Sidebar from "./component/Sidebar/Sidebar";
import Header from "./component/Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <>
      <Container fluid className="p-0 m-0">
        <Row className="m-0 p-0">
          <Col md={2} className="position-fixed m-0 p-0">
            <Sidebar />
          </Col>
          <Col md={10} className="p-0 offset-2 ">
            <Header />
            <Outlet />
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
