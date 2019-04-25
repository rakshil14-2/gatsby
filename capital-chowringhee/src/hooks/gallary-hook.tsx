import { graphql, useStaticQuery } from 'gatsby';

function useGallary(source: string, type = 'fixed') {
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
      showcaseFluid:
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
      shop:
      allFile(filter:{sourceInstanceName: {eq:"shop"}, extension:{ne:"json"}}) {
        edges {
          node {
            name
            childImageSharp {
              fixed(height:400) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      brands:
      allFile(filter:{sourceInstanceName: {eq:"brands"}, extension:{ne:"json"}} ,  sort:{fields:name}) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth:250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }`;

  const allData = useStaticQuery(gql);
  const allImagesFixed = {}, allImagesFluid = {};
  allData[source].edges.forEach(x => {
    if (type === 'fixed') {
      allImagesFixed[x.node.name] = x.node.childImageSharp.fixed;
    }
    else {
      allImagesFluid[x.node.name] = x.node.childImageSharp.fluid;
    }
  })
  return { allImagesFixed, allImagesFluid };
}

export { useGallary };