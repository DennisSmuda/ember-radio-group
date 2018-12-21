import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        title: "Red",
        label: "blub",
        value: "value-1"
      },
      {
        title: "Blue",
        label: "blub",
        value: "value-1"
      },
    ]
  }
});
