import React from 'react'
import {Project} from '../../../types'
import { GatsbyImage, IGatsbyImageData, StaticImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby'

function ProjectSectionComp() {

  const data = useStaticQuery(graphql`
  query projects {
    allMdx(sort: {frontmatter: {order: ASC}}) {
      nodes {
        id
        frontmatter {
          title
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
  `)
   
  

  return (
    <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-8 container mx-auto lg:px-6 md:px-4 px-3'>
      {
        data.allMdx.nodes.map((node:any) => {
          const image = getImage(node.frontmatter.thumbnail) as IGatsbyImageData
          return(
            <GatsbyImage
              alt=""
              image={image}
              key={node.id}
            />
          );
        })
      }
    </section>
  )
}

export default ProjectSectionComp