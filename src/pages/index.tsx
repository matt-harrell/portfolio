import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import { useEffect, useRef } from "react"
import { NAV_ACTIONS, useNavDispatch } from "../components/NavContext"
import AboutSection from "../components/AboutSection"
import ProjectSection from "../components/ProjectSection/ProjectSection"



const IndexPage: React.FC<PageProps> = () => {

  /*
    todo: create useref for cotact an project section
    if either is above the middle of screen change href location
    that should update the route and trigger the blue bar to change
  */

  const projectSectionRef = useRef<null | HTMLDivElement>(null);
  const aboutSection = useRef<null | HTMLDivElement>(null);
  const dispatch = useNavDispatch();

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  }, [])

  const handleScroll = () => {
    const middleOfScreen = window.innerHeight/4;
    const projects = projectSectionRef.current?.getBoundingClientRect().y || 0;
    const about = projectSectionRef.current?.getBoundingClientRect().y || 0;
    
    if (about > middleOfScreen) {
      dispatch({type: NAV_ACTIONS.UPDATE,payload: ''})
    } else if(projects < middleOfScreen && projects > ((-1*window.innerHeight)/2)){
      dispatch({type: NAV_ACTIONS.UPDATE,payload: 'projects'})
    }else {
      dispatch({type: NAV_ACTIONS.UPDATE,payload: 'contact'})
    }
  }

  return (
    <Layout>
      <section id='about' className="md:pt-5 bg-white min-h-screen flex flex-col justify-center snap-start" ref={aboutSection}>
        <AboutSection/>
      </section>
      <div id="projects" className="min-h-screen pt-16 bg-light-blue snap-start" ref={projectSectionRef}>
        <ProjectSection/>
      </div>
      <div id="contact" className="min-h-screen pt-16 snap-start">
        contact
      </div>
    </Layout>

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Matt Harrell</title>
