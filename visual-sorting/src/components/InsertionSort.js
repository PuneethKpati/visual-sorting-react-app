import React from 'react';
import AlgorithmButton from './AlgorithmButton.js';

class InsertionSort extends AlgorithmButton {

	constructor(props) {
        super(props);
        this.setAlgoName('Insertion');
        console.log(this.setAlgoName);
    }

}

export default InsertionSort;

