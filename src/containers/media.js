import React, {Component} from 'react';
import {connect} from 'react-redux';
import {flickrImages, shutterStockVids} from '../actions/index';

class Media extends Component{

    componentDidMount(){
        this.props.flickrImages('rain');
        this.props.shutterStockVids('rain');
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default connect(null,{flickrImages, shutterStockVids})(Media);
