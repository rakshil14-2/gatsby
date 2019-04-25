import React from "react"
import Layout from "../components/layout"
import ImageProcessor from "../components/image-processor";

export default () => (
    <Layout imageSource="prasenjitSaha">
      <div className="dojo-kun">
        <div className="banner">
          <ImageProcessor source="dojoKunBanner"></ImageProcessor>
        </div>
        <div className="page-title"> DOJO KUN </div>
        <ol>
          <li> We will train our hearts and bodies for a firm unshaking spirit. </li>

          <li> We will pursue the true meaning of the Martial Way, so that in time our senses may be alert. </li>

          <li> With true vigour, we will seek to cultivate a spirit of self denial. </li>

          <li> We will observe the rules of courtesy, respect our superiors, and refrain from violence. </li>

          <li> We will follow our religious principles, and never forget the true virtue of humility. </li>

          <li> We will look upwards to wisdom and strength, not seeking other desires. </li>

          <li> All our lives, through discipline of karate, we will seek to fulfil the true meaning of the Kyokushin Way. </li>
        </ol>
      </div>
    </Layout>
  )