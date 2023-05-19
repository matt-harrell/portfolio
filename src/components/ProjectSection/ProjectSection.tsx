import React, { useEffect, useRef } from 'react'
import ProjectSectionComp from './ProjectSectionComp';
import { graphql, useStaticQuery } from 'gatsby';
import { NAV_ACTIONS, useNavDispatch } from '../NavContext';

function ProjectSection() {

  const data = useStaticQuery(graphql`
  query projects {
    allMdx(sort: {frontmatter: {order: ASC}}) {
      nodes {
        id
        frontmatter {
          order
          title
          introSentence
          slug
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
  const dispatch = useNavDispatch();

  const projectSectionRef = useRef(null);

  let options  = {
    root:null,
    rootMargin:"0px",
    threshold: .5,
  }

  const handleIntersectionObserver = (entries:any) => {
    entries.forEach((entry:any) => {
      if (entry.isIntersecting) {
        dispatch({
          type: NAV_ACTIONS.SET_SHOW_PROJECT_TILES,
          payload: true,
        })
      } 
    });
    
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersectionObserver,options)
    if (projectSectionRef.current) {
        observer.observe(projectSectionRef.current)
    }
    return () => {
      if (projectSectionRef.current) {
         observer.unobserve(projectSectionRef.current)
      }
    }
  }, [projectSectionRef,options])
  

  

  return (
    <ProjectSectionComp
      data={data}
      projectSectionRef={projectSectionRef}
    />
  )
}

export default ProjectSection;