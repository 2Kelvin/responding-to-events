# responding-to-events

In this read, I learn:

- About `event handlers`. Which are just functions that run when a particular event (like for example a button click) happens
- How to `pass event handlers` from a parent to a child `as a prop`
- to name event handlers in react: `handleEventName`
- how to add multiple events to one component. And how in such cases, we shouls rename event handlers as per the task they'll do starting with the keyword one e.g. onUpload, on onMoviePlay. Basically name regular events using 'handleEventName' and use 'onEventName' on the custom events you create
- About `propagation` and how to stop it using `e.stopPropagation()`
- to prevent default behavior using `e.preventDefault()`
