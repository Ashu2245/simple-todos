import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  tasks: [
    { text: 'This is task 3213' },
    {text:'this is task to check '},
    { text: 'This is task 2' },
    { text: 'This is task 3' },
  ],
});
