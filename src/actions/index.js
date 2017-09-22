import axios from 'axios';
import {FLICKR_API_KEY, SHUTTER_CLIENT_ID, SHUTTER_CLIENT_SECRET} from './api_keys';

const shutter_url = 'https://api.shutterstock.com/v2/videos/search';
const flickr_url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&text';

/**
 * @description ShutterStock API request for searching vids
 * @params {String} search
 * @returns Function
 * */
export function shutterStockVids(search) {
    //create 64 bit encoded string for oauth
    const basicAuth = ()=> 'Basic'.concat(window.btoa(`${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}`));
    //set custom header
    const config = {
        headers: {
            Authorization: basicAuth()
        }
    };
    axios.get(`${shutter_url}?query=${search}&page=1&per_page=10`,config).then((response) => {
        console.log('shutter get',response);
    })
}

/**
 * @description Flickr API request for photo search
 * @params {String} search
 * @returns Function
 * */
export function flickrImages(search){
    axios.get(`${flickr_url}=${search}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`).then((response)=>{
        console.log('flick get',response);
    })
}