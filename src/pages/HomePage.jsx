import { Col, Container, Row } from "reactstrap";
import { HomepageCard } from "../component/Card/Card";
import data from "../data/data.json";
import HomeSection from "../component/Section/HomeSection";

const HomePage = () => {
  return (
    <>
      <HomeSection title="Albums" data={data.albums} />
      <HomeSection title="Spotify Playlists" data={data.playlists} />
      <HomeSection title="Focus" data={[...data.albums].reverse()} />
    </>
  );
};

export default HomePage;

// const focusData = [
//   {
//     id: 1,
//     title: "Peaceful Piano",
//     subtitle: "Relax and indulge with beautiful piano pieces",
//     img: "https://picsum.photos/300/200",
//   },
//   {
//     id: 2,
//     title: "Deep Focus",
//     subtitle: "Keep calm and focus with ambient and post-rock music",
//     img: "https://picsum.photos/300/200",
//   },
//   {
//     id: 3,
//     title: "Intense Studying",
//     subtitle: "Music to help you concentrate",
//     img: "https://picsum.photos/300/200",
//   },
//   {
//     id: 4,
//     title: "Beats to think to",
//     subtitle: "Instrumental beats to help you think",
//     img: "https://picsum.photos/300/200",
//   },
//   {
//     id: 5,
//     title: "Lo-Fi Beats",
//     subtitle: "Beats to relax, study and focus",
//     img: "https://picsum.photos/300/200",
//   },
//   {
//     id: 6,
//     title: "Chill Lofi Study Beats",
//     subtitle: "Beats to relax, study and focus",
//     img: "https://picsum.photos/300/200",
//   },
//   {
//     id: 7,
//     title: "Brain Food",
//     subtitle: "Music for studying",
//     img: "https://picsum.photos/300/200",
//   },
// ];

// {
//   /* <Container fluid className="px-4 mt-4">
//         <div className="d-flex justify-content-between ">
//           <h4 className="fw-bold">Focus</h4>
//           <span>Show all</span>
//         </div>
//         <Row className="no-gutters m-0 p-0 flex-nowrap overflow-hidden ">
//           {data.map((item, index) => (
//             <Col
//               xs={6}
//               sm={6}
//               md={4}
//               lg={3}
//               xl={2}
//               className="my-3 gap-0"
//               key={index}
//             >
//               <HomepageCard
//                 title={item.albumName}
//                 subtitle={item.artists}
//                 image={item.coverImage}
//               />
//             </Col>
//           ))}
//         </Row>
//       </Container> */
// }
// {
//   /* <Container fluid className="p-0 m-0 px-4 mt-4 ">
//         <div className="d-flex justify-content-between ">
//           <h4 className="fw-bold">Spotify Playlists</h4>
//           <span>Show all</span>
//         </div> */
// }
// {
//   /* <div className="d-flex p-0 m-0 ">
//           {focusData.map((item) => (
//             <HomepageCard
//               key={item.id}
//               title={item.title}
//               subtitle={item.subtitle}
//               //   img={item.img}
//             />
//           ))}
//         </div> */
// }
// {
//   /* <Container fluid className="p-0">
//         <Row className="no-gutters m-0 p-0 flex-nowrap overflow-hidden ">
//           {data.map((item, index) => (
//             <HomepageCard
//               key={index}
//               title={item.albumName}
//               subtitle={item.artists}
//               //   img={item.img}
//               image={item.coverImage}
//             />
//           ))}
//         </Row>
//       </Container> */
// }
// {
//   /* <Container fluid className="p-0">
//         <Row className="no-gutters m-0 p-0 flex-nowrap overflow-hidden ">
//           {data.map((item, index) => (
//             <Col
//               xs={12}
//               sm={6}
//               md={4}
//               lg={3}
//               xl={2}
//               className="my-3 gap-0"
//               key={index}
//             >
//               <HomepageCard
//                 title={item.albumName}
//                 subtitle={item.artists}
//                 image={item.coverImage}
//               />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//       <Container fluid className="p-0">
//         <Row
//           className="no-gutters m-0 p-0 flex-nowrap overflow-hidden"
//           gutter={2}
//         >
//           {data.map((item, index) => (
//             <Col
//               xs={12}
//               sm={6}
//               md={4}
//               lg={3}
//               xl={3}
//               xxl={2}
//               className="m-0 p-3"
//               key={index}
//             >
//               <HomepageCard
//                 title={item.albumName}
//                 subtitle={item.artists}
//                 image={item.coverImage}
//               />
//             </Col>
//           ))}
//         </Row> */
// }
// {
//   /* </Container> */
// }
// {
//   /* <Row className="d gy-4  p-0 m-0 ">
//           {focusData.map((item) => (
//             <Col className="p-0 gx-1">
//               <HomepageCard
//                 key={item.id}
//                 title={item.title}
//                 subtitle={item.subtitle}
//                 //   img={item.img}
//               />
//             </Col>
//           ))}
//         </Row> */
// }
// {
//   /* </Container> */
// }
