# Experiments with SAPUI5 and functional reactive programming paradigms

Start the presentation on github: (https://swennemers.github.io/ui5.frp-experiments/01-Todo-PlainUI5.html)[https://swennemers.github.io/ui5.frp-experiments/01-Todo-PlainUI5.html]

## How to run locally
```
npm install
grunt serve
```

## How to do FLUX
### With pure SAPUI5
- Dispatcher (with Queue) via SAPUI5 Event Bus
- Reducer listen on Event Bus and update JSON Model
- JSON Model as State with Unidirectional Binding on standard controls
- Controls emit "Actions"
See `01-Todo-PlainUI5.html`

### With Redux
Instead of using the event bus, events are dispatched to the redux store, state is mapped to a JSON Model to update the controls.
See `02-Todo-Redux.html`

Instead of using the JSON Model, controls are destroyed and recreated on each state change.
See `03-Todo-Redux-rerender.html`

- currently ui5 controls too heavy weight
- light weight controls?
## Reactive SAPUI5 (Rx.js)
Every event will become a stream (`click` + `click$`).
There is a mixin that will patch the `<event>$` methods for each event

The counter example with draw cycle inspired visualization:
See `04-Counter-Rxjs.html`

Wikipedia Live search:
See `05-Wikipedia-live-search-Rxjs.html`

## Further Reads

- [https://code-cartoons.com](https://code-cartoons.com)
- [https://egghead.io/courses/getting-started-with-redux](https://egghead.io/courses/getting-started-with-redux)
- Why flux?
  - [https://medium.com/swlh/the-case-for-flux-379b7d1982c6#.ghq2qm6nz](https://medium.com/swlh/the-case-for-flux-379b7d1982c6#.ghq2qm6nz)
  - [https://github.com/petehunt/react-howto/issues/12](https://github.com/petehunt/react-howto/issues/12)
- Reactive Programming by André Staltz:
  - [https://egghead.io/courses/introduction-to-reactive-programming](https://egghead.io/courses/introduction-to-reactive-programming)
  - [https://egghead.io/courses/cycle-js-fundamentals](https://egghead.io/courses/cycle-js-fundamentals)
- Other UI5 approaches:
  - [https://blogs.sap.com/2017/01/30/advanced-state-management-in-sapui5-via-mobx/](https://blogs.sap.com/2017/01/30/advanced-state-management-in-sapui5-via-mobx/)
  - [https://blogs.sap.com/2017/02/02/building-a-sapui5-application-with-predictable-state-container/](https://blogs.sap.com/2017/02/02/building-a-sapui5-application-with-predictable-state-container/)

