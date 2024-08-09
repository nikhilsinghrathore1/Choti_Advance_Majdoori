import React from 'react'

// here we will implement the landing page 

const Landing = () => {
  return (
    <>
    <nav>

      <a href="https://github.com/nikhilsinghrathore1" target="_blank">
      <p>Explore more</p>
      </a>

    </nav>

    <footer>
      <div>
        <a href="#">Instagram</a>
        <a href="#">Gmail</a>
        <a href="#">twitter</a>
      </div>

      <p>give like</p>

    </footer>

    <div className='sliders'>
      {/* this is for the sliding titles  */}
        <div className='slide-titles'></div>


      {/* this is for the sliding images */}
        <div className='slide-images'></div>

    </div>

    </>
  )
}

export default Landing