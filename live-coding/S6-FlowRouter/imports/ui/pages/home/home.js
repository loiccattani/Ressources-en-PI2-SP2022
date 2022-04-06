import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../../components/nav/nav';
import './home.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0

  if (Session.get('counter') === undefined) {
      Session.set('counter', 0);
  }
});

Template.hello.helpers({
  counter() {
    return Session.get('counter');
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  },
});
