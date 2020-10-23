import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './Styles';
import WheelPicker from '../DateTimePicker/DateTimePicker';

const BreakTimer = (props) => {
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
        <View style={styles.inputs}>
          {showInput()}
        </View>
        <Text style={styles.title}>Break Time</Text>
        <View>
          <Text style={styles.time}>{minutes}:{showZero()}{seconds}</Text>
        </View>
    </View>
  );
};

export default BreakTimer;
