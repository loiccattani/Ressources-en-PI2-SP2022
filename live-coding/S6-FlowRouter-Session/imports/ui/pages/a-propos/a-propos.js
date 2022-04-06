import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';
import '../../components/nav/nav';
import './a-propos.html';

Template.aPropos.onCreated(function () {

});

Template.aPropos.helpers({
    counter() {
        return Session.get('counter');
    },
});