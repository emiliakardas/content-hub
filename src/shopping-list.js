import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '@polymer/paper-checkbox/paper-checkbox.js'
import './shared-styles.js'

class ShoppingList extends PolymerElement {
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
        <h1>Shopping List</h1>
        <p>Shopping list!</p>
        <paper-checkbox>Ready to deploy!</paper-checkbox>
      </div>
    `
    }
}
/* Register the new element with the browser */
window.customElements.define('shopping-list', ShoppingList)
