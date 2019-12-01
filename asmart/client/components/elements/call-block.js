import React from 'react';
import './call-block.sass';
import {connect} from "react-redux";
import {ACTIVE_MODAL_STATE } from '../../types';

class CallBlock  extends React.Component {

    ChangeState  = e => {
      e.preventDefault();
      this.props.ChangeStateModal();
    };


    render () {
        return(
            <div className="call-block">
                <a className="feedback-link" href="#" onClick={this.ChangeState}>
                    Заказать звонок
                </a>
            </div>
        );
    };
}
const mapStateToProps = state =>{

    return {
        modal: state.modal
    };
};
const mapDispatchToProps = dispatch => {
    return {
        ChangeStateModal: () => {
            dispatch({type: ACTIVE_MODAL_STATE, payload:true })
        }

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CallBlock);

