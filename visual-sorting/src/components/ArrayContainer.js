import React, {Component} from 'react';
import ArrayElement from './ArrayElement.js';
class ArrayContainer extends Component {

    constructor(props) {
        super(props);
        this.myInput = React.createRef();
    }

    componentWidth = () => {
        return this.myInput.current.offsetWidth;
    }
    render() {
        return (
        	<div ref={this.myInput} className="array-container" ref={this.myInput}>
                <ul className='array'>
                    {this.props.array.map((value, index)=> (
                        <li className='array-element'><ArrayElement value={value} width={this.componentWidth/this.props.array.length}/></li>
                    ))}
                </ul>
            </div>
        )
    }

}

export default ArrayContainer;

/*<ArrayElement value={value}/>*/
