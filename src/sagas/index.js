import { fork } from 'redux-saga/effects';
import watchSearchMedia from './watcher';

//register the watcher saga and export as a single geenrator
export default function* startForman(){
    yield fork(watchSearchMedia);
}