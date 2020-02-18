import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import requestSmsPermissions from '../permissions/ReadSms';
import useMessages from '../api/Sms';
import formatDate from '../common/Utils';
import {AsyncStorage, AppState} from 'react-native';

const BankTitles = ['HDFCBK', 'AxisBk'];

const Dashboard = () => {
  console.log('rending app');
  const [transactionData, setTransationData] = useState({});
  const [smsApi, messages] = useMessages();

  const checkMsgAddress = address => {
    var status = false;
    BankTitles.forEach(title => {
      if (address.toLowerCase().includes(title.toLowerCase())) {
        status = true;
      }
    });
    return status;
  };

  const getSpends = () => {
    const transactionDataClone = JSON.parse(JSON.stringify(transactionData));
    messages.forEach(msg => {
      if (checkMsgAddress(msg.address)) {
        let rgxMatch = msg.body.match(/[RS|INR].?\s+([\d|,]+.?\d{1,2})/i);
        if (rgxMatch) {
          const spentDetails = {
            amount: parseInt(rgxMatch[1], 10) ? parseFloat(rgxMatch[1]) : 0,
            comment: msg.body,
            spentFrom: msg.address,
            spentAt: new Date(msg.date).toLocaleString(),
          };
          const msgDate = formatDate(msg.date);
          if (msgDate in transactionDataClone) {
            transactionDataClone[msgDate].push(spentDetails);
          } else {
            transactionDataClone[msgDate] = [spentDetails];
          }
        }
      }
    });
  };

  useEffect(() => {
    console.log('-------------');
    requestSmsPermissions();
    getSpends();
  }, []);

  return (
    <View>
      <Text>Dashboard</Text>
      <Text>Total spends: 0</Text>
    </View>
  );
};

export default Dashboard;
