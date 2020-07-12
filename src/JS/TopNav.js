import React from 'react';
import {Link} from 'react-router-dom'
import '../Styles/navstyle.css'

const TopNav = () => {
    return (
        <div>
            <nav id='top_nav' style={{top:0,position:'fixed',display:"flex",width:'100%',justifyContent: "space-around",alignItems: "center",maxHeight:'20vh',minHeight: "10vh", color: "white"}}>
                <img className='logo' src={require('../Images/logo_s_s.png')} alt='Logo' />
                <ul className='list'>
                  <Link className='navStyle' to='/'>
                    <li>Home</li>
                  </Link>
                  <Link className='navStyle' to='/sorting'>
                    <li>Sorting</li>
                  </Link>
                  <Link className='navStyle' to='/apps'>
                    <li>Apps</li>
                  </Link>
                  <Link className='navStyle' to='/about'>
                    <li>About</li>
                  </Link>
                  <Link className='navStyle' to='/review'>
                    <li>Feedback</li>
                  </Link>
                </ul>
            </nav>
        </div>
    )
}

export default TopNav