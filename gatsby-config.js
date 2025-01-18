module.exports = {
  siteMetadata: {
    title: 'Universal Pattern Language',
    description: 'A modern front end, engaging display of the content',
    author: 'Composable Delivery',
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-git',
      options: {
        name: 'content',
        remote: 'https://github.com/composable-delivery/Universal-Pattern-Language.git',
        branch: 'main',
        patterns: ['MANIFESTO.md', 'VISION.md'],
      },
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries: [
          {
            query: `
              {
                allMarkdownRemark {
                  nodes {
                    objectID: id
                    frontmatter {
                      title
                    }
                    excerpt(pruneLength: 5000)
                  }
                }
              }
            `,
            transformer: ({ data }) => data.allMarkdownRemark.nodes.map(({ objectID, frontmatter, excerpt }) => ({
              objectID,
              title: frontmatter.title,
              excerpt,
            })),
          },
        ],
      },
    },
  ],
};
