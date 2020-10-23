import React from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';
import styles from './Styles';

const WorkTimer = (props) => {
  const {seconds, setSeconds, minutes, setMinutes, isActive, isBreakActive} = props;

  const showZero = () => {
    if (seconds < 10) {
      return '0';
    }
  }

  const showInput = () => {
    if (!isActive && !isBreakActive) {
      return (
        <>
          <TextInput
            style={styles.input}
            initialValue={`${minutes}`}
            placeholder='Minutes'
            placeholderTextColor='lightgray'
            onChangeText={minutes => setMinutes(minutes)}
          />
          <TextInput
            style={styles.input}
            initialValue={`${seconds}`}
            placeholder='Seconds'
            placeholderTextColor='lightgray'
            onChangeText={seconds => setSeconds(seconds)}
          />
        </>
      );
    } else {
      return null
    }
  }
  
  return (
    <View style={styles.timer}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Work Time</Text>
        <View style={styles.inputs}>
          {showInput()}
        </View>
        <View style={styles.timer}>
          <Text style={styles.time}>{minutes}:{showZero()}{seconds}</Text>
        </View>
    </View>
  );
};

export default WorkTimer;
