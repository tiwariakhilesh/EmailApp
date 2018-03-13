import * as actions from './actionTypes';
import axios from 'axios';

export const fetchUser=()=>{
   return async (dispatch)=>{
   const res= await axios.get('api/current_user')
    dispatch({type: actions.FETCH_USER, payload:res.data}); 
   } 
}
