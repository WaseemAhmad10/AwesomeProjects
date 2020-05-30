import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.headers}>
        <Appbar.Content title="AwesomeProjects" />
      </Appbar.Header>
      <View style={styles.mainContentBox}>
        <Text>Hello Worlds</Text>
        <Text>Hello Worlds</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  headers:{
    backgroundColor: '#ab54a2',
    justifyContent: 'center',
  },
  mainContentBox:{
    flex:1,
    alignItems: 'center'
  }
});
