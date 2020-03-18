import React, {Component} from 'react';

class GenerateArrayButton extends Component {

	handleClick = () => {
		this.props.setArray(this.generateArray());
        this.props.showArrayOptions(false);
	}

    generateArray() {
        var newArray = [];
        var count = 0;

        while (count < this.props.arraySize) {
            console.log('GenerateArrayButton;');
            newArray.unshift(parseInt(Math.random()*100));
            count+=1;
        }

        console.log(newArray);
        return newArray;
    }

    render() {
        return (
        	<div>
            <button className='btn' type="button" onClick={this.handleClick}>Generate</button>
            </div>
        )
    }

}

export default GenerateArrayButton;

