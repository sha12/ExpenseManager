import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const daySpends = ({allDaySpends}) => {
  //console.log(allDaySpends);
  //console.log(date);
  const [spendsDetails] = [...Object.entries(allDaySpends)];
  const [date, spends] = spendsDetails;

  const totalDaySpends = spends.reduce(
    (accumulator, item) => accumulator + item.amount,
    0,
  );

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

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.dateStyle}>{date}</Text>
      <Text style={styles.amountStyle}>Spends: {totalDaySpends}</Text>
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
