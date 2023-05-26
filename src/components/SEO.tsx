import React from "react"
import UseSiteMetadata from "../hooks/UseSiteMetadata";

type defaultTitle = string;
type defaultDescription = string;

interface SEOProps {
    title?:defaultTitle,
    description?: defaultDescription,
    pathname?:string,
    children?:any,
}

const SEO = ({ title, description, pathname, children }:SEOProps) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = UseSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {children}
    </>
  )
}

export default SEO;