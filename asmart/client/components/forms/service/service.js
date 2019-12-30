import React, {Component} from 'react';
import {Button, Form, FormGroup, Input} from 'reactstrap';
import InputMask from 'react-input-mask';
import {sendFeedbackRequestLinkToUs} from '../../api/form/form';
import {connect} from "react-redux";
import {
    ACTIVE_SUCCESS_MODAL_STATE,
    DEACTIVE_SUCCESS_MODAL_STATE,
    DEACTIVE_SERVICE_MODAL_STATE
} from "../../../types";
import {Spinner} from "reactstrap";
import ym from 'react-yandex-metrika';
import ReactGA from 'react-ga';
class FormComponent extends Component {
    state = {
        username: '',
        userphone: '',
        errors: [],
        loading: false
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    isFormEmpty = ({username, userphone}) => {
        return !username.length
            || !userphone.length;
    };
    isFormValid = () => {
        let errors = [];
        let error;

        if (this.isFormEmpty(this.state)) {
            error = {message: 'Заполните все поля'};
            this.setState({
                errors: errors.concat(error)
            });
            return false;

        } else {
            return true;
        }

    };
    displayErrors = errors => errors.map((error, i) => <p key={i}>{error}</p>);
    handleSubmit = e => {
        e.preventDefault();
        const $this = this.props;
        if (this.isFormValid()) {
            this.setState({errors: [], loading: true});

            const response = sendFeedbackRequestLinkToUs('167', {
                username: this.state.username,
                userphone: this.state.userphone,
                serviceName: this.props.activeSlide
            });

            console.log(response);
            response.then((resolve) => {
                if (resolve.status === "mail_sent") {

                    // ym('reachGoal', 'order');
                    //
                    // ReactGA.event({
                    //     category: 'form',
                    //     action: 'order'
                    // });

                    this.setState({
                        errors: [],
                        username: '',
                        userphone: '',
                        loading: false
                    });
                    $this.DisableServiceModal();
                    $this.ChangeStateSuccessModal();
                    setTimeout(function () {
                        $this.DisableStateSuccessModal();
                    }, 2000);
                } else {
                    this.setState({errors: [resolve.message], loading: false});
                }

            });
        }
    };

    render() {

        const {
            username,
            userphone,
            errors,
            loading,
        } = this.state;
        return (
            <Form onSubmit={this.handleSubmit} className="form-feedback  service-modal">

                <FormGroup className="text-center">
                    <h3>
                        Заказать услугу
                    </h3>

                </FormGroup>
                <FormGroup className="d-lg-flex  align-items-center justify-content-between ">
                    <div className="position-relative">
                        <Input
                            type="text"
                            name="username"
                            id="name-input"
                            placeholder="Ваше имя"
                            onChange={this.handleChange}
                            value={username}
                            required

                        />
                    </div>
                    <div className="position-relative">
                        <InputMask
                            mask="+9 (999) 999-99-99"
                            name="userphone"
                            id="phone-input"
                            placeholder="Ваш телефон"
                            onChange={this.handleChange}
                            className="form-control"
                            value={userphone}
                            required
                        />

                    </div>
                    <div>
                        <div className="button-wrap">
                            { loading  && (  <div className="spinner-wrap"> <Spinner animation="grow"  className="spinner-button" /></div> )  }
                            <Button>Заказать звонок</Button>
                        </div>



                    </div>
                </FormGroup>
                <FormGroup>
                    {errors.length > 0 && (
                        < div className="alert alert-primary" role="alert">
                            {this.displayErrors(errors)}
                        </div>
                    )}
                </FormGroup>
            </Form>
        );
    }
}

const mapStateToProps = state => {
    return {
        modal: state.modal,
        activeSlide: state.activeService,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        ChangeStateSuccessModal: () => {
            dispatch({type: ACTIVE_SUCCESS_MODAL_STATE, payload: true})
        },
        DisableStateSuccessModal: () => {
            dispatch({type: DEACTIVE_SUCCESS_MODAL_STATE, payload: false})
        },
        DisableServiceModal: () => {
            dispatch({type: DEACTIVE_SERVICE_MODAL_STATE, payload: false})
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormComponent);
