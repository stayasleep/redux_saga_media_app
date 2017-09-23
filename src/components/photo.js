import React, { PropTypes } from 'react';

const Photos =({images, onHandleSelectImg, selectImage}) =>(
    <div className="col-md-6">
        <h2> Images </h2>
        <div className="selected-image">
            <div key={selectImage.id}>
                <h6>{selectImage.title}</h6>
                <img src={selectImage.mediaUrl} alt={selectImage.title} />
            </div>
        </div>
        <div className="image-thumbnail">
            {images.map((image,index) => (
                <div key={index} onClick={onHandleSelectImg.bind(this, image)}>
                    <img src={image.mediaUrl} alt={image.title} />
                </div>
            ))}
        </div>

    </div>

);

Photos.propTypes = {
    images: PropTypes.array.isRequired,
    selectImage: PropTypes.object,
    onHandleSelectImg: PropTypes.func.isRequired,
};

export default Photos;