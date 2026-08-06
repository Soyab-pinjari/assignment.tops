type Song {
  id: ID!
  title: String!
  artist: String!
}

type Playlist {
  id: ID!
  name: String!
  songs: [Song]
}

type Query {
  playlist(id: ID!): Playlist
}

query {
  playlist(id: "1") {
    id
    name
    songs {
      title
      artist
    }
  }
}
