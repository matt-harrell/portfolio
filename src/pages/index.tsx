import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import { useEffect, useRef } from "react"
import { NAV_ACTIONS, useNavDispatch } from "../components/NavContext"
import AboutSection from "../components/AboutSection"



const IndexPage: React.FC<PageProps> = () => {

  /*
    todo: create useref for cotact an project section
    if either is above the middle of screen change href location
    that should update the route and trigger the blue bar to change
  */

  const ProjectSection = useRef<null | HTMLDivElement>(null);
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
    const projects = ProjectSection.current?.getBoundingClientRect().y || 0;
    const about = ProjectSection.current?.getBoundingClientRect().y || 0;
    
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
      <section id='about' className="md:pt-5 lg:bg-white" ref={aboutSection}>
        <AboutSection/>
      </section>
      <div id="projects" className="h-screen pt-16" ref={ProjectSection}>
        projects
      </div>
      <div id="contact" className="h-screen pt-16">
        contact
      </div>
    </Layout>

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Matt Harrell</title>
