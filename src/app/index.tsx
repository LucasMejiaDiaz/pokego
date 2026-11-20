import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const pokeAPI = "https://pokeapi.co/api/v2/pokemon?limit=20";

type PokemonSummary = {
  name: string;
  url: string;
};

type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type Pokemon = {
  name: string;
  image: string | null;
  imageBack: string | null;
  type: PokemonType[];
};

type PokemonDetails = {
  sprites: {
    front_default: string | null;
    back_default: string | null;
  };
  types: PokemonType[];
};

async function fetchPokemons(): Promise<Pokemon[]> {
  const response = await fetch(pokeAPI);
  const data: { results: PokemonSummary[] } = await response.json();

  return Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const details: PokemonDetails = await res.json();

      return {
        name: pokemon.name,
        image: details.sprites.front_default,
        imageBack: details.sprites.back_default,
        type: details.types,
      };
    }),
  );
}

export default function Index() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchPokemons().then(setPokemons).catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {pokemons.map((pokemon) => (
          <View key={pokemon.name}>
            <Text>{pokemon.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
