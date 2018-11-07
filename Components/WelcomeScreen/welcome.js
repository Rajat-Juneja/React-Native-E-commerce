import React from 'react';
import {AppRegistry,StyleSheet,Text,AsyncStorage,ImageBackground,View,ActivityIndicator} from 'react-native';
import {Store} from '../../Models/Store';


const Welcome = (props) =>{
    AsyncStorage.getItem('data',(err,data)=>{
        if(data){
            var added = JSON.parse(data);
            Store.dispatch({type:'retain','payLoad':added});
        }
    })

    setTimeout(()=>{
        AsyncStorage.getItem('user',(err,data)=>{
            if(err || !data){
                props.navigation.navigate('Login');
            }
            else{
                props.navigation.navigate('App');
            }
        })
    },500);

    return(
        <ImageBackground 
        source={require('../../assets/images/bg.jpg')}
        style={{width:'100%',height:'100%'}}
        >
            <View>
                <Text style={styles.welcome}>Welcome to 
                    <Text style={styles.welcome2}> E-Commerce</Text>
                </Text>
                <ActivityIndicator color="black" style={{marginTop:40,backgroundColor:'rgba(250,250,250,0.3)'}} size="large"/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    'welcome':{
        textAlign:'center',
        fontSize:28,
        fontWeight:"500",
        color:'black',
        marginTop:'50%',
        backgroundColor:'rgba(250,250,250,0.7)'
    },
    'welcome2':{
        fontWeight:"900",
        fontSize:32,
        color:'red'
    }
})

export default Welcome

AppRegistry.registerComponent('Welcome',()=>Welcome);