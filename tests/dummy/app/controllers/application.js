import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    changedEvent(newValue) {
      console.log("Dummy App ChangeEvent", newValue);
    }
  }
});
