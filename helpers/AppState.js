import { useRef, useEffect } from "react";
import { AppState } from "react-native";
import BackgroundTimer from 'react-native-background-timer';

export const AppStateHelper = (setAppState, setNextAppState) => {
    const appState = useRef(AppState.currentState);

    const _handleAppStateChange = (nextAppState) => {
        appState.current = nextAppState;
        setNextAppState(appState.current);
    };

    useEffect(() => {
        setAppState(appState.current);
        AppState.addEventListener("change", _handleAppStateChange);
        return () => {
            AppState.removeEventListener("change", _handleAppStateChange);
        };
    }, []);
    return appState.current;
}