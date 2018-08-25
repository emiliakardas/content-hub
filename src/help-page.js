import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import './shared-styles.js'

class HelpPage extends PolymerElement {
    /* Define a template for the new element */
    static get template() {
        return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Help</h1>
        <p>Help!</p>
      </div>
    `
    }
}
/* Register the new element with the browser */
window.customElements.define('help-page', HelpPage)
