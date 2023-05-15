import React from 'react'
import {Project} from '../../../types'
import { GatsbyImage, IGatsbyImageData, StaticImage, getImage } from 'gatsby-plugin-image';

interface ProjectSectionCompProps{
  data:{ readonly allMdx: { readonly nodes: ReadonlyArray<{ readonly id: string, readonly frontmatter: { readonly title: string | null, readonly thumbnail: { readonly childImageSharp: { readonly gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData } }} }> } };
}

function ProjectSectionComp({data}:ProjectSectionCompProps) {

  return (
    <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-8 container mx-auto lg:px-6 md:px-4 px-3'>
      {
        data.allMdx.nodes.map((node) => {
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