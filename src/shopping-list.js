import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

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
        <div class="circle">1</div>
        <h1>Shopping List</h1>
        <p>Shopping list!</p>
      </div>
    `;
    }
}
/* Register the new element with the browser */
window.customElements.define('shopping-list', ShoppingList);