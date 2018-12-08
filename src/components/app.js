import React, { Component } from 'react';
import Score from './score';

import FormBar from '../containers/form_bar';

export default class App extends Component {
    render() {
        return (
            <div>
                <Score />
                <FormBar />
            </div>
        );
    }
}
