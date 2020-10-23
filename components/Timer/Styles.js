import { StyleSheet } from "react-native"

export default StyleSheet.create({
    timer: {
        alignItems: 'center',
    },
    inputs: {
        flexDirection: 'row',
    },
    input: {
        height: 40,
        width: 100,
        borderColor: 'lightgray',
        borderWidth: 0.5,
        textAlign: 'center',
        margin: 5,
    },
    time: {
        color: 'white',
        fontSize: 64,
    },
    buttons: {
        flexDirection: 'row',
    }
});
