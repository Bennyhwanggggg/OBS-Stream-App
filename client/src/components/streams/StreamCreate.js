import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        // event.preventDefault(); this is automatically handled by handleSubmit
        this.props.createStream(formValues);
    };

    render() {
        return (
            <div>
                <h3>Create a stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default connect(null, { createStream })(StreamCreate);