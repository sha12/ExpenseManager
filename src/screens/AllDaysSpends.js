import React, {Fragment} from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import DaySpends from './DaySpends';
import Header from '../components/Header';

const AllDaysSpends = ({spends}) => {
  return (
    <Fragment>
      <Header title="Expenses" />
      <FlatList
        data={spends}
        keyExtractor={(item, index) => Object.keys(item)[0]}
        renderItem={itemData => (
          <TouchableOpacity onPress={() => console.log(itemData)}>
            <DaySpends allDaySpends={itemData.item} />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default AllDaysSpends;
