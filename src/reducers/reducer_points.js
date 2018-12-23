import { UPDATE_POINTS } from '../actions/index';

export default function(state = 0, action) {
    switch (action.type) {
        case UPDATE_POINTS :
            return action.payload;
    }
    return state;
}
