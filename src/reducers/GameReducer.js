import { } from '../actions/types';

const INITIAL_STATE = {
    teams: {},
    all_words: ['ae', 'io', 'uu', 'bb'],
    guessed_words: [],
    left_words: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state;
    }
}