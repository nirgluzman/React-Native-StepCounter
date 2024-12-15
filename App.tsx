import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Value } from './src/components/Value';
import { RingProgress } from './src/components/RingProgress';

export default function App() {
  return (
    <View style={styles.container}>
      <RingProgress radius={150} strokeWidth={50} progress={0.25} />

      <View style={styles.values}>
        <Value label='Steps' value='1209' />
        <Value label='Distance' value='1,25 km' />
        <Value label='Flights Climbed' value='12' />
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

  values: {
    flexDirection: 'row',
    gap: 25, // sets the size of the gap (gutter) between rows and columns.
    flexWrap: 'wrap', // controls whether the flex items are forced onto one line or can wrap onto multiple lines.
    marginTop: 100,
  },
});
