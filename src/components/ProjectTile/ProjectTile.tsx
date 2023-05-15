import React from 'react'
import { ProjectTileNode } from '../../../types'
import ProjectTileComp from './ProjectTileComp'
import { IGatsbyImageData, getImage } from 'gatsby-plugin-image'

interface ProjectTile {
    node: ProjectTileNode,
}

function ProjectTile({ node }: ProjectTile) {
    const image = getImage(node.frontmatter.thumbnail) as IGatsbyImageData

    return (
        <ProjectTileComp
            node={node}
            image={image}
        />
    )
}

export default ProjectTile