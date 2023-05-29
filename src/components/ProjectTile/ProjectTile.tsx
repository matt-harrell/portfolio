import React, { useState } from 'react'
import { ProjectTileNode } from '../../../types'
import ProjectTileComp from './ProjectTileComp'
import { IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import { useNav } from '../NavContext'

interface ProjectTile {
    node: ProjectTileNode,
}

function ProjectTile({ node }: ProjectTile) {
    const image = getImage(node.frontmatter.thumbnail) as IGatsbyImageData
    const [showWave,setShowWave] = useState(false);
    const {showProjectTiles} = useNav() || false;

    const handleMouseEnter = () => {
        setShowWave(true);
    }
    
    const handleMouseExit = () => {
        setShowWave(false);
    }

    return (
        <ProjectTileComp
            node={node}
            image={image}
            showWave={showWave}
            showProjectTiles={showProjectTiles}
            handleMouseEnter={handleMouseEnter}
            handleMouseExit={handleMouseExit}
        />
    )
}

export default ProjectTile