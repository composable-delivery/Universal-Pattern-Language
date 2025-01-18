import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const ResourcesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(MANIFESTO.md|VISION.md)/" } }) {
        edges {
          node {
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `);

  return (
    <div>
      <h1>Resources</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.frontmatter.title}>
          <h2>{node.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))}
    </div>
  );
};

export default ResourcesPage;
