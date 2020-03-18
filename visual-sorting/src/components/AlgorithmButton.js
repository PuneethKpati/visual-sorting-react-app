import React, {Component} from 'react';
import './AlgorithmButton.css';

class AlgorithmButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            hovering: false,
            algoName: null,
        }
    }

    setAlgoName = (newAlgoName) => {
        this.algoName = newAlgoName;
    }

	handleClick = (event) => {
		this.props.changeAlgorithm(event.target.value);
        this.setState({
            selected: true,
            algoName: event.target.value
        })
	}

    getClass = () => {
        if (this.props.state.algorithm === null) {
            return 'primary';
        }

        if (this.props.state.algorithm === this.state.algoName){
            return "selected";
        } else {
            return "primary";
        }
    }

    render() {
        return (
            <div>
               <button className = {'btn '+ this.getClass()} onClick={this.handleClick} value={this.algoName} type="button">{this.algoName}</button>
            </div>
        )
    }

}

export default AlgorithmButton;

