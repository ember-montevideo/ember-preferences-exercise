# ember-preferences

1. Create `preferences` service that:
  * writes to local storage
  * reads from local storage
  * notifies when a preference changes
2. Inject the service on all routes, controllers and components
  * create preferences mixin
  * create initializer and inject mixin to Route, Controller and Component
3. Computed property
  * read from preferences
  * read default value
  * write to preferences
  * return value from `set` operation to update de cp
