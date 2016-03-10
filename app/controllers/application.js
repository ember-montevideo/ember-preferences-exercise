import Ember from 'ember';
import preference from 'ember-preferences/utils/preference';

export default Ember.Controller.extend({
  message: preference('welcomeMessage', { defaultValue: 'Hello world!' })
});
