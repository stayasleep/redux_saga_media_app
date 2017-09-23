import {SELECTED_IMAGE, SELECTED_VIDEO, SEARCH_MEDIA_REQUEST} from './types';


// Returns an action type, SELECTED_IMAGE and the image selected
export const selectImageAction = (image) => ({
    type: SELECTED_IMAGE,
    image
});

// Returns an action type, SELECTED_VIDEO and the video selected
export const selectVideoAction = (video) => ({
    type: SELECTED_VIDEO,
    video
});

// Returns an action type, SEARCH_MEDIA_REQUEST and the search criteria
export const searchMediaAction = (payload) => ({
    type: SEARCH_MEDIA_REQUEST,
    payload
});