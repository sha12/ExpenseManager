import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import requestSmsPermissions from '../permissions/ReadSms';
import SmsAndroid from 'react-native-get-sms-android';
import {AsyncStorage, AppState} from 'react-native';

const BankTitles = ['HDFCBK', 'AxisBk'];

const Dashboard = () => {
  const [appState, setAppState] = useState(null);

  var currentTimeStamp = new Date().getTime();
  var todayStartTimestamp = new Date(currentTimeStamp).setHours(0, 0, 0);

  const [totalSpends, setTotalSpends] = useState(0);

  const getSpends = () => {
    SmsAndroid.list(
      JSON.stringify({}),
      err => {
        console.log('Failed with error: ', err);
      },
      (count, smsList) => {
        var spends = totalSpends;
        JSON.parse(smsList).forEach(msg => {
          if (
            BankTitles.includes(msg.address) &&
            msg.body.toLowerCase().includes('debited')
          ) {
            let rgxMatch = msg.body.match(/[RS|INR].?\s+(\d+.?\d{1,2})/i);
            if (rgxMatch) {
              spends += parseInt(rgxMatch[1], 10) ? parseFloat(rgxMatch[1]) : 0;
            }
          }
        });
        setTotalSpends(spends);
      },
    );
  };

  useEffect(() => {
    console.log('use effect is called');
    requestSmsPermissions();
    //AppState.addEventListener('change', handleAppStateChange);
    getSpends();
  }, []);

  return (
    <View>
      <Text>Dashboard</Text>
      <Text> Total spends: {totalSpends}</Text>
    </View>
  );
};

export default Dashboard;
