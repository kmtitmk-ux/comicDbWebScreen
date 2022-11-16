/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComicdbUserTable = /* GraphQL */ `
  query GetComicdbUserTable($id: ID!) {
    getComicdbUserTable(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listComicdbUserTables = /* GraphQL */ `
  query ListComicdbUserTables(
    $filter: ModelComicdbUserTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComicdbUserTables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
