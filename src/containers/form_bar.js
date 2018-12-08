import React, {Component} from 'react';


class AskQuestion extends Component {


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
                                value=""
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pa">Person Asked</label>
                            <input
                                type="text"
                                className="form-control"
                                id="pa"
                                placeholder="Maciej Jaskuła"
                                value=""
                            />
                        </div>
                        <div className="row" >
                            <div className="col-sm-12events text-center">
                                <button type="button" className="btn btn-default">Submit</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

export default AskQuestion;