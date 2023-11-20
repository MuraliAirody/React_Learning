# React Props and State

## Props

#### Components Like Java script functions, some times it require some input parameters which is called as a PROPS (properties) in react and return the react element what should be appear on screen

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
```js
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;
root.render(element);
```

**\<Welcome name="Sara" /> here Welcome is a type, name is a props \<Welcome></Welcome> whatever the text written inside the tag is a children** 

**while rendering element object looks like this**
```js
   const element = {
    "Welcome",
    {
        'name':"Sara",
    }
   }
```

**Note: Props are Readonly**


###  **::: [Read More About Props](https://legacy.reactjs.org/docs/components-and-props.html) :::** 

<br>
<br>

## States

#### The State of a component is an object that holds some information that may change over the lifetime of the component. Once the state value changes it will automatically re-render the component and update the changes in multiple places

### Difference between Props and State


1. Props are immutable i.e. once set the props cannot be changed, while State is an observable object that is to be used to hold data that may change over time and to control the behavior after each change.
2. States can be used in Class Components but in Functional components we have to use React hooks(useState) to implement states.
3. While Props are set by the parent component, the State is generally updated by event handlers.


### **::: [Best Article to understand State](https://www.freecodecamp.org/news/what-is-state-in-react-explained-with-examples/) :::**