import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";
import techJson from '../assets/tech-logo.json';
import {navigate} from "gatsby";

function useGallery(source: string) {
    const gql = graphql`{
        techLogo:
        allFile(filter:{sourceInstanceName: {eq:"techLogo"}}) {
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

        kyokushin:
        allFile(filter:{sourceInstanceName: {eq:"kyokushin"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(height:150, width:200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }

        capital:
        allFile(filter:{sourceInstanceName: {eq:"capital"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(height:150, width:200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }

        selfandbeyond:
        allFile(filter:{sourceInstanceName: {eq:"selfandbeyond"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(height:150, width:200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }

        asset:
        allFile(filter:{sourceInstanceName: {eq:"asset-tracking"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(height:150, width:200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }

        payroll:
        allFile(filter:{sourceInstanceName: {eq:"payroll"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(height:150, width:200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }

        accounts:
        allFile(filter:{sourceInstanceName: {eq:"accounts"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(height:150, width:200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }

        eshop:
        allFile(filter:{sourceInstanceName: {eq:"eshop"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(height:150, width:200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }

        medical:
        allFile(filter:{sourceInstanceName: {eq:"medical"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(height:150, width:200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }

        ornet:
        allFile(filter:{sourceInstanceName: {eq:"ornet"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(height:150, width:200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }


        kyokushinDetails:
        allFile(filter:{sourceInstanceName: {eq:"kyokushin"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(width:700) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }

        capitalDetails:
        allFile(filter:{sourceInstanceName: {eq:"capital"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(width:700) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }

        selfandbeyondDetails:
        allFile(filter:{sourceInstanceName: {eq:"selfandbeyond"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(width:700) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }

        assetDetails:
        allFile(filter:{sourceInstanceName: {eq:"asset-tracking"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(width:700) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }

        payrollDetails:
        allFile(filter:{sourceInstanceName: {eq:"payroll"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(width:700) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }

        accountsDetails:
        allFile(filter:{sourceInstanceName: {eq:"accounts"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(width:700) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }

        eshopDetails:
        allFile(filter:{sourceInstanceName: {eq:"eshop"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(width:700) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }

        medicalDetails:
        allFile(filter:{sourceInstanceName: {eq:"medical"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(width:700) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }

        ornetDetails:
        allFile(filter:{sourceInstanceName: {eq:"ornet"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(width:700) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
    }`;

    const data = useStaticQuery(gql);

    switch(source) {
      case "techLogo":
      {
        const allImages = {}; 
        data[source].edges.forEach((x:any) => {
              allImages[x.node.name] = x.node.childImageSharp.fixed;
        });
        const temp = techJson.map((j: any, index: number) => {
          return <div key={index} className="tech-logo">
              <Img fixed={allImages[j.image]}></Img>
              <div className="name">{j.name}</div>
          </div>
        });
        return <React.Fragment>{temp}</React.Fragment>
      }
      case "kyokushin":
      case "capital":
      case "selfandbeyond":
      case "asset":
      case "payroll":
      case "accounts":
      case "eshop":
      case "medical":
      case "ornet":
      {
        const temp = data[source].edges.map((x: any, index: number) => {
            return <div key={index} className="project-image">
                      <div onClick={() => openDetails(source)}><Img key={source} fixed={ x.node.childImageSharp.fixed}></Img></div>
                    </div>
        });
        return <React.Fragment>{temp}</React.Fragment>
      }

      case "kyokushinDetails":
      case "capitalDetails":
      case "selfandbeyondDetails":
      case "assetDetails":
      case "payrollDetails":
      case "accountsDetails":
      case "eshopDetails":
      case "medicalDetails":
      case "ornetDetails":
      {
        const temp = data[source].edges.map((x: any, index: number) => {
          return <div key={index} className="image-container">
                    <Img key={source} fixed={ x.node.childImageSharp.fixed}></Img>
                  </div>
        });
        return <React.Fragment>{temp}</React.Fragment>
      }
    }
}

const openDetails = (source) => {
  source = source + "Details";
  const param = {source};
  navigate('/project-details/', {state: param});
}
export { useGallery };