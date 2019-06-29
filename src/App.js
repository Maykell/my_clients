import React from 'react';
import './config/reactotron';

import AppNavigator from './navigation/AppNavigator';

import { Provider as StoreProvider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import store from './store';
import { defaultTheme } from './styles/themes';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: defaultTheme.primary,
        accent: defaultTheme.secondary,
        background: defaultTheme.backgroundColor,
        text: defaultTheme.primaryTextColor
    },
};

const App = () => (
    <StoreProvider store={store}>
        <PaperProvider theme={theme}>
            <AppNavigator />
        </PaperProvider>
    </StoreProvider>
);

export default App;
