import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard15125339Reducer from '../features/Dashboard15125339/redux/reducers'
import SignIn42125337Reducer from '../features/SignIn42125337/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard15125339: Dashboard15125339Reducer,
SignIn42125337: SignIn42125337Reducer,

});