# Counter App
 ### [CLICK HERE TO RUN THE APP IN **Replit**](https://replit.com/@MuraliAirody/Counter)
created simple counter app by running

```npm create vite@latest```

follow the instruction an set the name of the app as  **counterApp**

only edited the **src/App.jsx** file here 

#### here I used the **HOOKs** which is used to render the many places on web without creating any document/element references 

```js
import { useState } from 'react'

let [counter,setCounter] =useState(10);
```
```html
        <p>The counter value {counter}</p>
```
 #### created a variable counter initialized with value 10

 #### by using the setCounter method we can update the counter value

 #### access the evaluated expression(counter) in html by using {counter}

 ```js
 let [message,setMessage] = useState("")
 ```
 ```html
         <h3>{message}</h3>
 ```
 #### created a variable message initialized with value ""

 #### by using the setMessage method we can update the message (limitation message I diplayed in the app)

 #### access the evaluated expression (message) in html by using {message}
 remaining all are simple jsx code ( means simple java script logic like button click and html text)


