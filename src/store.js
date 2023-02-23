import {legacy_createStore as createStore} from 'redux'
import rootReducer from './redux/Reducers'

export default createStore(rootReducer)