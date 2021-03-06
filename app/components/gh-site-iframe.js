import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
    config: service(),

    tagName: '',

    didReceiveAttrs() {
        // reset the src attribute each time the guid changes - allows for
        // a click on the navigation item to reset back to the homepage
        if (this.guid !== this._lastGuid) {
            let iframe = document.querySelector('#site-frame');
            if (iframe) {
                iframe.src = `${this.config.get('blogUrl')}/`;
            }
        }
        this._lastGuid = this.guid;
    }
});
