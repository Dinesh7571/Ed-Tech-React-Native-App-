import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Notes = () => {
  const items = [
    { title: 'State Machine', duration: '15 mins', icon: 'play' },
    { title: 'Animated Menu', duration: '10 mins', icon: 'fire' },
    { title: 'Tab Bar', duration: '8 mins', icon: 'info' },
    { title: 'Button', duration: '9 mins', icon: 'fire' },
  ];

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity key={index} style={styles.itemContainer}>
          <View style={[styles.itemBackground, index % 2 === 0 ? styles.blueBackground : styles.purpleBackground]}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDuration}>Watch video - {item.duration}</Text>
            {item.icon === 'fire' && <Text style={styles.iconFire}>🔥</Text>}
            {item.icon === 'play' && <Text style={styles.iconPlay}>▶️</Text>}
            {item.icon === 'info' && <Text style={styles.iconInfo}>ℹ️</Text>}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    marginVertical: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemBackground: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blueBackground: {
    backgroundColor: '#6495ED',
  },
  purpleBackground: {
    backgroundColor: '#9370DB',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  itemDuration: {
    fontSize: 16,
    color: 'white',
  },
  iconFire: {
    fontSize: 24,
    color: 'red',
  },
  iconPlay: {
    fontSize: 24,
    color: 'white',
  },
  iconInfo: {
    fontSize: 24,
    color: 'white',
  },
});

export default Notes;