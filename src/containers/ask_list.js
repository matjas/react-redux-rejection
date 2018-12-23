import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AskDetail from './ask_detail';
import { updatePoints } from '../actions/index';

class AskList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
           pointsSummary: 0  
        };
    
        this.setPoints = this.setPoints.bind(this);
    }
    
    setPoints(points) {
        this.setState({
            pointsSummary: this.state.pointsSummary + points
        }, () => {
            this.props.updatePoints(this.state.pointsSummary);
        })
    }

    renderList() {
        return this.props.asks.map((ask) => {
            return (
                <AskDetail key={ask.timestamp} onSetPoints = {this.setPoints}
                           item={ask} />
            )
        })
    }
    
    render() {
        return (
            <div className="row">
                <section id="answer-list">
                    <ul className="list-group">
                        {this.renderList()}
                    </ul>
                </section>
            </div>
        )
    }
}

function mapStateToProps({asks, pointsSummary}) {
    return {asks, pointsSummary}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updatePoints}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AskList);