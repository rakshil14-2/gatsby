import React from "react";
import Layout from "../components/layout";
import { navigate } from "gatsby"
import ImageProcessor from "../components/image-processor";

  const Organization = () => {
    function details(name){
      navigate("/organization-details/", {state: { name }});
    }
    return <Layout>
            <div className="tiles-container">
              <a onClick={ e => details('KanchoShokeiMatsui')}>
                <div className="tiles">
                  <div className="left-tile-image-content">
                    <ImageProcessor source="kanchoShokeiMatsui"></ImageProcessor>
                  </div>
                  <div className="right-tile-content">
                    <p>
                      Kancho Shokei Matsui (IKO, Kyokushin kai kan)
                    </p>
                    <p>
                      Shokei (Akiyoshi) Matsui was born in Bunkyo-ku, Tokyo, on 15 th January
                      1963. As a young boy, the quiet, reserved Akiyoshi showed little sign of
                      being destined to dominate the world of Kyokushin Karate. Winner of two
                      consecutive All-Japan Opens, the youngest World Champion ever, the first
                      fighter in thirteen years to complete the 100-Man Kumite, he received the
                      ultimate honour of being nominated Kancho (president) of the International
                      Karate Organisation Kyokushinkaikan by the legendary Mas Oyama
                      himself.
                    </p> 
                  </div>
                </div>
              </a>
            </div>    
           </Layout>
  }

  export default Organization;