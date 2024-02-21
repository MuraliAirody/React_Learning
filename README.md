# React_Learning

## What is React JS ? why React Js?

ReactJS is an open-source JavaScript library used to create user interfaces in a declarative and efficient way. It is a component-based front-end library responsible only for the view layer of a Model View Controller (MVC) architecture1. ReactJS is used to create modular user interfaces and promotes the development of reusable UI components that display dynamic data. It was developed by Facebook and is maintained by Meta (formerly Facebook) and a community of individual developers and companies.

##### Here are some reasons why developers choose to use ReactJS:

1. Flexibility: ReactJS is remarkably flexible. Once you have learned it, you can use it on a vast variety of platforms to build quality user interfaces.
2. Great Developer Experience: ReactJS provides a great developer experience, making it easier to debug and predict your code.
3. Performance: ReactJS has great performance. It creates a virtual DOM in memory to update the browser’s DOM.
4. Support/Resources: ReactJS has the support of Facebook and a broader community.
5. Easy to Test: ReactJS is easy to test3.
Reusable Components: ReactJS enables developers to create reusable components that can be used across different projects, making the development process more efficient.
<br>
<br>
ReactJS is used by many Fortune 500 companies and has a robust ecosystem5. It’s worth noting that ReactJS is not a framework, but a library developed by Facebook1. It’s used to solve some problems that developers were facing earlier1. Today, you can build whole applications for web browsers and smartphones using ReactJS5.

# NPM and NPX 

##### npm (node package manager) is the dependency/package manager you get out of the box when you install Node.js. It provides a way for developers to install packages both globally and locally.

##### Sometimes you might want to take a look at a specific package and try out some commands. But you cannot do that without installing the dependencies in your local node_modules folder.That’s where npx comes in.

### NPM
First and foremost, it is an online repository for the publishing of open-source Node.js projects.

Second, it is a CLI tool that aids you install those packages and manage their versions and dependencies. There are hundreds of thousands of Node.js libraries and applications on npm and many more are added every day.

npm by itself doesn’t run any packages. If you want to run a package using npm, you must specify that package in your package.json file.

When executables are installed via npm packages, npm creates links to them:

1. local installs have links created at the ./node_modules/.bin/ directory
2. global installs have links created from the global bin/ directory (for example: /usr/local/bin on Linux or at %AppData%/npm on Windows)
<br>
<br>
<br>
<br>

### NPX
npx is also a CLI tool whose purpose is to make it easy to install and manage dependencies hosted in the npm registry.

It’s now very easy to run any sort of Node.js based executable that you would normally install via npm.
<br>
<br>
<br>

# create-react-app vs vite

## Create React App:
- Create React App is built on Webpack and Babel and it is a popular tool that enables developers to quickly set up a React project. 
- It is an officially supported tool by the React team, making it a reliable choice. It creates a basic React application with all the necessary configuration files, dependencies, and scripts. 
- The tool provides a pre-configured environment that abstracts away much of the configuration that developers would typically have to handle manually. 
- This means that the developer can focus on writing code rather than configuration files. It is especially useful for beginners to get started.
<br>
<br>

**npx create-react-app my-app**

## Vite:
- Vite is a newer build tool that has gained popularity in recent years. 
- It was created to address the limitations of existing build tools, particularly in the development phase. 
- Vite is a build tool that is optimized for speed. It leverages the latest browser technologies, such as ES modules and native browser imports, to provide fast build times.

- Vite is particularly useful for small to medium-sized projects that do not require complex configurations. 
- It is built on top of the Rollup bundler, which is known for its fast build times. 
- Vite also provides a development server that is optimized for performance. 
- The server leverages HTTP/2 server push, which enables the server to send multiple responses for a single client request.
<br>
<br>
<br>

**npm create vite@latest**

