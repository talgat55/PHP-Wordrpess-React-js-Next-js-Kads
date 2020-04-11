import React from 'react';
import Form   from '../../forms/service/service';
import './style.sass';
import {connect} from "react-redux";
import {DisableModal} from "../../../actions/app";
class Modal extends React.Component {
    constructor(props) {
        super(props);
    }
    ChangeState  = e => {
        e.preventDefault();
        this.props.DisableModal();
    };
    render() {

        return (
            <div className={`custom-modal-wrapper ${this.props.modalService === true ?  'active' : ''} `}>
                <div className="custom-modal position-relative">
                    <a href="#"   onClick={this.ChangeState} className="close-modal">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"  >
                            <path
                                d="M6.7824 7.44996L0.143027 14.0893C-0.0414258 14.2738 -0.0414258 14.5726 0.143027 14.7571C0.235137 14.8494 0.356074 14.8954 0.476777 14.8954C0.597715 14.8954 0.718418 14.8494 0.810528 14.7571L7.49983 8.06777L14.1891 14.7571C14.2815 14.8494 14.4022 14.8954 14.5229 14.8954C14.6436 14.8954 14.7645 14.8494 14.8566 14.7571C15.0411 14.5726 15.0411 14.2738 14.8566 14.0893L8.21748 7.44996L14.8611 0.805898C15.0455 0.621445 15.0455 0.322617 14.8611 0.138164C14.6766 -0.0460547 14.3778 -0.0460547 14.1936 0.138164L7.50006 6.83215L0.80584 0.138398C0.621387 -0.0458203 0.322793 -0.0458203 0.13834 0.138398C-0.0461133 0.322852 -0.0461133 0.62168 0.13834 0.806133L6.7824 7.44996Z"
                                fill="#1D1D1B"/>
                        </svg>
                    </a>
                    <div className="content">
                        <Form/>
                    </div>
                </div>
            </div>
        )
    }
};


const mapStateToProps = state =>{
    return {
        modalService: state.modalService
    };
};
const mapDispatchToProps =  {
    DisableModal
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
