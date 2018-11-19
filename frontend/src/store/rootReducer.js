import {combineReducers} from 'redux';
import {dashboardReducer} from '../modules/dashboard/reducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer
});

export default rootReducer;
