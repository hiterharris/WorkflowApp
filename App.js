import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './Styles';
import WorkTimer from './components/WorkTimer/WorkTimer';
import BreakTimer from './components/BreakTimer/BreakTimer';
import Buttons from './components/Buttons/Buttons';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import BackgroundTimer from 'react-native-background-timer';

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [breakSeconds, setBreakSeconds] = useState(0);
  const [breakMinutes, setBreakMinutes] = useState(0);
  const [isBreakActive, setIsBreakActive] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);

  const setNotificationCategories = async () => {
    PushNotificationIOS.setNotificationCategories([
      {
        id: 'snooze',
        actions: [
          {
            id: 'open',
            title: 'Snooze',
            options: {
              foreground: true,
              background: true,
            }
            },
        ],
      },
    ]);
  };
  setNotificationCategories();

  useEffect(() => {
    PushNotificationIOS.addEventListener('register', onRegistered);
    PushNotificationIOS.addEventListener('registrationError', onRegistrationError);
    PushNotificationIOS.requestPermissions().then(
      (data) => {
        console.log('PushNotificationIOS.requestPermissions', data);
      },
      (data) => {
        console.log('PushNotificationIOS.requestPermissions failed', data);
      },
    );
  }, []);

  const onRegistered = (deviceToken) => {
    console.log('Token: ' + deviceToken);
  };

  const onRegistrationError = (error) => {
    Alert.alert(
        'Failed To Register For Remote Push',
        `Error (${error.code}): ${error.message}`,
        [
        {
            text: 'Dismiss',
            onPress: null,
        },
        ],
    );
  };

  const workCompleteNotification = () => {
      PushNotificationIOS.presentLocalNotification({
        alertTitle: 'Work Complete',
        alertBody: 'Time to Take a Break',
        category: 'snooze',
      });
  };

  const breakCompleteNotification = () => {
    PushNotificationIOS.presentLocalNotification({
      alertTitle: 'Break is Over',
      alertBody: 'Time to Get Back to Work',
      category: 'snooze',
    });
  };

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
    setIsBreakTime(false);
    setIsWorkTime(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      BackgroundTimer.start();
      
      console.log(`${minutes}:${seconds}`);

      interval = BackgroundTimer.setInterval(() => {
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
      workCompleteNotification();
      setSeconds(0);
      setMinutes(0);
      setIsActive(false);
      setIsBreakActive(true);
      setIsWorkTime(!isWorkTime);
      setIsBreakTime(!isBreakTime);
    }
    return () => BackgroundTimer.clearInterval(interval);
  }, [isActive, seconds, minutes]);

  useEffect(() => {
    let interval = null;
    if (isBreakActive) {
    interval = BackgroundTimer.setInterval(() => {
      setBreakSeconds(seconds => seconds - 1);
    }, 1000);
    }

    if (isBreakActive && breakSeconds && isBreakTime === 0) {
      setBreakSeconds(59);
    }

    if (isBreakActive && breakSeconds === 0) {
        setMinutes(breakMinutes - 1);
    }

    if (isBreakActive && breakMinutes === 0 && breakSeconds === 0) {
        breakCompleteNotification();
        setIsBreakTime(!isBreakTime);
        reset();
    }
    return () => BackgroundTimer.clearInterval(interval);
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
