import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { render, click, find, triggerKeyEvent } from "@ember/test-helpers";

const LEFT_KEY = 37;
const UP_KEY = 38;
const RIGHT_KEY = 39;
const DOWN_KEY = 40;

const sampleOptions = [
  {
    label: "label 1",
    value: "value-1"
  },
  {
    label: "label 2",
    value: "value-2"
  },
  {
    label: "label 3",
    value: "value-3"
  },
];

function sampleAction(value) {
  return value;
}

module('Integration | Component | radio-group', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('options', sampleOptions);
    this.set('changedAction', sampleAction);

    // Template block usage:
    await render(hbs`
      {{#radio-group
        groupOptions=options
        groupValue="SampleValue"
        checkedValue="value-2"
        changed=(action changedAction)
      }}
        template block text
      {{/radio-group}}
    `);

    assert.equal(this.element.classList, 'ember-view');
  });

  test('it should have role="radiogroup" attribute', async function(assert) {
    this.set('options', sampleOptions);
    this.set('changedAction', sampleAction);

    await render(hbs`
      {{#radio-group
        groupOptions=options
        groupValue="SampleValue"
        checkedValue="value-2"
        changed=(action changedAction)
      }}
        template block text
      {{/radio-group}}
    `);

    assert.ok(this.element.querySelector('[role="radiogroup"]'));
  });

  test('it should have tabindex="0" attribute', async function(assert) {
    this.set('options', sampleOptions);
    this.set('changedAction', sampleAction);

    await render(hbs`
      {{#radio-group
        groupOptions=options
        groupValue="SampleValue"
        checkedValue="value-2"
        changed=(action changedAction)
      }}
        template block text
      {{/radio-group}}
    `);

    assert.ok(this.element.querySelector('[tabindex="0"]'));
  });

  test('it should toggle to another radio-button on click', async function(assert) {
    this.set('options', sampleOptions);
    this.set('changedAction', sampleAction);

    await render(hbs`
      {{#radio-group
        groupOptions=options
        groupValue="SampleValue"
        checkedValue="value-2"
        changed=(action changedAction)
      }}
        template block text
      {{/radio-group}}
    `);

    assert.ok(this.element.querySelector('[tabindex="-1"]'));
    const inactiveElement = this.element.querySelector('[tabindex="-1"]')
    await click(inactiveElement);
    assert.equal(inactiveElement.getAttribute('aria-checked'), "true");
  });

  test('it shouldn`t react to clicking the radio-group label', async function(assert) {
    this.set('options', sampleOptions);
    this.set('changedAction', sampleAction);

    await render(hbs`
      {{#radio-group
        groupOptions=options
        groupValue="SampleValue"
        checkedValue="value-2"
        changed=(action changedAction)
      }}
        template block text
      {{/radio-group}}
    `);

    const activeElement = this.element.querySelector('[tabindex="-1"]')
    await click('.radiogroup__label');
    assert.equal(activeElement, this.element.querySelector('[tabindex="-1"]'));
  });

  test('It should check the next element when pressing Right or Down', async function(assert) {
    this.set('options', sampleOptions);
    this.set('changedAction', sampleAction);

    await render(hbs`
      {{#radio-group
        groupOptions=options
        groupValue="SampleValue"
        checkedValue="value-2"
        changed=(action changedAction)
      }}
        template block text
      {{/radio-group}}
    `);

    assert.ok(find('[data-value-index="2"]'));

    const firstElement = find('[data-value-index="0"]');
    const lastElement = find('[data-value-index="2"]');
    assert.equal(lastElement.getAttribute('aria-checked'), "false");

    // Go to last Element
    await triggerKeyEvent('[aria-checked="true"]', 'keyup', RIGHT_KEY);
    assert.equal(lastElement.getAttribute('aria-checked'), "true");

    // Wrap to first
    await triggerKeyEvent('[aria-checked="true"]', 'keyup', DOWN_KEY);
    assert.equal(firstElement.getAttribute('aria-checked'), "true");
  });

  test('It should check the previous element when pressing Left or Up', async function(assert) {
    this.set('options', sampleOptions);
    this.set('changedAction', sampleAction);

    await render(hbs`
      {{#radio-group
        groupOptions=options
        groupValue="SampleValue"
        checkedValue="value-2"
        changed=(action changedAction)
      }}
        template block text
      {{/radio-group}}
    `);

    assert.ok(find('[data-value-index="2"]'));

    const firstElement = find('[data-value-index="0"]');
    const lastElement = find('[data-value-index="2"]');
    assert.equal(lastElement.getAttribute('aria-checked'), "false");

    // Go to previous element
    await triggerKeyEvent('[aria-checked="true"]', 'keyup', LEFT_KEY);
    assert.equal(firstElement.getAttribute('aria-checked'), "true");

    // Wrap to end
    await triggerKeyEvent('[aria-checked="true"]', 'keyup', UP_KEY);
    assert.equal(lastElement.getAttribute('aria-checked'), "true");
  });

  test('It should prevent scrolling behaviour on UP/DOWN keydown-events', async function(assert) {
    this.set('options', sampleOptions);
    this.set('changedAction', sampleAction);

    await render(hbs`
      {{#radio-group
        groupOptions=options
        groupValue="SampleValue"
        checkedValue="value-2"
        changed=(action changedAction)
      }}
        template block text
      {{/radio-group}}
    `);

    const activeElement = this.element.querySelector('[tabindex="0"]')

    await triggerKeyEvent('[aria-checked="true"]', 'keydown', DOWN_KEY);
    await triggerKeyEvent('[aria-checked="true"]', 'keydown', UP_KEY);
    assert.equal(activeElement.getAttribute('aria-checked'), "true");
  });

});
