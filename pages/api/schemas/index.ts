import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    pokemons(offset: Int, limit: Int): [PokemonData!]
    pokemon(id: ID): PokemonData!
  }

  type PokemonData {
    id: ID!
    name: String!
    height: Int!
    weight: Int!
    sprites: Sprites!
    species: Species!
    abilities: [Abilities!]
    stats: [Stats!]
    types: [Types!]
  }

  type Sprites {
    front_default: String!
    front_shiny: String!
  }

  type Abilities {
    ability: Ability!
  }

  type Ability {
    name: String!
  }

  type Stats {
    base_stat: Int!
    effort: Int!
    stat: Stat!
  }

  type Stat {
    name: String!
  }

  type Species {
    id: ID!
    name: String!
    names: [Names!]
    genera: [Genera!]
    is_legendary: Boolean!
    is_mythical: Boolean!
    evolution_chain: EvolutionChain!
    varieties: [Varieties!]
  }

  type Names {
    name: String!
    language: NamesLanguage!
  }

  type NamesLanguage {
    name: String!
  }

  type Genera {
    genus: String!
    language: GeneraLanguage!
  }

  type GeneraLanguage {
    name: String!
  }

  type EvolutionChain {
    id: ID!
    chain: Chain!
  }

  type Chain {
    evolves_to: [Evolves!]
  }

  type Evolves {
    species: EvolveSpecies!
  }

  type EvolveSpecies {
    name: String!
    url: String!
  }

  type Varieties {
    pokemon: VarietiesName!
  }

  type VarietiesName {
    name: String!
    url: String!
  }

  type Types {
    name: String!
    names: [TypesNames!]
  }

  type TypesNames {
    name: String!
    language: TypesLanguage!
  }

  type TypesLanguage {
    name: String!
  }
`;

export default typeDefs;
