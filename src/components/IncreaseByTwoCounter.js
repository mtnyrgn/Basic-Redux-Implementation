import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {increaseByTwoCounters} from '../redux/actions/counterActions'
import { connect } from 'react-redux'


class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                <button onClick = {e=> { this.props.dispatch(increaseByTwoCounters())}}>IncreaseByTwoCounter</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(increaseByTwoCounters,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);


