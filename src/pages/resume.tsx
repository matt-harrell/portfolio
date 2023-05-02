import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"



const ResumePage: React.FC<PageProps> = () => {

  return (
    <Layout>
      <div className="h-screen">
        resume
      </div>
    </Layout>

  )
}

export default ResumePage;

export const Head: HeadFC = () => <title>Resume Page</title>
