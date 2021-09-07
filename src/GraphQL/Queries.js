import { gql } from "@apollo/client"

export const GET_BOOKS = gql`
query AllBooks {
  books {
    id
    title
    publisher
    likes
    rating
    price
    currency
    release_date
    featured
    authors {
      id
      name
    }
    tags{
      id
      name
    }
    genres {
      id
      name
    }
    available_copies
    image_url
  }
}
`