import React, {Component} from 'react';

class ArrayElement extends Component {

    constructor(props) {
        super(props);
        this.myInput = React.createRef();
    }

    componentWidth = () => {
        console.log(this.props.width);
    }

    height = () => {
        return ('' + this.props.value + 'px');
    }
    render() {
        return (
            <div>
            	<div style={{width:"9px", height:this.height(), backgroundColor:"white"}}>
                </div>
            </div>
        )
    }

}

export default ArrayElement;
