// import {AsyncStorage} from 'react-native';
export const Reducer  = (state={},action)=>{
    if(action.type=='add'){
        if(!state.added){
            state={...state,'added':[{'product':action.payLoad,'count':1}],'counter':1};
        }
        else{
            for(let i=0;i<state.added.length;i++){
                if(state.added[i].product.id==action.payLoad.id){
                    state.added[i].count++;
                    return {...state,'counter':state.counter+1}
                }
            }

            state.added.push({'product':action.payLoad,'count':1});
            state.counter+=1;
        }
        return {...state};
    }
    else if(action.type=='sub'){
        for(let i=0;i<state.added.length;i++){
            if(state.added[i].product.id==action.payLoad.id){
                if(state.added[i].count==1){
                    state.added.splice(i,1);
                }
                else{
                state.added[i].count--;
                }
                if(state.added.length==0){
                    state={...state,'added':null};
                }
                return {...state,'counter':state.counter-1};
            }
        }
        return {...state};
    }
    else if(action.type=='retain'){
        var count=0;
        for(let i=0;i<action.payLoad.length;i++){
            count+=action.payLoad[i].count;
        }
        state={...state,'added':action.payLoad,'counter':count};
        return {...state}
    }
    else if(action.type=='removeAll'){
        state={...state,'added':null,'counter':0};
        return {...state};
    }
    else if(action.type=='remove'){
        // console.log(action.payLoad);
        state.counter-=state.added[action.payLoad].count;
        state.added.splice(action.payLoad,1);
        if(state.added.length==0){
            state.added=null;
        }
        return {...state};
    }
    else if(action.type=='bought'){
        state={...state,'added':null,'counter':0};
        return {...state};
    }
    else if(action.type=='end'){
        state={};
        return {...state};
    }


    return state;
}