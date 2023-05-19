import React from 'react'
import { ProjectTileNode } from '../../../types';
import { GatsbyImage, IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

interface ProjectTileCompProps {
    node: ProjectTileNode,
    image: IGatsbyImageData,
    showWave:boolean,
    showProjectTiles:boolean,
    handleMouseEnter: () => void,
    handleMouseExit: () => void,
}

function ProjectTileComp({ node, image,showWave,showProjectTiles,handleMouseEnter,handleMouseExit }: ProjectTileCompProps) {
    const maxHeight80 = 'max-h-96';
    const aspectSquare = 'aspect-square';
    
    return (
        <Link 
            to={`../content/projects/${node.frontmatter.slug}`} 
            className={`drop-shadow-md w-fit mx-auto grid overflow-y-hidden ${showProjectTiles ? "md:opacity-100 md:translate-y-0" : "md:opacity-0 md:translate-y-1/4"}`} 
            style={{
                transition:`all .3s ${node.frontmatter.order * .3}s`
            }}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseExit}
        >
            <GatsbyImage
                alt=""
                image={image}
                style={{gridArea:'bg-image'}}
                className={`rounded-lg grid object-cover ${maxHeight80} ${aspectSquare}`}
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
                    <h2 className='text-white text-2xl'>
                        {node.frontmatter.title}
                    </h2>
                    <p className='self-start text-white text-xl'>
                        {node.frontmatter.introSentence}
                    </p>
                    
                </div>
            </div>
        </Link>
    )
}

export default ProjectTileComp;