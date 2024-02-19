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

**package.json**: This file contains metadata about the project, including its name, version, description, entry point, scripts, and dependencies. It also lists the npm packages required for the project to run. Developers typically use this file to define project-specific configurations and dependencies. Here's a basic example of what a package.json file might look like for a React project:

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

[package.json vs package-lock.json](https://umarfarooquekhan.medium.com/difference-between-package-json-and-package-lock-json-6225f83f247c#:~:text=In%20summary%2C%20the%20package.,of%20dependencies%20and%20their%20dependencies.)

# What is Babel ?
- Transpilation in React with Babel: Babel is utilized in React development to transpile modern JavaScript syntax, including features from ECMAScript 6 (ES6) and beyond, into code that can run across various environments, ensuring compatibility with older browsers and platforms. This transpilation process is crucial for React developers to leverage the latest language features while maintaining broad compatibility.

Importance of Babel in React:

- Compatibility: Babel enables developers to write code using the latest JavaScript syntax while ensuring it remains compatible with all environments, including older browsers.
- Latest Syntax: Developers can utilize modern language features provided by newer ECMAScript versions, enhancing code efficiency and readability.
- Debugging: Babel aids in debugging by maintaining clear and consistent code transformation, facilitating faster issue identification and resolution.
- Customization: Babel's modular architecture allows for easy customization through the addition or removal of plugins, tailoring its functionality to suit specific project requirements.
- Type Annotations: With support for type annotations, Babel helps developers maintain code clarity and catch type-related errors early in the development process, particularly useful in large-scale React applications.
- Workflow Efficiency: By integrating Babel into the React development workflow, developers can focus on writing expressive and maintainable code without worrying about compatibility issues across different platforms. This streamlined process enhances productivity and promotes code quality.


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