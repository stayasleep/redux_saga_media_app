import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {flickrImages, shutterStockVids, shutterStockVideos} from '../actions/index';
// import {flickrImages, shutterStockVideos} from '../actions/api';
import { selectImageAction, selectVideoAction, searchMediaAction} from '../actions/index';
import Photos from '../components/photo';
import Videos from '../components/video';

class Media extends Component{
    constructor(props){
        super(props);
        this.state={search:""};
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelectImg = this.handleSelectImg.bind(this);
        this.handleSelectVid = this.handleSelectVid.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    componentDidMount(){
        // this.props.flickrImages('rain');
        // this.props.shutterStockVids('rain');
        // flickrImages('rain').then(images => console.log('img',images));
        // shutterStockVideos('rain').then(videos => console.log('vid',videos));
        this.props.dispatch(searchMediaAction('rain'));
    }
    handleSelectImg(selected){
        this.props.dispatch(selectImageAction(selected))

    }
    handleSelectVid(selected){
        this.props.dispatch(selectVideoAction(selected));
    }
    handleSearch(event){
        event.preventDefault();
        if(this.state.search !== ""){
            this.props.dispatch(searchMediaAction(this.state.search));
            this.setState({search: ""});
        }

    }
    //update component state to reflect search
    handleChange(event){
        this.setState({search: event.target.value});
    }

    render(){
        console.log('rendering',this.props);
        const { images, selectImage, videos, selectedVid } = this.props;

        return(
            <div className="container-fluid">
                {/*if props arent ready yet*/}
                {images && selectImage ? (
                        <div>
                            <input type="text" value={this.state.search} placeholder="Search..." onChange={this.handleChange}/>
                            <input type="submit" className="btn btn-outline-dark" value="Search" onClick={this.handleSearch}/>
                            <div className="row">
                                <Photos images={images} selectImage={selectImage} onHandleSelectImg={this.handleSelectImg}/>
                                <Videos videos={videos} selectedVid={selectedVid} onHandleSelectVid={this.handleSelectVid}/>
                            </div>
                        </div>
                    ) : (
                        'Loading..'
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = ({ images, videos }) => ({
    images: images[0],
    selectImage: images.selectImage,
    videos: videos[0],
    selectedVid: videos.selectedVid
});

export default connect(mapStateToProps)(Media);
