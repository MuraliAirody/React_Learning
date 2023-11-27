import PropTypes from 'prop-types'
import ExtraDarkMode from './ExtraDarkMode'

function NavBar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.enableMode}  mt-10`} style={{backgroundColor:`${props.enableMode==='light'?'#B0C4DE':'#4169E1'}`}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{props.about}</a>
              </li>


            </ul>
            {props.enableMode==="dark"&&<ExtraDarkMode handleExtraDark={props.handleExtraDark}></ExtraDarkMode>}
            <div className="form-check form-switch" style={{color:`${props.enableMode==='light'?'black':'white'}`}}>
              <input className="form-check-input" style={{width:"60px",height:'30px',marginRight:'10px',backgroundColor:`${props.enableMode==='light'?'':'black'}`}} onClick={props.handleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" style={{padding:'0',marginTop:'5px'}} htmlFor="flexSwitchCheckDefault">{props.enableMode==='light'?'Enable':'Disable'} Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default NavBar

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
}

NavBar.defaultProps = {
  title: "TextUtils",
  about: "about TextUtils"
}

