import AsyncStorage from '@react-native-community/async-storage';

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('userList');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Error while reading data');
  }
};

export default getData;
