import React from 'react';
import {connect} from "react-redux";
import './OverlayLayer.sass';

const OverlayLayer = (props) => (
    <div id="overlay-layer"  className={`${props.modal === true ? 'active' : ''}`}/>
);
const mapStateToProps = state =>{
    return {
        modal: state.modal
    };
};
export default connect(
    mapStateToProps,
)(OverlayLayer);
