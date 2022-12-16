import React from "react"
import ReactDOM from "react-dom/client"

import Header from "./components/header__component"
import Input from "./components/input__component"
import Social from "./components/social__component"
import illustration from "./images/illustration-dashboard.png"
import "./css/style.css"


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <div className="con">
      <Header />
      <Input />
      <img className="illustration" src={illustration} />
      <Social />
    </div>

    <div className="flag">
      Attribution
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da" target="_blank">
          Frontend Mentor
        </a>{" "}
        <br />
        Coded by <a href="https://Andr3sC0des.github.io">Andr3sC0des</a>.
      </div>
    </div>


  </React.StrictMode>
);
