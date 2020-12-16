import React from "react"

export default function Header(props) {
  return (
    <div style={{ color: `purple` }}>
      <h1>{props.headerText}</h1>
    </div>
  )
}