import React, { PureComponent } from 'react';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage } from '/imports/ui/layouts/HomePage';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Router>
                <Route name="HomePage" path="/" component={HomePage} />
            </Router>
        );
    }
}

export default App;