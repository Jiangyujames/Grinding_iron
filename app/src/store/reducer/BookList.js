import initState from  '../state/BookList'
import {CHANGE_BOOKLIST} from '../actionType/TypeList'
export function bookList(state=initState,action) {
    state=JSON.parse(JSON.stringify(state))
    if(action.type===CHANGE_BOOKLIST){
        state.bookList=action.payload.bookList;
        state.count=action.payload.count
    }
    return state
}