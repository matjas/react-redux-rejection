import { combineReducers } from 'redux';
import AsksReducer from './reducer_asks';
import PointsReducer from './reducer_points';

const rootReducer = combineReducers({
    asks: AsksReducer,
    pointsSummary: PointsReducer
});

export default rootReducer;