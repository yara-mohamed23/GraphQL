const { ApollServer, gql } = require('apollo-server')

const Posts = [{
    title: "post1",
    id: "1"
}, {
    title: "post2",
    id: "2"
}]

const typeDefs = gql `
type Post{
    id:string,
    title:string,
}

type Query{
    posts:[Post]
}
`

const resolvers = {
    Query: {
        posts: () => posts
    }
}

const server = new ApollServer({
    resolvers,
    typeDefs
})

server.listen(8000, () => {})