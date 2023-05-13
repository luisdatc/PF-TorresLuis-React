import { Carousel } from "react-bootstrap";

const CarouselM = ({ img1, img2, img3 }) => {
  return (
    <Carousel id="home" className="w-75 mx-auto"> 
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselM;
