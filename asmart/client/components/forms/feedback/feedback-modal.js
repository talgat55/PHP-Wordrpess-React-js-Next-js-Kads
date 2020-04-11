import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Spinner} from 'reactstrap';
import InputMask from 'react-input-mask';
import {sendFeedbackRequestLinkToUs} from "../../api/form/form";
import {connect} from "react-redux";
import ym from 'react-yandex-metrika';
import ReactGA from 'react-ga';
import {ChangeStateSuccessModal, DisableStateModal, DisableStateSuccessModal} from "../../../actions/app";
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
        const $this =this.props;
        if (this.isFormValid()) {
            this.setState({errors: [], loading: true});

            const response =  sendFeedbackRequestLinkToUs('166', {
                username: this.state.username,
                userphone: this.state.userphone,
            });
            response.then((resolve) =>{
                if(resolve.status === "mail_sent"){

                    ym('reachGoal', 'callback');
                    ReactGA.event({
                        category: 'form',
                        action: 'callback'
                    });

                    this.setState({
                        errors: [],
                        username: '',
                        userphone: '',
                        loading: false
                    });

                    $this.DisableStateModal();
                    $this.ChangeStateSuccessModal();
                    setTimeout(function () {
                        $this.DisableStateSuccessModal();
                    }, 2000);

                }else{
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
                        Заказать обратный звонок специалиста
                    </h3>
                </FormGroup>
                <FormGroup className="  align-items-center justify-content-between ">
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
                            value={userphone}
                            className="form-control"
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
    return { };
};

const mapDispatchToProps = {
    ChangeStateSuccessModal,
    DisableStateSuccessModal,
    DisableStateModal
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormComponent);
