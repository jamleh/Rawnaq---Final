import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './homepage.styles.scss';
import women from '../assets/women.jpg'


const slideImages = [
  'https://st4.depositphotos.com/10504788/20544/i/1600/depositphotos_205444352-stock-photo-fashion-background-woman-summer-clothes.jpg',
  'https://st4.depositphotos.com/10504788/20544/i/1600/depositphotos_205444352-stock-photo-fashion-background-woman-summer-clothes.jpg',
  'https://st4.depositphotos.com/10504788/20544/i/1600/depositphotos_205444352-stock-photo-fashion-background-woman-summer-clothes.jpg'
];

const properties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: true
}

const HomepageLayout = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
          </div>
        </div>
      </Slide>
      {/* <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} style={{width: "100hv"}}>
            <img style={{ objectFit: "cover", width: "100hv" }} src={each} />//
          </div>
        ))}
      </Zoom> */}
      <div className='homepage'>
        <div className='directory-menu'>
          <div className='menu-item'>
            <div className='content'>
              <h1 className='title'>WOMEN</h1>
              <Link className='background-image' to="/womenproducts">
                <img className='background-image' src='https://image.made-in-china.com/2f0j00oOStnyLzMgcF/Modern-Fashion-Elegant-Women-Clothes.jpg'></img>
              </Link>
              <span className='subtitle'>Shop Now</span>

            </div>
          </div>

          <div className='menu-item'>
            <div className='content'>
              <h1 className='title'>MEN</h1>
              <Link className='background-image' to="/menproducts">
                <img className='background-image' src='https://cf.shopee.ph/file/1a4c08a2503d9ada5307c116673328ab'></img>
              </Link>
              <span className='subtitle'>Shop Now</span>

            </div>
          </div>

          <div className='menu-item'>
            <div className='content'>
              <h1 className='title'>CHILDREN</h1>
              <Link className='background-image' to="/childproducts">
                <img className='background-image' src='https://previews.123rf.com/images/olgagi/olgagi1904/olgagi190400207/121197640-collage-set-of-children-clothes-denim-jacket-and-pants-shoes-and-rain-jacket-for-child-boy-isolated-.jpg'></img>
              </Link>
              <span className='subtitle'>Shop Now</span>

            </div>
          </div>

          <div className='menu-item'>
            <div className='content'>
              <h1 className='title'>accessory</h1>
              <Link className='background-image' to="/accproducts">
                <img className='background-image' src='https://image.shutterstock.com/image-photo/fashion-women-stylish-accessories-outfit-260nw-1532053424.jpg'></img>
              </Link>
              <span className='subtitle'>Shop Now</span>

            </div>
          </div>

        </div>

      </div>

    </div >

  )
}
export default HomepageLayout;


