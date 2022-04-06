import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import '../../ui/pages/home/home';
import '../../ui/pages/a-propos/a-propos';

FlowRouter.route('/', {
    name: 'home',
    action() {
        this.render('home');
    },
});

FlowRouter.route('/a-propos', {
    name: 'aPropos',
    action() {
        this.render('aPropos');
    },
});
