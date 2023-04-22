import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"



const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
      <h1 className="text-3xl font-bold underline">
        Porjects
      </h1>
    </main>
    </Layout>
    
  )
}

export default ProjectsPage;

export const Head: HeadFC = () => <title>Projects</title>
