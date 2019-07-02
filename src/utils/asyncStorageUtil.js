import AsyncStorage from '@react-native-community/async-storage';

const save = async value => {
    try {
        await AsyncStorage.setItem('@app:clients', value);
    } catch (error) {
        console.log('save: AsyncStorageUtil -> ', error);
    }
};

const getClients = async () => {
    try {
        return await AsyncStorage.getItem('@app:clients');
    } catch (error) {
        console.log('getClients: AsyncStorageUtil -> ', error);
    }
};

export default { save, getClients };
