import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppCuaca from'./scr/04API/AppCuaca';

export default class App extends React.Component {
  render() {
    return(
      <AppCuaca />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
