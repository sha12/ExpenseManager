import AyncStorage from '@react-native-community/async-storage';

const getData = async item => {
  try {
    const value = await AyncStorage.getItem(item);
    if (value !== null) {
      console.log('the value is ', value);
    } else {
      console.log('its not stored', value);
    }
    return value;
  } catch (e) {
    console.log('error in getting data', e);
  }
};

const putData = async (item, value) => {
  try {
    await AyncStorage.setItem(item, JSON.stringify(value));
  } catch (e) {
    console.log('error is storing data', e);
  }
};

export {getData, putData};
