import React from 'react';
import AlgorithmButton from './AlgorithmButton.js';

class MergeSort extends AlgorithmButton {

	constructor(props) {
        super(props);
        this.setAlgoName('Merge');
        console.log(this.setAlgoName);
    }

}

export default MergeSort;

