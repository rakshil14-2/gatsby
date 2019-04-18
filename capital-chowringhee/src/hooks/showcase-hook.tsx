import { graphql, useStaticQuery } from 'gatsby';

function useShowcase() {
  const gql = graphql`{
    qr1:
    allFile(filter:{sourceInstanceName: {eq:"showcase"}, extension:{ne:"json"}}) {
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
  const allData = useStaticQuery(gql);
  const allImagesFluid = {};
  allData.qr1.edges.forEach((x: any) => {
    allImagesFluid[x.node.name] = x.node.childImageSharp.fluid;
  })

  return {
    allImagesFluid: allImagesFluid
  }
}

export { useShowcase };