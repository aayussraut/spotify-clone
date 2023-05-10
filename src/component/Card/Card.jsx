import { BsFillPlayFill } from "react-icons/bs";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
const HomepageCard = ({ title, subtitle }) => {
  return (
    <Card
      className="p-3 me-3 "
      style={{
        width: "196px",
        height: "286px",
        minWidth: "196px",
        backgroundColor: "#191919",
        overflow: "hidden",
      }}
    >
      <div className="position-relative">
        <img
          alt="Sample"
          src="https://picsum.photos/300/200"
          className="card-img-top"
          style={{ height: "164px", width: "164px" }} // 164px is the height of the card
        />
        <Button
          className="rounded-circle border-0 position-absolute bottom-0 end-0 playButton"
          style={{ width: "50px", height: "50px" }}
        >
          <BsFillPlayFill size={30} color="black" />
        </Button>
      </div>
      <CardBody className="p-0 pt-3">
        <CardTitle tag="h6" className="fw-bold text-white ">
          {title}
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {subtitle}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

// export { HomepageCard };

// import { BsFillPlayFill } from "react-icons/bs";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardSubtitle,
//   CardTitle,
//   Col,
//   Container,
//   Row,
// } from "reactstrap";
// const HomepageCard = ({ title, subtitle }) => {
//   return (
//     <Card
//       className="p-3  card"
//       style={{
//         width: "196px",
//         height: " 286px",
//         backgroundColor: "#191919",
//       }}
//     >
//       <Row className="position-relative m-0 p-0">
//         <img
//           alt="Sample"
//           src="https://picsum.photos/300/200"
//           className="p-0 "
//           style={{ height: "160px" }}
//         />
//         <Button
//           className="rounded-circle border-0 position-absolute bottom-0 end-0 playButton"
//           style={{ width: "50px", height: "50px" }}
//         >
//           <BsFillPlayFill size={30} color="black" />
//         </Button>
//       </Row>
//       <Row className="m-0 p-0">
//         <CardBody className="p-0 pt-3">
//           <CardTitle tag="h6" className="fw-bold text-white ">
//             {title}
//           </CardTitle>
//           <CardSubtitle className="mb-2 text-muted" tag="h6">
//             {subtitle}
//           </CardSubtitle>
//         </CardBody>
//       </Row>
//     </Card>
//   );
// };

// export { HomepageCard };

// import { BsFillPlayFill } from "react-icons/bs";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardSubtitle,
//   CardTitle,
//   Col,
//   Container,
//   Row,
// } from "reactstrap";

// const HomepageCard = ({ title, subtitle }) => {
//   return (
//     <Card
//       className="p-3 mb-4 card"
//       style={{
//         width: "100%",
//         height: "auto",
//         backgroundColor: "#191919",
//       }}
//     >
//       <Row className="position-relative m-0 p-0">
//         <Col xs={12} className="p-0">
//           <img
//             alt="Sample"
//             src="https://picsum.photos/300/200"
//             className="w-100"
//             style={{ height: "auto", objectFit: "cover" }}
//           />
//           <Button
//             className="rounded-circle border-0 position-absolute bottom-0 end-0 translate-middle mb-3 me-3 playButton"
//             style={{ width: "50px", height: "50px" }}
//           >
//             <BsFillPlayFill size={30} color="black" />
//           </Button>
//         </Col>
//       </Row>
//       <Row className="m-0 p-0">
//         <Col className="p-0">
//           <CardBody className="p-0 pt-3">
//             <CardTitle tag="h6" className="fw-bold text-white ">
//               {title}
//             </CardTitle>
//             <CardSubtitle className="mb-2 text-muted" tag="h6">
//               {subtitle}
//             </CardSubtitle>
//           </CardBody>
//         </Col>
//       </Row>
//     </Card>
//   );
// };

export { HomepageCard };
