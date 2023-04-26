import React from 'react'
import Navbar from '../components/Navbar'
import Announce from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
function Home() {
  return (
    <div>
      
        <Navbar></Navbar>
        <Announce></Announce>
        <Slider></Slider>
        <Categories></Categories>
        <Products></Products>
        <Newsletter></Newsletter>
        <Footer></Footer>

    </div>
  )
}

export default Home