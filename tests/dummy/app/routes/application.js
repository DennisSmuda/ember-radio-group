import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
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
    ]
  },
});
