import { graphql, useStaticQuery } from "gatsby"

const UseSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query SEOQuery {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default UseSiteMetadata;