import { graphql, useStaticQuery } from 'gatsby';

function useOffers() {
  const gqlOffers = graphql`
  {
    allFile (filter:{relativeDirectory: {eq:"products\\offers"}, extension:{ne:"json"}})  {
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

  const gql = graphql`{
    qr1:
    allFile(filter:{sourceInstanceName: {eq:"products"}, extension:{ne:"json"}}) {
      edges {
        node {
          sourceInstanceName
          name
          base
          extension
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }`;

  const offersData = useStaticQuery(gqlOffers);
  const offersAllImages = {};
  offersData.allFile.edges.forEach((x:any) => {
    offersAllImages[x.node.name] = x.node.childImageSharp.fluid;
  })

  return {
    offersAllImages: offersAllImages,
    offersData: offersData
  }

}

export { useOffers };