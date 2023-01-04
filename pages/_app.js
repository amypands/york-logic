import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<> <nav className="navbar navbar-expand-lg navbar-light container">
    <a className="navbar-brand" href="#"><strong>York Logic Ltd.</strong></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Solutions </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Clients</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </nav> <Component {...pageProps} /> </>)
}

export default MyApp
