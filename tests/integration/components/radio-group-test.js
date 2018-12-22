import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

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


});
