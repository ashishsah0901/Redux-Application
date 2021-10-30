import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import changeThemeReducer from './changeThemeReducer'

const reducers = combineReducers({
    amount: amountReducer,
    theme: changeThemeReducer
})

export default reducers