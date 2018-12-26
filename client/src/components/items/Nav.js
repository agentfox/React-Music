import React, { Fragment, Component } from 'react'
import SearchBar from './SearchBar'
import '../css/Nav.css'
export default class Nav extends Component {
  render() {
    return (
      <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container ">
                    <a className="navbar-brand" href="/"><img src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/logo.png" alt="the logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav d-flex  w-100">
                        <li className="nav-item active mr-3">
                            <SearchBar />
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">MP3
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">NEWS</a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link" href="/">TV</a>
                        </li>
                        <li className="nav-item  active signin "  >
                            <a className=" nav-link" style={{ borderRadius:"17px"  ,  backgroundImage: "linear-gradient(to right, #efadb1, #a265a8 42%, #4d4ea0)" }} href="/">SignIn/SignUp</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
      </Fragment>
    )
  }
}

