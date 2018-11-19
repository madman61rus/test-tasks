//@flow
import React, {Component} from 'react';
import Navigator from './navigation/navigator';
import {Provider} from 'react-redux';
import store from './store/store';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
