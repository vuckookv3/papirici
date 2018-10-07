import { SAVE_NAMES } from '../actions/types';

const INITIAL_STATE = {
    player0: 'a',
    player1: 'b',
    player2: 'v',
    player3: 'g'


};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_NAMES:
            return { ...state, ...action.payload }
        default: return state;
    }
}