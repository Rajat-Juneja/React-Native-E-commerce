import React,{Component} from 'react';
import {AppRegistry,Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import {Store} from '../../Models/Store';

export default class Add extends Component{
    constructor() {
        super();

    }
    addProduct(){
        var product=this.props.obj;
        Store.dispatch({type:'add',payLoad:product});
    }
    render(){
        return(
            <View style={{height:'100%',width:'100%'}}>
                <TouchableOpacity activeOpacity={0.75} onPress={this.addProduct.bind(this)} style={{translateX:12.5,translateY:22,height:'50%',width:'75%'}}>
                    <Text style={{textAlignVertical:'center',textAlign:'center',backgroundColor:'#1194F6',borderRadius:10,height:'100%',color:'white',fontWeight:'700',letterSpacing:10}}>ADD</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


AppRegistry.registerComponent('Add',()=>Add);