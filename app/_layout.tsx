import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Exchange Rate API",
          headerTitleAlign: "center",
          headerShadowVisible: true,
        }}
      />
    </Stack>
  );
}
