import { BsFillPlayFill, BsSpotify } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { Button, Col, Container, Row, Table } from "reactstrap";
import { VscEllipsis } from "react-icons/vsc";
import { GiHearts } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
import JsonData from "../data/data.json";
const Playlist = () => {
  const location = useLocation();
  const { data, itemId } = location.state;
  console.log(itemId);
  console.log(data);
  const totalSongs = [...data.songs].length;
  const songs = JsonData.songs;
  console.log(data.songs);
  return (
    <>
      <Container fluid className="px-4 mt-4">
        <Row className="m-0 p-0">
          <Col className="m-0 p-0 col-3">
            <img
              src={data.image_url}
              style={{ width: "232px", height: "232px" }}
            />
          </Col>
          <Col className="mt-5 d-flex flex-column">
            <span>Playlist</span>
            <span className="m-0 p-0 fw-bold" style={{ fontSize: "90px" }}>
              {data.name}
            </span>
            <span>{data.description}</span>
            <div className="d-flex align-items-center">
              {data.artist && (
                <span className="me-1 fw-semibold">{data.artist}</span>
              )}
              {!data.artist && (
                <div className=" d-flex align-items-center ">
                  <BsSpotify size={20} />
                  <span className="ms-1 fw-bold">Spotify</span>
                </div>
              )}
              <span>•</span>
              <span className="mx-1">
                {totalSongs}
                {totalSongs > 1 ? " songs" : " song"}{" "}
              </span>
              <span>•</span>
              <span className="ms-1 text-secondary">1 hr 30 min</span>
            </div>
          </Col>
        </Row>
        <Col className="mt-5 d-flex align-items-center">
          <Button
            className="rounded-circle border-0  bottom-0 end-0 me-4"
            style={{
              backgroundColor: "#1ed661",
              width: "10vw",
              height: "10vw",
              minWidth: "50px",
              minHeight: "50px",
              maxWidth: "50px",
              maxHeight: "50px",
            }}
          >
            <BsFillPlayFill size={30} color="black" />
          </Button>
          <GiHearts size={32} className="me-4 text-danger" />
          <VscEllipsis size={24} className="fw-semibold " />
        </Col>
        <Col className="mt-4">
          <Table borderless className="text-secondary">
            <thead className=" border-bottom border-2 border-dark">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Album</th>
                <th>
                  <AiOutlineClockCircle />
                </th>
              </tr>
            </thead>

            <tbody className="fs-6">
              {data.songs.map((id, index) => {
                console.log(id);
                const { name, album, duration, image_url, artist } = songs[id];
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <div className="d-flex ">
                        <img
                          src={image_url}
                          style={{ width: "40px", height: "40px" }}
                          className="me-3"
                        />
                        <div className="d-flex flex-column">
                          <span className="fw-semibold">{name}</span>
                          <span>{artist}</span>
                        </div>
                      </div>
                    </td>
                    <td>{album}</td>
                    <td>{duration}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Container>
    </>
  );
};

export default Playlist;
