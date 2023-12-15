import { useState } from 'react'

import AddToDo from './components/AddToDo'
import ListToDo from './components/ListToDo'

import { store } from './store/store'
import { Provider } from 'react-redux'
function App() {

  return (
    <Provider store={store}>
       <AddToDo></AddToDo>
       <ListToDo></ListToDo>
    </Provider>
  )
}

export default App
