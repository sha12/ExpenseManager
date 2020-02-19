import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import requestSmsPermissions from '../permissions/ReadSms';
import useSpends from '../hooks/UseSpends';

const Dashboard = () => {
  console.log('rending app');
  const [transactionsData, setTransactionsData] = useSpends();
  console.log(transactionsData);

  return (
    <View>
      <Text>Dashboard</Text>
      <Text>Total spends: {Object.values(transactionsData).length}</Text>
    </View>
  );
};

export default Dashboard;
