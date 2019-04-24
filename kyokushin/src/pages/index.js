import React from "react";
import Layout from "../components/layout"
import ImageProcessor from "../components/image-processor";
import CarouselProcessor from "../components/carousel-processor";

export default () => (
  <Layout imageSource="masOyama"> 
    <div className="home-banner-image-content">
        {/* <ImageProcessor source="homeBanner"></ImageProcessor> */}
        <CarouselProcessor></CarouselProcessor>
    </div>
    <div className="primary-question">
      What is Kyokushin ?
    </div>
    <div className="content-container">
        <div className="home-inset-image-content">
            <ImageProcessor source="prasenjitSaha"></ImageProcessor>
        </div>
        <div className="home-body-content">
          <p>
            Kyokushin is a style of stand-up, full contact karate, founded in 1964 by Korean-
            Japanese Masutatsu Oyama. &quot;Kyokushin&quot; is Japanese for &quot;the ultimate truth&quot;. It is
            rooted in a philosophy of self-improvement, discipline and hard training. Its full
            contact style has international appeal.
            Kyokushin (極真) is a style of stand-up, full contact karate, founded in 1964 by
            Korean-Japanese Masutatsu Oyama (大山倍達 Ōyama Masutatsu). &quot;Kyokushin&quot; is
            Japanese for &quot;the ultimate truth&quot;. It is rooted in a philosophy of self-improvement,
            discipline and hard training. Its full contact style has international appeal
            (practitioners have over the last 40+ years numbered more than 12 million).
          </p>
        </div>     
    </div>
  </Layout>
)
