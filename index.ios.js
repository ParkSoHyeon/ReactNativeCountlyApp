/**
 * @format
 */

import React, {Component} from 'react';
import { AppRegistry, } from 'react-native';
import { Provider, connect } from 'react-redux'
import {name as appName} from './app.json';

import * as actions from "./src/actions";
import store from "./src/store";
import Counter from './src/Counter';

const mapStateToProps = state => ({
   count: state.count
});

// const mapDispatchToProps = dispatch => ({
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//     zero: () => dispatch(zero())
// });

const CounterContainer = connect(mapStateToProps, actions)(Counter);

const Countly = () => (
    <Provider store={store}><CounterContainer /></Provider>
)
AppRegistry.registerComponent(appName, () => Countly);
