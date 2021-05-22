import {createStore,combineReducers,applyMiddleware} from 'redux'
import {customerReducer} from '../Reducers/customerReducer'
import thunk from 'redux-thunk'
import { departmentReducer } from '../Reducers/departmentReducer'
import {employeeReducer} from '../Reducers/employeeReducer'
import { ticketReducer } from '../Reducers/ticketsReducer'
import {userReducer} from '../Reducers/userReducer'
const configureStore=()=>{
const store=createStore(combineReducers({
customers:customerReducer,
departments:departmentReducer,
employees:employeeReducer,
tickets:ticketReducer,
user:userReducer
}),applyMiddleware(thunk))
return store
}

export default configureStore