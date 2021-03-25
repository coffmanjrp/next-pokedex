import { gql } from '@apollo/client';

export const pokemonListItemQuery = gql`
  query($offset: Int, $limit: Int) {
    pokemons(offset: $offset, limit: $limit) {
      id
      name
      species {
        genera {
          genus
          language {
            name
          }
        }
      }
      sprites {
        front_default
      }
      types {
        name
      }
    }
  }
`;
