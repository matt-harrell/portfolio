export interface ProjectLinks {
    link:string,
    text:string
}
export interface Project{
    title: {
        thumbnail:string,
        page:string
    },
    introSentence:string,
    description:string,
    images:{
        thumbnail:string,
        main?:string,
    },
    video?:{
        demo:string
    },
    projectLinks:ProjectLinks[],
    skills:string[];
}