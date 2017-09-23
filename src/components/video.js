import React from 'react';

const Videos = ({videos, selectedVid, onHandleSelectVid}) =>{
    return(
        <div className="col-md-6">
            <h2> Videos </h2>
            <div className="select-video">
                <div key={selectedVid.id}>
                        <h6 className="title">{selectedVid.description}</h6>
                        <video controls src={selectedVid.mediaUrl} alt={selectedVid.id}/>
                </div>
            </div>

        </div>
    )
};
export default Videos;