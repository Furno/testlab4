import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Orders',
        }}
      />

      <Tabs.Screen
        name="detail"
        options={{
          href: null, // hides it from tab bar
        }}
      />
    </Tabs>
  );
}