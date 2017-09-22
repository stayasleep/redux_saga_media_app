import { put, call } from 'redux-saga/effects';
import {flickrImages, shutterStockVids} from '../actions/index';
import {SHUTTER_VIDEOS_SUCCESS, SELECTED_VIDEO, FLICKR_IMAGES_SUCCESS, SELECTED_IMAGE, SEARCH_MEDIA_ERROR} from '../actions/types';

//we could pass the store's dispatch to the generator, and invoke it in response [like previous redux/thunk examples]
//but this has the same drawbacks as invoking functions from directly inside the Generator
//We need something more declarative, so we construct an Object to instruct the middleware that we need to dispatch some action
//and the middleware performs the real dispatch

export function* searchMediaSaga({payload}){
    try{
        const videos = yield call(shutterStockVids, payload);//call tells us to run specified function with optional payload
        const images = yield call(flickrImages, payload);
        yield [
            put({type: SHUTTER_VIDEOS_SUCCESS, videos}),
            put({type: SELECTED_VIDEO, video: videos[0]}),
            put({type: FLICKR_IMAGES_SUCCESS, images}),
            put({type: SELECTED_IMAGE, image: images[0]})
        ];
    } catch(error){
        yield put({type: SEARCH_MEDIA_ERROR, error});
    }
}