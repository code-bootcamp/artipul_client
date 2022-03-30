import { gql } from '@apollo/client'

export const FETCH_ARTIST_WORKS = gql`
  query fetchArtistWorks($artId: String!) {
    fetchArtistWorks(artId: $artId) {
      id
      title
      thumbnail
      user {
        name
      }
    }
  }
`
export const FETCH_ARTIST_PROFILE = gql`
  query fetchArtistProfile($artId: String!) {
    fetchArtistProfile(artId: $artId) {
      introduce
    }
  }
`
