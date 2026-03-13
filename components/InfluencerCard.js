import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";

export default function InfluencerCard({
  influencer,
  onPress,
  onFavorite,
  favorite,
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: influencer.image }} style={styles.avatar} />

      <View style={styles.info}>
        <Text style={styles.name}>{influencer.name}</Text>

        <Text style={styles.location}>📍 {influencer.city}</Text>

        <View style={styles.stats}>
          <Text style={styles.followers}>
            {influencer.followers.toLocaleString()} followers
          </Text>

          <Text style={styles.engagement}>
            {influencer.engagement}% engagement
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={onFavorite}>
        <Ionicons
          name={favorite ? "star" : "star-outline"}
          size={24}
          color={COLORS.primary}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    padding: 16,
    marginVertical: 8,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  info: {
    flex: 1,
    marginLeft: 14,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
  },

  location: {
    color: COLORS.subtext,
    marginTop: 2,
  },

  stats: {
    flexDirection: "row",
    marginTop: 6,
  },

  followers: {
    marginRight: 12,
    fontSize: 12,
    color: COLORS.text,
  },

  engagement: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: "600",
  },
});