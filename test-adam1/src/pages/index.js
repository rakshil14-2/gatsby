import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Img } from "gatsby-image";

import Layout from "../components/layout"
import Image from "../components/image"
import ImagesLeft from "../components/imagesLeft";
import ImagesRight from "../components/imagesRight";
import AllImages from "../components/allImages";
import Products from "../components/product-gallary";
// import SEO from "../components/seo"

const IndexPage = () => {
  return <Layout>
  <input type="text"></input>
    {/* <AllImages source="images1"></AllImages> */}
    <Products></Products>
  </Layout>
}
export default IndexPage;

