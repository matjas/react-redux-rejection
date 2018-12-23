import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { addQuestion } from '../actions/index';


class AskQuestion extends Component {

    constructor(props){
        super(props);

        this.state = {
            question: '',
            person: '',
            timestamp: 0
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onFormChange = this.onFormChange.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();

        //We need add question, answer item
        this.setState({timestamp: Date.now()}, () => {
            this.props.addQuestion(Object.assign({}, this.state));
            this.setState({
                question: '',
                person: '',
                timestamp: 0
            })
        });
    }

    onFormChange(event) {
        const { name, value} = event.target;

        event.preventDefault();
        
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="row">
                <section id="forms">
                    <form onSubmit={this.onFormSubmit}>
                        <div className="form-group">
                            <label>Question Asked</label>
                            <input
                                type="text"
                                className="form-control"
                                id="qa"
                                placeholder="Who invited wheel?"
                                value={this.state.question}
                                name="question"
                                onChange={this.onFormChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pa">Person Asked</label>
                            <input
                                type="text"
                                className="form-control"
                                id="pa"
                                placeholder="Maciej Jaskuła"
                                value={this.state.person}
                                name="person"
                                onChange={this.onFormChange}
                            />
                        </div>
                        <div className="row" >
                            <div className="col-sm-12events text-center">
                                <button type="submit" className="btn btn-default">Submit</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addQuestion}, dispatch);
}

export default connect(null, mapDispatchToProps)(AskQuestion);