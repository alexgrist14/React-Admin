import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import Login from "./components/Login/Login"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Login></Login>
  </React.StrictMode>
)
