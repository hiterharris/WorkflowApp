import React, {useState, useEffect} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  DeviceEventEmitter,
} from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const Button = () => {
    return (
        <TouchableHighlight
          underlayColor={'white'}
          style={styles.button}
          onPress={this.props.onPress}>
          <Text style={styles.buttonLabel}>{this.props.label}</Text>
        </TouchableHighlight>
      );
}

const Notifications = () => {
    useEffect(() => {
        PushNotificationIOS.addEventListener('register', onRegistered);
        PushNotificationIOS.addEventListener(
          'registrationError',
          onRegistrationError,
        );
        PushNotificationIOS.addEventListener(
          'localNotification',
          onLocalNotification,
        );
    
        PushNotificationIOS.requestPermissions().then(
          (data) => {
            console.log('PushNotificationIOS.requestPermissions', data);
          },
          (data) => {
            console.log('PushNotificationIOS.requestPermissions failed', data);
          },
        );
    
        return () => {
          PushNotificationIOS.removeEventListener('register');
          PushNotificationIOS.removeEventListener('registrationError');
          PushNotificationIOS.removeEventListener('notification');
          PushNotificationIOS.removeEventListener('localNotification');
        };
    }, []);

    const onRegistered = (deviceToken) => {
        Alert.alert('Registered For Remote Push', `Device Token: ${deviceToken}`, [
          {
            text: 'Dismiss',
            onPress: null,
          },
        ]);
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

    const onLocalNotification = (notification) => {
    const isClicked = notification.getData().userInteraction === 1;

    Alert.alert(
        'Local Notification Received',
        `Alert title:  ${notification.getTitle()},
        Alert subtitle:  ${notification.getSubtitle()},
        Alert message:  ${notification.getMessage()},
        Thread Id:  ${notification.getThreadID()},
        Action Id:  ${notification.getActionIdentifier()},
        User Text:  ${notification.getUserText()},
        Notification is clicked: ${String(isClicked)}.`,
        [
        {
            text: 'Dismiss',
            onPress: null,
        },
        ],
    );
    };

    const sendLocalNotification = () => {
        PushNotificationIOS.presentLocalNotification({
          alertTitle: 'Sample Title',
          alertBody: 'Sample local notification',
          applicationIconBadgeNumber: 1,
        });
      };
    
    return (
        <>
        <Button
            onPress={sendLocalNotification}
            label="Send fake local notification"
        />
        </>
    );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    button: {
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonLabel: {
      color: 'blue',
    },
  });

export default Notifications;