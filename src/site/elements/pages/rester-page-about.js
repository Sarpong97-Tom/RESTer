import { PolymerElement } from '../../../../node_modules/@polymer/polymer/polymer-element.js';
import { html } from '../../../../node_modules/@polymer/polymer/lib/utils/html-tag.js';
import '../../../../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js';
import '../../../../node_modules/@polymer/app-layout/app-header/app-header.js';
import '../../../../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js';
import '../../../../node_modules/@polymer/paper-icon-button/paper-icon-button.js';
import '../../../../node_modules/@polymer/paper-item/paper-icon-item.js';
import '../../../../node_modules/@polymer/paper-item/paper-item-body.js';
import '../styles/rester-icons.js';
import resterPageStyle from '../styles/rester-page.js';
import { sort } from '../../../shared/util.js';
import RESTerPageMixin from '../layout/rester-page-mixin.js';

/**
 * @appliesMixin RESTerPageMixin
 * @polymer
 * @customElement
 */
class RESTerPageAbout extends RESTerPageMixin(PolymerElement) {
    static get template() {
        return html`
            ${resterPageStyle}

            <style>
                :host {
                    display: block;

                    --paper-item-focused-before: {
                        background: none;
                    };

                    --paper-icon-item: {
                        align-items: flex-start;
                        margin-top: 16px;
                    };

                    --paper-item-icon: {
                        margin-top: 2px;
                    };

                    --paper-item-body-two-line-min-height: 0;
                }
            </style>

            <app-header-layout>
                <app-header slot="header" fixed shadow>
                    <app-toolbar>
                        <paper-icon-button icon="menu" paper-drawer-toggle></paper-icon-button>
                        <div main-title>[[pageTitle]]</div>
                    </app-toolbar>
                </app-header>
                <div role="main">
                    <paper-icon-item>
                        <iron-icon slot="item-icon" icon="home"></iron-icon>
                        <paper-item-body two-line>
                            <div>Homepage</div>
                            <div secondary>https://github.com/frigus02/RESTer</div>
                        </paper-item-body>
                    </paper-icon-item>
                    <paper-icon-item>
                        <iron-icon slot="item-icon" icon="person"></iron-icon>
                        <paper-item-body two-line>
                            <div>Author</div>
                            <div secondary>Jan K&uuml;hle</div>
                        </paper-item-body>
                    </paper-icon-item>
                    <paper-icon-item>
                        <iron-icon slot="item-icon" icon="people"></iron-icon>
                        <paper-item-body two-line>
                            <div>Contributors</div>
                            <div secondary>Adam Zimmerman</div>
                            <div secondary>Ferenc Czina</div>
                        </paper-item-body>
                    </paper-icon-item>
                    <paper-icon-item>
                        <iron-icon slot="item-icon" icon="update"></iron-icon>
                        <paper-item-body two-line>
                            <div>Version</div>
                            <div secondary>[[version]]</div>
                        </paper-item-body>
                    </paper-icon-item>
                    <paper-icon-item>
                        <iron-icon slot="item-icon" icon="widgets"></iron-icon>
                        <paper-item-body two-line>
                            <div>Libraries and frameworks</div>
                            <div secondary>
                                <template is="dom-repeat" items="[[libraries]]">
                                    <div><span>[[item.name]]</span> <span>[[item.version]]</span></div>
                                </template>
                            </div>
                        </paper-item-body>
                    </paper-icon-item>
                </div>
            </app-header-layout>
        `;
    }

    static get is() {
        return 'rester-page-about';
    }

    static get properties() {
        return {
            version: {
                type: String,
                readOnly: true
            },
            libraries: {
                type: Array,
                readOnly: true
            }
        };
    }

    ready() {
        super.ready();
        this._setPageTitle('About');

        fetch('bower.json')
            .then(response => response.json())
            .then(bower => {
                const bowerComponents = Object.keys(bower.dependencies).map(
                    name => {
                        let version = bower.dependencies[name];

                        if (version.includes('#')) {
                            [name, version] = version.split('#');
                        }

                        return {
                            name,
                            version
                        };
                    }
                );

                this._setLibraries(
                    sort(bowerComponents, x => x.name.toLowerCase())
                );
            });

        const manifest = chrome.runtime.getManifest();
        this._setVersion(manifest.version);
    }
}

customElements.define(RESTerPageAbout.is, RESTerPageAbout);
