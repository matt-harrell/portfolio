import React from 'react'
import {Project} from '../../../types'
import { GatsbyImage, IGatsbyImageData, StaticImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby'

interface ProjectSectionCompProps {
  ProjectsData:Project[];
}

function ProjectSectionComp({ProjectsData}:ProjectSectionCompProps) {

  const data = useStaticQuery(graphql`
  query projects {
    projects: allMarkdownRemark(
      sort: {frontmatter: {order: ASC}}
      filter: {fileAbsolutePath: {regex: "/projects/"}}
    ) {
      nodes {
        frontmatter {
          title
          order
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

  data.projects.nodes.forEach((node:any) => {
    console.log(getImage(node.frontmatter.thumbnail));
    
  })
   
  

  return (
    <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-8 container mx-auto lg:px-6 md:px-4 px-3'>
      {
        data.projects.nodes.map((node:any,index:number) => {
          const image = getImage(node.frontmatter.thumbnail) as IGatsbyImageData
          return(
            <GatsbyImage
              alt=""
              image={image}
              key={index}
            />
          );
        })
      }
    </section>
  )
}

export default ProjectSectionComp