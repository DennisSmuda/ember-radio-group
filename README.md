# Ember-Radio-Group Addon

[![Build Status](https://travis-ci.org/DennisSmuda/ember-radio-group.svg?branch=master)](https://travis-ci.org/DennisSmuda/ember-radio-group)
[![Coverage Status](https://coveralls.io/repos/github/DennisSmuda/ember-radio-group/badge.svg?branch=master)](https://coveralls.io/github/DennisSmuda/ember-radio-group?branch=master)
[![npm version](https://badge.fury.io/js/ember-radio-group.svg)](https://badge.fury.io/js/ember-radio-group)
[![dependencies Status](https://david-dm.org/DennisSmuda/ember-radio-group/status.svg)](https://david-dm.org/DennisSmuda/ember-radio-group)
[![EmberObserver](http://emberobserver.com/badges/ember-radio-group.svg?branch=master)](http://emberobserver.com/addons/ember-radio-group)




An Ember Radiogroup addon widget based on the WAI-ARIA authoring practices.

Installation
------------------------------------------------------------------------------

```
ember install ember-radio-group
```


## Usage

Inline:

```hbs
{{radio-group
  options=model
  groupId="radiogroup-1"
  labelText="Radio Group Inlinelabel"
  checkedValue="value-2"
  changed=(action "changedEvent")
}}
```

Block:

```hbs
{{!-- Block will be rendered as the radio-group label --}}
{{#radio-group
  options=model
  groupId="radiogroup-2"
  checkedValue="value-2"
  changed=(action "changedEvent")
}}
  Radio Group Blocklabel
{{/radio-group}}
```

For the group options, the radio-group component expects an array of objects containing a label/value pair. You can define these in plain Javascript inside your Route or Controller as:

```js
[
  {
    label: "label 1",
    value: "value-1"
  },
  {
    label: "label 2",
    value: "value-2"
  }
]
```

Usually, you want your values to correspond to your model/changeset options so you can react to changes via the `changed`-event.

### Resulting Markup

The simplified version of the resultig markup is (additional HTML-attributes ommited for clarity):

```html
<div class="radiogroup" ...>
  <div class="radiogroup__label" ...>...</div>

  <div class="radiogroup__buttons">
    <div class="radiogroup__radio" ...>...</div>
    <div class="radiogroup__radio" ...>...</div>
  </div>
</div>
```

now you can style your radio buttons as before/after elements of each `radiogroup_radio` and don't have to worry about overwriting some browser-native input element.

## Properties

| name       | type      | description            |
|------------|-----------|------------------------|
| options    | Object    | Option object that make up your different buttons |
| checkedValue | string    | Value of the checked option |
| groupValue | string    | Your ID for the radio group |

## Properties

| changed | Fires whenever the option was changed |

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
