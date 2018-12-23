import _ from 'lodash';
import { ADD_QUESTION, REMOVE_QUESTION } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case ADD_QUESTION:
            return [action.payload, ...state];
        case REMOVE_QUESTION:
            return _.reject(state, (item) => item === action.payload);
    }
    return state;
}