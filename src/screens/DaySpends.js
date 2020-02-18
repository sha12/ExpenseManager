import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const daySpends = () => {
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const spends = 250;
  const dateObj = new Date();
  const formattedDate = [
    dateObj.getDate(),
    months[dateObj.getMonth()],
    dateObj.getFullYear(),
  ].join(' ');
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.dateStyle}>{formattedDate}</Text>
      <Text style={styles.amountStyle}>Spends: {spends}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 75,
    borderWidth: 3,
    borderColor: 'gray',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 6,
  },
  dateStyle: {
    fontSize: 20,
    padding: 25,
  },
  amountStyle: {
    fontSize: 20,
    padding: 25,
    color: 'green',
  },
});

export default daySpends;
