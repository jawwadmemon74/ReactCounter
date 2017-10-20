import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state){
    return {counter: state}
}

function mapDispatchToProps(dispatch) {
    return {
        increment: (num) => dispatch({ type: "INCREMENT", payload: num }),
        decrement: (num) => dispatch({ type: "DECREMENT", payload: num })
    }
}

class Counter extends Component {
    constructor() {
        super();
          this.state= { num: 0 }
    }
    render() {
        return (
            <div className="number"> { this.props.counter } 
            <input type="text" onChange={(ew) => this.setState({num: Number(ew.target.value)})} />
            <br />
            <button onClick={() => this.props.increment(this.state.num)}>Increment Me by {this.state.num}</button>
            <button onClick={() => this.props.decrement(this.state.num)}>Decrement Me by {this.state.num}</button></div>

        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter); 