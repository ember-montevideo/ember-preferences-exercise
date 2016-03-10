# ember-preferences

## Steps

1. [Create `preferences` service that:][1]
  * writes to local storage
  * reads from local storage
  * notifies when a preference changes

2. [Inject the service on all routes, controllers and components][2]
  * create preferences mixin
  * create initializer and inject mixin to Route, Controller and Component

3. [Computed property][3]
  * read from preferences
  * read default value
  * write to preferences
  * return value from `set` operation to update de cp

4. [Demo][4]
  * add prop in the application controller and play with it

## Exercises

5. LocalStorage changed event
6. Support more types of objects (with JSON.serialize/parse)
7. Create `get-preference` helper

[1]: https://github.com/ember-montevideo/ember-preferences-exercise/commit/f93eba3f219549641dbf0de3a1fe2e5a9095e55c
[2]: https://github.com/ember-montevideo/ember-preferences-exercise/commit/38bea7c7bb9b28418e0663762b017190ee11af85
[3]: https://github.com/ember-montevideo/ember-preferences-exercise/commit/4ea04fc09762585ec8ebf0411167c4d3d4debb42
[4]: https://github.com/ember-montevideo/ember-preferences-exercise/commit/159fc0ff847a00128be3bf58e94e03929c0fddce
