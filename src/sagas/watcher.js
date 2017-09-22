import {takeLatest} from 'redux-saga/effects'; //takes action type and runs function passed to it in non-blocking manner
import { searchMediaSaga } from './mediaSaga';
import {SEARCH_MEDIA_REQUEST} from '../actions/types';

//watches for the imported action type
export default function* watchSearchMedia(){
    yield takeLatest(SEARCH_MEDIA_REQUEST, searchMediaSaga);
}