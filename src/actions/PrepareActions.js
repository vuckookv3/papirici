import { SAVE_NAMES } from './types';

export const saveNames = (names) => {
    return {
        type: SAVE_NAMES,
        payload: names
    }
}