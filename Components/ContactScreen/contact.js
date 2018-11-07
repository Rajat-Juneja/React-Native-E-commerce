import React,{Component} from 'react';
import {AppRegistry,Linking,Text,View,StyleSheet} from 'react-native';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Contact extends Component{
    static  navigationOptions = () => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="envelope-square"
                color={tintColor}
                size={24}
            />
        )
    })
    constructor(){
        super();
    }
    render(){
        return(
            <View style={{flex:1,flexDirection:'column'}}>
                <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Icon
                    name="envelope"
                    color="#C03B2B"
                    size={40}
                    style={{textAlign:'center',paddingTop:35}}
                    onPress={()=>{
                        Linking.openURL('mailto:junejarajat98@gmail.com').catch(err=>console.log(err));
                    }}
                    />
                    <Text style={{textAlign:'center',fontWeight:'500'}} onPress={()=>{
                        Linking.openURL('mailto:junejarajat98@gmail.com').catch(err=>console.log(err));
                    }}>Mail</Text>
                </View>

                <View style={{flex:1}}>
                    <Icon
                    name="linkedin-square"
                    color="#0077B5"
                    size={40}
                    style={{textAlign:'center',paddingTop:35}}
                    onPress={()=>{
                        Linking.openURL('https://www.linkedin.com/in/rajat-juneja/').catch(err=>console.log(err));
                    }}
                    />
                    <Text onPress={()=>{
                        Linking.openURL('https://www.linkedin.com/in/rajat-juneja/').catch(err=>console.log(err));
                    }}
                    style={{textAlign:'center',fontWeight:'500'}}>Linkedin</Text>
                </View>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Icon
                    name="github-square"
                    color="#333333"
                    size={40}
                    style={{textAlign:'center',paddingTop:35}}
                    onPress={()=>{
                        Linking.openURL('https://github.com/rajat-juneja').catch(err=>console.log(err));
                    }}
                    />
                    <Text onPress={()=>{
                        Linking.openURL('https://github.com/rajat-juneja').catch(err=>console.log(err));
                    }}
                    style={{textAlign:'center',fontWeight:'500'}}>Github</Text>
                </View>

                <View style={{flex:1}}>
                    <Icon
                    name="facebook-official"
                    color="#3B5998"
                    size={40}
                    style={{textAlign:'center',paddingTop:35}}
                    onPress={()=>{
                        Linking.openURL('https://www.facebook.com/rajat.juneja.1998').catch(err=>console.log(err));
                    }}
                    />
                    <Text onPress={()=>{
                        Linking.openURL('https://www.facebook.com/rajat.juneja.1998').catch(err=>console.log(err));
                    }}
                    style={{textAlign:'center',fontWeight:'500'}}>Facebook</Text>
                </View>
                </View>
            </View>
        )
    }
}

AppRegistry.registerComponent('Contact',()=>Contact);