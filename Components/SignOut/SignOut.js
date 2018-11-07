import React,{Component} from 'react';
import {AppRegistry,Text,View,Button,AsyncStorage} from 'react-native';
import {Store} from '../../Models/Store';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';


export default class SignOut extends Component{
    static  navigationOptions = () => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="sign-out"
                color={tintColor}
                size={24}
            />
        )
    })

    constructor(){
        super();
    }
    signOut(){
        AsyncStorage.multiRemove(['data','user'],(err,data)=>{});
        Store.dispatch({'type':'end'});
        this.props.navigation.navigate('Login');
    }
    render(){
        return(
            <View style={{flex:1,marginTop:20}}>
                <Icon
                name="handshake-o"
                color='blue'
                size={46}
                style={{textAlign:'center',marginBottom:20}}
                />
                <Text style={{fontSize:18,textAlign:'center',marginBottom:50}}>We loved to have you with us</Text>
                <Text style={{fontSize:16,textAlign:'center',marginBottom:20}}>You will lose all your data</Text>
                <Button title="Sign Out" onPress={this.signOut.bind(this)}/>
            </View>
        )
    }
}

AppRegistry.registerComponent('SignOut',()=>SignOut);