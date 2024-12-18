import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; // arrows for the date picker

import { useState } from 'react';

import { Value } from './src/components/Value';
import { RingProgress } from './src/components/RingProgress';

import useHealthData from './src/hooks/useHealthData';

const STEPS_GOAL = 10_000;

export default function App() {
  const [date, setDate] = useState<Date>(new Date());

  // extract health data
  const { steps, distance, floors } = useHealthData(date);

  const changeDate = (numDays: number) => {
    const currentDate = new Date(date); // create a copy of the current date.
    currentDate.setDate(currentDate.getDate() + numDays); // update the date by adding/subtracting the number of days.
    setDate(currentDate); // update the state variable.
  };

  return (
    <View style={styles.container}>
      {/* date picker */}
      <View style={styles.datePicker}>
        <AntDesign onPress={() => changeDate(-1)} name='left' size={20} color='#C3FF53' />
        <Text style={styles.date}>{date.toDateString()}</Text>
        <AntDesign onPress={() => changeDate(1)} name='right' size={20} color='#C3FF53' />
      </View>

      {/* progress ring */}
      <RingProgress radius={150} strokeWidth={50} progress={steps / STEPS_GOAL} />

      <View style={styles.values}>
        <Value label='Steps' value={steps.toString()} />
        <Value label='Distance' value={`${(distance / 1000).toFixed(2)} km`} />
        <Value label='Floors climbed' value={floors.toString()} />
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

  datePicker: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  date: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginHorizontal: 20,
  },
});
