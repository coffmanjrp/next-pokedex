import { gql } from '@apollo/client';

export const pokemonQuery = gql`
  query {
    pokemon(id: 1) {
      id
      name
    }
  }
`;
