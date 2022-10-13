import { gql } from "@apollo/client";

export const query = gql`
  query getRepositories(
    $user_id: String!
  ) {
    user(login: $user_id) {
      name
      url
      repositories(
        first: 5
        orderBy: { field: CREATED_AT, direction: ASC }
        privacy: PUBLIC
      ) {
        nodes {
          createdAt
          description
          forkCount
          name
          stargazerCount
          url
          languages(first: 5, orderBy: { field: SIZE, direction: ASC }) {
            nodes {
              color
              name
            }
            totalCount
            totalSize
            edges {
              node {
                color
                id
                name
              }
              size
            }
          }
        }
      }
    }
  }
`;
