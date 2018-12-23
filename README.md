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
  groupOptions=model
  groupValue="radiogroup-1"
  labelText="Radio Group Inlinelabel"
  checkedValue="value-2"
  changed=(action "changedEvent")
}}
```

Block:

```hbs
{{!-- Block will be rendered as the radio-group label --}}
{{#radio-group
  groupOptions=model
  groupValue="radiogroup-2"
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

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
