import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './Styles';
import Timer from './components/Timer/Timer';

const App = () => {
  return (
    <View style={styles.app}>

      <View style={styles.header}>
        <Text style={styles.title}>Workflow App</Text>
      </View>

      <View style={styles.timerContainer}>
        <Text style={styles.title}>Work Time</Text>
        <Timer />
      </View>

      <View style={styles.timerContainer2}>
        <Text style={styles.title}>Break Time</Text>
        <Timer />
      </View>
      
    </View>
  );
};

export default App;
