import axios from 'axios';
import { ApolloServer, gql } from 'apollo-server-micro';

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

const resolvers = {
  Query: {
    pokemons: async (parent, { offset, limit }) => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
      );
      const results = await Promise.all(
        res.data.results.map(async (result) => {
          const res = await axios.get(result.url);
          return res.data;
        })
      );
      return results;
    },
    pokemon: async (parent, { id }) => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return res.data;
    },
  },
  PokemonData: {
    species: async (parent, args) => {
      const res = await axios.get(parent.species.url);
      return res.data;
    },
    types: async (parent, args) => {
      const results = await Promise.all(
        parent.types.map(async (result) => {
          const res = await axios.get(result.type.url);
          return res.data;
        })
      );
      return results;
    },
  },
  Species: {
    evolution_chain: async (parent, args) => {
      const res = await axios.get(parent.evolution_chain.url);
      return res.data;
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = apolloServer.createHandler({ path: '/api/pokemons' });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
