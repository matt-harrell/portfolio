import React from 'react'
import {Project} from '../../../types'

interface ProjectSectionCompProps {
  ProjectsData:Project[];
}

function ProjectSectionComp({ProjectsData}:ProjectSectionCompProps) {
  return (
    <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-8 container mx-auto lg:px-6 md:px-4 px-3'>
      {ProjectsData.map((project:Project,index:number) => (
        <div className='col-span-1' key={index}>
          {project.title.thumbnail}
        </div>
      ))}
    </section>
  )
}

export default ProjectSectionComp