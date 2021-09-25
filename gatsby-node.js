const path = require('path')

const pages = [
    {
        id: 1,
        content: '1번'
    },
    {
        id:2 ,
        content: '2번'    
    },
    {
        id: 3,
        content: '3번'
    }
];


exports.createPages = async ({ actions }) => {
    pages.forEach(page => {
        actions.createPage({
            path: page.id.toString(),
            context: page,
            component: path.resolve(__dirname, 'src/template/postTemplate.tsx')
        })
    })
}