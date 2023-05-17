import React from 'react'
import { ProjectTileNode } from '../../../types';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface ProjectTileCompProps {
    node: ProjectTileNode,
    image: IGatsbyImageData;
}

function ProjectTileComp({ node, image }: ProjectTileCompProps) {
    const maxHeight80 = 'max-h-80';
    const aspectSquare = 'aspect-square';

    return (
        <div className='grid' >
            <GatsbyImage
                alt=""
                image={image}
                style={{gridArea:'bg-image'}}
                className={`drop-shadow-lg rounded-lg grid object-cover ${maxHeight80} ${aspectSquare}`}
            />
            <div className={`grid relative place-items-center ${maxHeight80} ${aspectSquare}`} style={{gridArea:'bg-image'}}>
                <h2>{node.frontmatter.title}</h2>
            </div>
        </div>
    )
}

export default ProjectTileComp;