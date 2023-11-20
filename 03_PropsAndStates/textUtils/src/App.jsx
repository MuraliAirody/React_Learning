
import './App.css'
import NavBar from './components/NavBar'
import TextForm from './components/TextForm'

function App() {

  return (
    <>
      {/* <NavBar title="TextUtils" about="about TextUtils"></NavBar> */}
      {/* <NavBar about="about TextUtils"></NavBar> */}
      <NavBar></NavBar>
      <div className="container mt-5">
      <TextForm heading="Text Convertor"></TextForm>

      </div>
    </>
  )
}

export default App
