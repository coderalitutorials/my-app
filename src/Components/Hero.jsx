import React from 'react'

function Hero() {
  return (
    <main className='Hero container'>
       <div className='Hero-content'>
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. 
        YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. 
        </p>
        <div className='hero-btn'>
           <button>Shop Now</button>
           <button className='btn-secound'>Category</button>
        </div>
        <div className='shopping'>
            <p>Also Available Now</p>
            <div className='brand-icons'>
                <img src="/images/amazon.png" alt="amazon" />
                <img src="/images/flipkart.png" alt="flipkart" />
            </div>
        </div>
       </div>
       <div className='Hero-img'>
       <img src="/images/hero-image.png" alt="hero" />
       </div>
    </main>
  )
}

export default Hero;