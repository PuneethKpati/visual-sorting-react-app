import React from 'react';
import AlgorithmButton from './AlgorithmButton.js';

class BubbleSort extends AlgorithmButton {

	constructor(props) {
        super(props);
        this.setAlgoName('Bubble');
        console.log(this.setAlgoName);
    }

}

export default BubbleSort;

