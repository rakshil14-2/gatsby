import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Img } from "gatsby-image";

import Layout from "../components/layout"
import Image from "../components/image"
import ImagesLeft from "../components/imagesLeft";
import ImagesRight from "../components/imagesRight";
// import SEO from "../components/seo"

const IndexPage = () => {
  return <Layout>
  <input type="text"></input>
    <ImagesRight></ImagesRight>
  </Layout>
}
export default IndexPage;

