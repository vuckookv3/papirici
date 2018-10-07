import { combineReducers } from 'redux';
import PrepareReducer from './PrepareReducer';
import SettingsReducer from './SettingsReducer';
import GameReducer from './GameReducer';

export default combineReducers({
    names: PrepareReducer,
    settings: SettingsReducer,
    game: GameReducer
})