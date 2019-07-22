import {combineReducers} from 'redux'
import {typeList} from './TypeList'
import sellWell from "./sellWell";
import {bookList} from './BookList'
export default combineReducers({
    typeList,
    sellWell,
    bookList
})