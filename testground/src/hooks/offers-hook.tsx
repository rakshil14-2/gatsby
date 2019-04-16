import { graphql, useStaticQuery } from 'gatsby';

function useOffers() {
  const gql = graphql`{
    qr1:
    allFile(filter:{relativeDirectory: {eq:"products\\offers"}, extension:{ne:"json"}}) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }`;
const offersData = useStaticQuery(gql);
const offersAllImages = {};
offersData.qr1.edges.forEach((x: any) => {
    offersAllImages[x.node.name] = x.node.childImageSharp.fluid;
})

  return {
    offersAllImages: offersAllImages
  }
}

export { useOffers };