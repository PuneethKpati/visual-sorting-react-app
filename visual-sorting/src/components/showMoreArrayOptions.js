import React, {Component} from 'react';
import './showMoreArrayOptions.css';

class ShowMoreArrayOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: false,
        }
    }

    toggle = () => {
        this.setState({
            on: !this.state.on,
        });
        this.props.showArrayOptions(!this.state.on);
    }

	handleClick = () => {
        this.toggle();
	}

    render() {
        return (
        	<div>
            <button className='btn' type="button" onClick={this.handleClick}>></button>
            </div>
        )
    }

}

export default ShowMoreArrayOptions;

