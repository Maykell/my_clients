import AsyncStorage from '@react-native-community/async-storage';

const setToken = async value => {
    try {
        await AsyncStorage.setItem('@app:token', value);
    } catch (error) {
        console.log('setToken: AsyncStorageUtil -> ', error);
    }
};

const getToken = async () => {
    try {
        return await AsyncStorage.getItem('@app:token');
    } catch (error) {
        console.log('getToken: AsyncStorageUtil -> ', error);
    }
};

export default { setToken, getToken };
