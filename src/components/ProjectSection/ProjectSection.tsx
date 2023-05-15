import React from 'react'
import ProjectSectionComp from './ProjectSectionComp';
import ProjectsData from '../../data/projects.json';
import { graphql, useStaticQuery } from 'gatsby';

function ProjectSection() {

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
    <ProjectSectionComp
      data={data}
    />
  )
}

export default ProjectSection;