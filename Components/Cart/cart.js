import React,{Component} from 'react';
import {AppRegistry,ScrollView,Text,AsyncStorage,View} from 'react-native';
import {connect} from 'react-redux';
import {Store} from '../../Models/Store';

// Component
import CartProduct from './cartProduct';
import CartBottom from './cartBottom';

class Cart extends Component{
    static navigationOptions=()=>{
        return{
            headerTitle:'Cart',
            headerTitleStyle:{flex:3,alignSelf:'center',textAlign:'center'},
            headerRight:(<Text style={{flex:1}}></Text>)
        }
    }

    constructor(){
        super();
    }
    emptyCart(){
        Store.dispatch({type:'removeAll'});
        AsyncStorage.removeItem('data');
    }
    render(){
        if(!this.props.added){
            return(
                <Text style={{textAlign:'center',marginTop:50,fontSize:20,fontWeight:'500'}}>Cart is Empty</Text>
            )
        }
        return(
            <View style={{height:'100%',position:'relative',paddingTop:15}}>
            <ScrollView style={{marginBottom:50}}>
                <Text style={{flex:1,alignSelf:'flex-end',color:'red',paddingRight:15}} onPress={this.emptyCart.bind(this)}>Remove All</Text>
                <CartProduct products={this.props.added}></CartProduct>
            </ScrollView>
            
            <CartBottom products={this.props.added}></CartBottom>
            </View>
        )
    }
}

const mapStateToProps = (state) =>{
    if(state.added){
        if(state.added.length>0){
        AsyncStorage.setItem('data',JSON.stringify(state.added));
        }
        else{
            AsyncStorage.removeItem('data');
        }
        var add = state.added;
        var count = state.counter;
        return {added:add,counter:count};
    }
    AsyncStorage.removeItem('data');
    return {};
}

export default connect(mapStateToProps)(Cart);

AppRegistry.registerComponent('Cart',()=>Cart);