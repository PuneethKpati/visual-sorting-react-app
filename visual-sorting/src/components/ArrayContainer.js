import React, {Component} from 'react';
import ArrayElement from './ArrayElement.js';
class ArrayContainer extends Component {

    constructor(props) {
        super(props);
        this.myInput = React.createRef();
    }

    componentWidth = () => {
        console.log(this.myInput.current.offsetWidth/this.props.array.length);
        return 
    }

    render() {
        return (
        	<div ref={this.myInput} className="array-container" ref={this.myInput}>
                <ul className='array'>
                    {this.props.array.map((value, index)=> (
                        <li className='array-element'><ArrayElement key={value.uniqueId} value={value} width={Math.floor((this.myInput.current.offsetWidth*0.8)/(this.props.array.length))}/></li>
                    ))}
                </ul>
            </div>
        )
    }

}

export default ArrayContainer;

/*<ArrayElement value={value}/>*/
