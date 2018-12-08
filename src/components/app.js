import React, { Component } from 'react';
import Score from './score';
import  Footer from './footer';

import FormBar from '../containers/form_bar';
import AskList from '../containers/ask_list';

export default class App extends Component {
    render() {
        return (
            <div>
                <Score />
                <FormBar />
                <AskList />
                <Footer />
            </div>
        );
    }
}
