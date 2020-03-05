import React from 'react';
import {StyleSheet, View} from 'react-native';
import Dashboard from './src/components/Dashboard';
import AllDaysSpends from './src/screens/AllDaysSpends';

const App = () => {
  return (
    <View style={styles.viewStyle}>
      <Dashboard />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
  },
});

export default App;
