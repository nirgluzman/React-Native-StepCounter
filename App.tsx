import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>

      <View style={{ flexDirection: 'row' }}>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>Steps</Text>
          <Text style={styles.value}>1219</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>Distance</Text>
          <Text style={styles.value}>1,25 km</Text>
        </View>
      </View>

      <View style={styles.valueContainer}>
        <Text style={styles.label}>Flights Climbed</Text>
        <Text style={styles.value}>0,3 km</Text>
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column', // controls the direction in which the children of the container are laid out (column - default value).
    justifyContent: 'center', // describes how to align children in the main axis of their container.
    padding: 12,
  },

  valueContainer: {
    marginRight: 50,
    marginVertical: 10,
  },

  label: {
    fontSize: 20,
    color: 'white',
  },

  value: {
    fontSize: 35,
    color: '#AFB3BE',
    fontWeight: '500',
  },
});
