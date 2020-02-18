import {PermissionsAndroid} from 'react-native';

const requestSmsPermissions = async () => {
  const checkPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.READ_SMS,
  );
  if (checkPermission) {
    return true;
  }
  try {
    console.log('Requesting Read SMS Permissions');
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_SMS,
      {
        title: 'EXPENSE MANAGER SMS Permission',
        message: 'Expense Manager needs SMS Permission',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You have READ SMS Permissions');
      return true;
    } else {
      console.log('READ SMS Permission denied.');
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export default requestSmsPermissions;
