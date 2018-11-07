import React,{Component} from 'react';
import {AppRegistry,Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import {Store} from '../../Models/Store';

export default class Counter extends Component{
    constructor() {
        super();
    }
    incValue(){
        var  obj = this.props.obj.product;
        if(this.props.obj.count==5){
            alert("Maximum limit reached");
            return;
        }
        Store.dispatch({type:'add',payLoad:obj});
    }
    decValue(){
        var  obj = this.props.obj.product;
        Store.dispatch({type:'sub',payLoad:obj});
    }
    render(){
        return(
            <View style={{height:'100%',width:'100%'}}>
                <View style={{height:'33%',width:'100%'}}>
                <TouchableOpacity activeOpacity={0.75} onPress={this.incValue.bind(this)} style={{translateX:37.5,height:'100%',width:'30%'}}>
                    <Text style={{fontSize:20,textAlignVertical:'top',textAlign:'center',backgroundColor:'#1194F6',borderRadius:100,height:'100%',color:'white',fontWeight:'700'}}>+</Text>
                </TouchableOpacity>
                </View>
            
                <Text style={{width:'35%',textAlign:'center',fontSize:20,fontWeight:'900',transform:([{translateX:33}])}}>{this.props.obj.count}</Text>
                
                <View style={{height:'33%',width:'100%'}}>
                <TouchableOpacity activeOpacity={0.75} onPress={this.decValue.bind(this)} style={{translateX:37.5,height:'100%',width:'30%'}}>
                    <Text style={{textAlignVertical:'top',textAlign:'center',backgroundColor:'#1194F6',borderRadius:100,height:'100%',fontSize:20,color:'white',fontWeight:'700'}}>-</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}


AppRegistry.registerComponent('Counter',()=>Counter);