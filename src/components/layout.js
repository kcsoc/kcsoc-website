import React from "react"
import Header from "./header"
import '../styles/global.scss'

export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}
