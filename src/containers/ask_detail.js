import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { removeQuestion } from '../actions/index';

const acceptPoints = 1;
const rejectPoints = 10;

class AskDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
            points: 0,
            voted: false
        };

        this.onAccept = this.onAccept.bind(this);
        this.onReject = this.onReject.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onAccept() {
        let points = acceptPoints;
        if(this.state.points === acceptPoints) return;
        if(this.state.voted) {
            points = acceptPoints - rejectPoints;
        }
        this.setState({
            points: acceptPoints,
            voted: true
        });
        console.log(points);
        this.props.onSetPoints(points);
    }

    onReject() {
        let points = rejectPoints;
        if(this.state.points === rejectPoints) return;
        if(this.state.voted) {
            points = rejectPoints - acceptPoints;
        }
        this.setState({
            points: rejectPoints,
            voted: true
        });

        this.props.onSetPoints(points);
    }

    onDelete() {
        this.props.onSetPoints(-(this.state.points));
        this.props.removeQuestion(this.props.item);
    }
    render() {
        let fDate = new Date(this.props.item.timestamp);
        let itemClassName = 'list-group-item';
        let status = '';
        if (this.state.points === acceptPoints) {
            itemClassName += ' list-group-item-warning';
            status = "Accepted";
        } else if(this.state.points === rejectPoints) {
            itemClassName += ' list-group-item-info';
            status = "Rejected";
        } else if (this.state.points === 0) {
            status = "";
        }
        return (
            <li className={itemClassName}>
                <button onClick={this.onDelete} className="badge delete-btn">delete</button>
                <p id="question">
                    <strong>Question: </strong>
                    {this.props.item.question}
                </p>
                <p id="person">
                    <strong>Person: </strong>
                    {this.props.item.person}
                </p>
                <p>
                    <strong>Status: </strong>
                    {status}
                </p>
                <p id="points">
                    <span>Ask score</span>:
                    <span>
                        {this.state.points}
                    </span>
                    <span> points</span>
                </p>
                <p id="submission-date">
                    <i>Submitted on: {fDate.toString()}</i>
                </p>
                <div className="row">
                    <div className="col-sm-6 text-center">
                        <button type="button" onClick={this.onAccept} className="btn btn-default">Accepted</button>
                    </div>
                    <div className="col-sm-6 text-center">
                        <button type="button" onClick={this.onReject} className="btn btn-primary">Rejected</button>
                    </div>
                </div>
            </li>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({removeQuestion}, dispatch);
}

export default connect(null, mapDispatchToProps)(AskDetail);
