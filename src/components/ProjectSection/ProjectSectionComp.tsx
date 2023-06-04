import React from 'react'
import {ProjectTileNode} from '../../../types'
import ProjectTile from '../ProjectTile/ProjectTile';

interface ProjectSectionCompProps{
  data:{
    allMdx:{
      nodes:ProjectTileNode[],
    }
  }
  projectSectionRef:React.MutableRefObject<null>;
}

function ProjectSectionComp({data,projectSectionRef}:ProjectSectionCompProps) {

  return (
    <section>
      <h2 className='text-center font-bold text-6xl mb-16 text-white'>
        Projects
      </h2>
      <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-8 container mx-auto lg:px-6 md:px-4 px-3' ref={projectSectionRef}>
        {data.allMdx.nodes.map((node) =>
          <ProjectTile node={node} key={node.id} />
        )}
      </div>
    </section>
    
  )
}

export default ProjectSectionComp