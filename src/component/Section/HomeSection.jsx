import { Col, Container, Row } from "reactstrap";
import { HomepageCard } from "../Card/Card";

const HomeSection = ({ title, data }) => {
  return (
    <>
      <Container fluid className="px-4 mt-4">
        <div className="d-flex justify-content-between ">
          <h4 className="fw-bold">{title}</h4>
          <span>Show all</span>
        </div>
        <Row className="no-gutters m-0 p-0 flex-nowrap overflow-hidden ">
          {data.map((item) => (
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              className="my-3 gap-0"
              key={item.id}
            >
              <HomepageCard
                title={item.name}
                subtitle={item.artist || item.description}
                image={item.image_url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeSection;
