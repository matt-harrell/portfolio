import React from 'react'
import {ProjectTileNode} from '../../../types'
import ProjectTile from '../ProjectTile/ProjectTile';

interface ProjectSectionCompProps{
  data:{
    allMdx:{
      nodes:ProjectTileNode[],
    }
  }
}

function ProjectSectionComp({data}:ProjectSectionCompProps) {

  return (
    <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-8 container mx-auto lg:px-6 md:px-4 px-3'>
      {data.allMdx.nodes.map((node) => 
        <ProjectTile node={node} key={node.id}/>
      )}
    </section>
  )
}

export default ProjectSectionComp