import React, {Component} from 'react';

class Form extends Component {
    render() {

        const {handleSubmit, reset} = this.props;

        const submit = (values) => console.log(values);

        return (
            <form onSubmit={handleSubmit}>

            </form>
        );
    }
}

export default Form;