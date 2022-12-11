import { createStore , combineReducers} from 'redux'
import { postReducer } from '../reducer/post'

const rootReducer = combineReducers({
    post: postReducer
})

export default createStore(rootReducer)