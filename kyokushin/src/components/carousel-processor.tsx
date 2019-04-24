import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ImageProcessor from "../components/image-processor";

function CarouselProcessor({ source }){
    return <Carousel>
          <Carousel.Item>
            <ImageProcessor source="homeBanner"></ImageProcessor>
          </Carousel.Item>
          <Carousel.Item>
            <ImageProcessor source="homeBanner"></ImageProcessor>
          </Carousel.Item>
          <Carousel.Item>
            <ImageProcessor source="homeBanner"></ImageProcessor>
          </Carousel.Item>
        </Carousel>
}

export default CarouselProcessor;