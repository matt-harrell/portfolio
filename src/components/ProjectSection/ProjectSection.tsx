import React from 'react'
import ProjectSectionComp from './ProjectSectionComp';
import ProjectsData from '../../data/projects.json';

function ProjectSection() {
  return (
    <ProjectSectionComp
      ProjectsData={ProjectsData}
    />
  )
}

export default ProjectSection;