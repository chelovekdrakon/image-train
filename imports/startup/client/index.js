import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { App } from '/imports/ui/layouts/App';

Meteor.startup(() => render(<App />, document.getElementById('react-root')));
