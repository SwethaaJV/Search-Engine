import React, { useState, useEffect } from 'react';
import { Button, Input, Table, message as antdMessage } from 'antd';
import Logo from './Logo.png';
import './Home.css';
import LogoAnimation from './assets/Logo Animation 4k_1.mp4';
import { SearchOutlined } from '@ant-design/icons';

function Home(){

    const [searchPost,setSearchPost]=useState('');

    const handleSearchPost=(e)=>{
        setSearchPost(e.target.value);
      }
    return(
        <>
        <nav className='layout'>
        <img src={Logo} className="App-logo" alt="logo" />
        <div>
            <ul className="list-items">
                <li><a href=''>Home</a></li>
                <li><a href=''>About Us</a></li>
                <li><a href=''>Products</a></li>
                <li><a href=''>Support</a></li>
                <li><a href=''>Pricing</a></li>
            </ul>
        </div>

        <div>
            <button className='button b1'>
                Login
            </button>
            <button className='button b2'>
                Register
            </button>
        </div>

        </nav>
        <hr/>
        <div className='phase1'>
            <h1 className='Quote'>Making learning <span className='highlight'>Simpler</span> and <span className='highlight'>Smarter</span> with AI</h1>
            <Input
            className='post-search'
            prefix={<SearchOutlined />}
            placeholder='Search here'
            value={searchPost} 
            onChange={handleSearchPost}
          />
          <h3>Verified Topics</h3>
          <span>
          <button className='button b2'>
                Topic1
            </button>
            <button className='button b2'>
                Topic2
            </button>
            <button className='button b2'>
                Topic3
            </button>
            <button className='button b2'>
                Topic4
            </button>
            <button className='button b2'>
                Topic5
            </button>
          </span>

          <span className='topic'>
          <button className='button b2'>
                Topic6
            </button>
            <button className='button b2'>
                Topic7
            </button>
            <button className='button b2'>
                Topic8
            </button>
            <button className='button b2'>
                Topic9
            </button>
            <button className='button b2'>
                Topic10
            </button>
          </span>

            <video src={LogoAnimation} autoPlay loop muted/>
        </div>

        </>
    )
}
export default Home;