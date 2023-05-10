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
import { useMatch, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const match = useMatch("/search/*");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    navigate(`/search/${e.target.value}`);
  };
  // useEffect(() => {
  //   setSearch("");
  // }, []);

  return (
    <>
      <Navbar
        sticky="top"
        style={{ background: "#070707" }}
        className="bg-opacity-50 "
      >
        <Container fluid className="p-0 d-flex align-items-center">
          <Nav className="me-2 ">
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
            <Nav className="me-auto   rounded-5 w-25 bg-secondary bg-opacity-25 py-2">
              <InputGroup className="rounded">
                <InputGroupText
                  addonType="append"
                  className="bg-transparent border-0 text-white p-0 ps-3"
                >
                  <FaSearch size={18} />
                </InputGroupText>
                <Input
                  autoFocus
                  type="search"
                  value={search}
                  onChange={handleSearch}
                  placeholder="What do you want to listen to?"
                  className="bg-transparent border-0 shadow-none text-white"
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
