import React,{Component} from 'react';
import {AppRegistry,StyleSheet,AsyncStorage,Text,View,TextInput,TouchableOpacity,Keyboard,TouchableWithoutFeedback,ActivityIndicator} from 'react-native';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends Component{
    static  navigationOptions = () => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="user-circle-o"
                color={tintColor}
                size={24}
            />
        )
    })
    constructor(){
        super();
        this.state={'name':'','mob':'','checked':'','failed':true};
        this.err='Loading..';
    }
    componentDidMount(){
        AsyncStorage.getItem('user',(err,data)=>{
            if(err){
                this.err='Please Try Again';
            }
            else{
                var obj = JSON.parse(data);
                this.setState({'name':obj.name,'mob':obj.mob,'failed':false});
            }
        })
    }
    save(){
        if(!this.state.name){
            this.setState({...this.state,'checked':'name'})
            return;
        }

        if(this.state.mob.length!=10){
            this.setState({...this.state,'checked':'mob'})
            return;
        }

        this.setState({...this.state,'checked':''});
        var obj = {
            'name':this.state.name,
            'mob':this.state.mob
        }
        Keyboard.dismiss();
        AsyncStorage.setItem('user',JSON.stringify(obj));   
        alert('Successfully Changed');
    }
    render(){
        if(this.state.failed){
            return(
                <View>
                    <ActivityIndicator size="large" color="red" style={{marginTop:40}}/>
                    <Text>{this.state.err}</Text>
                </View>
            )
        }
        return(
            <TouchableWithoutFeedback
            style={{width:'100%',height:'100%'}} 
            onPress={()=>{Keyboard.dismiss();}}>

                <View style={{height:'100%',backgroundColor:'rgb(250,250,250)',flex:1,paddingTop:'10%'}}>
                    <TextInput
                    style={this.state.checked=='name'?styles.red:styles.input}
                    placeholder="Enter your name" 
                    defaultValue={this.state.name}
                    autoFocus={true}
                    onSubmitEditing={()=>{this.refs.mob.focus();}}
                    onChangeText={(text)=>{this.state.name=text}}/>
                    
                    <TextInput
                    style={this.state.checked=='mob'?styles.red:styles.input}
                    placeholder="Enter your Mobile Number"
                    keyboardType={'number-pad'}
                    defaultValue={this.state.mob}
                    ref="mob"
                    onChangeText={(text)=>{this.state.mob=text}}/>

                    <TouchableOpacity 
                    style={styles.to} 
                    onPress={this.save.bind(this)}
                    activeOpacity={0.5}>
                        <Text 
                        style={{
                            color:'white',
                            textAlign:'center',
                            fontWeight:'900'}}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>

            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    'input':{
        backgroundColor:'white',
        width:'80%',
        marginVertical:12.5,
        elevation:5,
        borderColor:'rgba(0,0,0,0.1)',
        borderWidth:1,
        borderRadius:10,
        alignSelf:'center',
        color:'black'
    },
    'red':{
        borderColor:'red',
        color:'white',
        backgroundColor:'rgba(255,0,0,0.5)',
        width:'80%',
        marginVertical:12.5,
        borderRadius:10,
        alignSelf:'center'
    },
    'to':{
        backgroundColor:'#1194F6',
        marginTop:10,
        alignSelf:'center',
        padding:10,
        width:'80%',
        borderRadius:10
    }
})

AppRegistry.registerComponent('Profile',()=>Profile);