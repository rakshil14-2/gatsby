import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function ImageProcessor({ source }) {
  const imgGql = graphql`{
    masutatsuOyama:
      file(relativePath: { eq: "masutatsu_oyama.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    kanchoShokeiMatsui:
      file(relativePath: { eq: "kancho_shokei_matsui.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    homeBanner:
      file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
   }`

  const data = useStaticQuery(imgGql);
  return <Img key={source} fluid={data[source].childImageSharp.fluid}></Img>;
}
export default ImageProcessor;








// import React from "react"
// import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

// /*
//  * This component is built using `gatsby-image` to automatically serve optimized
//  * images with lazy loading and reduced file sizes. The image is loaded using a
//  * `StaticQuery`, which allows us to load the image from directly within this
//  * component, rather than having to pass the image data down from pages.
//  *
//  * For more information, see the docs:
//  * - `gatsby-image`: https://gatsby.dev/gatsby-image
//  * - `StaticQuery`: https://gatsby.dev/staticquery
//  */

// const Image = () => (
//   <StaticQuery
//     query={graphql`{
//       masutatsuOyama:
//         query {
//           placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//             childImageSharp {
//               fluid(maxWidth: 300) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
//   />
// )
// export default Image
