import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Timer from './components/Timer';

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Workflow App</Text>
      </View>
      <View style={styles.timerContainer}>
        <Timer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 25,
  },
  timerContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor:'lightgrey',
  }
});

export default App;
