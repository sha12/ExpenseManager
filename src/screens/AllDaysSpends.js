import React, {Fragment} from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import DaySpends from './DaySpends';
import Header from '../components/Header';

const AllDaysSpends = () => {
  const a = Array(30).fill({key: 2});
  return (
    <Fragment>
      <Header title="Expenses" />
      <FlatList
        data={a}
        keyExtractor={(item, index) => index.toString()}
        renderItem={itemData => (
          <TouchableOpacity onPress={() => console.log(itemData)}>
            <DaySpends />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default AllDaysSpends;
