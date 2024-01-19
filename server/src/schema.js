const gql = require("graphql-tag");

const typeDefs = gql`
    # Schema definitions go here
    """ This schema describes a track """
    type Track {
        id: ID!
        title: String!
        thumbnail: String
        length: Int
        modulesCount: Int
        author: Author!
    }
    "This is a schema for the author of a complete Track"
    type Author {
        id: ID!
        name: String!
        photo: String
    }
    "Query for getting tracks array for the homepage grid"
    type Query {
        "Get tracks for homepage grid"
        tracksForHome: [Track!]
    }
    
`;

module.exports = typeDefs;
