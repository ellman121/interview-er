import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { queryClient } from "@/src/queryClient";

export default function RootLayout() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="dark" />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="course/[id]"
            options={{
              headerBackTitle: "Courses",
              headerTitle: "",
            }}
          />
        </Stack>
      </QueryClientProvider>
    </>
  );
}
