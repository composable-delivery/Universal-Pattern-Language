import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const VisionPage = ({ data }) => {
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
    markdownRemark(fileAbsolutePath: { regex: "/VISION.md/" }) {
      html
    }
  }
`;

export default VisionPage;
