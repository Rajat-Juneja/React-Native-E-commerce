import React from 'react';
import {AppRegistry,Text,View,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';

const CartOnHeader = (props) =>{
    var counting;
    if(props.count>0){
        counting=<Text style={{position:'absolute',backgroundColor:'white',fontSize:17,color:'red',fontWeight:'900',right:-10,top:-5,width:25,height:25,borderRadius:15,borderColor:'rgba(0,0,0,0.2)',borderWidth:1,textAlign:'center'}}>{props.count}</Text>
    }
    return(
        <View style={{position:'relative',marginRight:20}} >
            <Icon
            name="shopping-cart"
            color="black"
            size={40}
            onPress={()=>{props.navigation.navigate('Cart')}}
            />
            {counting}
        </View>
    )
}

const mapStateToProps = (state) =>{
    if(state.counter){
        let counter =state.counter;
        return {count:counter};
    }
    return {}
}

export default withNavigation(connect(mapStateToProps)(CartOnHeader));

AppRegistry.registerComponent('CartOnHeader',()=>CartOnHeader);