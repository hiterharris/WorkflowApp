import { StyleSheet } from "react-native"

export default StyleSheet.create({
    timer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        padding: 20,
        fontWeight: '600',
        color: 'white',
      },
    inputs: {
        flexDirection: 'row',
    },
    input: {
        height: 40,
        width: 65,
        borderColor: 'lightgray',
        borderWidth: 0.5,
        textAlign: 'center',
        margin: 5,
        color: 'white',
        fontSize: 12,
    },
    time: {
        color: 'white',
        fontSize: 64,
    },
    buttons: {
        flexDirection: 'row',
    },
    startButton: {
        paddingVertical: 10,
        width: 80,
        margin: 10,
        backgroundColor: '#3151ff',
        borderWidth: 1,
        borderColor: '#152684',
    },
    resetButton: {
        paddingVertical: 10,
        width: 80,
        margin: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#152684',
    },
    startButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    resetButtonText: {
        color: 'black',
        textAlign: 'center',
    },
});
