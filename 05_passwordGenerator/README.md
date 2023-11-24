# Password Generator Application

# Text Converter

created project using 
```node
   npm create vite@latest
```

to run the App use

```node
   npm run dev
```

### **[Live Demo](https://replit.com/@MuraliAirody/Text-Converter)**

# BootStrap v5
Copy-paste the stylesheet \<link> into your \<head> before all other stylesheets to load our CSS.


```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```
Many of our components require the use of JavaScript to function. Specifically, they require our own JavaScript plugins and Popper. Place one of the following \<script> s near the end of your pages, right before the closing \</body> tag, to enable them.

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
```

# React Icons

```javascript
 npm install react-icons --save

```
check out the bellow link for different icons
### **[react icons](https://react-icons.github.io/react-icons/)**


# Material UI

```js
npm install @mui/material @emotion/react @emotion/styled
```
Check the bellow doc for the usage of material ui
### **[material ui](https://mui.com/material-ui/getting-started/)**

### callBack Hook and useEffect Hook


useCallback and useEffect are two different hooks in React, and their dependencies work in different ways1:

- useCallback: This hook allows you to memoize a function and pass it to child components without causing unnecessary re-renders. The dependencies array is used to determine when the function should be re-memoized. If any of the dependencies change, the function is re-memoized and a new reference is returned. You should use useCallback when you need to pass a function down to a child component as a prop, but the function may be expensive to compute or causes unnecessary re-renders.

- useEffect: This hook allows you to perform side effects, such as retrieving data from an API, updating the DOM, or subscribing to events. useEffect will run the function inside when the dependency array changes1. It’s the alternative for the class component lifecycle methods componentDidMount, componentWillUnmount, componentDidUpdate, etc.

In summary, useCallback will create a new function when the dependency array changes, while useEffect will run the function inside when the dependency array changes. Functions with useCallback and values with useMemo can be used as dependency in useCallback, useMemo and useEffect.
