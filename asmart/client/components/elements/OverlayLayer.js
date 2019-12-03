import React from 'react';
import {connect} from "react-redux";
import './OverlayLayer.sass';
import ctx from 'classnames';

const OverlayLayer = (props) => (
    <div id="overlay-layer"  className={ctx({ 'active': props.modal}, {'active': props.modalService })}/>
);
const mapStateToProps = state =>{
    return {
        modal: state.modal,
        modalService: state.modalService,
    };
};
export default connect(
    mapStateToProps,
)(OverlayLayer);
