import { Template } from 'meteor/templating';
import './info.html'

const links = [
    { url: 'https://www.meteor.com/try', texte: 'Do the Tutorial' },
    { url: 'http://guide.meteor.com', texte: 'Follow the Guide' },
    { url: 'https://docs.meteor.com', texte: 'Read the Docs' },
    { url: 'https://forums.meteor.com', texte: 'Discussions' },
];

Template.info.onCreated(function infoOnCreated() {

});

Template.info.helpers({
    links() {
        return links;
    },
});

Template.info.events({

});
