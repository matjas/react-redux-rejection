import React, { Component } from "react";
import { connect } from "react-redux";

class Score extends Component {
    render() {
        return (
            <div className="row">
                <section id="score">
                    <div className="col-sm-12 text-center">
                        <p>Score</p>
                        <p id="totalScore">{this.props.pointsSummary}</p>
                    </div>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        pointsSummary: state.pointsSummary
    }
}

export default connect(mapStateToProps)(Score);