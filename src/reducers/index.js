import { combineReducers } from 'redux';
import images from './image_reducer';
import videos from './vid_reducer';

const rootReducer = combineReducers({
    images: images,
    videos: videos,
    //can utilize es6 if key/value names are same, this is for simple clarity atm
});

export default rootReducer;