import React,{Component} from 'react';
import {AppRegistry,Text,View,ScrollView,AsyncStorage,Image} from 'react-native';
import Counter from './counter';
import Add from './add';
import {Store} from '../../Models/Store';
import {connect} from 'react-redux';

class Product extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <ScrollView style={{flex:1,backgroundColor:'rgb(250,250,250)'}}>
                                    
                {this.props.products.map((element)=>{

                    var add=<Add obj={element}></Add>
                    if(this.props.added){
                        for(let i=0;i<this.props.added.length;i++){
                            if(element.id==this.props.added[i].product.id){
                                add=<Counter obj={this.props.added[i]} ></Counter>
                            }
                        }
                    }
                    return(
                        <View style={{flex:1, height:100,flexDirection:'row',backgroundColor:'white',marginVertical:15,paddingHorizontal:10,paddingVertical:4,borderWidth:2,borderColor:'rgba(0,0,0,0.1)',borderRadius:5}} key={element.id}>
                            <Image source={{uri:element.url}} style={{height:'100%',width:'100%',flex:1}}/>
                            <View style={{flex:3,height:'100%',paddingLeft:'7.5%'}}>
                                <Text style={{flexBasis:'50%',textAlignVertical:'center',color:'black',fontWeight:'900'}}>
                                    {element.name}
                                </Text>
                                <Text style={{flexBasis:'50%',color:'black',fontWeight:'900'}}>
                                &#8377; {element.price}
                                </Text>
                            </View>
                            <View style={{flex:2}}>
                            {add}
                            {/* For add button or +- button */}
                            </View>
                        </View>
                    )
                })}

            </ScrollView>
        )
    }
}


const mapStateToProps = (state)=>{
    if(state.added){
        if(state.added.length>0){
            AsyncStorage.setItem('data',JSON.stringify(state.added));
        }
        else{
            AsyncStorage.removeItem('data');
        }
        let adds = state.added;
        let counter = state.counter;
        return{added:adds,count:counter};
    }
    AsyncStorage.removeItem('data');
    return{}
}

export default connect(mapStateToProps)(Product);

AppRegistry.registerComponent('Product',()=>Product);