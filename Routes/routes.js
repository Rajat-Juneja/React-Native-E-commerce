import React from 'react';
import {Text} from 'react-native';

import {
    createSwitchNavigator,
    createBottomTabNavigator,
    createStackNavigator
}
from 'react-navigation';

// Screens
import Welcome from '../Components/WelcomeScreen/welcome';
import Login from '../Components/Login/login';
import Home from '../Components/HomeScreen/Home';
import Profile from '../Components/ProfileScreen/profile';
import Contact from '../Components/ContactScreen/contact';
import Cart from '../Components/Cart/cart';
import CartOnHeader from '../Components/Cart/cartOnHeader';
import SignOut from '../Components/SignOut/SignOut';


const TabScreen = createBottomTabNavigator({
    'Home':Home,
    'Profile':Profile,
    'Contact':Contact,
    'SignOut':SignOut
},{
tabBarOptions: {
    // showLabel: false,  hide labels
    activeTintColor: 'red', // active icon color
    inactiveTintColor: 'black',  // inactive icon color
    style: {
        backgroundColor: 'rgb(250,250,250)' // TabBar background
    },
    activeBackgroundColor:'white',
    inactiveBackgroundColor:'rgba(225,225,225,1)',
    allowFontScaling:true,
    activeTabStyle: {
        fontSize:18
    }
    // labelStyle:{fontSize:20}
}
})

const AppScreen = createStackNavigator({
    'Tabs':{
        screen:TabScreen,
        navigationOptions:{
            headerTitle:'RJ-Shop',
            headerTitleStyle:{alignSelf:'center',flex:3,textAlign:'center'},
            headerRight:(<CartOnHeader style={{flex:1}}></CartOnHeader>),
            headerLeft:(<Text style={{flex:1}}></Text>)
        }
    },
    'Cart':Cart,
})

// For Cart, get it on the header

export default AppNavigator = createSwitchNavigator({
    'Welcome':Welcome,
    'Login':Login,
    'App':AppScreen
})