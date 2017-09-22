import initialState from './initial';
import {SHUTTER_VIDEOS_SUCCESS, SELECTED_VIDEO} from '../actions/types';

//import default state from file initial.js
export default function(state = initialState.videos, action){
    switch(action.type){
        case SHUTTER_VIDEOS_SUCCESS:
            return [...state, action.videos];
        case SELECTED_VIDEO:
            return {...state, selectedVid: action.video};
        default:
            return state;
    }
}