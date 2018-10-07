import { WORD_COUNT, PLAYERS_COUNT } from '../actions/types';

const INITIAL_STATE = {
    word_count: 1,
    players_count: 4
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WORD_COUNT: return { ...state, word_count: action.payload };
        case PLAYERS_COUNT: return { ...state, players_count: action.payload }
        default: return state;
    }

}