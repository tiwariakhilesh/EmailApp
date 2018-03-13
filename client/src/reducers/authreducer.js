import React from 'react';
import * as actions from '../actions/actionTypes'

const reducer= (state= null, action)=>{
    console.log(action);
    switch(action.type){
        case actions.FETCH_USER:
        return action.payload || false
        default: return state;
    }
}
export default reducer;