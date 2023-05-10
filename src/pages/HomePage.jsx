import { Col, Container, Row } from "reactstrap";
import { HomepageCard } from "../component/Card/Card";
const focusData = [
  {
    id: 1,
    title: "Peaceful Piano",
    subtitle: "Relax and indulge with beautiful piano pieces",
    img: "https://picsum.photos/300/200",
  },
  {
    id: 2,
    title: "Deep Focus",
    subtitle: "Keep calm and focus with ambient and post-rock music",
    img: "https://picsum.photos/300/200",
  },
  {
    id: 3,
    title: "Intense Studying",
    subtitle: "Music to help you concentrate",
    img: "https://picsum.photos/300/200",
  },
  {
    id: 4,
    title: "Beats to think to",
    subtitle: "Instrumental beats to help you think",
    img: "https://picsum.photos/300/200",
  },
  {
    id: 5,
    title: "Lo-Fi Beats",
    subtitle: "Beats to relax, study and focus",
    img: "https://picsum.photos/300/200",
  },
  {
    id: 6,
    title: "Chill Lofi Study Beats",
    subtitle: "Beats to relax, study and focus",
    img: "https://picsum.photos/300/200",
  },
  {
    id: 7,
    title: "Brain Food",
    subtitle: "Music for studying",
    img: "https://picsum.photos/300/200",
  },
];
const HomePage = () => {
  return (
    <>
      <Container fluid className=" px-4 mt-4">
        <div className="d-flex justify-content-between ">
          <h4 className="fw-bold">Focus</h4>
          <span>Show all</span>
        </div>
        <div className="d-flex p-0 m-0  overflow-hidden">
          {focusData.map((item) => (
            <HomepageCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              //   img={item.img}
            />
          ))}
        </div>
      </Container>
      <Container fluid className=" px-4 mt-4">
        <div className="d-flex justify-content-between ">
          <h4 className="fw-bold">Focus</h4>
          <span>Show all</span>
        </div>
        <div className="d-flex p-0 m-0  overflow-hidden">
          {focusData.map((item) => (
            <HomepageCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              //   img={item.img}
            />
          ))}
        </div>
      </Container>
      {/* <Container fluid className="p-0 m-0 px-4 mt-4 ">
        <div className="d-flex justify-content-between ">
          <h4 className="fw-bold">Spotify Playlists</h4>
          <span>Show all</span>
        </div> */}
      {/* <div className="d-flex p-0 m-0 ">
          {focusData.map((item) => (
            <HomepageCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              //   img={item.img}
            />
          ))}
        </div> */}
      {/* <Row className="no-gutters m-0 p-0 ">
        {focusData.map((item) => (
          <Col className="col-xl-2 col-md-4 col-lg-4 p-0 m-0 card-col gy-5 ">
            <HomepageCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              //   img={item.img}
            />
          </Col>
        ))}
      </Row> */}
      {/* <Row className="d gy-4  p-0 m-0 ">
          {focusData.map((item) => (
            <Col className="p-0 gx-1">
              <HomepageCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                //   img={item.img}
              />
            </Col>
          ))}
        </Row> */}
      {/* </Container> */}
    </>
  );
};

export default HomePage;
