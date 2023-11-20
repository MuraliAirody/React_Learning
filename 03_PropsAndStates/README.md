# React Props

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
