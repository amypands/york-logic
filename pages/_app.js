import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container"><a className="navbar-brand" href="/"><strong>York Logic Ltd.</strong></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="solutions">Solutions </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Clients</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div></div>

    </nav> <Component {...pageProps} />
    <footer className="my-4">
      <div className="container yorkfooter">
        <p><strong> &copy; York Logic Limited - All rights reserved</strong></p>
      </div >
    </footer> </>)

}


export default MyApp
