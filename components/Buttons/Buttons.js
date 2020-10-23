import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './Styles';

const App = (props) => {
    const {toggleActive, reset} = props;
    return (
        <>
            <TouchableOpacity onPress={toggleActive} style={styles.startButton}>
                <Text style={styles.startButtonText}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={reset} style={styles.resetButton}>
                <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
        </>
    );
};

export default App;
