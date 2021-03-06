
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdAddToQueue extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m26.6 16.6v3.4h-5v5h-3.2v-5h-5v-3.4h5v-5h3.2v5h5z m8.4 11.8v-20h-30v20h30z m0-23.4q1.3 0 2.3 1t1.1 2.4l-0.1 20q0 1.3-1 2.3t-2.3 0.9h-8.4v3.4h-13.2v-3.4h-8.4q-1.4 0-2.4-0.9t-1-2.3v-20q0-1.4 1-2.4t2.4-1h30z"/></g>
            </IconBase>
        );
    }
}
