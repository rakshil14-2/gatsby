import React from "react";
import Layout from "../components/layout";
import { navigate } from "gatsby"
import ImageProcessor from "../components/image-processor";

  const Organization = () => {
    function founderDetails(){
      navigate("/founder-details/");
    }
    function elevenMottos(){
      navigate("/eleven-mottos/");
    }
    return <Layout imageSource="masOyama">
            <div className="tiles-container-founder">
              <a onClick={ e => founderDetails()}>
                <div className="wide-tile-founder">
                  <div className="left-tile-image-content">
                    <ImageProcessor source="masutatsuOyama"></ImageProcessor>
                  </div>
                  <div className="right-tile-content">
                    <p>
                        Masutatsu Oyama
                    </p>
                    <p>
                        The tiny village of Wa-Ryongri is not far from the town of Kinje, close to Gunsan in
                        south-west Korea. Yong I-Choi, son of the mayor of Kinje, was born there on 27 th
                        July 1923. It was only in his teens, as an aspiring fighter-pilot training in Japan,
                        that the future founder of Kyokushin Karate was to adopt the name by which he is
                        remembered today, Masutatsu Oyama.
                    </p> 
                    <p>
                        Sosai Oyama passed away on 26 th April 1994. He was 70 years old and suffering
                        from lung cancer. Kancho Shokei Matsui was named as his successor and is
                        currently the head of the International Karate Organisation. Under his guidance,
                        and in the benign shadow of its great founder, the IKO has grown into the largest
                        karate organization in the world. Out of the original, close-knit Kyokushin family
                        has emerged a formidable diaspora.
                    </p>
                  </div>
                </div>
              </a>
            </div>   
            <div className="tiles-container-eleven-mottos">
                <a onClick={ e => elevenMottos()}>
                    <div className="wide-tile-eleven-mottos">
                        ELEVEN MOTTOS OF MAS OYAMA
                    </div>
                </a>
              </div> 
           </Layout>
  }

  export default Organization;