import {FLICKR_API_KEY, SHUTTER_CLIENT_ID, SHUTTER_CLIENT_SECRET} from './api_keys';
import axios from 'axios';

// Basic Authentication for accessing Shutterstock API
const basicAuth = () => 'Basic '.concat(window.btoa(`${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}`));
const authParameters = {
    headers: {
        Authorization: basicAuth()
    }
};

/**
 * Description [Access Shutterstock search endpoint for short videos]
 * @params { String } searchQuery
 * @return { Array }
 */
export const shutterStockVids = (searchQuery) => {
    const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/videos/search?
  query=${searchQuery}&page=1&per_page=10`;

    return fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json.data.map(({ id, assets, description }) => ({
                id,
                mediaUrl: assets.preview_mp4.url,
                description
            }));
        });
};

/**
 * Description [Access Flickr search endpoint for photos]
 * @params { String } searchQuery
 * @return { Array }
 */
export const flickrImages = (searchQuery) => {
    const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`;

    return fetch(FLICKR_API_ENDPOINT)
        .then(response => {
            return response.json()
        })
        .then(json => {
            return json.photos.photo.map(({ farm, server, id, secret, title }) => ({
                id,
                title,
                mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
            }));
        });
};
// const shutter_url = 'https://api.shutterstock.com/v2/videos/search';
// const flickr_url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&text';
//
// export function shutterStockVids(search) {
//     //set custom header
//     const config = {
//         headers: {
//             Authorization: basicAuth()
//         }
//     };
//     axios.get(`${shutter_url}?query=${search}&page=1&per_page=10`,config).then((response) => {
//         return response.data.data.map((shutterStock,index) =>{
//             return {
//                 id: shutterStock.id,
//                 description: shutterStock.description,
//                 mediaUrl: shutterStock.assets.preview_mp4,
//
//             }
//         })
//     })
// }
// export function flickrImages(search){
//     axios.get(`${flickr_url}=${search}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`).then((response)=>{
//         return response.data.photos.photo.map((flickr,index)=>{
//             return {
//                 id: flickr.id,
//                 title: flickr.title,
//                 mediaUrl: `https://farm${flickr.farm}.staticflickr.com/${flickr.server}/${flickr.id}_${flickr.secret}.jpg`
//             }
//         })
//     })
// }