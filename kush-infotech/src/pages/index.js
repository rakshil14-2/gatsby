import React from "react";
import Layout from "../components/layout";
import { useGallery } from '../hooks/gallery-hook';
import SEO from "../components/seo";
import { useCarousel } from "../hooks/carousel-hook";
import seoJson from "../assets/seo.json";

function IndexPage() {
  const Carousel = useCarousel();
  const TechLogoGallery = useGallery('techLogo');

  return <Layout>
    <SEO title="Kush Infotech Home" description={seoJson["decription"]} keywords={seoJson["keywords"]}/>
    <div className="home-page-container">
      <div className="carousel-container">
        {Carousel}
      </div>
      <div className="tech-logo-container">
        {TechLogoGallery}
      </div>
    </div>
  </Layout>
}

export default IndexPage
