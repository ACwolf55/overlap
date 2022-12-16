import React from 'react'

export const Nav = () => {

  return (
    <nav>
        <div className='menu'>
        <img id='burger' src="/menu.png"></img>
        <h3>MENU</h3>
      </div>

      <h2> <span style={{marginBottom: "100px"}}>&#161;</span> WELCOME !</h2>

        <div className='search'>
          <span className='search-glass'>&#x1F50D;</span>
        <h3>SEARCH</h3>
        </div>


    </nav>
  )
}
