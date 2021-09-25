/* eslint-disable no-unused-vars */
import * as React from "react";
import { Link, graphql } from "gatsby";
import type { PageProps } from 'gatsby';

import Layout from "../components/layout";
import { styled, css, theme } from 'gatsby-theme-stitches/src/config';
import SEO from "../components/seo";

export const query = graphql`
	{
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
	}
`
const IndexPage: React.FC<any> = ({ data }) => {
	const posts = data.allPostsJson.edges
	return (
		<Layout>
			<SEO title="Home" />
			<h1>Hi people and TypeScript!</h1>
			<p>Welcome to your new Gatsby site.</p>
			<p>Now go build something great.</p>
			<Container>
				<Title> Posts </Title>
				<List>
					{posts.map((post: any) => (
						<Link key={post.node.id} to={`/post/${post.node.id}`}>
							<ListItem> {post.node.title} </ListItem>
						</Link>
					))}
				</List>
			</Container>
			<Link to="/page-2/">Go to page 2</Link>
		</Layout>
	)
};

const Container = styled('section', {
	bc: '$gray3',
	height: '100%'
})

const Title = styled('h1', {
	typography: '$heading4'
})

const List = styled('ul', {
	color: '$normal'
})

const ListItem = styled('li', {
	color: '$normal',
	cursor: 'pointer'
})
export default IndexPage;
