import {
  Button,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Nav,
  Navbar,
  NavbarText,
} from "reactstrap";
import {
  MdArrowForwardIos,
  MdArrowBackIos,
  MdOutlineDownloadForOffline,
} from "react-icons/md";
import { useMatch } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const match = useMatch("/search/*");

  return (
    <>
      <Navbar
        sticky="top"
        style={{ background: "#070707" }}
        className="bg-opacity-50 "
      >
        <Container fluid className="p-0 d-flex align-items-center">
          <Nav className="me-auto ">
            <Button
              className="rounded-circle d-flex justify-content-center align-items-center bg-black me-2 border-0"
              style={{ width: "40px", height: "40px" }}
            >
              <MdArrowBackIos size={40} />
            </Button>
            <Button
              className="rounded-circle d-flex justify-content-center bg-black border-0 align-items-center"
              style={{ width: "40px", height: "40px" }}
            >
              <MdArrowForwardIos />
            </Button>
          </Nav>
          {match && (
            <Nav className="me-auto">
              <InputGroup className="">
                <InputGroupText addonType="append">
                  <FaSearch />
                </InputGroupText>
                <Input
                  autoFocus
                  type="search"
                  placeholder="Search"
                  className="border-0"
                />
              </InputGroup>
            </Nav>
          )}
          <Nav className="">
            <Button className=" fw-semibold rounded-5 m-2 text-black bg-white border-0 btn-hover me-2">
              Upgrade
            </Button>
            <Button className="fw-semibold rounded-5 m-2 bg-black  border-0 btn-hover me-2">
              <MdOutlineDownloadForOffline size={20} className="me-1 " />
              Install App
            </Button>
            <NavbarText>
              <img
                width={35}
                height={35}
                className="rounded-circle "
                src="https://picsum.photos/200"
                alt="profile"
              />
            </NavbarText>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
