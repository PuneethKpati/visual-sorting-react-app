import React from 'react';
import AlgorithmButton from './AlgorithmButton.js';

class SelectionSort extends AlgorithmButton {

	constructor(props) {
        super(props);
        this.setAlgoName('Selection');
        console.log(this.setAlgoName);
    }

}

export default SelectionSort;

