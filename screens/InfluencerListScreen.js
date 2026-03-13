import { useEffect, useState } from "react";
import { View, TextInput, FlatList, StyleSheet } from "react-native";

import InfluencerCard from "../components/InfluencerCard";
import { fetchInfluencers } from "../services/api";
import { COLORS } from "../constants/theme";

export default function InfluencerListScreen({ navigation }) {
  const [influencers, setInfluencers] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadInfluencers();
  }, []);

  const loadInfluencers = async () => {
    setLoading(true);
    const data = await fetchInfluencers();
    setInfluencers(data);
    setLoading(false);
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filtered = influencers.filter(
    (inf) =>
      inf.name.toLowerCase().includes(search.toLowerCase()) ||
      inf.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search influencers..."
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        refreshing={loading}
        onRefresh={loadInfluencers}
        renderItem={({ item }) => (
          <InfluencerCard
            influencer={item}
            favorite={favorites.includes(item.id)}
            onFavorite={() => toggleFavorite(item.id)}
            onPress={() =>
              navigation.navigate("Detail", { influencer: item })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.background,
  },

  search: {
    backgroundColor: COLORS.white,
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.surface,
  },
});