import { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

import { fetchPosts } from "../services/api";
import { COLORS } from "../constants/theme";

export default function InfluencerDetailScreen({ route }) {
  const { influencer } = route.params;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={{ uri: influencer.image }} style={styles.image} />

        <Text style={styles.name}>{influencer.name}</Text>
        <Text style={styles.city}>📍 {influencer.city}</Text>
        <Text style={styles.email}>{influencer.email}</Text>

        <View style={styles.stats}>
          <Text style={styles.followers}>
            {influencer.followers.toLocaleString()} followers
          </Text>

          <Text style={styles.engagement}>
            {influencer.engagement}% engagement
          </Text>
        </View>
      </View>

      <Text style={styles.section}>Recent Campaigns</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
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

  profile: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.text,
  },

  city: {
    color: COLORS.subtext,
  },

  email: {
    marginTop: 4,
    color: COLORS.text,
  },

  stats: {
    flexDirection: "row",
    marginTop: 10,
  },

  followers: {
    marginRight: 12,
    fontWeight: "600",
  },

  engagement: {
    color: COLORS.primary,
    fontWeight: "600",
  },

  section: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },

  post: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },

  title: {
    fontWeight: "600",
    marginBottom: 4,
  },
});