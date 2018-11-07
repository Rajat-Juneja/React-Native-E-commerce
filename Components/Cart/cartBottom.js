import React,{Component} from 'react';
import {AppRegistry,View,Text,TouchableOpacity,AsyncStorage} from 'react-native';
import {Store} from '../../Models/Store';
 
export default class CartBottom extends Component{
    constructor(){
        super();
        this.total=0;
    }
    buyOrder(){
        Store.dispatch({'type':'bought'});
    }
    calculateTotal(){
        this.total=0;
        for(let i=0;i<this.props.products.length;i++){
            this.total+=(this.props.products[i].product.price*this.props.products[i].count);
        }
    }
    render(){
        this.calculateTotal();
        return(
            <View style={{flex:1,flexDirection:'row',position:'absolute',bottom:0,width:'100%',height:50,borderWidth:1,borderTopColor:'black'}}>
                <View style={{flex:5,height:'100%',backgroundColor:'white'}}>
                    <Text style={{textAlign:'center',fontSize:16,paddingTop:10}}>Total Price is :  <Text style={{fontWeight:'700',fontSize:18}}>&#8377; {this.total}</Text> </Text>
                </View>
                <View style={{flex:3,height:'100%',backgroundColor:'black'}}>    
                    <TouchableOpacity onPress={this.buyOrder.bind(this)}>
                        <Text style={{backgroundColor:'#1194F6',height:'100%',color:'white',textAlignVertical:'center',textAlign:'center',fontSize:20,fontWeight:'700'}}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

AppRegistry.registerComponent('CartBottom',()=>CartBottom);