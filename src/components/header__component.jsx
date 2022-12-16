import React from "react"
import {default as logo} from "../images/logo.svg"

class Header extends React.Component{
  render() {
    return(
      <>
      <div className="header">
        <img className="header__logo" src={logo} alt="" />
        <h2 className="header__title"><span> We Are Launching</span> soon!</h2>
        <p className="header__paragraph">Subscribe and get notified</p>
      </div>
      </>
    );
  }
}

export default Header