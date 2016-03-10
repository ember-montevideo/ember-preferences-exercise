import Ember from 'ember';
import PreferencesMixin from 'ember-preferences/mixins/preferences';

export function initialize() {
  Ember.Route.reopen(PreferencesMixin);
  Ember.Controller.reopen(PreferencesMixin);
  Ember.Component.reopen(PreferencesMixin);
}

export default {
  name: 'preferences',
  initialize
};
