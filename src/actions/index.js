export const ADD_QUESTION = 'ADD_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const UPDATE_POINTS = 'UPDATE_POINTS';

export function addQuestion(ask) {
    return {
        type: ADD_QUESTION,
        payload: ask
    }
}

export function removeQuestion(ask) {
    return {
        type: REMOVE_QUESTION,
        payload: ask
    }
}

export function updatePoints(points) {
    return {
        type: UPDATE_POINTS,
        payload: points
    }
}