import React from 'react';
import {AppRegistry} from 'react-native';
import AppNavigator from './Routes/routes';
import {Provider} from 'react-redux';
import {Store} from './Models/Store';

const App = () =>{
    return(
      <Provider store={Store}>
      <AppNavigator></AppNavigator>
      </Provider>
    )
}

export default App;

AppRegistry.registerComponent('App',()=>App);

