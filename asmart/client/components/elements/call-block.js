import React from 'react';
import './call-block.sass';
import {connect} from "react-redux";
import {ChangeStateModal} from "../../actions/app";

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

const mapDispatchToProps = {
    ChangeStateModal
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CallBlock);

