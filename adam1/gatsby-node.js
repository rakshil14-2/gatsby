const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog-template.tsx');
    const result = await graphql(`{allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000){edges{node{fields{slug} frontmatter{title}}}}}`);
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: blogTemplate,
            context: {
                slug: node.fields.slug,
            }, // additional data can be passed via context
        });
        // console.log('page created');
    })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
}
