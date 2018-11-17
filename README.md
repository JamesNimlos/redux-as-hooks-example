# Redux as Hooks

This is not actually using hooks with redux; hooks will just be added to redux once they're stable. Instead this is a simple demo of how you can use hooks **instead** of redux. Redux is great for helping to manage state, however there are some specific issues that make it problematic for large applications:

### Reasons to avoid redux

- Redux is not built to be code-split. There is no built in way to dynamically load redux stores. You can use the development APIs which are meant for hot reloading, but they're not meant for that for a reason. It's assumed in redux that your entire store will be required on load because it's a _global_ storage of values. If you need data that's specific to certain paths or components then redux doesn't have an answer for you. And _instead_ you see many apps put state that is very specific to a single component or route into the global store simply because redux doesn't provide anything. Instead, just use hooks.
- Redux bloats the global state. This can cause unnecessary render cycles because every connected component will receive all updates. There are optimizations built into react-redux to help ensure connected components are only updated if the connected props are updated, but it's an extra level of checking that wouldn't be necessary if you keep state at different levels of the component hierarchy instead.
- React can't optimize Redux state changes. The re-architecture of the internals of React known as Fiber, was to improve the consistency of render cycles in order to maintain a high frame rate. React can optimize internal state updates to align or diverge with the reconciliation in order to maintain the reflow frequency. Redux is left out of this loop because React has no knowledge of the redux state. Of course the global aspect of the state makes this even worse.

### Good things about redux

- Development experience - this was the entire reason it was made. Time-traveling using redux dev-tools is great.
- Simplicity in implementing the flux data pattern. The reason it is so popular is because it is _hard_ to figure out where stores should live in the hierarchy of you application and how to make them communicate with each other.

## Summary

Redux can be used just fine in plenty of applications. However, with React hooks, you can create essentially the same API with none of the disadvantages and almost all of the benefits. The only piece that is missing is interaction between stores with shared actions, however this strategy could be considered an anti-pattern due to the increased complexity and obfuscation of logic location.

## made with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Learn More about Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