[Difference between create-react-app vs vite](https://dev.to/musabdev/create-react-app-vs-vite-choosing-the-right-build-tool-for-your-project-3ni1)



# Difference between package.json and package-lock.json

**package.json**: This file contains metadata about the project, including its name, version, description, entry point, scripts, and dependencies. It also lists the npm packages required for the project to run. Developers typically use this file to define project-specific configurations and dependencies. Here's a basic example of what a package.json file might look like for a 
<details>
<summary><b>React project:<b></summary>

```json
{
  "name": "my-react-app",
  "version": "1.0.0",
  "description": "A sample React application",
  "main": "index.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3"
  },
  "devDependencies": {
    // Dev dependencies like testing libraries, build tools, etc.
  }
}

```
**package-lock.json**: This file is automatically generated by npm when you install or update packages in your project. It serves as a detailed record of the exact versions of dependencies that were installed. This ensures that your project has deterministic builds, meaning that every time someone installs dependencies for your project, they get the exact same versions that you have specified in your package.json file. It helps to prevent version conflicts and ensures consistency across different environments.
package-lock.json should not be modified manually. It's meant to be automatically updated by npm when you install or update packages using commands like npm install or npm update
</details>

[package.json vs package-lock.json](https://umarfarooquekhan.medium.com/difference-between-package-json-and-package-lock-json-6225f83f247c#:~:text=In%20summary%2C%20the%20package.,of%20dependencies%20and%20their%20dependencies.)

# What is Babel ?
- Transpilation in React with Babel: Babel is utilized in React development to transpile modern JavaScript syntax, including features from ECMAScript 6 (ES6) and beyond, into code that can run across various environments, ensuring compatibility with older browsers and platforms. This transpilation process is crucial for React developers to leverage the latest language features while maintaining broad compatibility.

<details>
<summary><b>Importance of Babel in React:</b></summary>

- Compatibility: Babel enables developers to write code using the latest JavaScript syntax while ensuring it remains compatible with all environments, including older browsers.
- Latest Syntax: Developers can utilize modern language features provided by newer ECMAScript versions, enhancing code efficiency and readability.
- Debugging: Babel aids in debugging by maintaining clear and consistent code transformation, facilitating faster issue identification and resolution.
- Customization: Babel's modular architecture allows for easy customization through the addition or removal of plugins, tailoring its functionality to suit specific project requirements.
- Type Annotations: With support for type annotations, Babel helps developers maintain code clarity and catch type-related errors early in the development process, particularly useful in large-scale React applications.
- Workflow Efficiency: By integrating Babel into the React development workflow, developers can focus on writing expressive and maintainable code without worrying about compatibility issues across different platforms. This streamlined process enhances productivity and promotes code quality.

</details>
<br>

# What is Virtual DOM and how react update the DOM ?
The Virtual DOM is a programming concept where an ideal or virtual representation of a user interface (UI) is kept in memory and synced with the "real" DOM by a library such as React. It acts as a lightweight copy of the actual DOM.

Here's how it works and how React updates the DOM using the Virtual DOM:

- **Initial Rendering**:

When you create React elements (using JSX syntax) and render them to the DOM, React first constructs a virtual representation of the UI in memory.
This virtual representation, or virtual DOM, is essentially a tree structure made up of plain JavaScript objects, representing each element in your UI.
- **Diffing and Reconciliation**:

When the state of your React components changes (due to user interaction, data updates, etc.), React re-renders the virtual DOM with the updated state.
React then compares the new virtual DOM with the previous one, a process known as "diffing".
By comparing the new virtual DOM with the previous one, React determines the minimal set of changes needed to update the actual DOM to match the new virtual DOM.
- **Update the Actual DOM**:

After identifying the differences (or "diffs") between the new and old virtual DOM, React applies only the necessary changes to the actual DOM.
React uses efficient algorithms to minimize DOM manipulations, resulting in better performance compared to directly updating the entire DOM whenever there's a change in the UI.
- **Batched Updates**:

React often batches multiple updates together to minimize the number of times the actual DOM is updated. This helps in optimizing performance by reducing the number of reflows and repaints triggered by DOM changes.
- **Reconciliation Algorithm**:

React employs a reconciliation algorithm that optimizes the process of comparing virtual DOM trees and determining the minimal set of changes required to update the actual DOM.

React's diffing algorithm is efficient, leveraging heuristics to quickly identify changes in the virtual DOM and apply corresponding updates to the real DOM.
By using the Virtual DOM and its reconciliation algorithm, React abstracts away the complexity of directly manipulating the DOM and provides a declarative programming model for building user interfaces. This approach leads to more predictable and efficient UI updates, ultimately resulting in better performance and developer productivity.

# React Internal working

```jsx
import React from 'react';

const WelcomeMessage = (props) => {
  return (
    <div>
      <h1>Welcome, {props.name}!</h1>
      <p>This is a personalized greeting message component.</p>
    </div>
  );
};

export default WelcomeMessage;
```
```jsx

import React from 'react';
import WelcomeMessage from './WelcomeMessage';

const App = () => {
  return (
    <div>
      <WelcomeMessage name="Alice" />
      <WelcomeMessage name="Bob" />
    </div>
  );
};

export default App;
```
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
1. **Component Definition**:

WelcomeMessage: This is a functional component that takes props as an argument and returns JSX representing a personalized welcome message.
App: This is another functional component that renders two WelcomeMessage components with different names.

2. **Rendering**:

In index.js, you're using ReactDOM.createRoot to render your App component into the DOM. createRoot is part of Concurrent Mode in React. It creates a root from a container element and returns a root object.
document.getElementById('root') finds the container in the HTML where the React app will be mounted.
.render(\<App />) renders the App component into the root container.

3. **React Element Creation**:

When you write JSX (\<App />, \<WelcomeMessage />, etc.), Babel (or another JSX transpiler) compiles it into calls to React.createElement(type, props, ...children).
For example, \<WelcomeMessage name="Alice" /> compiles to React.createElement(WelcomeMessage, { name: "Alice" }).

4. **Component Lifecycle**:

When React renders <App />, it first renders WelcomeMessage components with their respective props.
React calls the function components (WelcomeMessage and App) and returns React elements.
These elements represent the virtual DOM structure.

5. **Reconciliation and Diffing**:

React reconciles the virtual DOM with the actual DOM, figuring out the differences (if any).
It then efficiently updates the actual DOM to reflect the virtual DOM changes.

6. **Rendering Optimization**:

React employs various optimizations to render efficiently, such as batching updates and minimizing DOM manipulations.
Overall, React's reconciliation algorithm and virtual DOM ensure that the UI stays in sync with the application state efficiently, providing a smooth and performant user experience


# What is JSX ?
JSX stands for JavaScript XML. It's a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript. JSX makes it easier to write and manage the structure of UI components, especially in frameworks like React.

Here are some key points about JSX:

- HTML-like Syntax: JSX looks similar to HTML, allowing developers to write familiar markup for describing the structure of user interfaces.

- Embedding JavaScript: JSX allows embedding JavaScript expressions within curly braces {} directly within the markup. This enables dynamic content, conditional rendering, and other JavaScript functionality within the UI.

- Expressiveness: JSX is expressive and allows developers to easily compose complex UIs using components.

- Compile-Time Transformation: JSX code is transformed into regular JavaScript code before being interpreted by the browser. Typically, tools like Babel are used to transpile JSX into JavaScript that browsers can understand.

- Integration with React: While JSX can technically be used independently of React, it's most commonly associated with React. React components are typically written using JSX syntax, enabling the composition of UI components in a declarative and intuitive manner.

Here's a simple example of JSX code:

```jsx
Copy code
import React from 'react';

const MyComponent = () => {
  const name = 'World';
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a JSX component.</p>
    </div>
  );
};
```
export default MyComponent;
In this example, \<div>, \<h1>, and \<p> are JSX elements representing HTML-like structure. The {name} expression inside the \<h1> element is a JavaScript expression embedded within JSX, allowing dynamic content.


# What is Higher Order Component (HOC) ?

It is a function that takes a component and returns a new enhanced component with additional functionality. HOCs are commonly used for code reuse, logic abstraction, and separating concerns in React applications.

1. Reusability: HOCs allow you to extract common functionality from components and reuse it across multiple components. This promotes code reusability and reduces duplication.

2. Abstraction: HOCs help in abstracting away complex logic or behavior from the presentational components. This keeps the components focused on rendering UI and makes them simpler and easier to understand.

3. Separation of Concerns: By separating concerns, HOCs enable better code organization and maintainability. Logic that's not directly related to rendering UI can be encapsulated within HOCs, keeping the components clean and focused.

4. Composition: HOCs can be composed together to create more complex behavior by wrapping multiple HOCs around a component. This allows for flexible and powerful combinations of functionality.

import React, { useEffect } from 'react';

// Define a Higher Order Component
const withLogger = (WrappedComponent) => {
  // Return a functional component
  return function WithLogger(props) {
    // Use useEffect hook to handle component lifecycle
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted`);

      // Cleanup function for when component unmounts
      return () => {
        console.log(`Component ${WrappedComponent.name} will unmount`);
      };
    }, []); // Empty dependency array means this effect runs only once

    // Render the WrappedComponent with its original props
    return <WrappedComponent {...props} />;
  };
};

// Create a regular functional component
const MyComponent = () => {
  return <div>Hello World</div>;
};

// Enhance MyComponent with the withLogger HOC
const MyEnhancedComponent = withLogger(MyComponent);

// Now, MyEnhancedComponent has the logging functionality added to it

```jsx
import React from 'react';

// Define a Higher Order Component (HOC)
const withTitle = (WrappedComponent, title) => {
  // Return a functional component
  return function WithTitle(props) {
    // Render the WrappedComponent with an added title prop
    return <WrappedComponent {...props} title={title} />;
  };
};

// Create a regular React component
const MyComponent = (props) => {
  return <div>{props.title}: Hello World</div>;
};

// Enhance MyComponent with the withTitle HOC
const MyEnhancedComponent = withTitle(MyComponent, "My Component");

// Now, MyEnhancedComponent has the title prop added to it

```
- We define a Higher Order Component called withTitle. It takes two arguments: the WrappedComponent and a title.

- Inside withTitle, we return a functional component (WithTitle) that renders the WrappedComponent. We pass the original props (...props) along with an additional prop title, which is set to the provided title.

- We create a regular React component called MyComponent, which takes props and renders a <div> with the title followed by "Hello World".

- We enhance MyComponent by wrapping it with the withTitle HOC, creating MyEnhancedComponent. We pass the MyComponent as the WrappedComponent and provide a title ("My Component") as the second argument to withTitle.

- Now, when MyEnhancedComponent is rendered, it will receive the title prop added by the withTitle HOC, and it will render with the provided title.

# What is Hooks?
Hooks are a feature introduced in React 16.8 that allow developers to use state and other React features in functional components without writing a class. Before the introduction of hooks, state and lifecycle methods were only available in class components. With hooks, functional components can now have state, lifecycle methods, and other features previously exclusive to class components.

Hooks provide a more direct way to use React's features, making functional components more powerful and expressive. They also encourage the reuse of stateful logic and make it easier to share code between components.

Some of the built-in hooks provided by React include:

- useState: Allows functional components to use state variables.
- useEffect: Allows functional components to perform side effects, such as data fetching, after rendering.
- useContext: Allows functional components to access context values.
- useReducer: A more powerful alternative to useState, often used for managing complex state logic.
- useCallback and useMemo: Memoization hooks that optimize performance by caching function references and values.
- useRef: Allows functional components to create mutable references that persist across renders.
- useLayoutEffect: Similar to useEffect, but fires synchronously after all DOM mutations.

Using hooks, developers can write more concise and readable code, as they no longer need to switch between functional and class components based on whether state or lifecycle methods are needed. Additionally, hooks encourage the separation of concerns and allow for better code organization and reusability.

# useState
useState is a React Hook that allows functional components to manage state. It is used to declare a state variable in a functional component and provides a way to update that state. 
<details>
<summary><b>Here's how useState works:</b></summary>

- Import the Hook: First, you need to import the useState hook from the React library.

```jsx
import React, { useState } from 'react';
```
- Declare State: Inside your functional component, call the useState function and provide the initial value for your state variable. useState returns an array with two elements: the current state value and a function to update that value.

```jsx
const [count, setCount] = useState(0);
```
- In this example, count is the state variable, initialized with a value of 0, and setCount is the function to update the count state.

- Access State: You can use the state variable (count in this case) to access the current state value within your component.

```jsx
return (
  <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);
```
Here, the current value of count is displayed, and clicking the button calls setCount to update the count state by incrementing it by 1.

- Updating State: To update the state, you call the state updater function (setCount in this case) with the new value you want the state to have.

```jsx
setCount(newCount);
```
The new state value (newCount) replaces the current state value.

Here's a complete example demonstrating the usage of useState:

```jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Button to increment count */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* Button to decrement count */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```
</details>
<hr>

# useEffect
useEffect is a React Hook that enables performing side effects in functional components. Side effects in React components typically include data fetching, subscriptions, or manually changing the DOM. useEffect is similar to lifecycle methods in class components, such as componentDidMount, componentDidUpdate, and componentWillUnmount.

<details>
<summary><b>
Here's how useEffect works:</b></summary>

- Import the Hook: First, you need to import the useEffect hook from the React library.

```jsx
import React, { useEffect } from 'react';
```
- Declare Side Effects: Inside your functional component, call the useEffect function and provide a function containing the code for the side effect you want to perform. This function will run after every render, including the initial render.

```jsx
useEffect(() => {
  // Side effect code
  console.log('Component rendered');
});
```
In this example, console.log('Component rendered') will be executed after each render of the component.

Control When the Effect Runs: By default, the function provided to useEffect runs after every render. However, you can control when the effect runs by providing a second argument, which is an array of dependencies. The effect will only re-run if one of the dependencies has changed since the last render.

```jsx
useEffect(() => {
  // Side effect code
  console.log('Component rendered');
}, [dependency1, dependency2]);
```
In this example, the effect will only re-run if the values of dependency1 or dependency2 have changed since the last render. If the dependency array is empty, the effect runs only once after the initial render, similar to componentDidMount in class components.

- Cleanup: If the effect performs any cleanup, such as unsubscribing from a subscription or removing event listeners, you can return a cleanup function from the effect.

```jsx
useEffect(() => {
  // Subscribe to some resource
  const subscription = someResource.subscribe();
  
  // Cleanup function
  return () => {
    // Unsubscribe from the resource
    subscription.unsubscribe();
  };
}, [dependency]);
```
The cleanup function will be executed when the component unmounts or when the effect re-runs due to a change in dependencies.

Here's a complete example demonstrating the usage of useEffect:

```jsx
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // useEffect to perform side effect after each render
  useEffect(() => {
    console.log('Component rendered');
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ExampleComponent;
```
</details>
<hr>

# useContext
useContext is a React Hook that allows functional components to consume values from React's context without needing to use a Consumer component. Context provides a way to pass data through the component tree without having to pass props manually at every level. useContext provides a more concise and direct way to access the context values within functional components.

<details>
<summary><b>
Here's how useContext works:</b></summary>

- Create a Context: First, you need to create a context using the createContext function from React.

```jsx
const MyContext = React.createContext(defaultValue);
```
You can provide an optional defaultValue, which is used when a component does not have a matching Provider above it in the tree.

Provide Context Value: Wrap your component tree with a Provider component and pass the context value as a prop.

```jsx
<MyContext.Provider value={contextValue}>
  {/* Your component tree */}
</MyContext.Provider>
```
All components nested inside this Provider will have access to the context value.

- Consume Context Value: Inside a functional component, call the useContext hook and pass the context object created with createContext. This hook returns the current context value.

```jsx
const contextValue = useContext(MyContext);
```
Now, contextValue contains the current value provided by the nearest matching Provider in the component tree.

Here's a complete example demonstrating the usage of useContext:

```jsx
import React, { useContext } from 'react';

// Create a context
const ThemeContext = React.createContext('light');

// Component using the context value
function ThemedButton() {
  // Consume context value
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black' }}>
      {theme === 'dark' ? 'Dark' : 'Light'} Theme
    </button>
  );
}

// Component tree with a Provider
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

export default App;
```
In this example:

We create a ThemeContext using React.createContext().
The ThemedButton component consumes the ThemeContext using useContext.
In the App component, we provide the value "dark" to the ThemeContext.Provider.
The ThemedButton component reads the context value and renders a button with styles based on the current theme.
</details>
<hr>

# useReducer
useReducer is a React Hook that allows you to manage complex state logic in functional components by using a reducer function. It is an alternative to useState and is particularly useful when the state logic involves multiple sub-values or when the next state depends on the previous state. useReducer is inspired by the useReducer hook in Redux and the Reducer concept in JavaScript.

<details>
<summary>
<b>
Here's how useReducer works:</b></summary>

- Define a Reducer Function: You need to define a reducer function that specifies how the state should be updated based on dispatched actions. The reducer function takes two arguments: the current state and an action, and returns the new state.

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```

In this example, the reducer function takes the current state (an object with a count property) and an action, and returns a new state object based on the action type.

- Use useReducer Hook: Inside your functional component, call the useReducer hook and provide the reducer function and the initial state as arguments. This hook returns an array with the current state and a dispatch function to dispatch actions to update the state.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```
Here, state represents the current state, and dispatch is a function used to dispatch actions to update the state.

- Dispatch Actions: To update the state, you dispatch actions by calling the dispatch function with an object that includes a type property representing the type of action and any additional data required for the action.

```jsx
dispatch({ type: 'increment' });
```
In this example, calling dispatch with { type: 'increment' } will execute the corresponding case in the reducer function and update the state accordingly.

Here's a complete example demonstrating the usage of useReducer:

```jsx
import React, { useReducer } from 'react';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Initial state
const initialState = { count: 0 };

// Component using useReducer
function Counter() {
  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      {/* Dispatch actions to update state */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;
```
In this example, Counter is a functional component that uses useReducer to manage a state object with a single property count. The reducer function specifies how the state should be updated based on dispatched actions, and initialState defines the initial state value. Inside the component, useReducer is called with the reducer function and initialState, returning the current state (state) and a dispatch function to update the state. Finally, the component renders buttons that dispatch actions to increment and decrement the count.
</details>
<hr>

# useCallback and useMemo

useCallback is a React hook that is used to memoize functions, especially when passing them as props to child components. By memoizing functions, you can prevent unnecessary re-renders of child components when the parent component re-renders. 
<details>
<summary><b>
Here's a basic example to demonstrate its usage:</b></summary>

```javascript
import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click me</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Define a memoized function using useCallback
  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setCount(count + 1);
  }, [count]); // Dependencies array: handleClick will be re-created if count changes

  console.log('ParentComponent rendered');
  
  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
```
In this example:

ParentComponent renders a ChildComponent which receives a prop onClick.
We define a function handleClick using useCallback. This function increments the count state and is memoized using useCallback.
The dependencies array [count] specifies that handleClick should be re-created if the count state changes.
We pass handleClick as a prop to ChildComponent.
ChildComponent is wrapped with React.memo to prevent unnecessary re-renders when its props don't change.
When ParentComponent re-renders due to state changes, the memoized handleClick function won't be re-created unless the count state changes. This ensures that the ChildComponent doesn't re-render unnecessarily, optimizing performance.
useCallback is particularly useful when passing callbacks to child components, ensuring that the callbacks remain the same across renders as long as their dependencies don't change. This helps in preventing unnecessary re-renders in child components.
</details>
<hr>

Certainly! useMemo is a React hook that allows you to memoize the result of a function so that it's only recomputed when one of the dependencies has changed. This can be helpful for optimizing performance by preventing unnecessary recalculations, especially for expensive computations.

<details>
<summary><b>
Here's a basic example of how useMemo can be used:</b></summary>

```javascript
import React, { useMemo, useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // Example of a memoized value using useMemo
  const memoizedValue = useMemo(() => {
    // This function will only be called when count changes
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Memoized value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MyComponent;
```
In this example:

We have a component MyComponent that maintains a count state using useState.
We use useMemo to memoize the result of the function () => count * 2. This function doubles the value of count.
The memoized value (memoizedValue) will only be recalculated when the count state changes. Otherwise, it will reuse the memoized value from the previous render.
This ensures that the expensive computation of doubling count is only performed when necessary, optimizing the performance of the component.
useMemo is particularly useful when you have expensive computations or calculations that are based on state or props, and you want to avoid re-running them on every render. It's important to remember that while useMemo can help optimize performance, it should be used judiciously and only when needed, as excessive memoization can also lead to increased memory usage.
</details>
<hr>



