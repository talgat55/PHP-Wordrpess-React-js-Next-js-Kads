import React from 'react';
import Form from '../../forms/feedback/feedback';

class FeedbackBlock  extends React.Component {
    handleSubmit = (values) => {
        console.log(values);
    };
   render() {
       return (
           <>
               <Form onSubmit={this.handleSubmit} />
           </>
       )
   }
};
export default FeedbackBlock;