import { graphql, useStaticQuery } from 'gatsby';

function useMetaData(props: any) {
  const gqlSiteMetadata = graphql`
    {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
    }`
  const data = useStaticQuery(gqlSiteMetadata);

  // const gqlOffers = graphql`
  // {
  //   allFile (filter:{relativeDirectory: {eq:"products\\offers"}, extension:{ne:"json"}})  {
  //     edges {
  //       node {
  //         childImageSharp {
  //           fluid {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   }
  // }`;
  // const offersData = useStaticQuery(gqlOffers);
  const offersAllImages = {};
  // offersData.allFile.edges.forEach(x => {
  //   offersAllImages[x.node.name] = x.node.childImageSharp.fluid;
  // })

  return {
    metaData: data.site.siteMetadata
    // offersAllImagesFluid: offersAllImages
  }

}

export { useMetaData };