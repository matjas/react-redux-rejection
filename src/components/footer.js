import React from 'react';


export default (props) => {
    return (
        <div className="row">
            <section id="description">
                <div id="game-rules" className="col-xs-12 text-center">
                    <div>The game has <b>one</b>rule:</div>
                    <div><u>You must be rejected by a human being at least once per day.</u></div>
                    <br />
                        <div>Ask for things outside your comfort zone, and you'll find yourself winning a lot more.</div>
                        <br />
                            <div><b>Win = 1 point</b> | <b>Rejection = 10 points.</b>
                            </div>
                            <br />
                                <div>If you have wins and rejections on the same day, your win points are multiplied by 10.</div>
                                <br />
                                    <div>How long can you make your rejection streak last?</div>
                </div>

            </section>
            <footer>
                <div className="row">
                    <div className="col-xs-12 text-center proj-challenge-reference">
                        <hr />
                            Project by <a href="https://github.com/matjas/" target="_blank">matjas</a> | Inspired by <a
                            href="https://github.com/ericelliott" target="_blank">Eric Elliott</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}