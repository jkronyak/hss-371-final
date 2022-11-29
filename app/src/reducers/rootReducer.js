import { combineReducers } from "redux";
import dataReducer from './dataReducer';

const rootReducer = combine({
    data: dataReducer
});

export default rootReducer;