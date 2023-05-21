import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import Layout from "../../components/Layout"
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image"

interface data {
  mdx: {
    frontmatter: {
      skills: string;
      projectLinks: string;
      title: string;
      video: string | null;
      thumbnail: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
      main: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      } | null;
    };
  };
}

const ProjectPage = ({data,children}:PageProps<data>) => {

  const {skills,title,projectLinks,main,thumbnail,video} = data.mdx.frontmatter;

  const mainImage = getImage(main) as IGatsbyImageData;
  const thumbnailImage = getImage(thumbnail) as IGatsbyImageData;  

  return (
    <Layout>
      <section className="container lg:px-10 md:px-5 px-2">
        <h1 className="text-6xl text-center font-semibold my-10">
          {title}
        </h1>

        <div className="grid md:grid-cols-2">
          <article>
            {video !== null ?
              <iframe width="560" height="315"
                src={video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              >
              </iframe>
              : main !== null ?
              <GatsbyImage
                alt=""
                image={mainImage}
              />
              :
              <GatsbyImage
                alt=""
                image={thumbnailImage}
              />
            }
          </article>

          <article>
            {children}
          </article>
        </div>
      </section>
    </Layout>

  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        skills
        projectLinks
        main {
          childImageSharp {
            gatsbyImageData
          }
        }
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
        title
        video
      }
    }
  }
  `

export const Head: HeadFC<data> = ({data}) => <title>{data.mdx.frontmatter.title}</title>

export default ProjectPage;