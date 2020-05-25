import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="AwesomeProjects" />
      </Appbar.Header>
      <Text>Hello Worlds</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
