import { graphql, useStaticQuery } from 'gatsby';

function useGallary(source: string) {
    const gql = graphql`{
      offers:
      allFile(filter:{sourceInstanceName: {eq:"offers"}, extension:{ne:"json"}}) {
        edges {
          node {
            name
            childImageSharp {
              fixed(height:150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      showcase:
      allFile(filter:{sourceInstanceName: {eq:"showcase"}, extension:{ne:"json"}}) {
        edges {
          node {
            name
            childImageSharp {
              fixed(height:150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }`;

    const allData = useStaticQuery(gql);
    const allImagesFixed = {};
    allData[source].edges.forEach(x => {
        allImagesFixed[x.node.name] = x.node.childImageSharp.fixed;
    })

    // const offersData = useStaticQuery(gql);
    // const offersAllImagesFluid = {}, offersAllImagesFixed = {};
    // offersData.qr1.edges.forEach((x: any) => {
    //   offersAllImagesFluid[x.node.name] = x.node.childImageSharp.fluid;
    // })

    // offersData.qr2.edges.forEach((x: any) => {
    //   offersAllImagesFixed[x.node.name] = x.node.childImageSharp.fixed;
    // })

    // return {
    //   offersAllImagesFluid: offersAllImagesFluid,
    //   offersAllImagesFixed: offersAllImagesFixed
    // }
    return allImagesFixed;
}

export { useGallary };