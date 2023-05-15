import React from 'react'
import { ProjectTileNode } from '../../../types';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface ProjectTileCompProps {
    node: ProjectTileNode,
    image: IGatsbyImageData;
}

function ProjectTileComp({ node, image }: ProjectTileCompProps) {
    return (
        <GatsbyImage
            alt=""
            image={image}
        />
    )
}

export default ProjectTileComp;