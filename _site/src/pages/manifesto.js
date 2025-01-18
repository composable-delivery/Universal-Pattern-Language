import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const ManifestoPage = ({ data }) => {
  const { markdownRemark } = data;
  const { html } = markdownRemark;

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/MANIFESTO.md/" }) {
      html
    }
  }
`;

export default ManifestoPage;
