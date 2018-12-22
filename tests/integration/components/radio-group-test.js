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

module('Integration | Component | radio-group', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('options', sampleOptions);
    this.set('changedAction', function(value) {
      return value;
    });

    // await render(hbs`{{radio-group
    //   groupOptions=sampleOptions
    //   groupValue="SampleValue"
    //   checkedValue="value-2"
    // }}`);

    // assert.equal(this.element.textContent.trim(), '');

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
});
