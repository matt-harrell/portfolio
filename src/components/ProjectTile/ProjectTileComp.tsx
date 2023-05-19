import React from 'react'
import { ProjectTileNode } from '../../../types';
import { GatsbyImage, IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

interface ProjectTileCompProps {
    node: ProjectTileNode,
    image: IGatsbyImageData,
    showWave:boolean,
    handleMouseEnter: () => void,
    handleMouseExit: () => void,
}

function ProjectTileComp({ node, image,showWave,handleMouseEnter,handleMouseExit }: ProjectTileCompProps) {
    const maxHeight80 = 'max-h-80';
    const aspectSquare = 'aspect-square';

    return (
        <Link to={`../content/projects/${node.frontmatter.slug}`} className='grid overflow-y-hidden' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
            <GatsbyImage
                alt=""
                image={image}
                style={{gridArea:'bg-image'}}
                className={`drop-shadow-lg rounded-lg grid object-cover ${maxHeight80} ${aspectSquare}`}
            />
            <div className={`grid relative place-items-center ${maxHeight80} ${aspectSquare} ${showWave ? 'translate-y-0' : 'translate-y-full'} transition-transform`} style={{ gridArea: 'bg-image' }}>
                <StaticImage
                    alt=""
                    src="../../images/index/wave-card.png"
                    className={`grid ${maxHeight80} ${aspectSquare}`}
                    style={{gridArea:'bg-wave'}}
                />
                <div
                    className={`grid relative place-items-center px-5 ${maxHeight80} ${aspectSquare}`}
                    style={{gridArea:'bg-wave'}}
                >   
                    <h2>{node.frontmatter.title}</h2>
                    <p className='self-start'>{node.frontmatter.introSentence}</p>
                    
                </div>
            </div>
        </Link>
    )
}

export default ProjectTileComp;