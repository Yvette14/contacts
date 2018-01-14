/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {
  StyleSheet,
  View
} from 'react-native';
import AppRouter from "./app/AppRoute";
import reducer from './app/src/reducer';
import logger from './app/src/middleware/logger';

const store = createStore(reducer, applyMiddleware(logger));

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppRouter/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  }
});
