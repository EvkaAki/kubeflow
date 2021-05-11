import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-ripple/paper-ripple.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-icon-button/paper-icon-button.js';

import {html, PolymerElement} from '@polymer/polymer';

import template from './datasets-view.pug';
import './card-styles.js';
import css from './datasets-view.css';

import utilitiesMixin from './utilities-mixin.js';


export class DashboardView extends utilitiesMixin(PolymerElement) {
    static get template() {
        return html([`
            <style include="card-styles">
                ${css.toString()}
            </style>
            ${template()}
        `]);
    }
}

customElements.define('dashboard-view', DashboardView);
