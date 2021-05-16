import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-ripple/paper-ripple.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-progress/paper-progress.js';
import './iframe-link.js';

import {html, PolymerElement} from '@polymer/polymer';

import './card-styles.js';
import utilitiesMixin from './utilities-mixin.js';


/**
 * Component to retrieve and display shares or Pipeline Runs
 */
export class SharesCard extends utilitiesMixin(PolymerElement) {
    static get template() {
        return html`

        <paper-card heading="Recent sharing log">
            <header id="message"></header>
            <template is="dom-repeat" items="[[shares]]">
                <iframe-link class="link" href$="#">
                    <paper-icon-item>
                        <paper-ripple>//</paper-ripple>
                        <iron-icon icon="social:share" slot="item-icon"
                            class$="class"
                            title="Pipeline">
                        </iron-icon>
                        <paper-item-body three-line>
                            <div class="header">[[item]]</div>
                            <div style="color: green;" class="bla">
                                <iron-icon icon="social:group-add" 
                                           slot="item-icon"
                                           class$="class"
                                           title="Pipeline">
                                </iron-icon>
                                enedeliakova@gmail.com</div>
                            <aside secondary>Created 23.02.2021</aside>
                        </paper-item-body>
                    </paper-icon-item>
                </iframe-link>
            </template>
            
            <iframe-link class="link" href$="#">
                <paper-icon-item>
                    <paper-ripple>//</paper-ripple>
                    <iron-icon icon="social:share" slot="item-icon"
                               class$="class"
                               title="Pipeline">
                    </iron-icon>
                    <paper-item-body three-line>
                        <div class="header">Other Pipeline</div>
                        <div style="color: red;" class="bla">
                            <iron-icon icon="icons:content-cut"
                                       slot="item-icon"
                                       class$="class"
                                       title="Pipeline">
                            </iron-icon>
                            slavomirnedeliak@gmail.com</div>
                        <aside secondary>Created 22.02.2021</aside>
                    </paper-item-body>
                </paper-icon-item>
            </iframe-link>
            
        </paper-card>
        `;
    }


    static get properties() {
        return {
            shares: {
                type: Array,
                value: () => ['Pipeline Clean experiment', 'Pipeline X'],
            },
        };
    }
}

customElements.define('shares-card', SharesCard);
