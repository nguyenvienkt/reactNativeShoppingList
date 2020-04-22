import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chào Dude</Text>
      <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/2.jpg'}}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 50,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default App;
