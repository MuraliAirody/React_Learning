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

# How does react convert the returned JSX in to javascript Object?

When you define a component in React and render it, React converts the returned JSX (which is essentially syntactic sugar for creating React elements) into a JavaScript object representation called React elements. This process is an essential part of how React works internally.

Here's how it works internally:

- **Parsing JSX**:

When React encounters JSX syntax, it uses a transpiler like Babel to transform the JSX into regular JavaScript function calls. For example, JSX \<MyComponent /> gets transformed into React.createElement(MyComponent).
- **Creating React Elements**:

The React.createElement() function creates a plain JavaScript object that represents a React element. This object contains information about the type of component (or HTML element), its props (properties), and any children elements.
For example, React.createElement(MyComponent, { prop: value }, child) would create an object representing a \<MyComponent> element with the specified props and children.
- **Element Objects**:

The resulting object from React.createElement() is a plain JavaScript object, typically referred to as a React element. It is lightweight and contains all the information needed to describe a component or an HTML element.
React elements are immutable, meaning they cannot be modified once created. This immutability ensures predictable behavior and efficient rendering in React.
- **Rendering**:

Once React has the React elements representing the components and elements in the UI, it uses a process called reconciliation to compare these elements with the previously rendered elements (or with the virtual DOM) to determine the minimal set of changes needed to update the UI.

React then updates the DOM efficiently based on the changes identified during the reconciliation process.
In summary, React converts the returned component (in JSX syntax) into a plain JavaScript object representation called a React element using the React.createElement() function. These React elements are lightweight, immutable objects that describe the components and elements in the UI, allowing React to efficiently manage and update the DOM as needed. This process enables React's declarative programming model and efficient rendering performance.


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
 JSX like \<WelcomeMessage name="Alice" />, it gets transformed into a function call using React.createElement() by a transpiler like Babel. So, the JSX:

 ```html
 <WelcomeMessage name="Alice" />
```
gets transformed into something like:

```jsx
React.createElement(WelcomeMessage, { name: "Alice" });
```
The React.createElement() function creates an object representing the \<WelcomeMessage> element. It takes three arguments:

1 The type of the element/component (WelcomeMessage in this case).
2 The props (properties) of the element/component ({ name: "Alice" } in this case).
3 Any children elements or text content of the element. In this case, there are no children elements.

So, the resulting React element object for \<WelcomeMessage name="Alice" /> would look something like this:
```js
{
  type: WelcomeMessage,
  props: {
    name: "Alice"
  },
  children: [
    {
      type: 'div',
      props: null,
      children: [
        {
          type: 'h1',
          props: null,
          children: ["Welcome, ", "Alice", "!"]
        },
        {
          type: 'p',
          props: null,
          children: ["This is a personalized greeting message component."]
        }
      ]
    }
  ]
}
```
- type: The component function or class (WelcomeMessage in this case).
- props: An object containing the props passed to the component ({ name: "Alice" } in this case).
- children: An array of child elements. In this example, the WelcomeMessage component has a single \<div> element as its child, which in turn contains an \<h1> element and a <p> element. The text content inside the \<h1> and \<p> elements is represented as an array of strings, as React internally represents JSX expressions as arrays.

render this React element object in your App.jsx file, it would indeed render the WelcomeMessage component with the props and children as specified.

Here's how you would render this React element object in App.jsx:

```jsx
import React from 'react';
import WelcomeMessage from './WelcomeMessage';

const App = () => {
  // Define the React element object
  const welcomeMessageElement = {
    type: WelcomeMessage,
    props: {
      name: "Alice"
    },
    children: [
      {
        type: 'div',
        props: null,
        children: [
          {
            type: 'h1',
            props: null,
            children: ["Welcome, ", "Alice", "!"]
          },
          {
            type: 'p',
            props: null,
            children: ["This is a personalized greeting message component."]
          }
        ]
      }
    ]
  };

  // Render the React element object
  return <WelcomeMessage {...welcomeMessageElement.props}>{welcomeMessageElement.children}</WelcomeMessage>;
};

export default App;
```