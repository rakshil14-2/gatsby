import { graphql, useStaticQuery } from 'gatsby';

function useShowcase() {
    const gql = graphql`{
    qr1:
    allFile(filter:{sourceInstanceName: {eq:"showcase"}, extension:{ne:"json"}}) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth:436,maxHeight:326) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    qr2:
    allFile(filter:{sourceInstanceName: {eq:"showcase"}, extension:{ne:"json"}}) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width:400, height: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }`;
    const itemsData = useStaticQuery(gql);
    const itemsAllImagesFluid = {}, itemsAllImagesFixed = {};
    itemsData.qr1.edges.forEach((x: any) => {
        itemsAllImagesFluid[x.node.name] = x.node.childImageSharp.fluid;
    })

    itemsData.qr2.edges.forEach((x: any) => {
        itemsAllImagesFixed[x.node.name] = x.node.childImageSharp.fixed;
    })

    return {
        itemsAllImagesFluid: itemsAllImagesFluid,
        itemsAllImagesFixed:itemsAllImagesFixed
    }
}

export { useShowcase };