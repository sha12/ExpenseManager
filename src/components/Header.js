import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const header = ({title}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    height: 60,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 25,
  },
});

export default header;
