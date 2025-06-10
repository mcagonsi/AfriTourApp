import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'AfriTour' }} // <- this removes the "index" title
      />
    </Stack>
  );
}