import React from "react";
import Layout from "../components/layout";
import { useGallery } from "../hooks/gallery-hook";
import SEO from "../components/seo";

const Gallery = () => {
  const AlbumGallery = useGallery("album");
  return <Layout>
    <SEO/>
    <h1>Images of Sony Authorized Service Center in Kankurgachi, Kolkata</h1>
    <div className="album-container">
      {AlbumGallery}
    </div>
  </Layout>
}

export default Gallery