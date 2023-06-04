import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import Layout from "../../components/Layout"
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image"
import GitHubSVG from "../../components/SVGs/GitHubSVG";
import ExternalLinkSVG from "../../components/SVGs/ExternalLinkSVG";
import SEO from "../../components/SEO";

interface data {
  mdx: {
    frontmatter: {
      skills: string;
      projectLinks: string;
      title: string;
      introSentence:string;
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

  const projectLinksSplit = projectLinks.split(',');

  return (
    <Layout>
      <section className="container lg:px-10 md:px-5 px-3 mx-auto pb-10 mt-16">
        <h1 className="text-6xl text-center font-semibold my-10">
          {title}
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          <article className="md:animate-[growIn_.5s] md:order-first order-last">
            {video !== null ?
              <iframe width="560" height="315"
                src={video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full aspect-video"
              >
              </iframe>
              : main !== null ?
              <GatsbyImage
                alt=""
                image={mainImage}
                className="min-w-full h-auto"
              />
              :
              <GatsbyImage
                alt=""
                image={thumbnailImage}
                className="min-w-full h-auto"
              />
            }
          </article>

          <article className="md:animate-[growIn_.8s] md:order-last order-first">
            <h2 className="text-4xl font-bold text-center mb-5">
              Description
            </h2>
            {children}
            <div className="flex gap-10 my-5">
              {projectLinksSplit.map((link: string, index: number) => {
                if (link.includes('github')) {
                  return (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-dark-blue hover:text-light-blue"
                      key={index}
                    >
                      <GitHubSVG
                        width={50}
                        height={51}
                      />
                    </a>
                  )
                } else {
                  return (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-dark-blue hover:text-light-blue flex items-end"
                      key={index}
                    >
                      <ExternalLinkSVG/>
                    </a>
                  )
                }
              })}
            </div>
            <h2 className="text-4xl font-bold text-center mb-5">
              Skills
            </h2>
            <p className="text-center text-2xl">
              {skills.split(',').join(' | ')}
            </p>
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
        introSentence
        video
      }
    }
  }
  `

export const Head: HeadFC<data> = ({data}) => (
  <SEO
    title={data.mdx.frontmatter.title}
    description={data.mdx.frontmatter.introSentence}
  />
)

export default ProjectPage;