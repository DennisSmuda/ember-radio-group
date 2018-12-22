import Component from '@ember/component';
import layout from '../templates/components/radio-group';

const KEYCODES = {
  'SPACE': 32,
  'LEFT': 37,
  'UP': 38,
  'RIGHT': 39,
  'DOWN': 40,
};

/**
 * Radio Group Component
 */
export default Component.extend({
  layout,

  groupOptions: null,
  checkedValue: null,
  checkedValueIndex: null,
  activeRadioElement: null,

  init() {
    this._super(...arguments);

    this.groupOptions.forEach((option, index) => {
      if (option.value === this.checkedValue) {
        this.set('checkedValueIndex', index);
      }
    })
  },

  keyDown(e) {
    if (e.keyCode === KEYCODES.UP || e.keyCode === KEYCODES.DOWN) {
      e.preventDefault();
    }
  },

  keyUp(e) {
    if (e.keyCode === KEYCODES.UP || e.keyCode === KEYCODES.LEFT) {

      // Check previous option on Up|Left
      if (this.checkedValueIndex <= 0) {
        // Wrap to start
        this.set('checkedValue', this.groupOptions[this.groupOptions.length - 1].value);
        this.set('checkedValueIndex', this.groupOptions.length - 1);
      } else {
        this.set('checkedValue', this.groupOptions[this.checkedValueIndex - 1].value);
        this.set('checkedValueIndex', this.checkedValueIndex - 1);
      }

    } else if (e.keyCode === KEYCODES.DOWN || e.keyCode === KEYCODES.RIGHT) {
      // Check next option on Down|Right
      if (this.checkedValueIndex >= this.groupOptions.length - 1) {
        // Wrap to start
        this.set('checkedValue', this.groupOptions[0].value);
        this.set('checkedValueIndex', 0);
      } else {
        this.set('checkedValue', this.groupOptions[this.checkedValueIndex + 1].value);
        this.set('checkedValueIndex', this.checkedValueIndex + 1);
      }

    }

    // Focus new Element
    const newElement = document.querySelector('[role="radio"][data-value-index="' + this.checkedValueIndex + '"]');
    newElement.focus();
    this.changed(this.groupOptions[this.checkedValueIndex].value);
    e.preventDefault();
  },

  click(e) {
    const target = e.target;

    if (target.className === "radiogroup__label") return;

    this.set('checkedValue', target.getAttribute('data-value'));
    this.set('checkedValueIndex', target.getAttribute('data-value-index'));

    this.changed(target.getAttribute('data-value'));
  },

});
