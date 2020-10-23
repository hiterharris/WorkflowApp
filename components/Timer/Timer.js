import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import styles from './Styles';

const Timer = () => {
    return (
    <View style={styles.timer}>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            value={0}
            placeholder='Minutes'
            placeholderTextColor='lightgray'
          />
          <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            value={0}
            placeholder='Seconds'
            placeholderTextColor='lightgray'
          />
        </View>
        <View style={styles.timer}>
          <Text style={styles.time}>0:00</Text>
        </View>
        <View style={styles.buttons}>
          <Button title='Start'/>
          <Button title='Reset'/>
        </View>
    </View>
    );
};

export default Timer;
