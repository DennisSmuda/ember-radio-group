import Component from '@ember/component';
import layout from '../templates/components/radio-group';

export default Component.extend({
  layout,

  init() {
    this._super(...arguments);
    console.log("Addon Init", layout)
  },

  keyDown(e) {
    console.log("Keydown event", e);
  },

  click(e) {
    console.log("Click event", e);
  },

  focusIn(e) {
    console.log("Focus In", e);
    // set(this, 'focus', true);
  },

  focusOut(e) {
    console.log("Focus Out", e);
    // set(this, 'focus', false);
  }

});
