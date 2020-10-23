import React from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';
import styles from './Styles';
import WheelPicker from '../DateTimePicker/DateTimePicker';

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
          <WheelPicker
            seconds={seconds}
            setSeconds={setSeconds}
            minutes={minutes}
            setMinutes={setMinutes}
          />
      );
    } else {
      return null
    }
  }
  
  return (
    <View style={styles.timer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.inputs}>
          {showInput()}
        </View>
        <Text style={styles.title}>Work Time</Text>
        <View style={styles.timer}>
          <Text style={styles.time}>{minutes}:{showZero()}{seconds}</Text>
        </View>
    </View>
  );
};

export default WorkTimer;
