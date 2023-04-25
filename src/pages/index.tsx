import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import { useEffect } from "react"



const IndexPage: React.FC<PageProps> = () => {

  /*
    todo: create useref for cotact an project section
    if either is above the middle of screen change href location
    that should update the route and trigger the blue bar to change
  */

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const handleScroll = () => {
    console.log('scroll');
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold underline h-screen">
        Hello world!
      </h1>
      <div id="contact" className="h-screen pt-14">
        contact
      </div>
    </Layout>

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
