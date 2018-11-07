import React,{Component} from 'react';
import {AppRegistry,Text,View,StyleSheet,ActivityIndicator,AsyncStorage} from 'react-native';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';

// Product Component
import Product from '../Products/product';

export default class Home extends Component{
    static  navigationOptions = () => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="home"
                color={tintColor}
                size={24}
            />
        )
    })

    constructor(){
        super();
        this.state={'products':[]};
    }
    componentDidMount(){
        fetch('https://rajat-juneja.github.io/json/json.json').
        then(response=>response.json().
        then(data=>{
            this.setState({...this.state,'products':data.products});
        }).
        catch(err=>console.log(err))).catch(err=>console.log(err));
    }
    render(){
        if(this.state.products.length<1){
            return(
                <ActivityIndicator size="large" color="red" style={{marginTop:40}}/> 
            )
        }
        return(
            <View style={{flex:1,backgroundColor:'orange'}}>
                <Product products={this.state.products}/> 
            </View>
        )
    }
}


AppRegistry.registerComponent('Home',()=>Home);