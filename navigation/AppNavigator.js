import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InfluencerListScreen from "../screens/InfluencerListScreen";
import InfluencerDetailScreen from "../screens/InfluencerDetailScreen";
import { COLORS } from "../constants/theme";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "600" },
      }}
    >
      <Stack.Screen
        name="Influencers"
        component={InfluencerListScreen}
      />

      <Stack.Screen
        name="Detail"
        component={InfluencerDetailScreen}
        options={{ title: "Influencer Profile" }}
      />
    </Stack.Navigator>
  );
}