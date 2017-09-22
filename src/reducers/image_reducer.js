import initialState from './initial';
import{FLICKR_IMAGES_SUCCESS, SELECTED_IMAGE} from '../actions/types';


//instead of defining default state here, i am importing it from another file

export default function(state = initialState.images, action){
    switch (action.type){
        case FLICKR_IMAGES_SUCCESS:
            return [...state, action.images];
        case SELECTED_IMAGE:
            return {...state, selectImage: action.image};
        default:
            return state;
    }
}