import axios from 'axios';

const resolvers = {
  Query: {
    pokemons: async (parent, { offset, limit }) => {
      try {
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
      } catch (err) {
        throw err;
      }
    },
    pokemon: async (parent, { id }) => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res.data;
      } catch (err) {
        throw err;
      }
    },
  },
  PokemonData: {
    species: async (parent, args) => {
      try {
        const res = await axios.get(parent.species.url);
        return res.data;
      } catch (err) {
        throw err;
      }
    },
    types: async (parent, args) => {
      try {
        const results = await Promise.all(
          parent.types.map(async (result) => {
            const res = await axios.get(result.type.url);
            return res.data;
          })
        );
        return results;
      } catch (err) {
        throw err;
      }
    },
  },
  Species: {
    evolution_chain: async (parent, args) => {
      try {
        const res = await axios.get(parent.evolution_chain.url);
        return res.data;
      } catch (err) {
        throw err;
      }
    },
  },
};

export default resolvers;
