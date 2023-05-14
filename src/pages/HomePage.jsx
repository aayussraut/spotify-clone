import { Col, Container, Row } from "reactstrap";
import { HomepageLongCard } from "../component/Card/Card";
import data from "../data/data.json";
import { Link } from "react-router-dom";
import { userAtom } from "../recoil";
import { useRecoilValue } from "recoil";
import PlayListSection from "../component/Section/PlaylistSection";
const HomePage = () => {
  const user = useRecoilValue(userAtom);
  return (
    <>
      {user.user && (
        <Container fluid className="px-4 mt-4">
          <Row className=" no-gutters m-0 p-0  overflow-hidden ">
            {data.playlists.slice(0, 6).map((item, index) => (
              <>
                <Col
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={4}
                  className=""
                  key={index}
                >
                  <Link
                    className="text-decoration-none"
                    to={`/playlist/${item.id + "xyseffea235fe1"}`}
                    state={{ data: item, itemId: item.id }}
                  >
                    <HomepageLongCard item={item} />
                  </Link>
                </Col>
              </>
            ))}
          </Row>
        </Container>
      )}
      <PlayListSection title="Albums" data={data.albums} />
      <PlayListSection title="Spotify Playlists" data={data.playlists} />
      <PlayListSection title="Focus" data={[...data.albums].reverse()} />
    </>
  );
};

export default HomePage;
