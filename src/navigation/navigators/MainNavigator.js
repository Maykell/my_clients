import { createStackNavigator } from 'react-navigation';

import MainScreen from '../../screens/MainScreen';
import RegisterScreen from '../../screens/RegisterScreen';

import { screens } from '../../config';
import { defaultTheme } from '../../styles/themes';
import { colors } from '../../styles';

const MainNavigator = createStackNavigator(
    {
        [screens.MainScreen]: {
            screen: MainScreen,
            navigationOptions: {
                title: 'Clients'
            }
        },
        [screens.RegisterScreen]: {
            screen: RegisterScreen,
            navigationOptions: {
                title: 'Register'
            }
        }
    },
    {
        initialRouteName: screens.RegisterScreen,
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: defaultTheme.primary
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        },
        headerBackTitleVisible: false
    }
);

export default MainNavigator;