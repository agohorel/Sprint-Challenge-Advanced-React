- [ ] Why would you use class component over function components (removing hooks from the question)?
Before hooks were introduced, it was not possible to manage state within functional components, so any case where state was needed, a class component was the only solution.

- [ ] Name three lifecycle methods and their purposes.
constructor: the constructor is the first lifecycle method that gets called. It allows the class to inherit any methods from the parent class via super(), is where you set up your initial state when working with class components, and is also where you can bind functions if not working w/ ES6 arrow functions for methods.

render: the render method is what actually returns your JSX and renders it to screen. 

componentDidMount: runs exactly once when the component mounts. This lifecycle method is useful for firing off API calls or performing other functions that require the component to have already rendered (ex. drawing on an HTML5 <canvas> element, adding eventlisteners).

- [ ] What is the purpose of a custom hook?
Custom hooks are used to abstract stateful logic out of components and into their own reusable functions. 


- [ ] Why is it important to test our apps?
Testing is important for a multitude of reasons, among them making code more maintainable/less "brittle", forcing us to contemplate edge cases we might not otherwise think about, and giving us confidence that our code does what we want it to do.