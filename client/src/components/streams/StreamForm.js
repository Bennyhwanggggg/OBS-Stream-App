import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error': ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        // event.preventDefault(); this is automatically handled by handleSubmit
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            // handleSubmit is how reduxForm is used
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter title"/>
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

// must return object in reduxForm?
const validate = (formValues) => {
    const error = {};

    if (!formValues.title) { // field name must match the object attribute
        error.title = 'No title entered';
    } 
    if (!formValues.description) {
        error.description = 'No description entered';
    }
    return error;
}

export default reduxForm({
    form: 'streamForm', // not really required
    validate: validate
})(StreamForm);
