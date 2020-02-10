import React, {useState, useEffect} from 'react';
import {View, Text, PermissionsAndroid, Button} from 'react-native';
import SmsAndroid from 'react-native-get-sms-android';

const Dashboard = () => {
  const [numberOfMessages, setNumberOfMessages] = useState(0);

  async function requestSmsPermissions() {
    const checkPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_SMS,
    );
    if (checkPermission) {
      console.log('Read SMS Permission is already given');
      return;
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
      } else {
        console.log('READ SMS Permission denied.');
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    requestSmsPermissions();
  }, []);

  const readSms = () => {
    console.log('clicked');
    console.log('Reading SMS');
    SmsAndroid.list(
      JSON.stringify({}),
      err => {
        console.log('Failed with error: ', err);
      },
      (count, smsList) => {
        setNumberOfMessages(count);
        console.log(count);
        console.log(smsList.length);
      },
    );
  };

  return (
    <View>
      <Text>Dashboard</Text>
      {numberOfMessages ? (
        <Text>You have {numberOfMessages} Messages in Inbox</Text>
      ) : null}
      <Button title="Click me" onPress={() => readSms()} />
    </View>
  );
};

export default Dashboard;
