//
// Custom hook to handle integration with Health Connect (Android).
//

import { Platform } from 'react-native';
import { useState, useEffect } from 'react';

// library to integrate with Google's Health Connect API.
import { initialize, requestPermission, readRecords } from 'react-native-health-connect';
import { Permission } from 'react-native-health-connect/lib/typescript/types';
import { TimeRangeFilter } from 'react-native-health-connect/lib/typescript/types/base.types';

type HealthData = {
  steps: number;
  distance: number;
  floors: number;
};

const useHealthData = (date: Date): HealthData => {
  const [steps, setSteps] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);
  const [floors, setFloors] = useState<number>(0);

  //
  // HealthKit implementation
  //
  const [androidPermissions, setAndroidPermissions] = useState<Permission[]>([]);

  // helper function to check if we have specific permission.
  const hasAndroidPermission = (recordType: string) => {
    return androidPermissions.some((perm) => perm.recordType === recordType);
  };

  // initialize Health Connect.
  useEffect(() => {
    // check if the app is running on Android.
    if (Platform.OS !== 'android') {
      return;
    }

    // initialize the client
    const initializeHealthConnect = async () => {
      const isInitialized = await initialize();

      if (!isInitialized) {
        console.log('Failed to initialize Health Connect');
        return;
      }

      // request permissions
      const grantedPermissions = await requestPermission([
        { accessType: 'read', recordType: 'Steps' },
        { accessType: 'read', recordType: 'Distance' },
        { accessType: 'read', recordType: 'FloorsClimbed' },
      ]);
      console.log('Granted permissions ', { grantedPermissions });

      // we save the permissions in state, to be able to check later what data we have access to.
      setAndroidPermissions(grantedPermissions);
    };

    initializeHealthConnect();
  }, []);

  const getHealthData = async () => {
    // check if we have the required permissions.
    if (
      !hasAndroidPermission('Steps') ||
      !hasAndroidPermission('Distance') ||
      !hasAndroidPermission('FloorsClimbed')
    ) {
      console.log('Error getting permissions');
      return;
    }

    // to read data from health connect, we have to send the filter.
    // for the filter, we create a time range filter for the last 24 hours.
    const timeRangeFilter: TimeRangeFilter = {
      operator: 'between',
      startTime: new Date(date.setHours(0, 0, 0, 0)).toISOString(), // setHours(0, 0, 0, 0) to set the time to 00:00
      endTime: new Date(date.setHours(23, 59, 59, 999)).toISOString(),
    };

    // Steps
    const stepsRecords = await readRecords('Steps', { timeRangeFilter }); // read the Steps records.
    console.log(stepsRecords);
    const totalSteps = stepsRecords.records.reduce((sum, cur) => sum + cur.count, 0); // calculate total number of steps.
    setSteps(totalSteps);

    // Distance
    const distanceRecords = await readRecords('Distance', { timeRangeFilter });
    const totalDistance = distanceRecords.records.reduce(
      (sum, cur) => sum + cur.distance.inMeters,
      0
    );
    setDistance(totalDistance);

    // Floors climbed
    const floorsClimbedRecords = await readRecords('FloorsClimbed', {
      timeRangeFilter,
    });
    const totalFloors = floorsClimbedRecords.records.reduce((sum, cur) => sum + cur.floors, 0);
    setFloors(totalFloors);
  };

  useEffect(() => {
    getHealthData();
  }, [date, androidPermissions]);

  return { steps, distance, floors };
};

export default useHealthData;
