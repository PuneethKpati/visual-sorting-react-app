import React, {Component} from 'react';

class RandomButton extends Component {

	handleClick = () => {
		var random = Math.random();
		this.props.randomizeArraySize(parseInt(random*100));
	}
    render() {
        return (
        	<div>
                <button className = 'btn' type="button" onClick={this.handleClick}>Randomize</button>
            </div>
        )
    }

}

export default RandomButton;

