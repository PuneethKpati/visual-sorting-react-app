import React, {Component} from 'react';
import RandomButton from './components/randomButton.js';
import SizePickerSlide from './components/SizePickerSlide.js';
import QuickSort from './components/QuickSort.js';
import BubbleSort from './components/BubbleSort.js';
import MergeSort from './components/MergeSort.js';
import InsertionSort from './components/InsertionSort.js';
import SelectionSort from './components/SelectionSort.js';
import GenerateArrayButton from './components/GenerateArrayButton.js';
import ShowMoreArrayOptions from './components/showMoreArrayOptions.js';


import './App.css';

class App extends Component {

	state = {
		arraySize: 1,
		minArraySize: 1,
		maxArraySize: 100,
		algorithm: null,
		array: [],
		showArrayOptions: false

	}

	randomizeArraySize = (newSize) => {
		this.setState({
			arraySize: newSize
		});
		console.log(this.state);
	}

	showArrayOptions = (bool) => {
		this.setState({
			showArrayOptions: bool
		});
		console.log(this.state);
	}

	changeMaxArraySize = (newSize) => {
		this.setState({
			arraySize: newSize
		});
		console.log(this.state);
	}

	changeAlgorithm = (newAlgo) => {
		this.setState({
			algorithm: newAlgo
		});
		console.log(this.state);
	}

	setArray = (newArray) => {
		this.setState({
			array: newArray
		});
		console.log(this.state);
	}

    render() {
        return (
        	<body> 

        	<header className="header">
	        	<div className="container">

	                <img src='./VISORT_small_v2.png' alt="logo" className="logo" />

	                <nav className='navigation-bar'>
	                    <ul className='sorting-config'>
		                    <li className='sorting-config-element'><GenerateArrayButton arraySize={this.state.arraySize} setArray={this.setArray} changeMaxArraySize={this.changeMaxArraySize} randomizeArraySize={this.randomizeArraySize} showArrayOptions={this.showArrayOptions}/></li>
		                    <li className='sorting-config-element'><ShowMoreArrayOptions showArrayOptions={this.showArrayOptions}/></li>
		                    <li className='sorting-config-element'>
		                    	<div className='algo-buttons'>
		                    	<ul>
				                    <li className='algo-button'><QuickSort changeAlgorithm={this.changeAlgorithm} changeArray={this.setArray} state={this.state}/></li>
									<li className='algo-button'><MergeSort changeAlgorithm={this.changeAlgorithm} changeArray={this.setArray} state={this.state}/></li>
				                    <li className='algo-button'><BubbleSort changeAlgorithm={this.changeAlgorithm} changeArray={this.setArray} state={this.state}/></li>
				                    <li className='algo-button'><InsertionSort changeAlgorithm={this.changeAlgorithm} changeArray={this.setArray} state={this.state}/></li>
				                    <li className='algo-button'><SelectionSort changeAlgorithm={this.changeAlgorithm} changeArray={this.setArray} state={this.state}/></li>
			                    </ul>
		                    	</div>
		                    </li>
	                    </ul>
	                </nav>

	            </div>
	        </header>
	        {this.state.showArrayOptions && (
		        <div className='options'>
	                <ul className='array-options'>
	                    <li className='array-option'><SizePickerSlide changeMaxArraySize={this.changeMaxArraySize}/></li>
	                    <li className='array-option'><RandomButton randomizeArraySize={this.randomizeArraySize} /></li>
	                </ul>
	            </div>
            )}

	        <div>
		        <h2>Array Size: {this.state.arraySize}</h2>
	        </div>

	        <div className='array-container'>
		        <ul className='array'>
		            {this.state.array.map((value, index)=> (
		                <li className='array-element'>{value}</li>
		            ))}
		        </ul>
            </div>

            <ArrayContainer array={this.state.array}/>
            </body>
         );
    }

}

export default App;
