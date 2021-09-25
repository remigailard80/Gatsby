import React from 'react'
import Layout from '../components/layout'
export const PostTemplate: React.FC = React.memo(props => {
    return (
        <Layout>
            <code>
                <pre> {JSON.stringify(props)} </pre>
            </code>
        </Layout>
    )
})

export default PostTemplate