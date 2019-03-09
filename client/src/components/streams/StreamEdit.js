import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSumbit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
            if (!this.props.stream) {
                return <div>Loading..</div>;
            }
            return (
                <div>
                    <h3>Edit stream</h3>
                    <StreamForm 
                        initialValues={_.pick(this.props.stream, 'title', 'description')} // match properties name in render method of StreamForm
                        onSubmit={this.onSumbit}/>
                </div>
            );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    {fetchStream,
    editStream}
)(StreamEdit);