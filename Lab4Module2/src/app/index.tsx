import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';

const coffeeItems = [
  {
    id: '1',
    category: 'Hot Drinks',
    name: 'Americano',
    price: '₱120',
    description: 'Bold and strong black coffee brewed with espresso shots.',
  },
  {
    id: '2',
    category: 'Hot Drinks',
    name: 'Cappuccino',
    price: '₱150',
    description: 'Espresso with steamed milk and foam.',
  },
  {
    id: '3',
    category: 'Hot Drinks',
    name: 'Latte',
    price: '₱160',
    description: 'Smooth espresso mixed with steamed milk.',
  },
  {
    id: '4',
    category: 'Cold Drinks',
    name: 'Iced Coffee',
    price: '₱130',
    description: 'Refreshing chilled coffee.',
  },
  {
    id: '5',
    category: 'Cold Drinks',
    name: 'Frappuccino',
    price: '₱180',
    description: 'Blended coffee drink with ice.',
  },
];

export default function HomeScreen() {
  const handlePress = (item: any) => {
  router.push({
    pathname: '/detail',
    params: {
      name: item.name,
      price: item.price,
      description: item.description,
    },
  });
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>☕ Placeholder Cafe</Text>
      <Text style={styles.subtitle}>Coffee Shop Menu</Text>

      <FlatList
        data={coffeeItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.category}>
              {item.category.toUpperCase()}
            </Text>

            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text style={styles.price}>
              {item.price}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },

  subtitle: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 20,
  },

  card: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },

  category: {
    fontSize: 10,
    color: 'gray',
    marginBottom: 5,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  price: {
    marginTop: 5,
    color: '#8B4513',
    fontWeight: 'bold',
  },
});