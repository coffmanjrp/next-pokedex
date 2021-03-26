import { gql } from '@apollo/client';

export const pokemonsListQuery = gql`
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

export const pokemonListQuery = gql`
  query($id: ID) {
    pokemon(id: $id) {
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
