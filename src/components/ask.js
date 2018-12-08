import React from 'react';

export default (props) => {
    return (
        <li className="list-group-item">
            <button className="badge delete-btn">delete</button>
            <p id="question">
                <strong>Question: </strong>
            </p>
            <p id="person">
                <strong>Person: </strong>
            </p>
            <p id="points">
                <span>Ask score</span>:
                <span></span>
                <span>points</span>
            </p>
            <p id="submission-date">
                <i>Submitted on:</i>
            </p>
            <div className="row">
                <div className="col-sm-6 text-center">
                    <button type="button" className="btn btn-default">Accepted</button>
                </div>
                <div className="col-sm-6 text-center">
                    <button type="button" class="btn btn-primary">Rejected</button>
                </div>
            </div>

        </li>
    )
}