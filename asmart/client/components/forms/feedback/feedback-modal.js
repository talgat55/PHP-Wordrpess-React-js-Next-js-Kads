import React, {Component} from 'react';
import {Button, Form, FormGroup, Input} from 'reactstrap';

class FormComponent extends Component {
    render() {

        const {handleSubmit, reset} = this.props;

        return (
            <Form onSubmit={handleSubmit} className="form-feedback">

                <FormGroup className="text-center">
                    <h3>
                        Заказать обратный звонок специалиста
                    </h3>
                </FormGroup>
                <FormGroup className="  align-items-center justify-content-between ">
                    <div className="position-relative">

                        <Input type="text" name="name" id="name-input" placeholder="Ваше имя"/>
                    </div>
                    <div className="position-relative">

                        <Input type="text" name="phone" id="phone-input" placeholder="Ваш телефон"/>
                    </div>
                    <div>
                        <Button>Заказать звонок</Button>
                    </div>
                </FormGroup>
            </Form>
        );
    }
}

export default FormComponent;