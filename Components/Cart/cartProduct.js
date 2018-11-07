import React,{Component} from 'react';
import {AppRegistry,Text,View,ScrollView,AsyncStorage,Image} from 'react-native';
import Counter from '../Products/counter';
import {Store} from '../../Models/Store';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CartProduct extends Component{
    constructor(){
        super();
    }
    removeItem(index){
        Store.dispatch({'type':'remove','payLoad':index});
    }
    render(){
        return(
                 <View>                   
                {this.props.products.map((element,i)=>{
                    return(
                        <View style={{flex:2, height:100,flexDirection:'row',backgroundColor:'white',marginVertical:15,paddingHorizontal:10,paddingVertical:4,borderWidth:2,borderColor:'rgba(0,0,0,0.1)',borderRadius:5}} key={element.product.id}>
                            <Image source={{uri:element.product.url}} style={{height:'80%',marginTop:7,width:'100%',flex:1}}/>
                            <View style={{flex:4,height:'100%',paddingLeft:'7.5%'}}>
                                <Text style={{flexBasis:'50%',textAlignVertical:'center',color:'black',fontWeight:'900'}}>
                                    {element.product.name}
                                </Text>
                                <Text style={{flexBasis:'50%',color:'black',fontWeight:'900'}}>
                                &#8377; {element.product.price}
                                </Text>
                            </View>
                            <View style={{flex:4}}>
                                <Counter obj={this.props.products[i]}></Counter>
                            </View>
                            <View style={{flex:1}}>
                                <Icon
                                name="trash"
                                color="red"
                                size={24}
                                onPress={this.removeItem.bind(this,i)}
                                />
                            </View>
                        </View>
                    )
                })}
                </View>
        )
    }
}


// const mapStateToProps = (state)=>{
//     if(state.added){
//         AsyncStorage.setItem('data',JSON.stringify(state.added));
//         let adds = state.added;
//         let counter = state.counter;
//         return{products:adds,count:counter};
//     }
//     return{}
// }

// export default connect(mapStateToProps)(CartProduct);

AppRegistry.registerComponent('CartProduct',()=>CartProduct);