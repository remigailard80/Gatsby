const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
	query Posts {
		allPostsJson(
			sort: { fields: [title], order: ASC}
		) {
		  edges {
			node {
			  id
			  title
			  content
			}
		  }
		}
	}`)
    console.log(data)
    data.allPostsJson.edges.forEach(node => {
        actions.createPage({
            path: `/post/` + node.node.id,
            context: node.node,
            component: path.resolve(__dirname, 'src/template/postTemplate.tsx')
        })
    })
}