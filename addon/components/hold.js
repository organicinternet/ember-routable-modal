import { htmlSafe } from '@ember/string';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import Config from '../configuration';

export default Component.extend({
    current: service('current-routed-modal'),
    classNames: Config.modalClassNames,
    style: htmlSafe('display: block; padding-left: 0px;'),
    tabindex: '-1',
    role: 'dialog',
    attributeBindings: ['style', 'tabindex', 'role']
});
