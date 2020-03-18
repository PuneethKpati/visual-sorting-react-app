import React, {Component} from 'react';
import RandomButton from './randomButton.js';
import SizePickerSlide from './SizePickerSlide.js';
import AlgorithmButton from './AlgorithmButton.js';
import GenerateArrayButton from './GenerateArrayButton.js';

class NavigationBar extends Component {

	
    render() {
      return (
        <header>
        	<div class="container">
                <img src='../../VISORT.png' alt="logo" class="logo" />
                <nav>
                    <ul>
                        <li><AlgorithmButton changeAlgorithm={this.props.changeAlgorithm}/></li>
                        <li><RandomButton randomizeArraySize={this.props.randomizeArraySize} /></li>
                        <li><SizePickerSlide changeMaxArraySize={this.props.changeMaxArraySize}/></li>
                        <li><h2>Array size: {this.props.state.arraySize}</h2></li>
                        <li><GenerateArrayButton arraySize={this.props.state.arraySize} setArray={this.setArray} /></li>
                    </ul>
                </nav>

            </div>
        </header>
      )
    }

}

export default NavigationBar;

