import React, {Component} from 'react';

class SizePickerSlide extends Component {

	constructor(props) {
		super(props);

		this.state = {
			sliderValue: 50
		}

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleClick(event) {
		this.props.changeMaxArraySize(event.target.value);
	}

	handleChange(event) {
		this.setState({
			sliderValue: event.target.value
		})
	}

    render() {
        return (
        	<div>
        	<h1> 
        		<input type="range" min="1" max="100" onClick={this.handleClick} onChange={this.handleChange} />
        		{this.state.sliderValue}
        	</h1>
        	 
            
            </div>
            
        )
    }

}

export default SizePickerSlide;

