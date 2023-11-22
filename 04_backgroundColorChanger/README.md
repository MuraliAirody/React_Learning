
## Event Handling

1. onClick={setColor('red')}:

In this case, the setColor('red') function is executed immediately when the component renders, not when the button is clicked.
This is because onClick expects a function reference, but setColor('red') is not a function reference; it's a function invocation. 
<br><br>

2. onClick={() => setColor('red')}:

Here, you are providing an arrow function as a function reference to onClick.
This arrow function, when invoked (which happens when the button is clicked), then calls setColor('red').
This delayed execution is what you typically want when handling events in React.

```html
// Incorrect: setColor('red') is immediately executed during rendering
<button onClick={setColor('red')}>
  Click me to set color to red
</button>

// Correct: setColor('red') is executed when the button is clicked
<button onClick={() => setColor('red')}>
  Click me to set color to red
</button>

```

In the incorrect version, setColor('red') would run as soon as the component renders, not waiting for a click event. The correct version, with the arrow function, ensures that setColor('red') is only called when the button is clicked.
