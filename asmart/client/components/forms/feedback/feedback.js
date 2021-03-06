import React, {Component} from 'react';
import {Button, Form, FormGroup, Input} from 'reactstrap';
import InputMask from 'react-input-mask';
import {sendFeedbackRequestLinkToUs} from '../../api/form/form';
import {connect} from "react-redux";
import {ACTIVE_SUCCESS_MODAL_STATE,DEACTIVE_SUCCESS_MODAL_STATE} from '../../../types';
import ym from 'react-yandex-metrika';
import ReactGA from 'react-ga';
import {Spinner} from "reactstrap";
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
        if (this.isFormValid()) {
            this.setState({errors: [], loading: true});

            const response = sendFeedbackRequestLinkToUs('165', {
                username: this.state.username,
                userphone: this.state.userphone,
            });
            // console.log(response);
            response.then((resolve) => {
                if (resolve.status === "mail_sent") {

                    ym('reachGoal', 'callback');
                    ReactGA.event({
                        category: 'form',
                        action: 'callback'
                    });

                    console.log('true');
                    this.setState({
                        errors: [],
                        username: '',
                        userphone: '',
                        loading: false
                    });
                    let $this = this.props;
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
            <Form onSubmit={this.handleSubmit} className="form-feedback">

                <FormGroup className="text-center">
                    <h3>
                        Свяжитесь с нами
                    </h3>
                    <p className="text-describe">
                        Получите квалифицированную консультацию и ответы на свои вопросы!
                    </p>
                </FormGroup>
                <FormGroup className="d-lg-flex  align-items-center justify-content-between ">
                    <div className="position-relative">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"  >
                            <g clipPath="url(#clip0)">
                                <path
                                    d="M7.00006 7.41376C8.73358 7.41376 10.139 5.76882 10.139 3.7397C10.139 0.925867 8.73365 0.0656738 7.00006 0.0656738C5.2664 0.0656738 3.86108 0.925867 3.86108 3.7397C3.86112 5.76882 5.26644 7.41376 7.00006 7.41376Z"
                                    fill="#656565"/>
                                <path
                                    d="M13.9316 12.8215L12.3479 9.25404C12.2755 9.09079 12.1482 8.9554 11.9898 8.87294L9.53209 7.59353C9.47789 7.56537 9.41226 7.57085 9.36354 7.60773C8.66841 8.1335 7.85109 8.4114 7.00004 8.4114C6.14884 8.4114 5.33159 8.1335 4.63646 7.60773C4.5876 7.57085 4.52198 7.56537 4.46778 7.59353L2.01021 8.87294C1.85176 8.9554 1.72464 9.09073 1.65214 9.25404L0.0684865 12.8215C-0.0406968 13.0675 -0.0183195 13.3488 0.128365 13.5744C0.27498 13.8 0.523115 13.9346 0.792155 13.9346H13.2078C13.4769 13.9346 13.7251 13.7999 13.8717 13.5744C14.0183 13.3488 14.0407 13.0674 13.9316 12.8215Z"
                                    fill="#656565"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="14" height="14" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
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
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"  >
                            <path
                                d="M13.9709 10.8474C13.9313 10.7281 13.6793 10.5524 13.2152 10.3206C13.0895 10.2475 12.9104 10.1482 12.6786 10.0222C12.4466 9.89627 12.236 9.7802 12.0472 9.67412C11.858 9.56807 11.6808 9.46533 11.5152 9.36605C11.4887 9.34616 11.4058 9.28825 11.2666 9.19192C11.1273 9.09587 11.0098 9.02458 10.9135 8.97808C10.8174 8.93187 10.7229 8.90861 10.6301 8.90861C10.4975 8.90861 10.332 9.00312 10.1332 9.19192C9.93441 9.38095 9.75206 9.58629 9.58643 9.80855C9.42076 10.0307 9.24506 10.236 9.05965 10.425C8.87396 10.614 8.72138 10.7084 8.60221 10.7084C8.54238 10.7084 8.46778 10.6917 8.37838 10.6588C8.28902 10.6257 8.22104 10.5973 8.17437 10.5744C8.12812 10.551 8.04875 10.5048 7.93599 10.435C7.82301 10.3653 7.76019 10.3272 7.74695 10.3206C6.83886 9.81666 6.06005 9.23994 5.41037 8.59054C4.7609 7.94076 4.18411 7.16201 3.68035 6.25382C3.67373 6.24055 3.63553 6.17755 3.56598 6.06492C3.49633 5.95219 3.4499 5.87275 3.42671 5.82622C3.40352 5.77987 3.37534 5.71189 3.34226 5.62242C3.30917 5.53295 3.29256 5.45843 3.29256 5.3987C3.29256 5.27945 3.38704 5.12692 3.57598 4.94129C3.76487 4.75577 3.97041 4.58004 4.1924 4.41444C4.41455 4.24885 4.61989 4.0665 4.80885 3.86771C4.99775 3.66882 5.0922 3.50319 5.0922 3.37064C5.0922 3.2779 5.069 3.18334 5.02265 3.08726C4.97626 2.99097 4.90501 2.87346 4.80885 2.73419C4.71266 2.59499 4.65468 2.51221 4.63476 2.48557C4.53543 2.31997 4.4328 2.14267 4.32662 1.95374C4.22043 1.76484 4.10453 1.55429 3.97853 1.32231C3.85263 1.09044 3.75327 0.911398 3.68028 0.785467C3.44841 0.321549 3.27278 0.0695476 3.15343 0.0299156C3.10701 0.0100299 3.03736 0 2.94465 0C2.76557 0 2.53196 0.0330847 2.24364 0.0994632C1.95521 0.165737 1.72824 0.23525 1.56251 0.30828C1.23107 0.44741 0.879778 0.851741 0.508532 1.52113C0.170476 2.1441 0.00146484 2.7607 0.00146484 3.37046C0.00146484 3.5493 0.0130619 3.72329 0.0362561 3.89247C0.0594502 4.06148 0.100893 4.25209 0.16062 4.46425C0.220242 4.67634 0.268337 4.83389 0.304695 4.93649C0.341088 5.03915 0.409034 5.22307 0.508497 5.48831C0.607821 5.75347 0.667548 5.9158 0.687433 5.97545C0.91941 6.6251 1.1945 7.20506 1.51264 7.7155C2.03607 8.56393 2.75039 9.44075 3.65517 10.3456C4.55998 11.2504 5.43663 11.9647 6.28513 12.4883C6.7955 12.8064 7.37567 13.0815 8.02521 13.3136C8.0849 13.3334 8.24723 13.393 8.51229 13.4927C8.77745 13.592 8.96144 13.66 9.06411 13.6965C9.16681 13.733 9.3244 13.7811 9.53631 13.8408C9.74868 13.9005 9.93911 13.942 10.1081 13.9653C10.2772 13.9882 10.4513 14 10.6301 14C11.2399 14 11.8565 13.8309 12.4796 13.4929C13.1489 13.1218 13.5531 12.7704 13.6923 12.4387C13.7655 12.2732 13.8349 12.0462 13.9011 11.7577C13.9676 11.4694 14.0006 11.2359 14.0006 11.0568C14.0008 10.9637 13.9908 10.8942 13.9709 10.8474Z"
                                fill="#656565"/>
                        </svg>
                        <InputMask
                            mask="+9 (999) 999-99-99"
                            name="userphone"
                            id="phone-input"
                            className="form-control"
                            placeholder="Ваш телефон"
                            onChange={this.handleChange}
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
        modal: state.modal
    };
};
const mapDispatchToProps = dispatch => {
    return {
        ChangeStateSuccessModal: () => {
            dispatch({type: ACTIVE_SUCCESS_MODAL_STATE, payload: true})
        },
        DisableStateSuccessModal: () => {
            dispatch({type: DEACTIVE_SUCCESS_MODAL_STATE, payload: false})
        }


    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormComponent);
