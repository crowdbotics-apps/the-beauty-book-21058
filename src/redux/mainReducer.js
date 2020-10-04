import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn48125346Reducer from '../features/SignIn48125346/redux/reducers'
import Dashboard15125339Reducer from '../features/Dashboard15125339/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn48125346: SignIn48125346Reducer,
Dashboard15125339: Dashboard15125339Reducer,

});