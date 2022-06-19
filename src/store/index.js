import {createStore,compose,applyMiddleware,combineReducers} from 'redux';
import ThunkMiddleware from 'redux-thunk';
import {dashboradCourseReducer} from './reducer/dashboradCourseReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }
const rootReducer= combineReducers({
    dashboradCourse:dashboradCourseReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleware = [ThunkMiddleware];

export const store = createStore(persistedReducer,compose(applyMiddleware(...middleware)
,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
));




export const persistor = persistStore(store)
  
