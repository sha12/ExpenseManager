import React, {useEffect, useState} from 'react';
import {View, Text, AppState} from 'react-native';
import requestSmsPermissions from '../permissions/ReadSms';
import useSpends from '../hooks/UseSpends';
import {getData, putData} from '../api/LocalStorage';
import AllDaysSpends from '../screens/AllDaysSpends';

const Dashboard = () => {
  const [transactionsData, setTransactionsData] = useSpends();

  const [lastOpened, setlastOpened] = useState(null);

  const getlastOpenedTime = async () => {
    const lastOpenedTime = await getData('@EMlastOpened');
    setlastOpened(lastOpenedTime);
  };

  useEffect(() => {
    getlastOpenedTime();
    const handleChange = appState => {
      let date = new Date().getTime();
      if (['inactive', 'background'].includes(appState)) {
        putData('@EMlastOpened', date);
      } else if (appState === 'active') {
        getlastOpenedTime();
      }
    };

    AppState.addEventListener('change', handleChange);
  }, []);

  return (
    <View>
      {/* <Text>Dashboard</Text>
      <Text>Last opened: {lastOpened}</Text>
      <Text>Total spends: {Object.values(transactionsData).length}</Text> */}
      <AllDaysSpends spends={transactionsData} />
    </View>
  );
};

export default Dashboard;
