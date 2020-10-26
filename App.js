import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from './Styles';
import WorkTimer from './components/WorkTimer/WorkTimer';
import BreakTimer from './components/BreakTimer/BreakTimer';
import Buttons from './components/Buttons/Buttons';

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [breakSeconds, setBreakSeconds] = useState(0);
  const [breakMinutes, setBreakMinutes] = useState(0);
  const [isBreakActive, setIsBreakActive] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(false);

  const toggleActive = () => {
    if (!isWorkTime) {
      setIsActive(!isActive);
    }

    if (isWorkTime) {
      setIsBreakActive(!isBreakActive);
    }
  }
  
  const reset = () => {
    setSeconds(0);
    setMinutes(0);
    setIsActive(false);
    setBreakSeconds(0);
    setBreakMinutes(0);
    setIsBreakActive(false);
    setIsWorkTime(!isWorkTime);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    }
    if (isActive && seconds === 0) {
        setSeconds(59);
    }
    if (isActive && seconds === 0) {
        setMinutes(minutes - 1);
    }
    if (isActive && minutes === 0 && seconds === 0) {
      alert('TIME TO TAKE A BREAK');
      setSeconds(0);
      setMinutes(0);
      setIsActive(false);
      setIsBreakActive(true);
      setIsWorkTime(!isWorkTime);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  useEffect(() => {
    let interval = null;

    if (isBreakActive) {
    interval = setInterval(() => {
      setBreakSeconds(seconds => seconds - 1);
    }, 1000);
    }

    if (isBreakActive && breakSeconds === 0) {
      setBreakSeconds(59);
    }

    if (isBreakActive && breakSeconds === 0) {
        setMinutes(breakMinutes - 1);
    }

    if (isBreakActive && breakMinutes === 0 && breakSeconds === 0) {
        alert('TIME TO TAKE GET TO WORK');
        reset();
    }
    return () => clearInterval(interval);
  }, [isBreakActive, breakSeconds, breakMinutes ]);

  return (
    <SafeAreaView style={styles.app}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.app}>
          <View>
            {!isActive && !isBreakActive ?          
              <View>
                <View style={ isActive || isBreakActive ? [styles.timer] : styles.workTimer }>
                  <WorkTimer seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes} isActive={isActive} isBreakActive={isBreakActive} />
                </View>
    
                <View style={ isActive || isBreakActive ? [styles.timer] : styles.breakTimer }>
                  <BreakTimer seconds={breakSeconds} setSeconds={setBreakSeconds} minutes={breakMinutes} setMinutes={setBreakMinutes} isActive={isActive} isBreakActive={isBreakActive} />
                </View>
              </View>
              :
              isActive ? 
                <View style={ isActive || isBreakActive ? [styles.timer] : styles.workTimer }>
                  <WorkTimer seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes} isActive={isActive} isBreakActive={isBreakActive} />
                </View>
                : 
                <View style={ isActive || isBreakActive ? [styles.timer] : styles.breakTimer }>
                  <BreakTimer seconds={breakSeconds} setSeconds={setBreakSeconds} minutes={breakMinutes} setMinutes={setBreakMinutes} isActive={isActive} isBreakActive={isBreakActive} />
                </View>
            }
          </View>
          
          <View style={styles.buttons}>
            <Buttons isActive={isActive} isBreakActive={isBreakActive} toggleActive={toggleActive} reset={reset} />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default App;
