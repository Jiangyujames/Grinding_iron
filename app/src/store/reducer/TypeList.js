import stateInit from '../state/TypeList'
import {CHANGE_TYPELIST} from '../actionType/TypeList'
export function typeList(state=stateInit,action){
    state=JSON.parse(JSON.stringify(state))
    if(action.type===CHANGE_TYPELIST){
        state.typeList=action.payload.typeList
        state.isloading=false
    }
    return state
}