import React from 'react'

export default function NotFound() {
  return (
    <div className='NotFound'>
      <h1>Not Found Page {window.location.pathname.split("/")} </h1>
    </div>
  )
}
