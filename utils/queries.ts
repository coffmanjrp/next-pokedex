import { gql } from '@apollo/client';

export const pokemonListItemQuery = gql`
  query {
    pokemons {
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
