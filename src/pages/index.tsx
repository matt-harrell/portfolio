import * as React from "react"
import { HeadFC, PageProps, navigate } from "gatsby"
import Layout from "../components/Layout"
import { useEffect, useRef } from "react"
import { useNavDispatch } from "../components/NavContext"



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
      dispatch({type: 'update',payload: ''})
    } else if(projects < middleOfScreen && projects > ((-1*window.innerHeight)/2)){
      dispatch({type: 'update',payload: 'projects'})
    }else {
      dispatch({type: 'update',payload: 'contact'})
    }
  }

  return (
    <Layout>
      <h1 id='about' className="text-3xl font-bold underline h-screen" ref={aboutSection}>
        Hello world!
      </h1>
      <div id="projects" className="h-screen pt-14" ref={ProjectSection}>
        projects
      </div>
      <div id="contact" className="h-screen pt-14">
        contact
      </div>
    </Layout>

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
